"use client";

import { useRef, useState } from "react";
import { ACCENTS } from "@/content/palette";

/**
 * A tiny, playable media simulator. Plan from a budget or from a target,
 * run it, and push the target past what the budget can reach. Then compare
 * what the old tool said (a bare error) with what the redesign says (the
 * shortfall, and the ways to close it).
 *
 * The model is made up, and the page says so. Revenue rises with budget
 * but flattens out, and a higher TV cap lifts it a little:
 *   maxRev(b, cap) = b × (3 − b/100) × (0.8 + 0.5 × cap)
 * Solving that for b gives the budget a target needs.
 */

const BLUE = ACCENTS.blue.solid;
const RED = ACCENTS.red;
const BUDGET = { min: 10, max: 60 };
const TARGET = { min: 60, max: 220 };

const factor = (cap: number) => 0.8 + 0.5 * cap;
const maxRev = (b: number, cap: number) => b * (3 - b / 100) * factor(cap);
function needBudget(t: number, cap: number) {
  const disc = 9 - (4 * t) / (100 * factor(cap));
  return disc < 0 ? null : Math.ceil((3 - Math.sqrt(disc)) * 50);
}

type Mode = "target" | "budget";
type View = "old" | "new";

/** Two buttons acting as one choice. */
function Toggle({
  options,
  value,
  onChange,
}: {
  options: { value: Mode; label: string }[];
  value: Mode;
  onChange: (v: Mode) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={value === o.value}
          onClick={() => onChange(o.value)}
          className={`min-h-11 rounded-control px-4 py-2 text-[0.9rem] transition-colors ${
            value === o.value ? "bg-clay text-white" : "bg-paper-deep text-ink-2 hover:bg-clay-wash hover:text-ink"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function Slider({
  id,
  label,
  value,
  range,
  step,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  range: { min: number; max: number };
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="mt-6">
      <label htmlFor={id} className="label text-ink-3">
        {label}
      </label>
      <div className="mt-1 flex items-baseline justify-between gap-4">
        <span className="text-[1.6rem] font-semibold tabular-nums text-ink">₹{value} Cr</span>
        <span className="text-[0.8rem] tabular-nums text-ink-3">
          ₹{range.min}–{range.max} Cr
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={range.min}
        max={range.max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 h-8 w-full cursor-pointer"
        style={{ accentColor: BLUE }}
      />
    </div>
  );
}

export function RoiToy() {
  const [mode, setMode] = useState<Mode>("target");
  const [budget, setBudget] = useState(40);
  const [target, setTarget] = useState(130);
  const [cap, setCap] = useState(0.4);
  const [ran, setRan] = useState(false);
  const [view, setView] = useState<View>("old");
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const isTarget = mode === "target";
  const max = Math.round(maxRev(budget, cap));
  const feasible = !isTarget || target <= max;
  const need = needBudget(target, cap);
  const canRaiseBudget = need !== null && need <= BUDGET.max;
  const lowerTo = Math.floor(max / 5) * 5;
  const spend = isTarget && feasible ? Math.min(budget, need ?? budget) : budget;

  const print = Math.max(0, Math.min(0.1, 1 - cap - 0.35));
  const mix = [
    { name: "TV", share: cap },
    { name: "Digital", share: 0.35 },
    { name: "Print", share: print },
    { name: "Outdoor", share: Math.max(0, 1 - cap - 0.35 - print) },
  ];

  /* Any change to the inputs clears the last result, so a stale answer
     never sits next to new numbers. */
  const edit = <T,>(set: (v: T) => void) => (v: T) => {
    set(v);
    setRan(false);
  };
  /* A fix re-runs the plan straight away, on the redesigned view. */
  const fix = (apply: () => void) => {
    apply();
    setRan(true);
    setView("new");
  };

  const pickTab = (next: View) => {
    setView(next);
    tabs.current[next === "old" ? 0 : 1]?.focus();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
      {/* Controls */}
      <section aria-labelledby="toy-plan" className="rounded-panel border border-rule p-5 sm:p-6">
        <h3 id="toy-plan" className="text-[1.15rem] font-semibold text-ink">
          Your plan
        </h3>

        <fieldset className="mt-5">
          <legend className="label text-ink-3">1 · How do you want to plan?</legend>
          <div className="mt-2">
            <Toggle
              value={mode}
              onChange={edit(setMode)}
              options={[
                { value: "target", label: "From a target" },
                { value: "budget", label: "From a budget" },
              ]}
            />
          </div>
        </fieldset>

        <Slider id="toy-budget" label="2 · Budget" value={budget} range={BUDGET} step={1} onChange={edit(setBudget)} />
        {isTarget && (
          <Slider id="toy-target" label="3 · Revenue target" value={target} range={TARGET} step={5} onChange={edit(setTarget)} />
        )}

        <p className="mt-6 rounded-control bg-paper-deep px-3.5 py-2.5 text-[0.88rem] leading-[1.5] text-ink-2">
          Rule from the brand team: TV can’t take more than{" "}
          <strong className="font-semibold text-ink">{Math.round(cap * 100)}%</strong> of the budget.
        </p>

        <button
          type="button"
          onClick={() => {
            setRan(true);
            setView("old");
          }}
          className="mt-5 min-h-12 w-full rounded-control bg-clay px-4 text-[0.95rem] font-medium text-white transition-colors hover:bg-clay-soft"
        >
          Run the plan
        </button>
      </section>

      {/* Result */}
      <section aria-labelledby="toy-result" aria-live="polite">
        <h3 id="toy-result" className="text-[1.15rem] font-semibold text-ink">
          What the tool says
        </h3>

        {!ran && (
          <p className="mt-4 rounded-panel border border-dashed border-rule-strong p-5 text-[0.95rem] text-ink-3">
            Set your plan and press <strong className="font-medium text-ink">Run the plan</strong>.
          </p>
        )}

        {ran && feasible && (
          <div className="mt-4 rounded-panel border border-rule p-5">
            <p className="text-[1rem] leading-[1.55] text-ink">
              <strong className="font-semibold">
                {isTarget
                  ? `₹${target} Cr is reachable. Here is the cheapest mix: ₹${spend} Cr of your ₹${budget} Cr.`
                  : `₹${budget} Cr should bring in about ₹${max} Cr. Here is the mix.`}
              </strong>
            </p>
            <ul className="mt-5 space-y-3">
              {mix.map((m) => (
                <li key={m.name} className="grid grid-cols-[4.5rem_1fr_4.5rem] items-center gap-3 text-[0.88rem]">
                  <span className="text-ink-2">{m.name}</span>
                  <span className="h-2.5 overflow-hidden rounded-full bg-paper-deep">
                    <span
                      className="block h-full rounded-full transition-[width] duration-500"
                      style={{ width: `${Math.round(m.share * 100)}%`, backgroundColor: BLUE }}
                    />
                  </span>
                  <span className="text-right tabular-nums text-ink">₹{(spend * m.share).toFixed(1)} Cr</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {ran && !feasible && (
          <div className="mt-4">
            <div role="tablist" aria-label="Compare the old tool and the redesign" className="flex flex-wrap gap-2">
              {(
                [
                  { id: "old", label: "What planners used to see" },
                  { id: "new", label: "What the redesign shows" },
                ] as const
              ).map((t, i) => (
                <button
                  key={t.id}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`toy-tab-${t.id}`}
                  aria-selected={view === t.id}
                  aria-controls="toy-panel"
                  tabIndex={view === t.id ? 0 : -1}
                  onClick={() => setView(t.id)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                      e.preventDefault();
                      pickTab(view === "old" ? "new" : "old");
                    }
                  }}
                  className={`min-h-11 rounded-control px-3.5 py-2 text-[0.88rem] transition-colors ${
                    view === t.id ? "bg-clay text-white" : "bg-paper-deep text-ink-2 hover:bg-clay-wash hover:text-ink"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div id="toy-panel" role="tabpanel" aria-labelledby={`toy-tab-${view}`} className="mt-4">
              {view === "old" ? (
                <>
                  <div className="rounded-[4px] border border-[#b9b9b9] bg-[#f3f3f3] p-4 font-mono text-[0.82rem] leading-[1.55] text-[#3d3d3d]">
                    <p className="font-semibold">⚠ Optimisation failed</p>
                    <p className="mt-1">
                      No feasible solution found for the given constraints. Please modify inputs and try again.
                    </p>
                  </div>
                  <p className="font-hand mt-4 text-[1.4rem] font-semibold leading-[1.15]" style={{ color: RED.ink }}>
                    So they exported everything and went back to Excel, guessing which number to change.
                  </p>
                </>
              ) : (
                <>
                  <div className="rounded-panel border border-rule p-5">
                    <p className="text-[1rem] leading-[1.55] text-ink">
                      <strong className="font-semibold">
                        ₹{target} Cr is out of reach with ₹{budget} Cr.
                      </strong>{" "}
                      The most this budget can bring in is about ₹{max} Cr.
                    </p>
                    {/* How far the budget gets you, against where the target sits. */}
                    <div aria-hidden="true" className="relative mt-4 h-3 rounded-full bg-paper-deep">
                      <span
                        className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-500"
                        style={{ width: `${Math.min(100, (max / TARGET.max) * 100)}%`, backgroundColor: BLUE }}
                      />
                      <span
                        className="absolute -top-1.5 -bottom-1.5 w-[3px] rounded-full"
                        style={{ left: `${Math.min(100, (target / TARGET.max) * 100)}%`, backgroundColor: RED.solid }}
                      />
                    </div>
                    <p className="mt-5 text-[0.9rem] text-ink-2">You can get there one of these ways:</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {canRaiseBudget && (
                        <button
                          type="button"
                          onClick={() => fix(() => setBudget(need ?? budget))}
                          className="min-h-11 rounded-control bg-clay px-3.5 py-2 text-[0.88rem] text-white transition-colors hover:bg-clay-soft"
                        >
                          Raise budget to ₹{need} Cr
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => fix(() => setTarget(lowerTo))}
                        className="min-h-11 rounded-control border border-rule-strong px-3.5 py-2 text-[0.88rem] text-ink transition-colors hover:bg-paper-deep"
                      >
                        Lower target to ₹{lowerTo} Cr
                      </button>
                      {cap < 0.6 && (
                        <button
                          type="button"
                          onClick={() => fix(() => setCap(0.6))}
                          className="min-h-11 rounded-control border border-rule-strong px-3.5 py-2 text-[0.88rem] text-ink transition-colors hover:bg-paper-deep"
                        >
                          Ask to raise the TV cap to 60%
                        </button>
                      )}
                    </div>
                  </div>
                  <p className="font-hand mt-4 text-[1.4rem] font-semibold leading-[1.15] text-ink">
                    Same maths underneath. The tool just tells you what’s wrong and what would fix it.
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
