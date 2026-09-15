"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/site";

/**
 * Centred pill nav. Hairline outlines, no shadows — the pills should read
 * as quiet chips, not as buttons pressed out of card stock.
 */
export function TopNav() {
  const pathname = usePathname();
  const onWork = pathname === "/" || pathname.startsWith("/work");

  /* Filled, borderless pills — the illustration is built from flat filled
     shapes with no outlines, and the nav is the first thing that has to
     agree with it. */
  const base =
    "flex items-center gap-1.5 rounded-control px-4 py-2 text-[0.85rem] transition-colors";
  const quiet = "bg-paper-deep text-ink-2 hover:bg-clay-wash hover:text-ink";

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2.5 px-6 py-4 sm:flex-row sm:justify-between sm:gap-3 sm:px-8">
        <Link
          href="/"
          className="rounded-control bg-paper-deep px-4 py-2 text-[0.85rem] text-ink transition-colors hover:bg-clay-wash"
        >
          {site.name.toLowerCase()}
        </Link>

        <nav aria-label="Main">
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {nav.map((item) => {
              const active =
                item.href === "/" ? onWork : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`${base} ${
                      active ? "bg-clay text-white" : quiet
                    }`}
                  >
                    <span aria-hidden="true" className="text-[0.7em] opacity-60">
                      {item.glyph}
                    </span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a href={site.resumeHref} className={`${base} ${quiet}`}>
                <span aria-hidden="true" className="text-[0.7em] opacity-60">
                  ▤
                </span>
                résumé
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={`${base} ${quiet}`}>
                <span aria-hidden="true" className="text-[0.7em] opacity-60">
                  ✉
                </span>
                email
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
