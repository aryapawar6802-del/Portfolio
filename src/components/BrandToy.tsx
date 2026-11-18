"use client";

import { useRef, useState } from "react";
import { ACCENTS } from "@/content/palette";

/**
 * The one-cell-per-run problem, played out. In the old simulator you pick a
 * brand, and picking a second one throws an error: a scenario holds one
 * combination. So two brands means two runs, and an evening in Excel
 * putting them back together. In the redesign you pick both, save them as a
 * portfolio, and plan them in one run.
 *
 * Brand names are stand-ins, and the page says so.
 */

const BLUE = ACCENTS.blue;
const RED = ACCENTS.red;
const BRANDS = ["Brand A", "Brand B", "Brand C", "Brand D"];

type View = "old" | "new";

function BrandChip({
  name,
  on,
  onClick,
}: {
  name: string;
  on: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={`min-h-11 rounded-control border px-4 py-2 text-[0.9rem] transition-colors ${
        on ? "font-medium" : "border-rule-strong text-ink hover:bg-paper-deep"
      }`}
      style={on ? { borderColor: BLUE.solid, backgroundColor: BLUE.wash, color: BLUE.ink } : undefined}
    >
      {on && <span aria-hidden="true">✓ </span>}
      {name}
    </button>
  );
}

const primary =
  "min-h-11 rounded-control bg-clay px-4 py-2 text-[0.9rem] text-white transition-colors hover:bg-clay-soft disabled:cursor-not-allowed disabled:bg-paper-dim disabled:text-ink-3";
const quiet =
  "min-h-11 rounded-control px-3 py-2 text-[0.85rem] text-ink-2 underline decoration-rule-strong underline-offset-4 hover:text-ink";

