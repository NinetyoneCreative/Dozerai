"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { NavChild } from "@/lib/site";

/**
 * Accessible desktop nav dropdown (opens on hover or click). Closes on route
 * change, outside click, and Escape. Used for "Product" and "Industries".
 */
export function NavDropdown({
  label,
  active,
  items,
}: {
  label: string;
  active: boolean;
  items: NavChild[];
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`flex items-center gap-1 text-sm transition-colors hover:text-darker-grey ${
          active ? "font-medium text-darker-grey" : "text-dark-grey"
        }`}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full pt-2">
          <ul className="w-60 overflow-hidden rounded-md border border-medium-grey/30 bg-white py-1 shadow-lg">
            {items.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2 text-sm hover:bg-dozer-white ${
                    i === 0 ? "font-medium text-darker-grey" : "text-dark-grey hover:text-darker-grey"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}
