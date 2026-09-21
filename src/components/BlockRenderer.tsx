import Image from "next/image";
import { Delta } from "./Delta";
import { ACCENTS } from "@/content/palette";
import type { AccentName } from "@/content/palette";
import type { Block, NumberedItem } from "@/content/types";

/**
 * Draft markers. Content still carrying the author's own [FILL: …] or
 * [OPTIONAL: …] notes renders them as flagged TODOs rather than as prose,
 * so an unfinished study can go up without any risk of a placeholder
 * reading as a real claim.
 */
function Marked({ text }: { text: string }) {
  const parts = text.split(/(\[(?:FILL|OPTIONAL):[^\]]*\])/g);
  return (
    <>
      {parts.map((part, i) =>
        /^\[(?:FILL|OPTIONAL):/.test(part) ? (
          <mark
            key={i}
            className="bg-paper-deep px-1.5 py-0.5 text-[0.85em] text-ink-3 italic"
          >
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}

/** Section label — plain letterspaced text in the study's own colour. */
function Eyebrow({ children, tint }: { children: string; tint: string }) {
  return (
    <p className="label mb-5" style={{ color: tint }}>
      {children}
    </p>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="display text-[1.9rem] sm:text-[2.4rem]">{children}</h2>;
}

/** Zero-padded counter used across numbered findings and themed groups. */
function NumberedRow({
  item,
  index,
  tint,
}: {
  item: NumberedItem;
  index: number;
  tint: string;
}) {
  return (
    <li className="border-t border-rule pt-5">
      <span className="label text-ink-3">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="mt-2 text-[1.05rem] font-medium text-ink">{item.heading}</h3>
      <p className="mt-2 max-w-prose leading-[1.7] text-ink-2">
        <Marked text={item.body} />
      </p>
      {item.quote && (
        <p className="mt-4 font-hand text-[1.4rem] leading-snug" style={{ color: tint }}>
          “{item.quote}”
        </p>
      )}
    </li>
  );
}

export function BlockRenderer({
  block,
  id,
  accent = "orange",
}: {
  block: Block;
  id?: string;
  accent?: AccentName;
}) {
  const tint = ACCENTS[accent].ink;
  /* Every branch spreads this so anchors resolve for the section navigator
     and `scroll-mt` keeps headings clear of the sticky bars above them. */
  const anchor = { id, className: "scroll-mt-32 xl:scroll-mt-24" };

  switch (block.type) {
    case "tldr":
      return (
        <section {...anchor}>
          {block.eyebrow && <Eyebrow tint={tint}>{block.eyebrow}</Eyebrow>}
          <dl className="border-t border-rule">
            {block.rows.map((row) => (
              <div
                key={row.label}
                className="grid gap-1.5 border-b border-rule py-5 sm:grid-cols-[10rem_1fr] sm:gap-8"
              >
                <dt className="label text-ink-3 sm:pt-1">{row.label}</dt>
                <dd className="leading-[1.7] text-ink">
                  <Marked text={row.value} />
                </dd>
              </div>
            ))}
          </dl>
        </section>
      );

    case "prose":
      return (
        <section {...anchor}>
          {block.eyebrow && <Eyebrow tint={tint}>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <div className="mt-6 space-y-4">
            {block.body.map((paragraph, i) => (
              <p key={i} className="max-w-prose leading-[1.75] text-ink-2">
                <Marked text={paragraph} />
              </p>
            ))}
          </div>
        </section>
      );

    case "list":
      return (
        <section {...anchor}>
          {block.eyebrow && <Eyebrow tint={tint}>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <ul className="mt-6 max-w-prose space-y-3">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-3 leading-[1.75] text-ink-2">
                <span aria-hidden="true" style={{ color: tint }}>
                  —
                </span>
                <Marked text={item} />
              </li>
            ))}
          </ul>
        </section>
      );

    case "numbered":
      return (
        <section {...anchor}>
          {block.eyebrow && <Eyebrow tint={tint}>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          {block.intro && (
            <p className="mt-6 max-w-prose leading-[1.75] text-ink-2">
              {block.intro}
            </p>
          )}
          <ol className="mt-9 grid gap-8 sm:grid-cols-2">
            {block.items.map((item, i) => (
              <NumberedRow key={item.heading} item={item} index={i} tint={tint} />
            ))}
          </ol>
        </section>
      );

    case "themes":
      return (
        <section {...anchor}>
          {block.eyebrow && <Eyebrow tint={tint}>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <div className="mt-10 space-y-12">
            {block.groups.map((group, gi) => (
              <div key={group.theme}>
                <p className="label text-ink-3">
                  {String(gi + 1).padStart(2, "0")} / Theme
                </p>
                <h3 className="display mt-2 text-[1.4rem]">{group.theme}</h3>
                <ol className="mt-6 grid gap-8 sm:grid-cols-2">
                  {group.items.map((item, i) => (
                    <NumberedRow key={item.heading} item={item} index={i} tint={tint} />
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>
      );

    case "beforeAfter":
      return (
        <section {...anchor}>
          {block.eyebrow && <Eyebrow tint={tint}>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <div className="mt-9 space-y-10">
            {block.pairs.map((pair) => (
              <div key={pair.aspect} className="border-t border-rule pt-6">
                <h3 className="text-[1.05rem] font-medium text-ink">
                  {pair.aspect}
                </h3>
                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="label text-ink-3">Before</p>
                    <p className="mt-2 leading-[1.7] text-ink-2">
                      <Marked text={pair.before} />
                    </p>
                  </div>
                  <div>
                    <p className="label" style={{ color: tint }}>After</p>
                    <p className="mt-2 leading-[1.7] text-ink">
                      <Marked text={pair.after} />
                    </p>
                  </div>
                </div>
                {pair.note && (
                  <p className="mt-4 font-hand text-[1.4rem]" style={{ color: tint }}>
                    {pair.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      );

    case "stats":
      return (
        <section {...anchor}>
          {block.eyebrow && <Eyebrow tint={tint}>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <dl className="mt-9 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {block.items.map((item) => (
              <div key={item.label} className="border-t border-rule pt-5">
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <p className="display text-[2.4rem]" style={{ color: tint }}>
                    {item.value}
                  </p>
                  <p className="mt-3 text-[0.9rem] leading-[1.5] text-ink-2">
                    {item.label}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      );

    case "quote":
      return (
        <figure {...anchor}>
          <blockquote className="display max-w-2xl border-l-2 pl-6 text-[1.6rem] sm:text-[2rem]"
            style={{ borderColor: tint }}>
            “{block.text}”
          </blockquote>
          {block.author && (
            <figcaption className="mt-5 pl-6 text-[0.85rem] text-ink-3">
              {block.author}
              {block.role && <span> · {block.role}</span>}
            </figcaption>
          )}
        </figure>
      );

    case "metrics":
      return (
        <section {...anchor}>
          {block.eyebrow && <Eyebrow tint={tint}>{block.eyebrow}</Eyebrow>}
          <div className="flex flex-wrap gap-x-16 gap-y-10 border-t border-rule pt-8">
            {block.items.map((delta) => (
              <Delta key={delta.label} delta={delta} size="lg" tint={tint} />
            ))}
          </div>
        </section>
      );

    case "image":
      return (
        <figure {...anchor}>
          <div className="overflow-hidden bg-paper-deep">
            <div
              className="relative"
              style={{ aspectRatio: String(block.ratio ?? 16 / 9) }}
            >
              {block.src ? (
                <Image
                  src={block.src}
                  alt={block.alt ?? ""}
                  fill
                  sizes="(min-width: 1024px) 55rem, 100vw"
                  className="object-cover"
                />
              ) : (
                <div
                  className="absolute inset-0 grid place-items-center"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(-45deg, transparent 0 11px, var(--color-rule) 11px 12px)",
                  }}
                >
                  <span className="label bg-paper-deep px-3 py-1.5 text-ink-3">
                    Screen to add
                  </span>
                </div>
              )}
            </div>
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-[0.85rem] text-ink-3">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
  }
}
