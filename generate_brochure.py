#!/usr/bin/env python3
"""
Real Estate Property Brochure — PDF Template Generator
=======================================================

USAGE:
  1. Fill in the DATA dictionary (search for "── CONFIGURE HERE ──").
  2. Set image paths to your local JPG/PNG files.
     Leave any path as None to show a labelled placeholder rectangle.
  3. Run:
       python generate_brochure.py
     or specify a custom output path:
       python generate_brochure.py --output my_property.pdf

DEPENDENCIES:
  pip install reportlab Pillow

PAGE STRUCTURE PRODUCED:
  1.  Cover                    – full-bleed hero image + agent card
  2.  About the Project        – unit-types table + building photo
  3.  Description              – text sections (finishing, kitchen, etc.)
  4.  Location Description     – location text paragraph
  5.  Architecture (full)      – single wide photo
  6.  Architecture (2-col)     – two photos side-by-side
  7.  Architecture (1+2 grid)  – one large + two stacked
  8.  Interior (full)          – single wide photo
  9.  Interior (1+2 grid)      – one large + two stacked
  10. Interior (1+2 grid)      – one large + two stacked
  11. Location / POI           – map image + location label
  12. Features & Amenities     – 2 × 3 photo grid
  13. Masterplan               – masterplan image
  14. Payment Plan (per plan)  – payment schedule
  15. Typical Units (per unit) – floor-plan + pricing
  16. Developer                – developer info + description
"""

import os
import sys
import argparse
from reportlab.lib.pagesizes import A4, landscape
from reportlab.pdfgen import canvas as rl_canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import simpleSplit

# ══════════════════════════════════════════════════════════════════════════════
#  OUTPUT FILE
# ══════════════════════════════════════════════════════════════════════════════

OUTPUT_FILE = "property_brochure.pdf"

# ══════════════════════════════════════════════════════════════════════════════
#  BRAND COLORS  — change these to match your agency's palette
# ══════════════════════════════════════════════════════════════════════════════

C_WHITE       = HexColor("#FFFFFF")
C_DARK        = HexColor("#0D1117")   # headings and body text
C_GRAY        = HexColor("#888888")   # sub-labels and secondary text
C_LIGHT_GRAY  = HexColor("#F5F6F8")   # card / panel backgrounds
C_BORDER      = HexColor("#E0E1E3")   # table dividers, subtle outlines
C_PLACEHOLDER = HexColor("#D8D8D8")   # colour fill when image is missing
C_COVER_BG    = HexColor("#1A2332")   # cover background when no hero image

# ══════════════════════════════════════════════════════════════════════════════
#  ── CONFIGURE HERE ──
#  Fill in all the fields below to generate a brochure for your property.
# ══════════════════════════════════════════════════════════════════════════════

