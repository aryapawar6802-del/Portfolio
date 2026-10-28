import { site } from "@/content/site";

/**
 * Compact hero, so the first case study shows above the fold.
 *
 * Three tiers, each a clear step down: the statement, then one running
 * line of facts set at reading size with the facts themselves in full
 * ink, then the work below. Writing the facts as a sentence keeps them out
 * of a ruled grid, and the emphasis does the job the labels used to.
 * The work sits right below, so the hero carries no buttons.
 *
 * Entrance is delayed past the intro curtain's dissolve so the text arrives
 * on a cleared screen rather than animating behind falling pixels.
 */
/** A fact inside the bio line, lifted to full ink. */
function Fact({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-ink">{children}</span>;
}

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-6 pb-4 sm:px-8 sm:pt-8">
      <h1
        className="display rise-in max-w-[24ch] text-balance text-[2.1rem] sm:text-[3rem] lg:text-[3.6rem]"
        style={{ animationDelay: "1480ms" }}
      >
        {site.headline}
      </h1>

      <p
        className="rise-in mt-6 max-w-[52ch] text-pretty text-[1.1rem] leading-[1.6] text-ink-3 sm:text-[1.3rem]"
        style={{ animationDelay: "1660ms" }}
      >
        <Fact>{site.experience}</Fact> working across{" "}
        <Fact>{site.domains.join(", ")}</Fact>. Currently at{" "}
        <Fact>{site.currently}</Fact>, previously at{" "}
        <Fact>{site.previously}</Fact>. {site.education.degree} from{" "}
        <Fact>{site.education.school}</Fact>.
      </p>
    </section>
  );
}
