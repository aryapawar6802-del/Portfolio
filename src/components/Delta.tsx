import type { Delta as DeltaType } from "@/content/types";

/**
 * The signature element. A case study exists because a number moved, so the
 * before → after pair is the one repeated device. The landed value carries
 * the accent; the arrow and baseline stay quiet.
 */
export function Delta({
  delta,
  size = "md",
  /** Colour for the landed value. Defaults to ink when no study context. */
  tint,
}: {
  delta: DeltaType;
  size?: "sm" | "md" | "lg";
  tint?: string;
}) {
  const value = {
    sm: "text-[1.1rem]",
    md: "text-[1.5rem]",
    lg: "text-[2.4rem] sm:text-[3rem]",
  }[size];

  return (
    <div className="flex flex-col gap-1.5">
      <p className={`display flex items-baseline gap-2 tabular-nums ${value}`}>
        {delta.from && (
          <>
            <span className="sr-only">from </span>
            <span className="text-ink-3">{delta.from}</span>
            <span className="text-ink-3" aria-hidden="true">
              →
            </span>
            {/* Direction is not always "up" — 1100h → 330h is a win. Keep the
                spoken word neutral rather than asserting an increase. */}
            <span className="sr-only"> to </span>
          </>
        )}
        <span style={tint ? { color: tint } : undefined} className={tint ? "" : "text-accent"}>
          {delta.to}
        </span>
      </p>
      <p className="label text-ink-3">{delta.label}</p>
    </div>
  );
}
