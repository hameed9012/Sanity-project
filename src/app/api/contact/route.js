import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getSiteContactSettings } from "@/lib/server/siteContactSettings";

const IS_PRODUCTION = process.env.NODE_ENV === "production";

// Translations for emails
const translations = {
  en: {
    adminSubject: "New Project Inquiry - {project}",
    adminTitle: "New Project Inquiry",
    userSubject: "Thank you for your interest in {project}",
    userTitle: "Thank You for Your Luxury Property Inquiry",
    greeting: "Dear",
    projectLabel: "Project",
    unitLabel: "Unit Type",
    contactMethodLabel: "Preferred Contact",
    contactTime:
      "Our luxury property specialist will contact you within 24 hours.",
    regards: "Best regards,",
    signature: "Mohamad Kodmani Real Estate Brokerage",
    footer: "This is an automated message. Please do not reply to this email.",
  },
  ar: {
    adminSubject: "استفسار جديد عن مشروع - {project}",
    adminTitle: "استفسار جديد عن مشروع",
    userSubject: "شكراً لاهتمامك بمشروع {project}",
    userTitle: "شكراً لاستفسارك عن العقارات الفاخرة",
    greeting: "عزيزي/عزيزتي",
    projectLabel: "المشروع",
    unitLabel: "نوع الوحدة",
    contactMethodLabel: "طريقة التواصل المفضلة",
    contactTime: "سيقوم مستشار العقارات الفاخرة بالاتصال بك خلال 24 ساعة.",
    regards: "مع أطيب التحيات,",
    signature: "محمد قضماني للوساطة العقارية",
    footer: "هذه رسالة آلية. يرجى عدم الرد على هذا البريد الإلكتروني.",
  },
};

const contactMethodLabels = {
  en: {
    phone: "Phone Call",
    email: "Email",
  },
  ar: {
    phone: "مكالمة هاتفية",
    email: "بريد إلكتروني",
  },
};

export async function POST(request) {
  console.log("📧 ========== PROJECT FORM API CALLED ==========");

  try {
    const formData = await request.json();
    console.log("📝 Form Data Received:", JSON.stringify(formData, null, 2));

    // Validate required fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.email ||
      !formData.project
    ) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Phone validation
    if (formData.phone.replace(/\D/g, "").length < 7) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid phone number" },
        { status: 400 }
      );
    }

    console.log("✅ Form validation passed");

    const siteContact = await getSiteContactSettings();
    const senderEmail = siteContact.email || process.env.EMAIL_USER || "no-reply@example.com";
    const adminEmail = siteContact.email || process.env.ADMIN_EMAIL || senderEmail;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.hostinger.com",
      port: parseInt(process.env.EMAIL_PORT || "465"),
      secure: true,
      auth: {
        user: senderEmail,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
      ...(IS_PRODUCTION && {
        connectionTimeout: 30000,
        socketTimeout: 30000,
        debug: true,
        logger: true,
      }),
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log("✅ SMTP connection verified");
    } catch (error) {
      console.error("❌ SMTP connection failed:", error);
    }

    // Prepare results
    const results = {
      adminEmail: { success: false, error: null },
      userEmail: { success: false, error: null },
      respondIo: { success: false, error: null },
    };

    const userLocale = formData.locale || "en";
    const isRTL = userLocale === "ar";
    const t = translations[userLocale] || translations.en;
    const fullPhone = formData.phone; // Already includes country code from frontend

    try {
      // 1. Send to admin
      console.log("🔄 Sending admin email...");
      results.adminEmail = await sendAdminEmail(
        transporter,
        formData,
        t,
        isRTL,
        { senderEmail, adminEmail }
      );

      // 2. Send auto-reply to user
      console.log("🔄 Sending user auto-reply...");
      results.userEmail = await sendUserAutoReply(
        transporter,
        formData,
        t,
        isRTL,
        { senderEmail }
      );

      // 3. Send to respond.io
      console.log("🔄 Sending to respond.io...");
      results.respondIo = await sendToRespondIO(formData);
    } catch (error) {
      console.error("❌ Processing error:", error);
    }

    // Log results
    console.log("📊 ========== RESULTS ==========");
    console.log("📨 Admin Email:", results.adminEmail.success ? "✅" : "❌");
    console.log("📧 User Email:", results.userEmail.success ? "✅" : "❌");
    console.log("🤖 Respond.io:", results.respondIo.success ? "✅" : "❌");

    // Return success even if some components failed
    const successMessage =
      userLocale === "ar"
        ? "شكراً لك! سيتواصل معك مستشار العقارات الفاخرة خلال 24 ساعة."
        : "Thank you! Our luxury property specialist will contact you within 24 hours.";

    return NextResponse.json({
      success: true,
      message: successMessage,
      data: {
        formType: "PROJECT_FORM",
        components: {
          adminEmail: results.adminEmail.success,
          userEmail: results.userEmail.success,
          respondIo: results.respondIo.success,
        },
      },
    });
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Server error. Please try again later.",
        error: IS_PRODUCTION ? undefined : error.message,
      },
      { status: 500 }
    );
  }
}

