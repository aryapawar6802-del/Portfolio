import { site } from "@/content/site";

/**
 * Compact hero, so the first case study shows above the fold.
 *
 * Statement first at full weight, then a row of facts. Every fact shares
 * one type size so the row sits on a single baseline; experience is
 * picked out by weight alone. The work sits right below, so the hero
 * carries no buttons.
 *
 * Entrance is delayed past the intro curtain's dissolve so the text arrives
 * on a cleared screen rather than animating behind falling pixels.
 */
export function Hero() {
  const facts = [
    { label: "Experience", value: site.experience, strong: true },
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

      {/* Education gets the wider track so it holds one line on desktop. */}
      <dl
        className="rise-in mt-9 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-rule pt-6 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_1.5fr_1fr]"
        style={{ animationDelay: "1660ms" }}
      >
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="label text-ink-3">{fact.label}</dt>
            <dd
              className={`mt-2 text-[0.95rem] leading-snug ${
                fact.strong ? "font-semibold text-ink" : "text-ink-2"
              }`}
            >
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
