"use client";

import { useEffect, useState } from "react";
import { ACCENTS } from "@/content/palette";

/**
 * The hero chart: a scatter of grey dots, one per spreadsheet row, that
 * sorts itself into a neat block of cleared rows and a small group of
 * flagged ones. It's the whole portfolio in one picture: most of the mess
 * gets handled, and the few rows that need a person are what gets designed.
 *
 * Drawn in one SVG so it scales to any width; dots move by transform, which
 * every browser can transition on SVG. Positions come from a seeded random,
 * so the server and the browser draw the same scatter on every load.
 */

const W = 400;
const H = 220;
const N = 120;
const FLAGGED = new Set([5, 19, 33, 48, 61, 77, 90, 104]);
const GREY = "#8A909B";
const FLAG = ACCENTS.red;

/** Mulberry32: tiny, seeded, and the same in every engine. */
function rng(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const DOTS = (() => {
  const r = rng(7);
  let fine = 0;
  let flag = 0;
  return Array.from({ length: N }, (_, i) => {
    const flagged = FLAGGED.has(i);
    const mess = { x: 10 + r() * (W - 20), y: 10 + r() * (H - 20) };
    /* 112 cleared rows in a 16 × 7 block; 8 flagged ones in a 2 × 4 group
       set well apart on the right. */
    const sorted = flagged
      ? { x: 296 + (flag % 2) * 22, y: 66 + Math.floor(flag++ / 2) * 24 }
      : { x: 18 + (fine % 16) * 14, y: 30 + Math.floor(fine++ / 16) * 24 };
    return { flagged, mess, sorted, delay: Math.round(r() * 350) };
  });
})();

export function MessChart() {
  const [sorted, setSorted] = useState(false);

  /* Sort once the intro curtain has cleared, so the move isn't played
     behind it. With reduced motion, the chart simply starts sorted. */
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = setTimeout(() => setSorted(true), reduce ? 0 : 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <figure className="rounded-panel bg-paper-deep p-5 sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <figcaption className="label text-ink-3" aria-live="polite">
          {sorted ? "After: sorted, flagged, ready" : "Before: one big spreadsheet"}
        </figcaption>
        <button
          type="button"
          onClick={() => setSorted((s) => !s)}
          className="shrink-0 rounded-control bg-clay px-4 py-2 text-[0.85rem] text-white transition-colors hover:bg-clay-soft"
        >
          {sorted ? "Mess it up again" : "Make it make sense"}
        </button>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-5 block w-full"
        role="img"
        aria-label={
          sorted
            ? "Dots sorted into a neat block of cleared rows, with a few red dots set apart as the ones that need a person."
            : "Grey dots scattered at random, like rows in one huge spreadsheet."
        }
      >
        {DOTS.map((dot, i) => {
          const at = sorted ? dot.sorted : dot.mess;
          return (
            <circle
              key={i}
              r={5.5}
              style={{
                fill: sorted ? (dot.flagged ? FLAG.solid : "#111111") : GREY,
                transform: `translate(${at.x.toFixed(1)}px, ${at.y.toFixed(1)}px)`,
                transition: `transform 0.9s cubic-bezier(.6,0,.2,1) ${dot.delay}ms, fill 0.6s ease ${dot.delay}ms`,
              }}
            />
          );
        })}
      </svg>

      {/* Labels sit under their group: the block takes the left 58%, the
          flagged group the rest. Hidden from screen readers, which get the
          same thing from the chart's label. */}
      <div
        aria-hidden="true"
        className="mt-3 grid grid-cols-[58%_1fr] items-start gap-4 transition-opacity duration-500"
        style={{ opacity: sorted ? 1 : 0, transitionDelay: sorted ? "900ms" : "0ms" }}
      >
        <p className="label text-ink-2">Rows the AI agent checked and cleared</p>
        <p
          className="font-hand text-[1.2rem] font-semibold leading-[1.1] sm:text-[1.35rem]"
          style={{ color: FLAG.ink }}
        >
          The few that need a person. That’s the part I design.
        </p>
      </div>
    </figure>
  );
}
