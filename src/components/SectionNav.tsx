"use client";

import { useEffect, useState } from "react";

export type Section = { id: string; label: string };

/**
 * "On this page" rail for long case studies.
 *
 * Sits as a sticky column on the left from `lg` up so a recruiter can jump
 * straight to Impact or Outcome without reading the build-up; collapses to a
 * horizontal scrolling strip below that.
 *
 * Scroll-spy uses IntersectionObserver against a band near the top of the
 * viewport rather than `isIntersecting`, because tall sections routinely
 * span the whole screen — asking "which section crosses the reading line"
 * gives a stable answer where "which section is visible" flickers between
 * two at once.
 */
export function SectionNav({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => n !== null);
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-15% 0px -75% 0px", threshold: 0 },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [sections]);

  if (sections.length < 2) return null;

  return (
    <nav
      aria-label="On this page"
      className="
        sticky top-[3.9rem] z-30 -mx-6 mb-10 border-y border-rule bg-paper/95 px-6 py-3 backdrop-blur-sm
        sm:-mx-8 sm:px-8
        lg:top-24 lg:z-auto lg:mx-0 lg:mb-0 lg:w-56 lg:shrink-0 lg:self-start lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none
      "
    >
      <p className="label mb-4 hidden text-ink-3 lg:block">On this page</p>

      <ul
        className="
          flex gap-5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          lg:flex-col lg:gap-0 lg:overflow-visible lg:border-l lg:border-rule
        "
      >
        {sections.map((section) => {
          const on = active === section.id;
          return (
            <li key={section.id} className="shrink-0">
              <a
                href={`#${section.id}`}
                aria-current={on ? "true" : undefined}
                className={`
                  label block whitespace-nowrap py-1 transition-colors
                  lg:-ml-px lg:whitespace-normal lg:border-l lg:py-1.5 lg:pl-4
                  ${
                    on
                      ? "text-accent lg:border-accent"
                      : "text-ink-3 hover:text-ink lg:border-transparent lg:hover:border-rule-strong"
                  }
                `}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
