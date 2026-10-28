import Link from "next/link";
import Image from "next/image";
import { ACCENTS } from "@/content/palette";
import type { CaseStudy, Delta as DeltaType } from "@/content/types";

/**
 * Editorial work entry. No card, no border, no shadow — the image and the
 * headline do the work. Each study carries the colour of its ingredient on
 * the chopping board, which is what stops the illustration further down the
 * page reading as unrelated decoration.
 *
 * The whole entry is one link, so there's a single place to click. Hover
 * lifts the image, underlines the title and pushes the "Read case study"
 * cue, so it's clear the entry as a whole is what opens.
 */
export function WorkCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const accent = ACCENTS[study.accent];
  /* Alternate which side the image sits on so a stack of studies has rhythm. */
  const flip = index % 2 === 1;

  return (
    <article>
      <Link
        href={`/work/${study.slug}`}
        className={`group flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${
          flip ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full shrink-0 lg:w-[48%]">
          <div className="overflow-hidden rounded-panel">
            <div
              className="relative aspect-4/3 transition-transform duration-500 ease-out group-hover:scale-[1.015]"
              style={{ backgroundColor: accent.wash }}
            >
              {study.cover ? (
                <Image
                  src={study.cover}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <div
                  className="absolute inset-0 grid place-items-center"
                  style={{
                    backgroundImage: `repeating-linear-gradient(-45deg, transparent 0 11px, ${accent.solid}1f 11px 12px)`,
                  }}
                >
                  <span
                    className="label rounded-chip px-3 py-1.5"
                    style={{ color: accent.ink, backgroundColor: "#FDF8EE" }}
                  >
                    {study.platform}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          {/* Just marks it as client work; the company stays unnamed. */}
          <p className="label text-ink-3">Client</p>

          <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-2">
            {study.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-chip px-2.5 py-1 text-[0.78rem]"
                style={{ backgroundColor: accent.wash, color: accent.ink }}
              >
                {tag}
              </li>
            ))}
          </ul>

          <h3 className="display mt-4 max-w-[22ch] text-[1.6rem] decoration-1 underline-offset-[0.18em] group-hover:underline sm:text-[1.9rem]">
            {study.question}
          </h3>

          <p className="mt-6 max-w-prose leading-[1.75] text-ink-2">
            {study.summary}
          </p>

          {study.deltas.length > 0 && (
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
              {study.deltas.slice(0, 2).map((delta) => (
                <Impact key={delta.label} delta={delta} tint={accent.ink} rule={accent.solid} />
              ))}
            </dl>
          )}

          <p className="mt-9 inline-flex items-center gap-2 text-[0.95rem] font-medium text-clay">
            <span className="underline decoration-clay/40 underline-offset-4 group-hover:decoration-clay">
              Read case study
            </span>
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1.5"
            >
              →
            </span>
          </p>
        </div>
      </Link>
    </article>
  );
}

/**
 * Result-first impact figure: the number it landed on, large, with the old
 * value struck through underneath. Reads as "now this, it used to be that"
 * rather than the usual before → after arrow.
 */
function Impact({
  delta,
  tint,
  rule,
}: {
  delta: DeltaType;
  tint: string;
  rule: string;
}) {
  return (
    <div className="border-l-2 pl-4" style={{ borderColor: rule }}>
      <dt className="label text-ink-3">{delta.label}</dt>
      <dd className="mt-1">
        <span className="display block text-[2rem] leading-none tabular-nums" style={{ color: tint }}>
          {delta.to}
        </span>
        {delta.from && (
          <span className="mt-1.5 block text-[0.85rem] text-ink-3">
            Was <s className="tabular-nums">{delta.from}</s>
          </span>
        )}
      </dd>
    </div>
  );
}
