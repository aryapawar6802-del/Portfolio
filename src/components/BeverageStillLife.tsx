/**
 * Title illustration for the discovery study: a still life of drinks (a
 * crate of plain bottles, a can, a glass with a citrus slice). It nods at a
 * beverage company without any brand, logo or recognisable bottle shape.
 *
 * Same series as the other still lifes: the shared risograph register in
 * Riso.tsx, offset cobalt shadows, flat inks and a printed grain.
 */

import { RISO, RisoFilter } from "./Riso";

const { orange: ORANGE, red: RED, pink: PINK, pinkLight: PINK_LIGHT, teal: TEAL, tealLight: TEAL_LIGHT, yellow: YELLOW, cobalt: COBALT, cream: CREAM } = RISO;

/** A plain straight-sided bottle, neck at `top`, base at `bottom`. */
const bottle = (cx: number, top: number, bottom: number) =>
  `M${cx - 9} ${top} h18 v36 C${cx + 9} ${top + 54} ${cx + 24} ${top + 56} ${cx + 24} ${top + 80} V${bottom} H${cx - 24} V${top + 80} C${cx - 24} ${top + 56} ${cx - 9} ${top + 54} ${cx - 9} ${top + 36} Z`;

const BOTTLES = [
  { cx: 80, top: 92, fill: TEAL },
  { cx: 132, top: 72, fill: PINK },
  { cx: 184, top: 96, fill: TEAL_LIGHT },
];

export function BeverageStillLife({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 380"
      className={className}
      role="img"
      aria-label="Illustration: a still life of drinks, a crate of plain glass bottles, a can and a glass with a straw and a citrus slice, in flat print colours with blue shadows."
    >
      <defs>
        <RisoFilter id="beverage-print" />
      </defs>

      <g filter="url(#beverage-print)">
        {/* ---------- shadows: offset cobalt copies, down and right ---------- */}
        <g fill={COBALT} opacity={0.9} style={{ mixBlendMode: "multiply" }}>
          <rect x={46} y={246} width={190} height={92} rx={6} />
          <rect x={264} y={198} width={76} height={140} rx={12} />
          <ellipse cx={440} cy={336} rx={70} ry={12} />
        </g>

        {/* ---------- confetti ---------- */}
        {[
          { x: 30, y: 60, r: 5, c: YELLOW },
          { x: 244, y: 56, r: 6, c: ORANGE },
          { x: 318, y: 112, r: 4, c: TEAL },
          { x: 530, y: 74, r: 5, c: PINK },
          { x: 536, y: 214, r: 4, c: YELLOW },
          { x: 22, y: 196, r: 4, c: PINK },
          { x: 244, y: 150, r: 3.5, c: RED },
        ].map((d) => (
          <circle key={`${d.x}-${d.y}`} cx={d.x} cy={d.y} r={d.r} fill={d.c} />
        ))}
        <path d="M268 90 q8 -9 16 0 q8 9 16 0" fill="none" stroke={PINK} strokeWidth={5} strokeLinecap="round" />
        <path d="M484 40 q10 -10 20 0 q10 10 20 0" fill="none" stroke={TEAL} strokeWidth={5} strokeLinecap="round" />

        {/* ---------- bottles, behind the crate ---------- */}
        {BOTTLES.map((b) => (
          <g key={b.cx}>
            <path d={bottle(b.cx, b.top, 244)} fill={b.fill} />
            <rect x={b.cx - 11} y={b.top - 10} width={22} height={12} rx={3} fill={ORANGE} />
            <rect x={b.cx - 16} y={b.top + 84} width={6} height={50} rx={3} fill={CREAM} opacity={0.75} />
          </g>
        ))}

        {/* ---------- crate ---------- */}
        <rect x={36} y={238} width={190} height={92} rx={6} fill={YELLOW} />
        <rect x={36} y={238} width={190} height={14} rx={4} fill={ORANGE} />
        <path d="M36 286 H226" stroke={ORANGE} strokeWidth={5} />
        <rect x={104} y={262} width={54} height={13} rx={6.5} fill={CREAM} />
        <path d="M52 300 v22 M210 300 v22" stroke={ORANGE} strokeWidth={4} strokeLinecap="round" />

        {/* ---------- can ---------- */}
        <rect x={252} y={190} width={76} height={140} rx={12} fill={PINK} />
        <rect x={260} y={180} width={60} height={12} rx={4} fill={CREAM} />
        <rect x={252} y={236} width={76} height={44} fill={PINK_LIGHT} />
        <circle cx={290} cy={258} r={15} fill={YELLOW} />
        <rect x={262} y={198} width={7} height={122} rx={3.5} fill={CREAM} opacity={0.6} />

        {/* ---------- glass, straw and citrus ---------- */}
        <path d="M436 200 L474 76" stroke={PINK} strokeWidth={8} strokeLinecap="round" />
        <path d="M376 150 H502 L486 332 H392 Z" fill={CREAM} />
        <path d="M380 192 H498 L486 332 H392 Z" fill={ORANGE} />
        <path d="M380 192 H498 L495 226 H383 Z" fill={YELLOW} />
        {[
          { x: 404, y: 176, a: -12 },
          { x: 446, y: 184, a: 14 },
        ].map((c) => (
          <rect
            key={c.x}
            x={c.x}
            y={c.y}
            width={34}
            height={34}
            rx={5}
            fill={CREAM}
            stroke={TEAL}
            strokeWidth={3}
            transform={`rotate(${c.a} ${c.x + 17} ${c.y + 17})`}
          />
        ))}
        <path d="M376 150 H502 L486 332 H392 Z" fill="none" stroke={TEAL} strokeWidth={4} strokeLinejoin="round" />

        {/* citrus slice on the rim */}
        <circle cx={376} cy={146} r={32} fill={ORANGE} />
        <circle cx={376} cy={146} r={25} fill={CREAM} />
        <circle cx={376} cy={146} r={21} fill={YELLOW} />
        {[0, 60, 120].map((a) => (
          <line key={a} x1={376} y1={125} x2={376} y2={167} stroke={CREAM} strokeWidth={3} transform={`rotate(${a} 376 146)`} />
        ))}
      </g>
    </svg>
  );
}
