import { site } from "@/content/site";

/**
 * Full-viewport centred hero.
 *
 * Hierarchy follows the reference: statement first at full weight, then the
 * subtitle, then where I work, then the two ways in. Each step drops a clear
 * tier in size and tone so the eye lands in that order — the palette is
 * monochrome, so scale, weight, and grey step carry it with no colour help.
 *
 * Entrance is delayed past the intro curtain's dissolve so the text arrives
 * on a cleared screen rather than animating behind falling pixels.
 */
export function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100svh-18rem)] max-w-6xl flex-col justify-center px-6 pt-4 pb-10 sm:px-8">
      <h1
        className="display rise-in max-w-[15ch] text-[2.8rem] sm:text-[4.4rem] lg:text-[5.6rem]"
        style={{ animationDelay: "1480ms" }}
      >
        {site.headline}
      </h1>

      <p
        className="rise-in mt-10 max-w-xl text-[1.1rem] leading-[1.6] text-ink-2"
        style={{ animationDelay: "1580ms" }}
      >
        {site.subtitle}
      </p>

      <p
        className="rise-in mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.95rem] text-ink-3"
        style={{ animationDelay: "1660ms" }}
      >
        <span>
          currently{" "}
          <a
            href={site.currently.href}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-ink underline decoration-rule-strong underline-offset-4 hover:decoration-ink"
          >
            {site.currently.label}
          </a>
        </span>
      </p>

      <div
        className="rise-in mt-12 flex flex-wrap items-center gap-3"
        style={{ animationDelay: "1740ms" }}
      >
        {/* The only pill on the site: one earned emphasis against a scale of
            chip/control/panel radii. unslop-ignore */}
        <a
          href="#work"
          className="rounded-full bg-clay px-7 py-3.5 text-[0.95rem] font-medium text-white transition-opacity hover:opacity-90"
        >
          See selected work
        </a>
        <a
          href={`mailto:${site.email}`}
          className="group flex items-center gap-2 rounded-control bg-paper-deep px-7 py-3.5 text-[0.95rem] font-medium text-ink transition-colors hover:bg-clay-wash"
        >
          Get in touch
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
      </div>
    </section>
  );
}