// Send email to admin
async function sendAdminEmail(transporter, data, t, isRTL, mailConfig) {
  try {
    const subject = t.adminSubject.replace("{project}", data.project);

    const emailHtml = `
<!DOCTYPE html>
<html lang="${data.locale}" dir="${isRTL ? "rtl" : "ltr"}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${subject}</title>
</head>
<body style="font-family: ${
      isRTL ? "Arial, Tahoma, sans-serif" : "Arial, sans-serif"
    }; max-width: 600px; margin: 0 auto; background: #f8f9fa; color: #333; line-height: 1.6; text-align: ${
      isRTL ? "right" : "left"
    };">
    <div style="background: #ffffff; border-radius: 12px; overflow: hidden; margin: 20px auto; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="background: #1a1a1a; color: #d4af37; padding: 25px; text-align: center; border-bottom: 4px solid #d4af37;">
            <h1 style="margin: 0; font-size: 22px; font-weight: bold;">${
              t.adminTitle
            }</h1>
            <p style="margin: 8px 0 0 0;">Mohamad Kodmani Real Estate</p>
        </div>
        
        <div style="padding: 25px;">
            <div style="background: #e7f3ff; border: 1px solid #b3d9ff; border-radius: 8px; padding: 15px; margin: 20px 0; text-align: center;">
                🏢 ${
                  isRTL
                    ? "طلب جديد - الرد مطلوب خلال 24 ساعة"
                    : "New Inquiry - Response Required Within 24 Hours"
                }
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #d4af37;">
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">${
                      isRTL ? "اسم العميل:" : "Client Name:"
                    }</span>
                    <span style="color: #495057; text-align: ${
                      isRTL ? "left" : "right"
                    };">${data.firstName} ${data.lastName}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">${
                      isRTL ? "رقم الهاتف:" : "Phone:"
                    }</span>
                    <span style="color: #495057; text-align: ${
                      isRTL ? "left" : "right"
                    };">${data.phone}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">${
                      isRTL ? "البريد الإلكتروني:" : "Email:"
                    }</span>
                    <span style="color: #495057; text-align: ${
                      isRTL ? "left" : "right"
                    };">${data.email}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">${
                      t.projectLabel
                    }:</span>
                    <span style="color: #495057; text-align: ${
                      isRTL ? "left" : "right"
                    };">${data.project}</span>
                </div>
                ${
                  data.unitType
                    ? `
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">${
                      t.unitLabel
                    }:</span>
                    <span style="color: #495057; text-align: ${
                      isRTL ? "left" : "right"
                    };">${data.unitType}</span>
                </div>
                `
                    : ""
                }
                <div style="display: flex; justify-content: space-between; padding: 10px 0;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">${
                      t.contactMethodLabel
                    }:</span>
                    <span style="color: #495057; text-align: ${
                      isRTL ? "left" : "right"
                    };">${
      contactMethodLabels[data.locale || "en"][data.contactMethod] ||
      data.contactMethod
    }</span>
                </div>
            </div>
            
            <div style="text-align: center; margin: 20px 0;">
                ${
                  data.contactMethod === "phone"
                    ? `
                <a href="tel:${data.phone.replace(
                  /[^\d+]/g,
                  ""
                )}" style="background: #d4af37; color: #1a1a1a; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; margin: 5px; font-size: 14px;">
                    📞 ${isRTL ? "اتصل بالعميل" : "Call Client"}
                </a>
                `
                    : ""
                }
                
                ${
                  data.contactMethod === "email"
                    ? `
                <a href="mailto:${
                  data.email
                }" style="background: #d4af37; color: #1a1a1a; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; margin: 5px; font-size: 14px;">
                    ✉️ ${isRTL ? "أرسل بريد" : "Email Client"}
                </a>
                `
                    : ""
                }
            </div>
        </div>
        
        <div style="background: #1a1a1a; color: #d4af37; padding: 15px; text-align: center; font-size: 12px; border-top: 1px solid #333;">
            <p style="margin: 0;">Mohamad Kodmani Real Estate Brokerage</p>
            <p style="margin: 8px 0 0 0;">${
              isRTL
                ? "تم إرسال هذا الطلب عبر موقع الويب"
                : "Submitted through website"
            }</p>
        </div>
    </div>
</body>
</html>
    `;

    const emailText = `
${t.adminTitle.toUpperCase()}

${isRTL ? "اسم العميل:" : "Client Name:"} ${data.firstName} ${data.lastName}
${isRTL ? "رقم الهاتف:" : "Phone:"} ${data.phone}
${isRTL ? "البريد الإلكتروني:" : "Email:"} ${data.email}
${t.projectLabel}: ${data.project}
${data.unitType ? `${t.unitLabel}: ${data.unitType}\n` : ""}${
      t.contactMethodLabel
    }: ${
      contactMethodLabels[data.locale || "en"][data.contactMethod] ||
      data.contactMethod
    }

${isRTL ? "مطلوب الرد خلال 24 ساعة" : "Response required within 24 hours"}
    `;

    const mailOptions = {
      from: `"Mohamad Kodmani Real Estate" <${mailConfig.senderEmail}>`,
      to: mailConfig.adminEmail,
      subject: subject,
      text: emailText,
      html: emailHtml,
      replyTo: data.email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Admin email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("❌ Admin email failed:", error);
    return { success: false, error: error.message };
  }
}

