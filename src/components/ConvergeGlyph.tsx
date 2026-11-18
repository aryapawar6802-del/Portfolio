/**
 * The small drawing on each work card: one wobbly ink line per messy input
 * on the left, pulling into clean blue lines on the right, one per output.
 * Drawn from the counts alone, so "17 user types → 5 flows" really is 17
 * lines turning into 5. The wobble comes from a seeded random, so every
 * card draws the same way on every load.
 */

const INK = "#111111";
const BLUE = "#3A6EA5";

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

function strands(inputs: number, outputs: number, seed: number) {
  const r = rng(seed);
  const outY = Array.from({ length: outputs }, (_, j) =>
    outputs === 1 ? 60 : 22 + j * (76 / (outputs - 1)),
  );
  const ins = Array.from({ length: inputs }, (_, i) => {
    const y = inputs === 1 ? 60 : 8 + i * (104 / (inputs - 1));
    /* Each input joins the output nearest its own band. */
    const target = outY[Math.min(outputs - 1, Math.floor((i * outputs) / inputs))];
    const w1 = (r() - 0.5) * 34;
    const w2 = (r() - 0.5) * 34;
    return `M4 ${y.toFixed(1)} C ${(40 + w1).toFixed(1)} ${(y + w2).toFixed(1)}, ${(70 + w2).toFixed(1)} ${(y - w1).toFixed(1)}, 110 ${target.toFixed(1)}`;
  });
  const outs = outY.map((y) => `M110 ${y.toFixed(1)} L 216 ${y.toFixed(1)}`);
  return { ins, outs };
}

export function ConvergeGlyph({
  from,
  to,
  seed,
  className = "",
}: {
  from: { count: number; label: string };
  to: { count: number; label: string };
  seed: number;
  className?: string;
}) {
  const { ins, outs } = strands(from.count, to.count, seed);

  return (
    <figure className={className}>
      <svg
        viewBox="0 0 220 120"
        className="block h-auto w-full"
        role="img"
        aria-label={`${from.count} tangled lines, from ${from.label}, pulling into ${to.count} clean ${to.count === 1 ? "line" : "lines"}: ${to.label}.`}
      >
        {ins.map((d, i) => (
          <path key={i} d={d} fill="none" stroke={INK} strokeWidth={1.2} strokeLinecap="round" />
        ))}
        {outs.map((d, i) => (
          <path key={i} d={d} fill="none" stroke={BLUE} strokeWidth={2} strokeLinecap="round" />
        ))}
      </svg>
      <figcaption aria-hidden="true" className="label mt-2 flex justify-between gap-4 text-ink-3">
        <span>{from.label}</span>
        <span className="text-right" style={{ color: BLUE }}>
          {to.label}
        </span>
      </figcaption>
    </figure>
  );
}
