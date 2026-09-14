"use client";

import { useEffect } from "react";

/**
 * Page-level interactions, applied by attribute so the markup stays plain:
 *   [data-reveal]     — fades/slides in the first time it scrolls into view
 *   [data-spotlight]  — tracks the cursor for the soft glow inside a card
 *   #local-time       — live clock, updated every 10s
 */
export default function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── Scroll reveal ──────────────────────────────────────────────────
    const revealables = Array.from(document.querySelectorAll("[data-reveal]"));
    let observer: IntersectionObserver | undefined;

    if (reduce) {
      revealables.forEach((el) => el.classList.add("reveal-in"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-in");
              observer?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
      );
      revealables.forEach((el) => observer?.observe(el));
    }

    // ── Cursor spotlight ───────────────────────────────────────────────
    const onMove = (event: Event) => {
      const e = event as MouseEvent;
      const el = e.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    const spots = Array.from(
      document.querySelectorAll<HTMLElement>("[data-spotlight]")
    );
    spots.forEach((el) => el.addEventListener("mousemove", onMove));

    // ── Live clock ─────────────────────────────────────────────────────
    const clock = document.getElementById("local-time");
    const tick = () => {
      if (!clock) return;
      const time = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "2-digit",
      }).format(new Date());
      clock.textContent = `${time} in Lynchburg, VA`;
    };
    tick();
    const timer = window.setInterval(tick, 10_000);

    return () => {
      observer?.disconnect();
      spots.forEach((el) => el.removeEventListener("mousemove", onMove));
      window.clearInterval(timer);
    };
  }, []);

  return null;
}
