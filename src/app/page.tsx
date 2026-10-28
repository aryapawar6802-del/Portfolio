import { Hero } from "@/components/Hero";
import { SkillPot } from "@/components/SkillPot";
import { WorkCard } from "@/components/WorkCard";
import { caseStudies } from "@/content/case-studies";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Work */}
      <section
        id="work"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 pt-14 pb-24 sm:px-8 sm:pb-32"
      >
        <header className="mb-10">
          <h2 className="display text-[2rem] sm:text-[2.6rem]">
            Work
          </h2>
        </header>

        <div className="space-y-24 sm:space-y-28">
          {caseStudies.map((study, i) => (
            <WorkCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </section>

      {/* Closing invitation — written for hiring teams. A grey band, so it
          reads as the footer rather than as more of the work above. */}
      <footer className="mt-8 border-t border-rule bg-paper-deep">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div>
            <h2 className="display text-balance text-[2rem] sm:text-[2.6rem]">
              Hiring? This designer is open to work.
            </h2>
            <p className="mt-5 max-w-[46ch] text-[1.05rem] leading-[1.7] text-ink-2">
              On the lookout for a full-time product design role, ideally
              somewhere the data is messy and the users are busy. Send over a
              job description and see what comes out of the pot.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={`mailto:${site.email}`}
                className="text-[1.05rem] font-medium text-ink underline underline-offset-4"
              >
                {site.email} ↗
              </a>
              <a
                href={site.resumeHref}
                className="text-[1.05rem] text-ink-2 underline decoration-rule-strong underline-offset-4 hover:text-ink hover:decoration-ink"
              >
                Résumé
              </a>
            </div>

            <ul className="mt-12 flex flex-wrap gap-x-2 gap-y-2">
              {site.domains.map((domain) => (
                <li
                  key={domain}
                  className="rounded-chip bg-paper px-3 py-1 text-[0.8rem] text-ink-2"
                >
                  {domain}
                </li>
              ))}
            </ul>
          </div>

          <SkillPot className="mx-auto w-full max-w-[22rem]" />
        </div>
      </footer>
    </>
  );
}
