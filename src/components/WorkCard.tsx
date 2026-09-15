import Link from "next/link";
import Image from "next/image";
import { Delta } from "./Delta";
import { HandRule } from "./HandRule";
import { ACCENTS } from "@/content/palette";
import type { CaseStudy } from "@/content/types";

/**
 * Editorial work entry. No card, no border, no shadow — the image and the
 * headline do the work. Each study carries the colour of its ingredient on
 * the chopping board, which is what stops the illustration further down the
 * page reading as unrelated decoration.
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
    <article className="group">
      <HandRule className="mb-12" />
      <div
        className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${
          flip ? "lg:flex-row-reverse" : ""
        }`}
      >
        <Link
          href={`/work/${study.slug}`}
          className="block w-full shrink-0 lg:w-[48%]"
          tabIndex={-1}
          aria-hidden="true"
        >
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
        </Link>

        <div className="min-w-0 flex-1">
          <p className="label text-ink-3">Client</p>
          <p className="label mt-1 text-ink">{study.company}</p>

          <h3 className="display mt-6 max-w-[20ch] text-[1.9rem] sm:text-[2.5rem]">
            <Link href={`/work/${study.slug}`} className="transition-colors">
              {study.question}
            </Link>
          </h3>

          <p className="mt-6 max-w-prose leading-[1.75] text-ink-2">
            {study.summary}
          </p>

          {study.deltas.length > 0 && (
            <div
              className="mt-7 flex flex-wrap gap-x-12 gap-y-4 border-t-2 pt-6"
              style={{ borderColor: accent.solid }}
            >
              {study.deltas.slice(0, 2).map((delta) => (
                <Delta key={delta.label} delta={delta} size="md" tint={accent.ink} />
              ))}
            </div>
          )}

          <ul className="mt-7 flex flex-wrap gap-x-2 gap-y-2">
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

          <p className="mt-8">
            <Link
              href={`/work/${study.slug}`}
              aria-label={`Read the ${study.title} story`}
              className="inline-block text-[2rem] leading-none text-clay transition-transform group-hover:translate-x-2"
            >
              →
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
