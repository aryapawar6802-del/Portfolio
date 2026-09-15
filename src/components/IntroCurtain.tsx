import { site } from "@/content/site";

const COLS = 26;
const ROWS = 15;
/** How long the solid field holds before any cell starts dropping. */
const HOLD_MS = 620;
/** Window over which the cells scatter out. */
const SCATTER_MS = 900;

/** mulberry32 — deterministic, so server and client render identical delays. */
function makeRandom(seed: number) {
  return function random() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/*
 * Delays are computed once at module load rather than per render.
 *
 * They blend two terms: a diagonal sweep (so the dissolve has a direction
 * and does not read as random noise) and a per-cell jitter (so the leading
 * edge is ragged rather than a clean wipe). Pure random alone looks like
 * static; pure sweep looks like a bar moving across.
 */
const DELAYS = (() => {
  const random = makeRandom(20260907);
  const out: number[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const sweep = (c / COLS) * 0.55 + (r / ROWS) * 0.2;
      const jitter = random() * 0.45;
      out.push(HOLD_MS + Math.min(1, sweep + jitter) * SCATTER_MS);
    }
  }
  return out;
})();

/**
 * First-paint curtain: a solid black field that holds, then dissolves
 * pixel by pixel.
 *
 * Server-rendered with a pure CSS animation on purpose. Driving this from
 * JS would mean the page paints first and the curtain drops over it a frame
 * later, which reads as a glitch rather than an entrance.
 */
export function IntroCurtain() {
  return (
    <div className="curtain" aria-hidden="true">
      <div
        className="curtain-grid"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        }}
      >
        {DELAYS.map((delay, i) => (
          <span
            key={i}
            className="curtain-cell"
            style={{ animationDelay: `${Math.round(delay)}ms` }}
          />
        ))}
      </div>

      <div className="curtain-mark">
        <span className="display text-[2rem] text-white sm:text-[3rem]">
          {site.name.toLowerCase()}
        </span>
      </div>
    </div>
  );
}
