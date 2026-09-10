"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

export default function Parallax({
  children,
  speed = 0.15,
  className,
  style,
}: {
  children?: ReactNode;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let active = false;

    const tick = () => {
      const rect = el.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const delta = (window.innerHeight / 2 - elementCenter) * speed;
      el.style.transform = `translate3d(0, ${delta}px, 0)`;
      if (active) raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active && !raf) {
          raf = requestAnimationFrame(tick);
        } else if (!active && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { rootMargin: "25% 0px 25% 0px" }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform", ...style }}>
      {children}
    </div>
  );
}
