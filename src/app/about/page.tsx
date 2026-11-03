import { site } from "@/content/site";

const paragraphs = [
  "I like taking something messy and making it make sense. At work, that usually means a huge process that a whole team has been holding together by hand.",
  "Most of my projects so far have been in CPG and retail, and they usually start with Excel files and a lot of emails. It all works, but it takes a lot of effort, so I spend a lot of time understanding how the work actually happens before I design anything.",
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
              target="_blank"
              rel="noreferrer"
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
