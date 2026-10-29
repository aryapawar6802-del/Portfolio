/**
 * Title illustration for the media simulator study: a still life of
 * everyday household goods (a pump bottle, a soap bar, an ice lolly, a cup
 * of tea). It nods at the kind of company the work was for without any
 * brand, logo or pack design.
 *
 * Drawn in the shared risograph register (see Riso.tsx): flat inks,
 * offset cobalt shadows, slightly wobbly edges and a printed grain.
 */

import { RISO, RisoFilter } from "./Riso";

const { orange: ORANGE, red: RED, pink: PINK, pinkLight: PINK_LIGHT, teal: TEAL, yellow: YELLOW, cobalt: COBALT, cream: CREAM } = RISO;
const TEA = "#C0612B";

export function CpgStillLife({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 380"
      className={className}
      role="img"
      aria-label="Illustration: a still life of household goods, a pump bottle, a bar of soap with bubbles, an ice lolly and a cup of tea, in flat print colours with blue shadows."
    >
      <defs>
        <RisoFilter id="cpg-print" />
        {/* The bite is a real cut-out, so it works on any background. */}
        <mask id="cpg-bite" maskUnits="userSpaceOnUse" x="0" y="0" width="560" height="380">
          <rect width="560" height="380" fill="#ffffff" />
          <circle cx={340} cy={104} r={17} fill="#000000" transform="rotate(-14 304 196)" />
        </mask>
      </defs>

      <g filter="url(#cpg-print)">
        {/* ---------- shadows: offset cobalt copies, down and right ---------- */}
        <g fill={COBALT} opacity={0.9} style={{ mixBlendMode: "multiply" }}>
          <rect x={110} y={136} width={92} height={206} rx={24} />
          <rect x={228} y={300} width={124} height={44} rx={20} />
          <ellipse cx={438} cy={312} rx={86} ry={18} />
          <path d="M316 228 l18 6 l-6 66 l-14 0 z" opacity={0.8} />
        </g>

        {/* ---------- confetti ---------- */}
        {[
          { x: 40, y: 70, r: 6, c: ORANGE },
          { x: 78, y: 40, r: 4, c: PINK },
          { x: 236, y: 52, r: 5, c: YELLOW },
          { x: 372, y: 64, r: 4, c: TEAL },
          { x: 520, y: 96, r: 6, c: PINK },
          { x: 532, y: 220, r: 4, c: ORANGE },
          { x: 24, y: 250, r: 5, c: YELLOW },
          { x: 214, y: 168, r: 3.5, c: RED },
        ].map((d) => (
          <circle key={`${d.x}-${d.y}`} cx={d.x} cy={d.y} r={d.r} fill={d.c} />
        ))}
        <path d="M150 40 q10 -10 20 0 q10 10 20 0" fill="none" stroke={ORANGE} strokeWidth={5} strokeLinecap="round" />
        <path d="M454 30 q8 -9 16 0 q8 9 16 0" fill="none" stroke={TEAL} strokeWidth={5} strokeLinecap="round" />

        {/* ---------- pump bottle ---------- */}
        <rect x={96} y={124} width={92} height={206} rx={24} fill={TEAL} />
        <rect x={104} y={132} width={14} height={180} rx={7} fill={RISO.tealLight} />
        <rect x={128} y={98} width={28} height={30} rx={4} fill={CREAM} />
        <rect x={112} y={80} width={60} height={20} rx={6} fill={ORANGE} />
        <path d="M112 86 h-30 a6 6 0 0 0 0 12 h30 z" fill={ORANGE} />
        <rect x={106} y={196} width={72} height={78} rx={8} fill={CREAM} />
        <path d="M142 210 c-16 10 -16 30 0 40 c16 -10 16 -30 0 -40 z" fill={PINK} />
        <line x1={142} y1={216} x2={142} y2={246} stroke={CREAM} strokeWidth={2} />
        <rect x={120} y={258} width={44} height={6} rx={3} fill={PINK_LIGHT} />

        {/* ---------- ice lolly, tilted ---------- */}
        <g mask="url(#cpg-bite)">
        <g transform="rotate(-14 304 196)">
          <rect x={297} y={214} width={16} height={74} rx={7} fill="#E9B872" />
          <rect x={270} y={96} width={70} height={130} rx={34} fill={ORANGE} />
          <path d="M270 140 v-10 a34 34 0 0 1 70 0 v18 q-10 10 -18 0 q-8 -10 -16 2 q-8 12 -18 -2 q-8 -10 -18 -8 z" fill={RED} />
          <rect x={282} y={150} width={10} height={60} rx={5} fill="#F7AE5E" />
        </g>
        </g>

        {/* ---------- soap bar and bubbles ---------- */}
        <rect x={212} y={290} width={124} height={44} rx={20} fill={PINK} />
        <rect x={224} y={294} width={100} height={22} rx={11} fill={PINK_LIGHT} />
        {[
          { x: 244, y: 268, r: 13 },
          { x: 282, y: 252, r: 9 },
          { x: 312, y: 272, r: 6.5 },
          { x: 226, y: 246, r: 5.5 },
          { x: 262, y: 232, r: 4 },
        ].map((b) => (
          <g key={`${b.x}-${b.y}`}>
            <circle cx={b.x} cy={b.y} r={b.r} fill={CREAM} stroke={TEAL} strokeWidth={3} />
            <circle cx={b.x - b.r * 0.35} cy={b.y - b.r * 0.35} r={b.r * 0.25} fill="#ffffff" />
          </g>
        ))}

        {/* ---------- cup of tea ---------- */}
        <ellipse cx={426} cy={300} rx={84} ry={18} fill={CREAM} stroke={TEAL} strokeWidth={4} />
        <ellipse cx={426} cy={298} rx={52} ry={9} fill="#F3E3C3" />
        <path d="M470 236 a22 22 0 1 1 0 40" fill="none" stroke={YELLOW} strokeWidth={10} strokeLinecap="round" />
        <path d="M372 226 h108 q0 70 -54 70 q-54 0 -54 -70 z" fill={YELLOW} />
        <path d="M380 250 h92" stroke={ORANGE} strokeWidth={6} strokeLinecap="round" />
        <path d="M388 268 h76" stroke={ORANGE} strokeWidth={6} strokeLinecap="round" />
        <ellipse cx={426} cy={226} rx={54} ry={10} fill={TEA} />
        <ellipse cx={414} cy={224} rx={18} ry={3} fill="#D98A4E" />
        {/* tea bag string and tag, hanging over the saucer */}
        <path d="M446 226 q30 18 26 74" fill="none" stroke={CREAM} strokeWidth={2.5} />
        <rect x={460} y={298} width={26} height={30} rx={3} fill={RED} transform="rotate(8 473 313)" />
        <circle cx={472} cy={304} r={2.5} fill={CREAM} />
        {/* steam */}
        <path d="M404 206 q-12 -16 0 -30 q12 -14 0 -30" fill="none" stroke={ORANGE} strokeWidth={5} strokeLinecap="round" />
        <path d="M434 200 q-10 -14 0 -26 q10 -12 0 -24" fill="none" stroke={PINK} strokeWidth={5} strokeLinecap="round" />
      </g>
    </svg>
  );
}
