import { ACCENTS, STICKY } from "@/content/palette";

/**
 * The calibration flow as a plain strip: the four steps a team takes for
 * its level, then the next level opening, picked out in the decision
 * yellow because it's the moment the whole tool is built around. One line
 * underneath covers the only way off the happy path. Steps sit in a row on
 * wide screens and stack on phones, so it never scrolls sideways.
 */

const STEPS = [
  { name: "Summary", body: "What is blocked, in one sentence." },
  { name: "Compare", body: "Last month, calibrated and raw, side by side." },
  { name: "Edit", body: "Change a number, or accept the AI’s." },
  { name: "Approve", body: "See the impact before you finish." },
];

export function CalibrationFlow({ tint }: { tint: string }) {
  return (
    <div>
      <p className="text-[1.05rem] font-semibold leading-snug text-ink">
        How a calibration works
      </p>
      <p className="mt-1 max-w-prose text-[0.88rem] leading-snug text-ink-3">
        Each team does the same four steps for its level. The next level only
        opens when the one above is locked in.
      </p>

      <ol className="mt-7 grid gap-3 sm:grid-cols-5">
        {STEPS.map((step, i) => (
          <li key={step.name} className="rounded-control border border-rule p-4">
            <span className="text-[0.85rem] font-semibold tabular-nums" style={{ color: tint }}>
              {i + 1}
            </span>
            <p className="mt-1 text-[0.95rem] font-semibold text-ink">{step.name}</p>
            <p className="mt-1 text-[0.85rem] leading-[1.5] text-ink-2">{step.body}</p>
          </li>
        ))}
        <li className="rounded-control p-4" style={{ backgroundColor: STICKY.decision.bg }}>
          <span aria-hidden="true" className="text-[0.85rem] font-semibold text-ink">
            →
          </span>
          <p className="mt-1 text-[0.95rem] font-semibold text-ink">Next level opens</p>
          <p className="mt-1 text-[0.85rem] leading-[1.5] text-ink-2">The level below unlocks.</p>
        </li>
      </ol>

      <p
        className="mt-5 inline-block rounded-control border px-3.5 py-2 text-[0.88rem] leading-[1.5]"
        style={{ borderColor: ACCENTS.red.solid, color: ACCENTS.red.ink }}
      >
        <span aria-hidden="true">↻ </span>
        If a rule conflict blocks a level, you go back to Summary, fix it, and carry on.
      </p>
    </div>
  );
}
