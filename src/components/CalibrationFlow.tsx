/**
 * The calibration flow, kept plain: the five screens a calibrator moves
 * through for one level, then what happens when a rule blocks it and when
 * the level is done. Steps sit in a row on wide screens and stack on
 * phones, so it never needs to scroll sideways.
 */

const STEPS = [
  { name: "Home", body: "See what’s done and pick up where you left off. Only the next safe step is open." },
  { name: "Summary", body: "See what needs you. Broken rules show up as a short list to fix." },
  { name: "Compare", body: "Last month, calibrated and raw numbers, side by side on every metric." },
  { name: "Edit", body: "Change a number, then save or discard it on purpose." },
  { name: "Approve", body: "See the GMV and share impact, then lock the level in." },
];

export function CalibrationFlow({ tint }: { tint: string }) {
  return (
    <div>
      <p className="text-[1.05rem] font-semibold leading-snug text-ink">
        The same five steps at every level
      </p>
      <p className="mt-1 text-[0.88rem] leading-snug text-ink-3">
        Department first, then Category Group, then Category.
      </p>

      <ol className="mt-7 grid gap-6 sm:grid-cols-5 sm:gap-4">
        {STEPS.map((step, i) => (
          <li key={step.name} className="relative flex gap-3 sm:block">
            <span className="text-[0.85rem] font-semibold tabular-nums" style={{ color: tint }}>
              {i + 1}
            </span>
            <div className="sm:mt-1">
              <p className="text-[0.95rem] font-semibold text-ink">{step.name}</p>
              <p className="mt-1 text-[0.85rem] leading-[1.5] text-ink-2">{step.body}</p>
            </div>
            {i < STEPS.length - 1 && (
              <span aria-hidden="true" className="absolute top-0 -right-3 hidden text-ink-3 sm:block">
                →
              </span>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-8 grid gap-4 border-t border-rule pt-5 text-[0.88rem] leading-[1.5] text-ink-2 sm:grid-cols-2 sm:gap-10">
        <p>
          <span className="font-semibold text-ink">If a rule is broken,</span> the level stops.
          Fix it, then go back to the summary.
        </p>
        <p>
          <span className="font-semibold text-ink">Once a level is approved,</span> the next one
          opens and the steps start again. A late edit can’t undo a finished level.
        </p>
      </div>
    </div>
  );
}
