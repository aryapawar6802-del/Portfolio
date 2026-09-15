import { Hero } from "@/components/Hero";
import { WorkCard } from "@/components/WorkCard";
import { PantryScene } from "@/components/PantryScene";
import { caseStudies } from "@/content/case-studies";
import { site } from "@/content/site";

export default function Home() {
  /* Generated from the studies so the ticker can never drift out of sync. */
  const ticker = caseStudies
    .filter((study) => study.deltas.length > 0)
    .map((study) => ({ ...study.deltas[0], slug: study.slug }));

  return (
    <>
      <Hero />

      {/* Evidence ticker */}
      <section
        aria-label="Headline outcomes"
        className="mx-auto max-w-6xl px-6 sm:px-8"
      >
        <div className="rounded-panel bg-paper-deep px-6 py-7">
        <ul className="flex flex-wrap items-baseline justify-center gap-x-12 gap-y-4 text-[0.9rem] tabular-nums">
          {ticker.map((item) => (
            <li key={item.slug} className="flex items-baseline gap-2">
              {item.from && (
                <>
                  <span className="sr-only">from </span>
                  <span className="text-ink-3">{item.from}</span>
                  <span className="text-ink-3" aria-hidden="true">
                    →
                  </span>
                  <span className="sr-only"> to </span>
                </>
              )}
              <span className="text-accent">{item.to}</span>
              <span className="text-[0.82rem] text-ink-3">{item.label}</span>
            </li>
          ))}
          </ul>
        </div>
      </section>

      {/* Work */}
      <section
        id="work"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 pt-16 pb-24 sm:px-8 sm:pb-32"
      >
        <header className="mb-16">
          <h2 className="display text-[2.6rem] sm:text-[3.6rem]">
            Selected work
          </h2>
        </header>

        <div className="space-y-24 sm:space-y-28">
          {caseStudies.map((study, i) => (
            <WorkCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </section>

      {/* The one food beat: what goes in, and the invitation, in a single image */}
      <section className="bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
          <h2 className="display max-w-[16ch] text-[2.6rem] sm:text-[4rem]">
            Let&rsquo;s build something together.
          </h2>

          <div className="my-14">
            <PantryScene />
          </div>

          <p className="label text-ink-3">Reach out</p>
          <p className="mt-2">
            <a
              href={`mailto:${site.email}`}
              className="text-[1.05rem] text-accent underline underline-offset-4"
            >
              {site.email} ↗
            </a>
          </p>

          <ul className="mt-14 flex flex-wrap gap-x-2 gap-y-2">
            {site.clients.map((client) => (
              <li
                key={client}
                className="rounded-chip bg-paper-deep px-3 py-1 text-[0.8rem] text-ink-2"
              >
                {client}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
