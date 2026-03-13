// src/components/AmenityIconFallback.jsx
"use client";

import { useEffect, useState } from "react";
import { findBestIconForAmenity } from "@/lib/amenities/phosphorIconResolver";

export default function AmenityIconFallback({
  label,
  iconKey,
  size = 33,
  stroke = 1.2,
  className = "text-[#B08D57]",
}) {
  const [IconComponent, setIconComponent] = useState(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        // Use iconKey as primary lookup hint (if it's a plain string, not an emoji)
        const searchLabel = (iconKey && !/\p{Emoji}/u.test(iconKey))
          ? `${iconKey} ${label || ""}`.trim()
          : (label || "");
        const icon = findBestIconForAmenity(searchLabel);
        if (icon) {
          setIconComponent(() => icon);
        } else {
          const { Buildings } = await import("@phosphor-icons/react");
          setIconComponent(() => Buildings);
        }
      } catch (error) {
        console.warn(`Could not load icon for: ${label}`, error);
        const { Buildings } = await import("@phosphor-icons/react");
        setIconComponent(() => Buildings);
      }
    };

    loadIcon();
  }, [label, iconKey]);

  if (!IconComponent) {
    return (
      <div
        className={className}
        style={{ width: size, height: size }}
        aria-hidden="true"
      />
    );
  }

  return <IconComponent size={size} weight="thin" className={className} />;
}