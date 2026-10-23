import { site } from "@/content/site";

/* PLACEHOLDER copy — replace with your own. */
const paragraphs = [
  "I'm a product designer. So far most of my work has been enterprise workflow and sales tooling, plus the internal screens that end up deciding whether people use a company's software at all.",
  "A lot of my projects start before there's anything to draw. The team usually knows something is wrong but can't agree on what to measure, so the first thing I hand over is often a definition of what to measure. The flow comes after that.",
  "I like working on the screens nobody puts in a demo, like the reconciliation queue, the exception state, or the third step of an eleven-step process. That's where people spend most of their time.",
];

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 sm:px-8">
      <header className="pt-16 pb-10 sm:pt-24">
        <h1 className="display text-[2.6rem] sm:text-[3.8rem]">
          About
        </h1>
      </header>

      <div className="space-y-5 pb-14">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="max-w-prose leading-[1.75] text-ink-2">
            {paragraph}
          </p>
        ))}
      </div>

      <section className="border-t border-rule py-12">
        <h2 className="label text-ink-3">
          Elsewhere
        </h2>
        <ul className="mt-5 space-y-2.5">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="text-accent underline underline-offset-4"
            >
              {site.email}
            </a>
          </li>
          <li>
            <a
              href={site.resumeHref}
              className="text-accent underline underline-offset-4"
            >
              Résumé
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