DATA = {

    # ┌─────────────────────────────────────────────────────────────────────┐
    # │  AGENT / BROKER                                                      │
    # └─────────────────────────────────────────────────────────────────────┘
    "agent": {
        "name":    "Mohamad Kodmani",
        "company": "Mohamad Kodmani Real Estate Brokers LLC",
        "phone":   "971568888906",
        "email":   "mohamadkodmani@gmail.com",
        # Path to a headshot photo (JPG or PNG). Set to None to skip.
        "photo":   None,   # e.g. "images/agent.jpg"
    },

    # ┌─────────────────────────────────────────────────────────────────────┐
    # │  PROJECT                                                             │
    # └─────────────────────────────────────────────────────────────────────┘
    "project": {
        "name":             "Izzzi.LifeMINT",
        "tagline":          "Look what we found for you",
        "date_of_creation": "08.03.2026",
        "developer_name":   "Orange",
        "developer_logo":   None,   # e.g. "images/developer_logo.png"
        "district":         "JVC (Jumeirah Village Circle), Dubai",
        # Full-bleed background image for the cover page
        "cover_image":      None,   # e.g. "images/cover.jpg"
        # Building photo shown on the "About the Project" page
        "project_image":    None,   # e.g. "images/building.jpg"
    },

    # ┌─────────────────────────────────────────────────────────────────────┐
    # │  DESCRIPTION TEXT                                                    │
    # └─────────────────────────────────────────────────────────────────────┘
    "description": {
        "general_facts": (
            "Izzzi.LifeMINT presents a unique opportunity for savvy investors to own fully "
            "furnished apartment units in Dubai with the promise of a constant rental income "
            "and a guaranteed net profit of 8% for a duration of three years. This is not just "
            "an investment; it's a secure path to financial growth and peace of mind."
        ),
        "finishing":    "Modern finishing with high quality materials",
        "kitchen":      "Equipped kitchen",
        "furnishing":   "Fully furnished apartments",
        "location_text": (
            "Nestled in the heart of Dubai, Jumeirah Village Circle, or JVC, is a vibrant and "
            "rapidly growing community that captivates residents and visitors alike. This idyllic "
            "circular-shaped neighbourhood is designed to offer a harmonious blend of modern living "
            "and natural beauty.\n"
            "JVC's tree-lined streets, tranquil parks, and spacious villas and apartments make it "
            "a truly unique and welcoming place to call home. The community exudes a sense of peace "
            "and balance, providing a welcome escape from the hustle and bustle of city life, while "
            "still being conveniently located within Dubai."
        ),
    },

    # ┌─────────────────────────────────────────────────────────────────────┐
    # │  UNIT TYPES TABLE  (rows shown on the About page)                   │
    # └─────────────────────────────────────────────────────────────────────┘
    "units": [
        {
            "type":       "Apartments",
            "bedrooms":   "Studio",
            "amount":     "4/4",
            "area":       "415 – 625",
            "price_from": "738 619 AED",
        },
        {
            "type":       "Apartments",
            "bedrooms":   "1 Bedroom",
            "amount":     "11/60",
            "area":       "614 – 1 268",
            "price_from": "951 154 AED",
        },
        {
            "type":       "Apartments",
            "bedrooms":   "2 Bedrooms",
            "amount":     "2/2",
            "area":       "1 588 – 1 837",
            "price_from": "1 989 459 AED",
        },
    ],

    # ┌─────────────────────────────────────────────────────────────────────┐
    # │  PHOTO GALLERIES                                                     │
    # │  Provide image paths in order. Use None for placeholder boxes.      │
    # └─────────────────────────────────────────────────────────────────────┘

    # Architecture photos:
    #   [0] → full-width page
    #   [1],[2] → two-column page
    #   [3],[4],[5] → 1-large + 2-stacked page  (index 3 = big left)
    "architecture_photos": [
        None,   # full-width hero   e.g. "images/arch_hero.jpg"
        None,   # left column       e.g. "images/arch_left.jpg"
        None,   # right column      e.g. "images/arch_right.jpg"
        None,   # 1+2 big left      e.g. "images/arch_big.jpg"
        None,   # 1+2 top right     e.g. "images/arch_top.jpg"
        None,   # 1+2 bottom right  e.g. "images/arch_bot.jpg"
    ],

    # Interior photos:
    #   [0]      → full-width page
    #   [1],[2],[3] → 1-large + 2-stacked (page A)
    #   [4],[5],[6] → 1-large + 2-stacked (page B)
    "interior_photos": [
        None,   # full-width
        None,   # page A — big left
        None,   # page A — top right
        None,   # page A — bottom right
        None,   # page B — big left
        None,   # page B — top right
        None,   # page B — bottom right
    ],

    # ┌─────────────────────────────────────────────────────────────────────┐
    # │  MAP & MASTERPLAN                                                    │
    # └─────────────────────────────────────────────────────────────────────┘
    "map_image":        None,   # e.g. "images/map.jpg"
    "masterplan_image": None,   # e.g. "images/masterplan.jpg"

    # ┌─────────────────────────────────────────────────────────────────────┐
    # │  FEATURES & AMENITIES  (max 6 shown in a 2×3 grid)                  │
    # └─────────────────────────────────────────────────────────────────────┘
    "amenities": [
        {"name": "Concierge Services",         "image": None},
        {"name": "Roof Top Terrace With BBQ",  "image": None},
        {"name": "Coworking Zone",             "image": None},
        {"name": "Fully Equipped Gym",         "image": None},
        {"name": "Roof Top Cinema",            "image": None},
    ],

    # ┌─────────────────────────────────────────────────────────────────────┐
    # │  PAYMENT PLANS  (one page is generated per plan)                    │
    # └─────────────────────────────────────────────────────────────────────┘
    "payment_plans": [
        {
            "name": "Payment Plan Option 1",
            "installments": [
                {"milestone": "On booking", "percentage": "100%"},
            ],
        },
        {
            "name": "Payment Plan Option 2",
            "installments": [
                {"milestone": "On booking",              "percentage": "50%"},
                {"milestone": "12 months after booking", "percentage": "50%"},
            ],
        },
    ],

    # ┌─────────────────────────────────────────────────────────────────────┐
    # │  TYPICAL UNITS  (one page is generated per unit type)               │
    # └─────────────────────────────────────────────────────────────────────┘
    "typical_units": [
        {
            "label":           "Apartments: Studio",
            "floorplan_image": None,   # e.g. "images/plan_studio.jpg"
            "price_from":      "AED 738 619",
            "price_to":        "AED 1 022 766",
            "area_from":       "415 sqft",
            "area_to":         "625 sqft",
            "ppsf_from":       "AED 1 635/sqft",
            "ppsf_to":         "AED 1 978/sqft",
        },
        {
            "label":           "Apartments: 1 Bedroom",
            "floorplan_image": None,
            "price_from":      "AED 951 154",
            "price_to":        "AED 1 747 135",
            "area_from":       "614 sqft",
            "area_to":         "1 268 sqft",
            "ppsf_from":       "AED 1 296/sqft",
            "ppsf_to":         "AED 1 767/sqft",
        },
        {
            "label":           "Apartments: 2 Bedrooms",
            "floorplan_image": None,
            "price_from":      "AED 1 989 459",
            "price_to":        "AED 2 279 093",
            "area_from":       "1 588 sqft",
            "area_to":         "1 837 sqft",
            "ppsf_from":       "AED 1 240/sqft",
            "ppsf_to":         "AED 1 252/sqft",
        },
    ],

    # Short summary shown in the sidebar of every Typical Units page
    "unit_counts": [
        "Apartments: Studio – 4",
        "Apartments: 1 Bedroom – 11",
        "Apartments: 2 Bedrooms – 2",
    ],

    # ┌─────────────────────────────────────────────────────────────────────┐
    # │  DEVELOPER                                                           │
    # └─────────────────────────────────────────────────────────────────────┘
    "developer": {
        "name":         "Orange",
        "logo":         None,   # e.g. "images/developer_logo.png"
        "banner_image": None,   # e.g. "images/developer_banner.jpg"
        "description":  (
            "Orange group, an international group of companies engaged in "
            "development, hotel and restaurant businesses."
        ),
    },
}

