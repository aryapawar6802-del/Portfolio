import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Playground } from "@/components/Playground";
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

      <Playground />

      {/* About, in short: a photo, the one idea that runs through the work,
          and a way into how working together goes. */}
      <section
        id="about"
        aria-labelledby="about-title"
        className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-24 sm:px-8 sm:pb-32 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-16"
      >
        <div className="mx-auto w-full max-w-[18rem] -rotate-[1.5deg] rounded-panel bg-paper-deep p-3">
          <div className="grid aspect-4/5 place-items-center rounded-control border border-dashed border-rule-strong p-5 text-center text-[0.85rem] text-ink-3">
            [A real photo of you: at your desk, on a trek, or mid-painting]
          </div>
        </div>
        <div>
          <h2 id="about-title" className="display max-w-[22ch] text-balance text-[2rem] sm:text-[2.6rem]">
            I like taking something messy and making it make sense.
          </h2>
          <p className="mt-6 max-w-prose leading-[1.75] text-ink-2">
            At work, that usually means a huge process a whole team has been
            holding together by hand, with Excel files and a lot of emails. I
            spend a lot of time understanding how the work actually happens
            before I design anything.
          </p>
          <p className="mt-4 max-w-prose italic leading-[1.75] text-ink-3">
            [Two lines about you off the clock, in your own words.]
          </p>
          <Link
            href="/working-with-me"
            className="group mt-7 inline-flex items-center gap-2 text-[0.95rem] font-medium text-clay"
          >
            <span className="underline decoration-clay/40 underline-offset-4 group-hover:decoration-clay">
              How I work with PMs, engineers and data scientists
            </span>
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* Closing invitation — written for hiring teams. A grey band, so it
          reads as the footer rather than as more of the work above. */}
      <footer className="mt-8 border-t border-rule bg-paper-deep">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div>
            <h2 className="font-hand text-[2.8rem] font-semibold leading-none sm:text-[3.4rem]">
              What’s cooking?
            </h2>
            <p className="mt-5 max-w-[46ch] text-[1.05rem] leading-[1.7] text-ink-2">
              Open to product design roles on B2B, data and AI tools, from Dec 8.
              Send over a brief and see what comes out of the pot.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={`mailto:${site.email}`}
                className="text-[1.05rem] font-medium text-ink underline underline-offset-4"
              >
                {site.email} ↗
              </a>
              <a
                href={site.phone.href}
                className="text-[1.05rem] font-medium text-ink underline underline-offset-4 tabular-nums"
              >
                {site.phone.display}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-[1.05rem] text-ink-2 underline decoration-rule-strong underline-offset-4 hover:text-ink hover:decoration-ink"
              >
                LinkedIn
              </a>
              <a
                href={site.resumeHref}
                target="_blank"
                rel="noreferrer"
                className="text-[1.05rem] text-ink-2 underline decoration-rule-strong underline-offset-4 hover:text-ink hover:decoration-ink"
              >
                Résumé
              </a>
            </div>

          </div>

          <SkillPot className="mx-auto w-full max-w-[22rem]" />
        </div>
      </footer>
    </>
  );
}
