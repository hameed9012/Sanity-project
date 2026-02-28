// src/components/developer/DeveloperSidebar.jsx
"use client";

import React from "react";

export default function DeveloperSidebar({ developers, activeSlug, onSelect }) {
  if (!developers || developers.length === 0) return null;

  return (
    <div className="sidebar -dashboard">
      {developers.map((dev) => (
        <div
          key={dev.slug}
          className={`sidebar__item ${
            activeSlug === dev.slug ? "-is-active" : ""
          }`}
        >
          <button
            type="button"
            onClick={() => onSelect(dev.slug)}
            className="d-flex items-center text-17 lh-1 fw-500 w-1/1 text-left"
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            {dev.logo && (
              <span
                className="mr-15 inline-flex items-center justify-center rounded-8 bg-white"
                style={{
                  width: 32,
                  height: 32,
                  overflow: "hidden",
                }}
              >
                <img
                  src={dev.logo}
                  alt={dev.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </span>
            )}
            <span>{dev.name}</span>
          </button>
        </div>
      ))}
    </div>
  );
}
