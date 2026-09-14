"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#top"
          className="font-serif text-[17px] text-text transition-colors hover:text-accent"
        >
          {site.name}
        </a>

        <nav className="flex items-center gap-5 sm:gap-6">
          <div className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-link
                data-active={active === item.href}
                className={`text-[14px] transition-colors ${
                  active === item.href
                    ? "text-text"
                    : "text-muted hover:text-text"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-4 py-1.5 text-[14px] font-medium text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_-6px_rgba(224,138,92,0.6)]"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
