"use client";

import { useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/nav-links";
import { SparkleIcon } from "@/components/icons";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-[#241c14] bg-[#fff6e6]">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#hero" className="group flex items-center gap-3">
          <span className="relative h-11 w-11 shrink-0 -rotate-3 overflow-hidden rounded-full border-[3px] border-[#241c14] shadow-[3px_3px_0_0_#241c14] transition-transform group-hover:rotate-3">
            <Image src="/image/performer-04.jpg" alt="李榮晉" fill sizes="44px" className="object-cover" />
          </span>
          <span className="font-display leading-none text-[#241c14]">
            <span className="block text-lg tracking-wide">李榮晉</span>
            <span className="font-hand mt-0.5 block text-[10px] tracking-[0.2em] text-[#ff4d6d]">
              ★ DIABOLO PERFORMER ★
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-2 lg:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-display rounded-full border-[3px] border-transparent px-4 py-2 text-sm text-[#241c14] transition-all hover:-translate-y-0.5 hover:border-[#241c14] hover:bg-[#ffd23f] hover:shadow-[3px_3px_0_0_#241c14] ${
                i % 2 === 0 ? "hover:-rotate-2" : "hover:rotate-2"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-display ml-2 flex items-center gap-1.5 rounded-full border-[3px] border-[#241c14] bg-[#2ec4ff] px-5 py-2 text-sm text-[#241c14] shadow-[3px_3px_0_0_#241c14] transition-transform hover:-translate-y-0.5 hover:rotate-1"
          >
            <SparkleIcon className="h-4 w-4" />
            邀約
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "關閉選單" : "開啟選單"}
          className="flex h-11 w-11 items-center justify-center rounded-xl border-[3px] border-[#241c14] bg-[#fff6e6] text-[#241c14] shadow-[3px_3px_0_0_#241c14] lg:hidden"
        >
          <span className="sr-only">選單</span>
          <div className="flex h-3.5 w-5 flex-col justify-between">
            <span className={`h-[3px] w-full rounded-full bg-current transition-transform ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`h-[3px] w-full rounded-full bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-[3px] w-full rounded-full bg-current transition-transform ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <nav className="halftone border-t-[3px] border-[#241c14] bg-[#fff6e6] lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display rounded-xl border-[3px] border-[#241c14] bg-[#fff6e6] px-4 py-3 text-sm text-[#241c14] shadow-[3px_3px_0_0_#241c14]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="font-display flex items-center justify-center gap-1.5 rounded-xl border-[3px] border-[#241c14] bg-[#2ec4ff] px-4 py-3 text-sm text-[#241c14] shadow-[3px_3px_0_0_#241c14]"
            >
              <SparkleIcon className="h-4 w-4" />
              邀約
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
