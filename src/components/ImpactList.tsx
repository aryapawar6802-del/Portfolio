/**
 * Impact, written the way you'd say it: the number first, then what it
 * means, in the body type. The number gets a highlighter stroke in the
 * study's colour instead of a big display figure, so it reads as part of
 * the sentence rather than a dashboard tile.
 */
export function ImpactList({
  items,
  marker,
  className = "",
  columns = false,
}: {
  items: { value: string; label: string }[];
  /** The study's solid accent; the highlighter is a translucent stroke of it. */
  marker: string;
  className?: string;
  /** Two columns from small screens up, for the longer lists in a study. */
  columns?: boolean;
}) {
  return (
    <ul className={`${columns ? "grid gap-x-10 gap-y-3 sm:grid-cols-2" : "space-y-2"} ${className}`}>
      {items.map((item) => (
        <li key={item.label} className="text-[1rem] leading-[1.6] text-ink-2">
          <span
            className="box-decoration-clone rounded-[3px] px-1 py-px font-semibold text-ink tabular-nums"
            style={{ backgroundColor: `${marker}4d` }}
          >
            {item.value}
          </span>{" "}
          {item.label}
        </li>
      ))}
    </ul>
  );
}
