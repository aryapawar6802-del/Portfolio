import Link from "next/link";
import Image from "next/image";
import { ACCENTS } from "@/content/palette";
import { StudyIllustration } from "./StudyIllustration";
import { ConvergeGlyph } from "./ConvergeGlyph";
import type { CardThumb, CaseStudy } from "@/content/types";

/** One wobble per card, so no two glyphs tangle the same way. */
const GLYPH_SEEDS = [11, 23, 31];

/**
 * A small before/after frame. A real screen is cropped from its top-left,
 * where the page title sits; a missing one shows as a marked placeholder.
 */
function Thumb({ label, thumb }: { label: string; thumb: CardThumb }) {
  return (
    <figure>
      <div className="relative aspect-4/3 overflow-hidden rounded-control bg-paper-deep">
        {thumb.src ? (
          <Image
            src={thumb.src}
            alt={thumb.alt ?? ""}
            fill
            sizes="(min-width: 1024px) 15rem, 45vw"
            className="object-cover object-left-top"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center rounded-control border border-dashed border-rule-strong p-3 text-center text-[0.78rem] leading-snug text-ink-3">
            {thumb.placeholder}
          </div>
        )}
      </div>
      <figcaption className="label mt-1.5 text-ink-3">{label}</figcaption>
    </figure>
  );
}

/**
 * Editorial work entry. No card, no border, no shadow — the image and the
 * headline do the work. Each study carries the colour of its ingredient on
 * the chopping board, which is what stops the illustration further down the
 * page reading as unrelated decoration.
 *
 * The whole entry is one link, so there's a single place to click. Hover
 * lifts the image and pushes the "Read case study" cue, so it's clear the
 * entry as a whole is what opens.
 */
export function WorkCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const accent = ACCENTS[study.accent];
  const card = study.card;
  /* Alternate which side the image sits on so a stack of studies has rhythm. */
  const flip = index % 2 === 1;

  return (
    <article>
      <Link
        href={`/work/${study.slug}`}
        className={`group flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-16 ${
          flip ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full shrink-0 lg:w-[48%]">
          {/* The panel is 4:3 at least, and grows with the text beside it so
              the copy never runs past the top or bottom of the card. */}
          <div className="h-full overflow-hidden rounded-panel">
            <div
              className="relative aspect-4/3 h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.015]"
              style={{ backgroundColor: accent.wash }}
            >
              {study.illustration ? (
                /* The same still life that sits beside the study's title. */
                <div className="absolute inset-0 grid place-items-center p-8 sm:p-12">
                  <StudyIllustration name={study.illustration} className="h-full w-full" />
                </div>
              ) : study.cover ? (
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

        <div className="min-w-0 flex-1 lg:flex lg:flex-col lg:justify-center lg:py-8">
          {card && (
            <ConvergeGlyph
              from={card.from}
              to={card.to}
              seed={GLYPH_SEEDS[index % GLYPH_SEEDS.length]}
              className="w-full max-w-[260px]"
            />
          )}

          <h3 className="display mt-8 max-w-[22ch] text-[1.6rem] sm:text-[1.9rem]">
            {study.question}
          </h3>

          <p className="mt-3 max-w-prose leading-[1.75] text-ink-2">
            {study.summary}
          </p>

          {card && (
            <>
              <div className="mt-7 grid max-w-[30rem] grid-cols-2 gap-3">
                <Thumb label="Before" thumb={card.before} />
                <Thumb label="After" thumb={card.after} />
              </div>
              <p className="font-hand mt-5 text-[1.35rem] font-semibold leading-[1.2] text-ink">
                {card.notice}
              </p>
            </>
          )}

          <p className="mt-8 inline-flex items-center gap-2 text-[0.95rem] font-medium text-clay">
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
