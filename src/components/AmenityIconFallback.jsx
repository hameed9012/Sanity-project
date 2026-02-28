// src/components/AmenityIconFallback.jsx
"use client";

import { useEffect, useState } from "react";
import { findBestIconForAmenity } from "@/lib/amenities/phosphorIconResolver";

export default function AmenityIconFallback({
  label,
  size = 33,
  stroke = 1.2,
  className = "text-[#B08D57]",
}) {
  const [IconComponent, setIconComponent] = useState(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const icon = findBestIconForAmenity(label);
        if (icon) {
          setIconComponent(() => icon);
        } else {
          // Final fallback
          const { Building } = await import("@phosphor-icons/react");
          setIconComponent(() => Building);
        }
      } catch (error) {
        console.warn(`Could not load icon for: ${label}`, error);
        const { Star } = await import("@phosphor-icons/react");
        setIconComponent(() => Star);
      }
    };

    loadIcon();
  }, [label]);

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