/** The old simulator: one brand per scenario, one run per brand. */
function OldSimulator({ onDone }: { onDone: () => void }) {
  const [picked, setPicked] = useState<string | null>(null);
  const [blocked, setBlocked] = useState<string | null>(null);
  const [runs, setRuns] = useState<string[]>([]);

  const pick = (brand: string) => {
    if (picked === brand) {
      setPicked(null);
      setBlocked(null);
    } else if (picked) {
      setBlocked(brand);
    } else {
      setPicked(brand);
      setBlocked(null);
    }
  };

  const run = () => {
    if (!picked) return;
    setRuns((r) => [...r, picked]);
    setPicked(null);
    setBlocked(null);
  };

  return (
    <div>
      <p className="label text-ink-3">New scenario · pick a brand</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {BRANDS.map((b) => (
          <BrandChip key={b} name={b} on={picked === b} onClick={() => pick(b)} />
        ))}
      </div>

      {blocked && (
        <div
          role="alert"
          className="mt-4 rounded-[4px] border border-[#b9b9b9] bg-[#f3f3f3] p-4 font-mono text-[0.82rem] leading-[1.55] text-[#3d3d3d]"
        >
          <p className="font-semibold">⚠ Only one combination per scenario</p>
          <p className="mt-1">
            Remove {picked} to select {blocked}, or run {picked} first and start a new scenario.
          </p>
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button type="button" onClick={run} disabled={!picked} className={primary}>
          {picked ? `Run ${picked}` : "Run"}
        </button>
        {runs.length > 0 && (
          <button type="button" onClick={() => setRuns([])} className={quiet}>
            Start over
          </button>
        )}
      </div>

      {runs.length > 0 && (
        <div className="mt-6">
          <p className="label text-ink-3">
            {runs.length} {runs.length === 1 ? "run" : "runs"}, {runs.length}{" "}
            {runs.length === 1 ? "result" : "separate results"}
          </p>
          <ol className="mt-3 grid gap-2 sm:grid-cols-2">
            {runs.map((brand, i) => (
              <li key={i} className="rounded-control border border-rule px-4 py-3 text-[0.9rem]">
                <span className="text-ink-3">Run {i + 1} · </span>
                <span className="text-ink">{brand} plan</span>
              </li>
            ))}
          </ol>
          {runs.length === 1 ? (
            <p className="mt-4 text-[0.9rem] text-ink-2">
              Now try planning a second brand alongside it.
            </p>
          ) : (
            <>
              <p className="font-hand mt-4 text-[1.4rem] font-semibold leading-[1.15]" style={{ color: RED.ink }}>
                {runs.length} brands, {runs.length} runs. Then everything goes into Excel to be stitched
                together by hand.
              </p>
              <button type="button" onClick={onDone} className={`${primary} mt-5`}>
                See the redesign →
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

/** The redesign: pick several brands, save them as a portfolio, run once. */
function Redesign() {
  const [picked, setPicked] = useState<string[]>([]);
  const [portfolio, setPortfolio] = useState<string[] | null>(null);
  const [ran, setRan] = useState(false);

  const pick = (brand: string) => {
    setPicked((p) => (p.includes(brand) ? p.filter((b) => b !== brand) : [...p, brand]));
    setPortfolio(null);
    setRan(false);
  };

  const list = (brands: string[]) =>
    brands.length < 2 ? brands.join("") : `${brands.slice(0, -1).join(", ")} and ${brands[brands.length - 1]}`;

  return (
    <div>
      <p className="label text-ink-3">New scenario · pick as many brands as you plan together</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {BRANDS.map((b) => (
          <BrandChip key={b} name={b} on={picked.includes(b)} onClick={() => pick(b)} />
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        {!portfolio ? (
          <button
            type="button"
            onClick={() => setPortfolio(picked)}
            disabled={picked.length < 2}
            className={primary}
          >
            Save as a portfolio
          </button>
        ) : (
          <button type="button" onClick={() => setRan(true)} className={primary}>
            Run the portfolio
          </button>
        )}
        {picked.length < 2 && (
          <span className="text-[0.85rem] text-ink-3">Pick at least two brands.</span>
        )}
      </div>

      {portfolio && (
        <div className="mt-6 rounded-control border px-4 py-3" style={{ borderColor: BLUE.solid }}>
          <p className="label" style={{ color: BLUE.ink }}>
            Portfolio · saved for next cycle
          </p>
          <p className="mt-1 text-[0.95rem] text-ink">{list(portfolio)}</p>
        </div>
      )}

      {ran && portfolio && (
        <div className="mt-4">
          <p className="label text-ink-3">1 run, 1 result</p>
          <p className="mt-3 rounded-control border border-rule px-4 py-3 text-[0.9rem]">
            <span className="text-ink-3">Run 1 · </span>
            <span className="text-ink">One plan across {list(portfolio)}</span>
          </p>
          <p className="font-hand mt-4 text-[1.4rem] font-semibold leading-[1.15] text-ink">
            Same brands. One portfolio, one run, nothing to stitch.
          </p>
        </div>
      )}
    </div>
  );
}

export function BrandToy() {
  const [view, setView] = useState<View>("old");
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const go = (next: View, focus = false) => {
    setView(next);
    if (focus) tabs.current[next === "old" ? 0 : 1]?.focus();
  };

  return (
    <div className="rounded-panel border border-rule p-5 sm:p-7">
      <div role="tablist" aria-label="The old simulator and the redesign" className="flex flex-wrap gap-2">
        {(
          [
            { id: "old", label: "1 · The old simulator" },
            { id: "new", label: "2 · The redesign" },
          ] as const
        ).map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`brand-tab-${t.id}`}
            aria-selected={view === t.id}
            aria-controls="brand-panel"
            tabIndex={view === t.id ? 0 : -1}
            onClick={() => go(t.id)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                e.preventDefault();
                go(view === "old" ? "new" : "old", true);
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

      {/* Both stay mounted, so switching tabs never loses what you did. */}
      <div id="brand-panel" role="tabpanel" aria-labelledby={`brand-tab-${view}`} className="mt-6">
        <div hidden={view !== "old"}>
          <OldSimulator onDone={() => go("new", true)} />
        </div>
        <div hidden={view !== "new"}>
          <Redesign />
        </div>
      </div>
    </div>
  );
}