// Send auto-reply to user
async function sendUserAutoReply(transporter, data, t, isRTL, mailConfig) {
  try {
    const subject = t.userSubject.replace("{project}", data.project);

    const emailHtml = `
<!DOCTYPE html>
<html lang="${data.locale}" dir="${isRTL ? "rtl" : "ltr"}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${subject}</title>
</head>
<body style="font-family: ${
      isRTL ? "Arial, Tahoma, sans-serif" : "Arial, sans-serif"
    }; max-width: 600px; margin: 0 auto; background: #f8f9fa; color: #333; line-height: 1.6; text-align: ${
      isRTL ? "right" : "left"
    };">
    <div style="background: #ffffff; border-radius: 12px; overflow: hidden; margin: 20px auto; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="background: #1a1a1a; color: #d4af37; padding: 30px; text-align: center; border-bottom: 4px solid #d4af37;">
            <h1 style="margin: 0; font-size: 24px; font-weight: bold;">${
              t.userTitle
            }</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">Mohamad Kodmani Real Estate</p>
        </div>
        
        <div style="padding: 30px;">
            <div style="margin-bottom: 25px; font-size: 16px; color: #555;">
                <p>${t.greeting} ${data.firstName},</p>
                <p>${
                  isRTL
                    ? "لقد استلمنا استفسارك حول"
                    : "We have received your inquiry for"
                } <strong>${data.project}</strong>.</p>
                
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #d4af37;">
                    <div style="margin-bottom: 8px;"><strong>${
                      isRTL ? "الاسم:" : "Name:"
                    }</strong> ${data.firstName} ${data.lastName}</div>
                    <div style="margin-bottom: 8px;"><strong>${
                      isRTL ? "رقم الهاتف:" : "Phone:"
                    }</strong> ${data.phone}</div>
                    <div style="margin-bottom: 8px;"><strong>${
                      isRTL ? "البريد الإلكتروني:" : "Email:"
                    }</strong> ${data.email}</div>
                    <div style="margin-bottom: 8px;"><strong>${
                      t.projectLabel
                    }:</strong> ${data.project}</div>
                    ${
                      data.unitType
                        ? `<div style="margin-bottom: 8px;"><strong>${t.unitLabel}:</strong> ${data.unitType}</div>`
                        : ""
                    }
                    <div><strong>${t.contactMethodLabel}:</strong> ${
      contactMethodLabels[data.locale || "en"][data.contactMethod] ||
      data.contactMethod
    }</div>
                </div>
            </div>
            
            <div style="background: #fff9e6; border: 1px solid #ffeaa7; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center;">
                <p style="margin: 0; font-size: 15px; font-weight: bold;">${
                  t.contactTime
                }</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
                <p style="margin: 0 0 8px 0;">${t.regards}</p>
                <p style="margin: 0; font-weight: bold; color: #d4af37;">${
                  t.signature
                }</p>
                <p style="margin: 15px 0 0 0; font-size: 14px; color: #666;">${
                  t.footer
                }</p>
            </div>
        </div>
        
        <div style="background: #1a1a1a; color: #d4af37; padding: 20px; text-align: center; font-size: 12px; border-top: 1px solid #333;">
            <p style="margin: 0;">${t.signature}</p>
            <p style="margin: 8px 0 0 0;">${
              isRTL ? "هذه رسالة آلية" : "This is an automated message"
            }</p>
        </div>
    </div>
</body>
</html>
    `;

    const emailText = `
${t.userTitle}

${t.greeting} ${data.firstName},

${isRTL ? "لقد استلمنا استفسارك حول" : "We have received your inquiry for"} ${
      data.project
    }.

${isRTL ? "اسمك:" : "Name:"} ${data.firstName} ${data.lastName}
${isRTL ? "رقم الهاتف:" : "Phone:"} ${data.phone}
${isRTL ? "البريد الإلكتروني:" : "Email:"} ${data.email}
${t.projectLabel}: ${data.project}
${data.unitType ? `${t.unitLabel}: ${data.unitType}\n` : ""}${
      t.contactMethodLabel
    }: ${
      contactMethodLabels[data.locale || "en"][data.contactMethod] ||
      data.contactMethod
    }

${t.contactTime}

${t.regards}
${t.signature}

${t.footer}
    `;

    const mailOptions = {
      from: `"Mohamad Kodmani Real Estate" <${mailConfig.senderEmail}>`,
      to: data.email,
      subject: subject,
      text: emailText,
      html: emailHtml,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ User auto-reply sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("❌ User auto-reply failed:", error);
    return { success: false, error: error.message };
  }
}

// Send to respond.io
async function sendToRespondIO(data) {
  const token = process.env.RESPONDIO_TOKEN;
  if (!token) {
    console.log("❌ Respond.io token missing");
    return { success: false, error: "Token missing" };
  }

  try {
    // Format phone number
    const phone = data.phone.replace(/\D/g, "");
    let formattedPhone;

    if (phone.startsWith("971")) {
      formattedPhone = phone;
    } else if (phone.startsWith("0")) {
      formattedPhone = `971${phone.substring(1)}`;
    } else if (phone.startsWith("+971")) {
      formattedPhone = phone.substring(1);
    } else {
      formattedPhone = `971${phone}`;
    }

    // Create identifier
    const identifier = `email:${data.email.trim().toLowerCase()}`;

    // Custom fields
    const customFields = [
      { name: "project", value: data.project },
      { name: "form_type", value: "PROJECT_FORM" },
      { name: "lead_source", value: "website" },
      { name: "locale_language", value: data.locale || "en" },
    ];

    if (data.unitType) {
      customFields.push({ name: "unit_type", value: data.unitType });
    }

    if (data.contactMethod) {
      customFields.push({ name: "contact_method", value: data.contactMethod });
    }

    // Contact data
    const contactData = {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: `+${formattedPhone}`,
      email: data.email.trim().toLowerCase(),
      language: data.locale === "ar" ? "ar" : "en",
      countryCode: "AE",
      custom_fields: customFields,
    };

    // Send to respond.io
    const contactUrl = `https://api.respond.io/v2/contact/${encodeURIComponent(
      identifier
    )}`;

    const contactResponse = await fetch(contactUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token.trim()}`,
      },
      body: JSON.stringify(contactData),
    });

    const contactText = await contactResponse.text();

    if (contactResponse.ok || contactResponse.status === 403) {
      console.log("✅ Respond.io contact created/updated");

      // Apply tag
      const tagUrl = `${contactUrl}/tag`;
      const tagResponse = await fetch(tagUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token.trim()}`,
        },
        body: JSON.stringify(["website-lead"]),
      });

      const tagText = await tagResponse.text();
      console.log("🏷️ Respond.io tag applied:", tagResponse.status);

      return { success: true };
    } else {
      console.log("❌ Respond.io failed:", contactResponse.status, contactText);
      return { success: false, error: contactText };
    }
  } catch (error) {
    console.error("❌ Respond.io error:", error);
    return { success: false, error: error.message };
  }
}

export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
