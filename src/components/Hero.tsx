import { site } from "@/content/site";
import { MessChart } from "./MessChart";

/**
 * Two-column hero: the first fold on the left, the "mess sorts itself"
 * chart on the right. On phones the chart drops below the text.
 *
 * Three tiers on the left, each a clear step down: the statement, one line
 * on experience and domains, then three facts side by side, each a small
 * label over its value. Under them, a dashed note on what's going on right
 * now, kept in site.ts so it's one line to update.
 *
 * Entrance is delayed until the intro curtain is fading out, so the text
 * rises as the black screen clears rather than animating behind it.
 */
/** A fact inside the experience line, lifted to full ink. */
function Fact({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-ink">{children}</span>;
}

export function Hero() {
  const facts = [
    { label: "Now", value: site.currently },
    { label: "Before", value: site.previously },
    { label: "Studied", value: `${site.education.degree}, ${site.education.school}` },
  ];

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-14 pb-6 sm:px-8 sm:pt-24 sm:pb-16 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
      <div>
        <h1
          className="display rise-in text-balance text-[2.3rem] sm:text-[3rem] lg:text-[3.4rem]"
          style={{ animationDelay: "1480ms" }}
        >
          {site.headline}
        </h1>

        <p
          className="rise-in mt-6 text-pretty text-[1.1rem] leading-[1.6] text-ink-3 sm:text-[1.25rem]"
          style={{ animationDelay: "1660ms" }}
        >
          <Fact>{site.experience}</Fact> working across{" "}
          <Fact>{site.domains.join(" and ")}</Fact>.
        </p>

        <ul
          className="rise-in mt-8 flex flex-wrap gap-x-10 gap-y-5"
          style={{ animationDelay: "1740ms" }}
        >
          {facts.map((fact) => (
            <li key={fact.label}>
              <p className="label text-ink-3">{fact.label}</p>
              <p className="mt-1 text-[1rem] font-medium text-ink">{fact.value}</p>
            </li>
          ))}
        </ul>

        <p
          className="rise-in mt-9 max-w-[30rem] rounded-control border border-dashed border-rule-strong px-4 py-3 text-[0.95rem] leading-[1.55] text-ink-2"
          style={{ animationDelay: "1820ms" }}
        >
          <span className="label block text-ink-3">Currently</span>
          {site.now}
        </p>
      </div>

      <div className="rise-in" style={{ animationDelay: "1900ms" }}>
        <MessChart />
      </div>
    </section>
  );
}
