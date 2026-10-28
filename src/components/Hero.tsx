import { site } from "@/content/site";

/**
 * Compact hero, so the first case study shows above the fold.
 *
 * Statement first at full weight, then a row of facts. Experience is the
 * one fact set large in clay, so it's the second thing the eye lands on.
 * The work sits right below, so the hero carries no buttons.
 *
 * Entrance is delayed past the intro curtain's dissolve so the text arrives
 * on a cleared screen rather than animating behind falling pixels.
 */
export function Hero() {
  const facts = [
    { label: "Currently", value: site.currently },
    { label: "Previously", value: site.previously },
    { label: "Education", value: site.education },
    { label: "Domains", value: site.domains.join(", ") },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 pt-6 pb-4 sm:px-8 sm:pt-8">
      <h1
        className="display rise-in max-w-[24ch] text-balance text-[2.1rem] sm:text-[3rem] lg:text-[3.6rem]"
        style={{ animationDelay: "1480ms" }}
      >
        {site.headline}
      </h1>

      <dl
        className="rise-in mt-9 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-rule pt-6 sm:grid-cols-3 lg:grid-cols-[auto_repeat(4,minmax(0,1fr))] lg:gap-x-10"
        style={{ animationDelay: "1660ms" }}
      >
        <div className="col-span-2 sm:col-span-1">
          <dt className="label text-ink-3">Experience</dt>
          <dd className="display mt-1.5 text-[2rem] leading-none text-clay sm:text-[2.3rem]">
            {site.experience}
          </dd>
        </div>
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="label text-ink-3">{fact.label}</dt>
            <dd className="mt-2 text-[0.95rem] leading-snug text-ink">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
