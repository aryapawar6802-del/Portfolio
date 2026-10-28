import { Hero } from "@/components/Hero";
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
          <h2 className="display text-[2.6rem] sm:text-[3.6rem]">
            Work
          </h2>
        </header>

        <div className="space-y-24 sm:space-y-28">
          {caseStudies.map((study, i) => (
            <WorkCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </section>

      {/* Closing invitation */}
      <section className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
          <h2 className="display max-w-[16ch] text-[2.6rem] sm:text-[4rem]">
            What are you working on?
          </h2>

          <p className="label mt-12 text-ink-3">Reach out</p>
          <p className="mt-2">
            <a
              href={`mailto:${site.email}`}
              className="text-[1.05rem] text-accent underline underline-offset-4"
            >
              {site.email} ↗
            </a>
          </p>

          <ul className="mt-14 flex flex-wrap gap-x-2 gap-y-2">
            {site.domains.map((domain) => (
              <li
                key={domain}
                className="rounded-chip bg-paper-deep px-3 py-1 text-[0.8rem] text-ink-2"
              >
                {domain}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
