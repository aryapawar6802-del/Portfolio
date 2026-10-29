import { site } from "@/content/site";

/**
 * Compact, centred hero, so the first case study still shows above the fold.
 *
 * Three tiers, each a clear step down: the statement, one line on
 * experience and domains, then three facts side by side (currently,
 * previously, education), each a small label over its value. The work sits
 * right below, so the hero carries no buttons.
 *
 * Entrance is delayed past the intro curtain's dissolve so the text arrives
 * on a cleared screen rather than animating behind falling pixels.
 */
/** A fact inside the experience line, lifted to full ink. */
function Fact({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-ink">{children}</span>;
}

export function Hero() {
  const facts = [
    { label: "Currently", value: site.currently },
    { label: "Previously", value: site.previously },
    { label: "Education", value: `${site.education.degree}, ${site.education.school}` },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 pt-12 pb-16 text-center sm:px-8 sm:pt-16 sm:pb-24">
      <h1
        className="display rise-in mx-auto max-w-[24ch] text-balance text-[2.1rem] sm:text-[3rem] lg:text-[3.6rem]"
        style={{ animationDelay: "1480ms" }}
      >
        {site.headline}
      </h1>

      <p
        className="rise-in mt-6 text-pretty text-[1.1rem] leading-[1.6] text-ink-3 sm:text-[1.3rem]"
        style={{ animationDelay: "1660ms" }}
      >
        <Fact>{site.experience}</Fact> working across{" "}
        <Fact>{site.domains.join(", ")}</Fact>.
      </p>

      <ul
        className="rise-in mt-8 flex flex-wrap justify-center gap-x-12 gap-y-5"
        style={{ animationDelay: "1740ms" }}
      >
        {facts.map((fact) => (
          <li key={fact.label}>
            <p className="label text-ink-3">{fact.label}</p>
            <p className="mt-1 text-[1rem] font-medium text-ink">{fact.value}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
