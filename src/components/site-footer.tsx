import Image from "next/image";
import { NAV_LINKS } from "@/lib/nav-links";
import { SparkleIcon } from "@/components/icons";

export default function SiteFooter() {
  return (
    <footer className="bg-[#241c14] text-[#fff6e6]">
      <div className="halftone-inv h-2.5 w-full" />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <a href="#hero" className="flex items-center gap-3">
            <span className="relative h-10 w-10 shrink-0 rotate-3 overflow-hidden rounded-full border-[3px] border-[#fff6e6]">
              <Image src="/image/performer-04.jpg" alt="李榮晉" fill sizes="40px" className="object-cover" />
            </span>
            <span className="font-display text-lg">
              李榮晉 <span className="font-hand text-sm text-[#ffd23f]">DIABOLO PERFORMER</span>
            </span>
          </a>

          <nav className="flex flex-wrap gap-x-2 gap-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display rounded-full border-2 border-transparent px-3.5 py-1.5 text-xs tracking-wide text-[#fff6e6]/85 transition-colors hover:border-[#ff4d6d] hover:text-[#ff4d6d]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t-2 border-dashed border-[#fff6e6]/20 pt-6 sm:flex-row sm:items-center">
          <p className="font-hand flex items-center gap-1.5 text-xs text-[#fff6e6]/60">
            <SparkleIcon className="h-3.5 w-3.5 text-[#ffd23f]" />
            2026 李榮晉．轉出屬於自己的舞台魔法
          </p>
          <p className="text-[11px] tracking-wide text-[#fff6e6]/40">版權所有．請勿未經授權轉載表演內容與照片</p>
        </div>
      </div>
    </footer>
  );
}