# ══════════════════════════════════════════════════════════════════════════════
#  PAGE LAYOUT CONSTANTS  (adjust if you need different margins / spacing)
# ══════════════════════════════════════════════════════════════════════════════

PW, PH = landscape(A4)   # 841.89 × 595.28 pt

MARGIN    = 24    # outer page margin (all sides)
GAP       = 10    # gap between panels / photos
CARD_R    = 10    # corner radius for cards and photo frames
HEADER_H  = 30    # height of the top-of-page header strip
LEFT_FRAC = 0.30  # fraction of page width used by the left sidebar card

# Derived constants
BODY_TOP  = PH - HEADER_H - MARGIN   # top of main content area
BODY_BOT  = MARGIN                   # bottom of main content area
BODY_H    = BODY_TOP - BODY_BOT      # total content height


# ══════════════════════════════════════════════════════════════════════════════
#  BROCHURE GENERATOR CLASS
# ══════════════════════════════════════════════════════════════════════════════

class BrochureGenerator:
    """Generates a multi-page real-estate brochure PDF from the DATA dict."""

    def __init__(self, output_path: str, data: dict):
        self.out  = output_path
        self.d    = data
        self.c    = rl_canvas.Canvas(output_path, pagesize=landscape(A4))

    # ── File finalisation ────────────────────────────────────────────────────

    def save(self):
        self.c.save()

    # ── Low-level drawing helpers ────────────────────────────────────────────

    def _new_page(self):
        self.c.showPage()

    def _white_page(self):
        """Fill the current page with white."""
        self.c.setFillColor(C_WHITE)
        self.c.rect(0, 0, PW, PH, fill=1, stroke=0)

    def _card(self, x, y, w, h, fill=None, stroke_color=None, radius=CARD_R):
        """Draw a rounded-rectangle card."""
        fill = fill or C_LIGHT_GRAY
        self.c.setFillColor(fill)
        if stroke_color:
            self.c.setStrokeColor(stroke_color)
            self.c.roundRect(x, y, w, h, radius, fill=1, stroke=1)
        else:
            self.c.setStrokeColor(fill)
            self.c.roundRect(x, y, w, h, radius, fill=1, stroke=0)

    def _image(self, path, x, y, w, h, radius=0, label="Image"):
        """
        Draw an image fitted into the given box. If path is None or the file
        does not exist, draw a light-grey placeholder with a centred label.
        """
        self.c.saveState()
        if radius > 0:
            clip = self.c.beginPath()
            clip.roundRect(x, y, w, h, radius)
            self.c.clipPath(clip, stroke=0)

        valid = path and os.path.exists(str(path))
        if valid:
            try:
                self.c.drawImage(
                    str(path), x, y, w, h,
                    preserveAspectRatio=False, mask="auto"
                )
                self.c.restoreState()
                return
            except Exception:
                pass  # fall through to placeholder

        # Placeholder
        self.c.setFillColor(C_PLACEHOLDER)
        self.c.rect(x, y, w, h, fill=1, stroke=0)
        self.c.setFillColor(HexColor("#AAAAAA"))
        self.c.setFont("Helvetica", 8)
        self.c.drawCentredString(x + w / 2, y + h / 2 - 4, label)
        self.c.restoreState()

    # ── Typography helpers ───────────────────────────────────────────────────

    def _text(self, x, y, text, font="Helvetica", size=9, color=C_DARK):
        self.c.setFillColor(color)
        self.c.setFont(font, size)
        self.c.drawString(x, y, str(text))

    def _text_right(self, x, y, text, font="Helvetica", size=9, color=C_DARK):
        self.c.setFillColor(color)
        self.c.setFont(font, size)
        self.c.drawRightString(x, y, str(text))

    def _text_centre(self, x, y, text, font="Helvetica", size=9, color=C_DARK):
        self.c.setFillColor(color)
        self.c.setFont(font, size)
        self.c.drawCentredString(x, y, str(text))

    def _multiline(self, x, y, text, font="Helvetica", size=9,
                   color=C_DARK, max_width=400, leading=13):
        """Draw text wrapping at max_width. Returns the y after last line."""
        self.c.setFillColor(color)
        self.c.setFont(font, size)
        lines = simpleSplit(str(text), font, size, max_width)
        for i, line in enumerate(lines):
            self.c.drawString(x, y - i * leading, line)
        return y - (len(lines) - 1) * leading

    # ── Page header (appears on all pages except cover) ──────────────────────

    def _page_header(self, left: str, right: str):
        """
        Draw the small upper header strip:
            LEFT: "PROPERTY NAME / SECTION"
            RIGHT: "AGENT COMPANY NAME"
        """
        y = PH - HEADER_H
        self.c.setFillColor(C_WHITE)
        self.c.rect(0, y, PW, HEADER_H, fill=1, stroke=0)
        self.c.setFillColor(C_GRAY)
        self.c.setFont("Helvetica", 7.5)
        self.c.drawString(MARGIN, y + 11, left.upper())
        self.c.drawRightString(PW - MARGIN, y + 11, right.upper())

    def _section_header(self, section: str):
        """Helper: standard header using project name + section."""
        p = self.d["project"]
        a = self.d["agent"]
        self._page_header(
            f"{p.get('name', '')} / {section}",
            a.get("company", ""),
        )

    # ══════════════════════════════════════════════════════════════════════════
    #  PAGE 1 — COVER
    # ══════════════════════════════════════════════════════════════════════════

    def page_cover(self):
        p = self.d["project"]
        a = self.d["agent"]

        # Background: full-bleed image or dark colour
        cover_img = p.get("cover_image")
        if cover_img and os.path.exists(str(cover_img)):
            self.c.drawImage(str(cover_img), 0, 0, PW, PH,
                             preserveAspectRatio=False, mask="auto")
        else:
            self.c.setFillColor(C_COVER_BG)
            self.c.rect(0, 0, PW, PH, fill=1, stroke=0)
            # decorative gradient band
            self.c.setFillColor(HexColor("#253347"))
            self.c.rect(0, 0, PW * 0.48, PH, fill=1, stroke=0)

        # ── Bottom-left text block ───────────────────────────────────────────
        tx, ty = MARGIN + 4, 90

        self.c.setFillColor(HexColor("#CCCCCC"))
        self.c.setFont("Helvetica", 11)
        self.c.drawString(tx, ty + 52, p.get("tagline", ""))

        self.c.setFillColor(C_WHITE)
        self.c.setFont("Helvetica-Bold", 38)
        self.c.drawString(tx, ty, p.get("name", ""))

        self.c.setFillColor(HexColor("#AAAAAA"))
        self.c.setFont("Helvetica", 9)
        self.c.drawString(tx, ty - 20,
                          f"Date of creation  {p.get('date_of_creation', '')}")

        # ── Agent card (bottom-right) ────────────────────────────────────────
        cw, ch = 255, 170
        cx = PW - MARGIN - cw
        cy = 50

        self._card(cx, cy, cw, ch, fill=HexColor("#DDE1E7"), radius=12)

        # Agent photo
        photo_sz = 64
        self._image(
            a.get("photo"),
            cx + 14, cy + ch - photo_sz - 14,
            photo_sz, photo_sz,
            radius=8, label="Photo",
        )

        # Agent text
        tx2 = cx + 14
        self.c.setFillColor(C_DARK)
        self.c.setFont("Helvetica-Bold", 12)
        self.c.drawString(tx2, cy + ch - photo_sz - 32, a.get("name", ""))

        self.c.setFillColor(C_GRAY)
        self.c.setFont("Helvetica", 7.5)
        # wrap company name
        co_lines = simpleSplit(a.get("company", ""), "Helvetica", 7.5, cw - 28)
        for i, ln in enumerate(co_lines):
            self.c.drawString(tx2, cy + ch - photo_sz - 44 - i * 11, ln)
        offset = len(co_lines) * 11

        # phone & email with small circle icons
        icon_y_phone = cy + 52
        icon_y_email = cy + 32
        for iy in (icon_y_phone, icon_y_email):
            self.c.setFillColor(HexColor("#888888"))
            self.c.circle(tx2 + 8, iy + 4, 5, fill=1, stroke=0)

        self.c.setFillColor(C_DARK)
        self.c.setFont("Helvetica", 9)
        self.c.drawString(tx2 + 20, icon_y_phone, a.get("phone", ""))
        self.c.drawString(tx2 + 20, icon_y_email, a.get("email", ""))

        self._new_page()

    # ══════════════════════════════════════════════════════════════════════════
    #  PAGE 2 — ABOUT THE PROJECT
    # ══════════════════════════════════════════════════════════════════════════

    def page_about(self):
        p     = self.d["project"]
        units = self.d["units"]

        self._white_page()
        self._text(MARGIN, PH - 20, "ABOUT THE PROJECT",
                   size=8, color=C_GRAY)

        # ── Left content ────────────────────────────────────────────────────
        left_w = PW * 0.44 - MARGIN - GAP / 2

        # Project name
        self.c.setFillColor(C_DARK)
        self.c.setFont("Helvetica-Bold", 26)
        self.c.drawString(MARGIN, BODY_TOP - 24, p.get("name", ""))

        # Developer row
        dev_y   = BODY_TOP - 72
        logo_sz = 40

        self._card(MARGIN, dev_y - 8, logo_sz, logo_sz, radius=8)
        self._image(p.get("developer_logo"),
                    MARGIN, dev_y - 8, logo_sz, logo_sz,
                    radius=8, label="Logo")

        self._text(MARGIN + logo_sz + 10, dev_y + 20, "Developer",
                   size=8, color=C_GRAY)
        self._text(MARGIN + logo_sz + 10, dev_y + 4,
                   p.get("developer_name", ""), font="Helvetica-Bold", size=12)

        # District
        half = left_w / 2
        self._text(MARGIN + half + 10, dev_y + 20, "District",
                   size=8, color=C_GRAY)
        self._multiline(MARGIN + half + 10, dev_y + 4,
                        p.get("district", ""),
                        size=10, max_width=half - 10, leading=13)

        # ── Unit types table ─────────────────────────────────────────────────
        table_y   = dev_y - 42
        col_hdrs  = ["Unit type", "Bedrooms", "Amount", "Area, sqft", "Price from"]
        col_ws    = [82, 82, 54, 96, 100]
        total_tw  = sum(col_ws)

        # Header row separator
        self.c.setStrokeColor(C_BORDER)
        self.c.setLineWidth(0.5)
        self.c.line(MARGIN, table_y + 18, MARGIN + total_tw, table_y + 18)

        for i, (hdr, cw) in enumerate(zip(col_hdrs, col_ws)):
            cx = MARGIN + sum(col_ws[:i])
            self._text(cx + 4, table_y + 5, hdr, size=8, color=C_GRAY)

        for ri, row in enumerate(units):
            ry = table_y - 20 - ri * 24
            self.c.setStrokeColor(C_BORDER)
            self.c.line(MARGIN, ry + 18, MARGIN + total_tw, ry + 18)
            vals = [
                row.get("type", ""),
                row.get("bedrooms", ""),
                row.get("amount", ""),
                row.get("area", ""),
                row.get("price_from", ""),
            ]
            for i, (val, cw) in enumerate(zip(vals, col_ws)):
                cx = MARGIN + sum(col_ws[:i])
                self._text(cx + 4, ry + 5, val, size=9)

        # ── Right: building photo ────────────────────────────────────────────
        rx = PW * 0.44 + GAP / 2
        rw = PW - rx - MARGIN
        self._image(p.get("project_image"), rx, BODY_BOT, rw, BODY_H,
                    radius=CARD_R, label="Project Photo")

        self._new_page()

    # ══════════════════════════════════════════════════════════════════════════
    #  PAGE 3 — DESCRIPTION
    # ══════════════════════════════════════════════════════════════════════════

    def page_description(self):
        p    = self.d["project"]
        desc = self.d["description"]

        self._white_page()
        self._text(MARGIN, PH - 20, "ABOUT THE PROJECT", size=8, color=C_GRAY)

        self.c.setFillColor(C_DARK)
        self.c.setFont("Helvetica-Bold", 26)
        self.c.drawString(MARGIN, BODY_TOP - 18, p.get("name", ""))

        # Developer row
        dev_y   = BODY_TOP - 66
        logo_sz = 36
        self._card(MARGIN, dev_y - 4, logo_sz, logo_sz, radius=8)
        self._image(p.get("developer_logo"), MARGIN, dev_y - 4,
                    logo_sz, logo_sz, radius=8, label="Logo")
        self._text(MARGIN + logo_sz + 10, dev_y + 16, "Developer",
                   size=8, color=C_GRAY)
        self._text(MARGIN + logo_sz + 10, dev_y + 2,
                   p.get("developer_name", ""),
                   font="Helvetica-Bold", size=11)

        tw = PW - 2 * MARGIN
        ty = dev_y - 38

        self._text(MARGIN, ty, "Description", size=9, color=C_GRAY)
        ty -= 16

        self._text(MARGIN, ty, "Project general facts",
                   font="Helvetica-Bold", size=9)
        ty -= 14
        lines = simpleSplit(desc.get("general_facts", ""), "Helvetica", 9, tw)
        for ln in lines:
            self._text(MARGIN, ty, ln, size=9)
            ty -= 13
        ty -= 4

        for section_title, section_key in [
            ("Finishing and materials", "finishing"),
            ("Kitchen and appliances",  "kitchen"),
            ("Furnishing",              "furnishing"),
        ]:
            self._text(MARGIN, ty, section_title,
                       font="Helvetica-Bold", size=9)
            ty -= 14
            self._text(MARGIN, ty, desc.get(section_key, ""), size=9)
            ty -= 18

        self._new_page()

    # ══════════════════════════════════════════════════════════════════════════
    #  PAGE 4 — LOCATION DESCRIPTION TEXT
    # ══════════════════════════════════════════════════════════════════════════

    def page_location_text(self):
        desc = self.d["description"]

        self._white_page()
        tw  = PW - 2 * MARGIN
        ty  = BODY_TOP

        self._text(MARGIN, ty, "Location description and benefits",
                   font="Helvetica-Bold", size=10)
        ty -= 18

        for paragraph in desc.get("location_text", "").split("\n"):
            paragraph = paragraph.strip()
            if not paragraph:
                ty -= 8
                continue
            lines = simpleSplit(paragraph, "Helvetica", 9, tw)
            for ln in lines:
                self._text(MARGIN, ty, ln, size=9)
                ty -= 13
            ty -= 6

        self._new_page()

    # ══════════════════════════════════════════════════════════════════════════
    #  PHOTO PAGE LAYOUTS
    # ══════════════════════════════════════════════════════════════════════════

    def _photo_page_setup(self, section: str):
        """White background + section header."""
        self._white_page()
        self._section_header(section)

    def page_photo_full(self, img_path, section="Architecture"):
        """Single full-width photo below the header."""
        self._photo_page_setup(section)
        self._image(img_path, MARGIN, BODY_BOT,
                    PW - 2 * MARGIN, BODY_H,
                    radius=CARD_R, label=f"{section} Photo")
        self._new_page()

    def page_photo_two_col(self, left_img, right_img, section="Architecture"):
        """Two equal-width photos side by side."""
        self._photo_page_setup(section)
        half_w = (PW - 2 * MARGIN - GAP) / 2
        self._image(left_img,  MARGIN,              BODY_BOT, half_w, BODY_H,
                    radius=CARD_R, label="Photo")
        self._image(right_img, MARGIN + half_w + GAP, BODY_BOT, half_w, BODY_H,
                    radius=CARD_R, label="Photo")
        self._new_page()

    def page_photo_one_two(self, big_img, top_img, bot_img, section="Architecture"):
        """One large photo on the left, two stacked photos on the right."""
        self._photo_page_setup(section)
        big_w  = (PW - 2 * MARGIN) * 0.52
        sm_w   = PW - 2 * MARGIN - GAP - big_w
        sm_h   = (BODY_H - GAP) / 2
        rx     = MARGIN + big_w + GAP

        self._image(big_img, MARGIN, BODY_BOT, big_w, BODY_H,
                    radius=CARD_R, label="Photo")
        self._image(top_img, rx, BODY_BOT + sm_h + GAP, sm_w, sm_h,
                    radius=CARD_R, label="Photo")
        self._image(bot_img, rx, BODY_BOT,              sm_w, sm_h,
                    radius=CARD_R, label="Photo")
        self._new_page()

    # ══════════════════════════════════════════════════════════════════════════
    #  LOCATION / POI  PAGE
    # ══════════════════════════════════════════════════════════════════════════

    def page_location_map(self):
        p = self.d["project"]
        self._white_page()
        self._section_header("Point of Interest")

        # Left card
        lw = PW * LEFT_FRAC
        self._card(MARGIN, BODY_BOT, lw - GAP, BODY_H)

        self.c.setFillColor(C_DARK)
        self.c.setFont("Helvetica-Bold", 28)
        self.c.drawString(MARGIN + 16, BODY_TOP - 36, "Location")

        self._multiline(MARGIN + 16, BODY_TOP - 58,
                        p.get("district", ""),
                        size=10, max_width=lw - GAP - 32)

        # Right: map image
        rx = MARGIN + lw
        rw = PW - rx - MARGIN
        self._image(self.d.get("map_image"), rx, BODY_BOT, rw, BODY_H,
                    radius=CARD_R, label="Map Image")

        self._new_page()

    # ══════════════════════════════════════════════════════════════════════════
    #  FEATURES & AMENITIES  PAGE
    # ══════════════════════════════════════════════════════════════════════════

    def page_features_amenities(self):
        amenities = self.d.get("amenities", [])[:6]

        self._white_page()
        self._section_header("Features & Amenities")

        # Left title card
        lw = PW * LEFT_FRAC
        self._card(MARGIN, BODY_BOT, lw - GAP, BODY_H)

        self.c.setFillColor(C_DARK)
        self.c.setFont("Helvetica-Bold", 22)
        self.c.drawString(MARGIN + 16, BODY_TOP - 36, "Features &")
        self.c.drawString(MARGIN + 16, BODY_TOP - 62, "Amenities")

        # Photo grid: 2 rows × 3 columns
        rx         = MARGIN + lw
        grid_w     = PW - rx - MARGIN
        COLS, ROWS = 3, 2
        caption_h  = 16
        cell_w     = (grid_w - (COLS - 1) * GAP) / COLS
        cell_h     = (BODY_H - (ROWS - 1) * GAP - ROWS * caption_h) / ROWS

        for idx, am in enumerate(amenities):
            col = idx % COLS
            row = idx // COLS
            cx  = rx + col * (cell_w + GAP)
            # row 0 is top, row 1 is bottom
            cy  = BODY_BOT + (ROWS - 1 - row) * (cell_h + GAP + caption_h)

            self._image(am.get("image"),
                        cx, cy + caption_h, cell_w, cell_h,
                        radius=CARD_R, label="Amenity Photo")

            self._text(cx, cy + 4, am.get("name", ""), size=8, color=C_DARK)

        self._new_page()

    # ══════════════════════════════════════════════════════════════════════════
    #  MASTERPLAN  PAGE
    # ══════════════════════════════════════════════════════════════════════════

    def page_masterplan(self):
        self._white_page()
        self._section_header("Masterplan")

        lw = PW * LEFT_FRAC
        self._card(MARGIN, BODY_BOT, lw - GAP, BODY_H)

        self.c.setFillColor(C_DARK)
        self.c.setFont("Helvetica-Bold", 28)
        self.c.drawString(MARGIN + 16, BODY_TOP - 36, "Masterplan")

        rx = MARGIN + lw
        rw = PW - rx - MARGIN
        self._image(self.d.get("masterplan_image"), rx, BODY_BOT, rw, BODY_H,
                    radius=CARD_R, label="Masterplan Image")

        self._new_page()

    # ══════════════════════════════════════════════════════════════════════════
    #  PAYMENT PLAN  PAGES
    # ══════════════════════════════════════════════════════════════════════════

    def page_payment_plan(self, plan: dict, all_plans: list):
        self._white_page()
        self._section_header("Payment Plan")

        lw = PW * LEFT_FRAC
        self._card(MARGIN, BODY_BOT, lw - GAP, BODY_H)

        # Plan label + name
        self._text(MARGIN + 16, BODY_TOP - 20,
                   "Payment Plan Option", size=8, color=C_GRAY)
        self.c.setFillColor(C_DARK)
        self.c.setFont("Helvetica-Bold", 17)
        self.c.drawString(MARGIN + 16, BODY_TOP - 42, plan.get("name", ""))

        # "All options" list at card bottom
        list_y = BODY_BOT + 80
        self.c.setFillColor(C_DARK)
        self.c.setFont("Helvetica-Bold", 9)
        self.c.drawString(MARGIN + 16, list_y + 16, "All options")

        for i, op in enumerate(all_plans):
            is_active = op.get("name") == plan.get("name")
            color = C_DARK if is_active else C_GRAY
            font  = "Helvetica-Bold" if is_active else "Helvetica"
            self._text(MARGIN + 30, list_y - 4 - i * 20,
                       op.get("name", ""), font=font, size=9, color=color)

        # Right: installment schedule
        rx  = MARGIN + lw
        rw  = PW - rx - MARGIN
        iy  = BODY_TOP - 28

        for inst in plan.get("installments", []):
            self.c.setStrokeColor(C_BORDER)
            self.c.setLineWidth(0.5)
            self.c.line(rx + 8, iy + 18, rx + rw - 8, iy + 18)

            self.c.setFillColor(C_DARK)
            self.c.setFont("Helvetica-Bold", 11)
            self.c.drawString(rx + 8,       iy, inst.get("milestone",   ""))
            self.c.drawRightString(rx + rw - 8, iy, inst.get("percentage", ""))
            iy -= 38

        self._new_page()

    # ══════════════════════════════════════════════════════════════════════════
    #  TYPICAL UNITS  PAGES
    # ══════════════════════════════════════════════════════════════════════════

    def page_typical_unit(self, unit: dict):
        self._white_page()
        self._section_header("Typical Units")

        lw = PW * LEFT_FRAC
        self._card(MARGIN, BODY_BOT, lw - GAP, BODY_H)

        # Sidebar title
        self.c.setFillColor(C_DARK)
        self.c.setFont("Helvetica-Bold", 22)
        self.c.drawString(MARGIN + 16, BODY_TOP - 36, "Typical")
        self.c.drawString(MARGIN + 16, BODY_TOP - 62, "Units")

        # Unit count summary at card bottom
        self._text(MARGIN + 16, BODY_BOT + 92,
                   "Number of available units", size=8, color=C_GRAY)
        for i, uc in enumerate(self.d.get("unit_counts", [])):
            self._text(MARGIN + 16, BODY_BOT + 72 - i * 18, uc,
                       font="Helvetica-Bold", size=9)

        # Right content
        rx = MARGIN + lw
        rw = PW - rx - MARGIN

        # Floor plan image (upper ~55 % of content area)
        plan_h = BODY_H * 0.55
        plan_y = BODY_BOT + BODY_H - plan_h
        self._image(unit.get("floorplan_image"),
                    rx, plan_y, rw, plan_h,
                    radius=CARD_R, label="Floor Plan")

        # Pricing block below floor plan
        py = plan_y - 28
        self.c.setFillColor(C_DARK)
        self.c.setFont("Helvetica-Bold", 16)
        self.c.drawString(rx, py, unit.get("label", ""))

        # Separator
        self.c.setStrokeColor(C_BORDER)
        self.c.setLineWidth(0.5)
        self.c.line(rx, py - 6, rx + rw, py - 6)

        half_rw = rw / 2
        rows_data = [
            (unit.get("price_from", ""), unit.get("price_to",   "")),
            (unit.get("area_from",   ""), unit.get("area_to",    "")),
            (unit.get("ppsf_from",   ""), unit.get("ppsf_to",    "")),
        ]
        for ri, (val_from, val_to) in enumerate(rows_data):
            ry = py - 24 - ri * 22
            self._text(rx,              ry + 10, "from", size=8, color=C_GRAY)
            self._text(rx + 30,         ry + 10, val_from,
                       font="Helvetica-Bold", size=9)
            self._text(rx + half_rw,    ry + 10, "to",   size=8, color=C_GRAY)
            self._text(rx + half_rw + 18, ry + 10, val_to,
                       font="Helvetica-Bold", size=9)

        self._new_page()

    # ══════════════════════════════════════════════════════════════════════════
    #  DEVELOPER  PAGE
    # ══════════════════════════════════════════════════════════════════════════

    def page_developer(self):
        dev = self.d.get("developer", {})

        self._white_page()
        self._section_header("Developer")

        lw = PW * LEFT_FRAC
        self._card(MARGIN, BODY_BOT, lw - GAP, BODY_H)

        self.c.setFillColor(C_DARK)
        self.c.setFont("Helvetica-Bold", 30)
        self.c.drawString(MARGIN + 16, BODY_TOP - 42, "Developer")

        # Right area — two stacked cards
        rx        = MARGIN + lw
        rw        = PW - rx - MARGIN
        banner_h  = BODY_H * 0.24
        desc_h    = BODY_H - banner_h - GAP

        # Banner card (dark background with logo + name)
        banner_y = BODY_BOT + desc_h + GAP
        self._card(rx, banner_y, rw, banner_h, fill=C_DARK, radius=CARD_R)

        # Draw banner image over the dark card if provided
        self._image(dev.get("banner_image"), rx, banner_y, rw, banner_h,
                    radius=CARD_R, label="")

        # Logo + developer name on banner
        logo_sz = int(banner_h * 0.55)
        logo_y  = banner_y + (banner_h - logo_sz) / 2
        self._card(rx + 12, logo_y, logo_sz, logo_sz,
                   fill=HexColor("#555555"), radius=6)
        self._image(dev.get("logo"), rx + 12, logo_y, logo_sz, logo_sz,
                    radius=6, label="Logo")
        self.c.setFillColor(C_WHITE)
        self.c.setFont("Helvetica-Bold", 15)
        self.c.drawString(rx + logo_sz + 26,
                          banner_y + banner_h / 2 - 8,
                          dev.get("name", ""))

        # Description card (light background)
        self._card(rx, BODY_BOT, rw, desc_h, fill=C_LIGHT_GRAY, radius=CARD_R)
        self._multiline(rx + 18, BODY_BOT + desc_h - 28,
                        dev.get("description", ""),
                        size=9, max_width=rw - 36, leading=13)

        self._new_page()

    # ══════════════════════════════════════════════════════════════════════════
    #  ASSEMBLE THE BROCHURE
    # ══════════════════════════════════════════════════════════════════════════

    def build(self):
        arch  = self.d.get("architecture_photos", [])
        intr  = self.d.get("interior_photos",     [])
        plans = self.d.get("payment_plans",        [])
        units = self.d.get("typical_units",        [])

        def _get(lst, i):
            return lst[i] if i < len(lst) else None

        print("Building brochure…")

        # 1. Cover
        self.page_cover()
        print("  ✓  Cover")

        # 2. About the Project
        self.page_about()
        print("  ✓  About the Project")

        # 3. Description
        self.page_description()
        print("  ✓  Description")

        # 4. Location text
        self.page_location_text()
        print("  ✓  Location text")

        # 5. Architecture — full width
        self.page_photo_full(_get(arch, 0), "Architecture")
        # 6. Architecture — 2-column
        self.page_photo_two_col(_get(arch, 1), _get(arch, 2), "Architecture")
        # 7. Architecture — 1+2 grid
        self.page_photo_one_two(_get(arch, 3), _get(arch, 4), _get(arch, 5),
                                "Architecture")
        print("  ✓  Architecture pages")

        # 8. Interior — full width
        self.page_photo_full(_get(intr, 0), "Interior")
        # 9. Interior — 1+2 grid (A)
        self.page_photo_one_two(_get(intr, 1), _get(intr, 2), _get(intr, 3),
                                "Interior")
        # 10. Interior — 1+2 grid (B)
        self.page_photo_one_two(_get(intr, 4), _get(intr, 5), _get(intr, 6),
                                "Interior")
        print("  ✓  Interior pages")

        # 11. Location / POI
        self.page_location_map()
        print("  ✓  Location map")

        # 12. Features & Amenities
        self.page_features_amenities()
        print("  ✓  Features & Amenities")

        # 13. Masterplan
        self.page_masterplan()
        print("  ✓  Masterplan")

        # 14. Payment plans
        for plan in plans:
            self.page_payment_plan(plan, plans)
        print(f"  ✓  Payment plans ({len(plans)})")

        # 15. Typical units
        for unit in units:
            self.page_typical_unit(unit)
        print(f"  ✓  Typical units ({len(units)})")

        # 16. Developer
        self.page_developer()
        print("  ✓  Developer")

        self.save()
        print(f"\n✅  Saved → {self.out}")


# ══════════════════════════════════════════════════════════════════════════════
#  ENTRY POINT
# ══════════════════════════════════════════════════════════════════════════════

if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Generate a real-estate brochure PDF from the DATA dictionary."
    )
    parser.add_argument(
        "--output", "-o",
        default=OUTPUT_FILE,
        help=f"Output PDF file path (default: {OUTPUT_FILE})",
    )
    args = parser.parse_args()

    gen = BrochureGenerator(args.output, DATA)
    gen.build()