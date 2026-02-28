"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CompareContext = createContext(null);

export function CompareProvider({ children }) {
  const [selected, setSelected] = useState([]); // array of slugs, max 2
  const [isOpen, setIsOpen] = useState(false);

  // (Optional) persist selection so user keeps compare while navigating / refreshing
  useEffect(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("compare:selected") || "[]"
      );
      if (Array.isArray(saved)) setSelected(saved.slice(0, 2));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("compare:selected", JSON.stringify(selected));
    } catch {}
  }, [selected]);

  const api = useMemo(() => {
    const has = (slug) => selected.includes(slug);

    const toggle = (slug) => {
      setSelected((prev) => {
        // remove
        if (prev.includes(slug)) return prev.filter((s) => s !== slug);

        // add
        if (prev.length < 2) return [...prev, slug];

        // if already 2, replace the oldest (or you can block and show toast)
        return [prev[1], slug];
      });
    };

    const add = (slug) => {
      setSelected((prev) => {
        if (prev.includes(slug)) return prev;
        if (prev.length < 2) return [...prev, slug];
        return [prev[1], slug];
      });
    };

    const remove = (slug) =>
      setSelected((prev) => prev.filter((s) => s !== slug));

    const clear = () => setSelected([]);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return { selected, isOpen, has, toggle, add, remove, clear, open, close };
  }, [selected, isOpen]);

  return (
    <CompareContext.Provider value={api}>{children}</CompareContext.Provider>
  );
}

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error("useCompare must be used within CompareProvider");
  return ctx;
}
