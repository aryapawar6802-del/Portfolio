import { site } from "@/content/site";

/* PLACEHOLDER copy — replace with your own. */
const paragraphs = [
  "I design B2B products: enterprise workflow, sales tooling, and the unglamorous internal screens that decide whether a company's software actually gets used.",
  "Most of my work starts before there is anything to draw. Teams usually know something is wrong and disagree about what to measure, so the first deliverable is often a definition rather than a flow.",
  "I care about the screens nobody demos — the reconciliation queue, the exception state, the third step of an eleven-step process. That is where the time goes.",
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
