import Image from "next/image";
import { Delta } from "./Delta";
import { JunctionMap } from "./JunctionMap";
import { CalibrationMap } from "./CalibrationMap";
import { ACCENTS } from "@/content/palette";
import type { AccentName } from "@/content/palette";
import type { Block, NumberedItem } from "@/content/types";

/**
 * Draft markers. Content still carrying the author's own [FILL: …] or
 * [OPTIONAL: …] notes renders them as flagged TODOs rather than as prose,
 * so an unfinished study can go up without any risk of a placeholder
 * reading as a real claim. `**bold**` and `*italic*` pass through as
 * emphasis, so copy written in Markdown can be pasted in as it is.
 */
function Marked({ text }: { text: string }) {
  const parts = text.split(
    /(\[(?:FILL|OPTIONAL):[^\]]*\]|\*\*[^*]+\*\*|\*[^*]+\*)/g,
  );
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
        ) : /^\*\*.+\*\*$/.test(part) ? (
          <strong key={i} className="font-medium text-ink">
            {part.slice(2, -2)}
          </strong>
        ) : /^\*.+\*$/.test(part) ? (
          <em key={i}>{part.slice(1, -1)}</em>
        ) : (
          part
        ),
      )}
    </>
  );
}

/** Lead-in or closing lines around a list, table or numbered set. */
function Paragraphs({
  text,
  className = "",
}: {
  text?: string | string[];
  className?: string;
}) {
  if (!text) return null;
  return (
    <div className={`space-y-4 ${className}`}>
      {[text].flat().map((paragraph, i) => (
        <p key={i} className="max-w-prose leading-[1.75] text-ink-2">
          <Marked text={paragraph} />
        </p>
      ))}
    </div>
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

/** A heading inside a section, sized like a theme title. */
function Subheading({ children }: { children: React.ReactNode }) {
  return <h3 className="display text-[1.4rem] sm:text-[1.6rem]">{children}</h3>;
}

/**
 * Image in a tinted frame sized to the artwork. Without `src` it renders a
 * hatched slot labelled "Screen to add", so missing exports stay visible.
 */
function Figure({
  src,
  alt,
  caption,
  ratio,
  ...rest
}: {
  src?: string;
  alt?: string;
  caption?: string;
  ratio?: number;
  id?: string;
  className?: string;
}) {
  return (
    <figure {...rest}>
      <div className="overflow-hidden bg-paper-deep">
        <div
          className="relative"
          style={{ aspectRatio: String(ratio ?? 16 / 9) }}
        >
          {src ? (
            <Image
              src={src}
              alt={alt ?? ""}
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
      {caption && (
        <figcaption className="mt-3 text-[0.85rem] text-ink-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
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
  const wash = ACCENTS[accent].wash;
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
          <Paragraphs text={block.intro} className="mt-6" />
          <ul className="mt-6 max-w-prose space-y-3">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-3 leading-[1.75] text-ink-2">
                <span aria-hidden="true" style={{ color: tint }}>
                  —
                </span>
                <span>
                  <Marked text={item} />
                </span>
              </li>
            ))}
          </ul>
          <Paragraphs text={block.outro} className="mt-8" />
        </section>
      );

    case "numbered":
      return (
        <section {...anchor}>
          {block.eyebrow && <Eyebrow tint={tint}>{block.eyebrow}</Eyebrow>}
          {block.heading &&
            (block.sub ? (
              <Subheading>{block.heading}</Subheading>
            ) : (
              <Heading>{block.heading}</Heading>
            ))}
          <Paragraphs text={block.intro} className="mt-6" />
          <ol className="mt-9 grid gap-8 sm:grid-cols-2">
            {block.items.map((item, i) => (
              <NumberedRow key={item.heading} item={item} index={i} tint={tint} />
            ))}
          </ol>
          <Paragraphs text={block.outro} className="mt-9" />
        </section>
      );

    case "table":
      return (
        <section {...anchor}>
          {block.eyebrow && <Eyebrow tint={tint}>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <Paragraphs text={block.intro} className="mt-6" />
          <table className="mt-9 w-full border-t border-rule text-left">
            <thead>
              <tr className="border-b border-rule">
                <th scope="col" className="label w-1/2 py-4 pr-6 font-normal text-ink-3">
                  {block.columns[0]}
                </th>
                <th scope="col" className="label w-1/2 py-4 font-normal" style={{ color: tint }}>
                  {block.columns[1]}
                </th>
              </tr>
            </thead>
            <tbody>
              {block.rows.map(([before, after]) => (
                <tr key={before} className="border-b border-rule align-top">
                  <td className="py-5 pr-6 leading-[1.7] text-ink-2">
                    <Marked text={before} />
                  </td>
                  <td className="py-5 leading-[1.7] text-ink">
                    <Marked text={after} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Paragraphs text={block.outro} className="mt-8" />
        </section>
      );

    case "groups":
      return (
        <section {...anchor}>
          {block.eyebrow && <Eyebrow tint={tint}>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <Paragraphs text={block.intro} className="mt-6" />
          <ul className="mt-9 grid gap-4 sm:grid-cols-2">
            {block.items.map((group) => (
              <li key={group.title} className="rounded-panel border border-rule p-5">
                <p className="text-[1rem] font-medium text-ink">{group.title}</p>
                {group.sub && <p className="mt-1 text-[0.88rem] leading-[1.5] text-ink-3">{group.sub}</p>}
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.chips.map((chip) => (
                    <li key={chip} className="rounded-chip bg-paper-deep px-2.5 py-1 text-[0.8rem] text-ink">
                      {chip}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <Paragraphs text={block.outro} className="mt-8" />
        </section>
      );

    case "quotes":
      return (
        <section {...anchor}>
          {block.eyebrow && <Eyebrow tint={tint}>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <Paragraphs text={block.intro} className="mt-6" />
          <ul className="mt-9 grid gap-4 sm:grid-cols-3">
            {block.items.map((quote) => (
              <li
                key={quote.text}
                className="flex flex-col rounded-panel border border-rule p-6"
              >
                <span aria-hidden="true" className="display text-[2.6rem] leading-[0.6]" style={{ color: tint }}>
                  “
                </span>
                <blockquote className="display mt-3 text-[1.2rem] leading-[1.3] text-ink">
                  <Marked text={quote.text} />
                </blockquote>
                {quote.label && (
                  <p className="label mt-auto pt-6 text-ink-3">{quote.label}</p>
                )}
              </li>
            ))}
          </ul>
          <Paragraphs text={block.outro} className="mt-8" />
        </section>
      );

    case "timeline":
      return (
        <section {...anchor}>
          {block.eyebrow && <Eyebrow tint={tint}>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <Paragraphs text={block.intro} className="mt-6" />
          <div className="mt-9 grid gap-10 sm:grid-cols-2 sm:gap-8">
            {block.columns.map((col) => (
              <div key={col.label}>
                <p className="label" style={{ color: col.highlight ? tint : undefined }}>
                  {col.label}
                </p>
                <ol className="mt-4">
                  {col.steps.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span
                          className="grid size-7 shrink-0 place-items-center rounded-full text-[0.75rem] font-medium"
                          style={
                            col.highlight
                              ? { backgroundColor: tint, color: "#ffffff" }
                              : { border: "1.5px solid var(--color-rule-strong)", color: "var(--color-ink-3)" }
                          }
                        >
                          {i + 1}
                        </span>
                        {i < col.steps.length - 1 && <span className="my-1 w-px flex-1 bg-rule" />}
                      </div>
                      <div className="pb-6">
                        <p className="text-[0.98rem] font-medium leading-snug text-ink">{step.title}</p>
                        {step.body && (
                          <p className="mt-1 text-[0.9rem] leading-[1.55] text-ink-2">
                            <Marked text={step.body} />
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
                {col.end && (
                  <p
                    className="ml-11 inline-block rounded-chip px-3 py-1.5 text-[0.9rem] font-medium"
                    style={
                      col.highlight
                        ? { backgroundColor: tint, color: "#ffffff" }
                        : { backgroundColor: "var(--color-paper-deep)", color: "var(--color-ink)" }
                    }
                  >
                    {col.end}
                  </p>
                )}
              </div>
            ))}
          </div>
          <Paragraphs text={block.outro} className="mt-9" />
        </section>
      );

    case "journey":
      return (
        <section {...anchor}>
          {block.eyebrow && <Eyebrow tint={tint}>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <Paragraphs text={block.intro} className="mt-6" />
          {/* Five stages don't fit a phone at a legible size, so the rows
              scroll sideways in their own box there. */}
          <div className="-mx-6 mt-9 overflow-x-auto px-6 sm:mx-0 sm:px-0">
            <div className="min-w-[640px] space-y-3">
              {block.rows.map((row) => (
                <div key={row.label} className="flex items-center gap-3">
                  <div className="w-28 shrink-0">
                    <p className={`text-[0.95rem] font-medium ${row.future ? "text-ink-3" : "text-ink"}`}>
                      {row.label}
                    </p>
                    {row.sub && <p className="text-[0.78rem] text-ink-3">{row.sub}</p>}
                  </div>
                  <ol className="flex min-w-0 flex-1 items-center gap-1.5">
                    {row.stages.map((stage, i) => {
                      const changes = i === block.highlight;
                      return (
                        <li key={i} className="flex min-w-0 flex-1 items-center gap-1.5">
                          <span
                            className={`block w-full rounded-control border px-2 py-2.5 text-center text-[0.82rem] leading-tight ${
                              row.future ? "border-dashed border-rule-strong text-ink-3" : changes ? "font-medium" : "border-rule text-ink"
                            }`}
                            style={!row.future && changes ? { borderColor: tint, backgroundColor: wash, color: tint } : undefined}
                          >
                            {stage}
                          </span>
                          {i < row.stages.length - 1 && (
                            <span aria-hidden="true" className="text-ink-3">→</span>
                          )}
                        </li>
                      );
                    })}
                  </ol>
                </div>
              ))}
            </div>
          </div>
          <Paragraphs text={block.outro} className="mt-8" />
        </section>
      );

    case "diagram":
      return (
        <section {...anchor}>
          {block.eyebrow && <Eyebrow tint={tint}>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <Paragraphs text={block.intro} className="mt-6" />
          <figure className="-mx-6 mt-9 overflow-x-auto px-6 sm:mx-0 sm:px-0">
            <div className="min-w-[640px] rounded-panel border border-rule p-4 sm:p-6">
              {block.name === "calibration" ? (
                <CalibrationMap tint={tint} wash={wash} />
              ) : (
                <JunctionMap tint={tint} wash={wash} />
              )}
            </div>
          </figure>
          {block.plugs && block.plugs.length > 0 && (
            <ul className="mt-8 space-y-3">
              {block.plugs.map((plug) => (
                <li
                  key={plug.request}
                  className="grid gap-2 rounded-panel bg-paper-deep p-4 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-center sm:gap-4"
                >
                  <p className="text-[0.95rem] font-medium text-ink">{plug.request}</p>
                  <p className="flex items-center gap-2 text-[0.85rem] text-ink-3">
                    <span aria-hidden="true">plugs into →</span>
                    <span
                      className="rounded-chip border px-2.5 py-1 font-medium"
                      style={{ borderColor: tint, backgroundColor: wash, color: tint }}
                    >
                      {plug.object}
                    </span>
                  </p>
                  <p className="text-[0.88rem] leading-[1.5] text-ink-2">
                    <Marked text={plug.note} />
                  </p>
                </li>
              ))}
            </ul>
          )}
          <Paragraphs text={block.outro} className="mt-8" />
        </section>
      );

    case "options":
      return (
        <section {...anchor}>
          {block.eyebrow && <Eyebrow tint={tint}>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <Paragraphs text={block.intro} className="mt-6" />
          <ol className="mt-9 space-y-6">
            {block.items.map((option, i) => (
              <li
                key={option.name}
                className={`rounded-panel border p-6 sm:p-7 ${
                  option.picked ? "border-ink" : "border-rule"
                }`}
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="label text-ink-3">Option {i + 1}</span>
                  {option.picked && (
                    <span className="label rounded-chip bg-ink px-2 py-0.5 text-white">
                      Recommended
                    </span>
                  )}
                </div>
                <h3 className="display mt-2 text-[1.5rem]">{option.name}</h3>
                <p className="mt-1.5 max-w-prose leading-[1.6] text-ink-2">
                  <Marked text={option.framing} />
                </p>

                <ol className="mt-5 flex flex-wrap items-center gap-x-1.5 gap-y-2">
                  {option.flow.map((step, s) => (
                    <li key={step} className="flex items-center gap-1.5">
                      <span className="rounded-chip bg-paper-deep px-2.5 py-1 text-[0.8rem] text-ink">
                        {step}
                      </span>
                      {s < option.flow.length - 1 && (
                        <span aria-hidden="true" className="text-ink-3">
                          →
                        </span>
                      )}
                    </li>
                  ))}
                </ol>

                <dl className="mt-6 grid gap-x-8 gap-y-5 border-t border-rule pt-5 sm:grid-cols-2">
                  {[
                    ["Optimises for", option.optimisesFor],
                    ["Trades away", option.tradesAway],
                    ["When it wins", option.winsWhen],
                    ["Risks", option.risks],
                  ].map(([label, text]) => (
                    <div key={label}>
                      <dt className="label text-ink-3">{label}</dt>
                      <dd className="mt-1.5 text-[0.95rem] leading-[1.6] text-ink-2">
                        <Marked text={text} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ol>
          <Paragraphs text={block.outro} className="mt-8" />
        </section>
      );

    case "screens":
      return (
        <section {...anchor}>
          {block.eyebrow && <Eyebrow tint={tint}>{block.eyebrow}</Eyebrow>}
          {block.heading && <Heading>{block.heading}</Heading>}
          <ol className="mt-9 space-y-14">
            {block.items.map((item, i) => (
              <li key={item.heading} className="border-t border-rule pt-5">
                <span className="label text-ink-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-[1.05rem] font-medium text-ink">
                  {item.heading}
                </h3>
                <Figure
                  src={item.src}
                  alt={item.alt}
                  caption={item.caption}
                  ratio={item.ratio}
                  className="mt-5"
                />
                <p className="mt-5 max-w-prose leading-[1.7] text-ink-2">
                  <Marked text={item.body} />
                </p>
              </li>
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
        <Figure
          {...anchor}
          src={block.src}
          alt={block.alt}
          caption={block.caption}
          ratio={block.ratio}
        />
      );
  }
}
