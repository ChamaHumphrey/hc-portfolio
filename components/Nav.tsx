"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";
import CvButton from "./CvButton";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const href = (n: string) => (n === "Home" ? "#home" : `#${n.toLowerCase()}`);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-display text-lg font-bold tracking-tight">HC<span className="text-cyan">.</span></a>
        <ul className="hidden items-center gap-7 text-sm text-muted lg:flex">
          {nav.map((n) => <li key={n}><a href={href(n)} className="hover:text-ink">{n}</a></li>)}
        </ul>
        <div className="flex items-center gap-3">
          <CvButton className="btn btn-primary hidden !py-2 sm:inline-flex" />
          <button className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-bg px-5 py-4 lg:hidden">
          {nav.map((n) => <li key={n}><a href={href(n)} onClick={() => setOpen(false)} className="block py-3 text-muted hover:text-ink">{n}</a></li>)}
          <li className="pt-3 sm:hidden"><CvButton className="btn btn-primary" /></li>
        </ul>
      )}
    </header>
  );
}
