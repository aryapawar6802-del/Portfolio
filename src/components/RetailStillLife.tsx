/**
 * Title illustration for the calibration study: a retail still life (a top
 * on a hanger, a shopping trolley, a price tag, a stack of folded clothes).
 * It nods at a big retailer, and at the Women's wear / Tops example the
 * study walks through, without any brand colour, logo or store.
 *
 * Same series as the household still life: the shared risograph register
 * in Riso.tsx, offset cobalt shadows, flat inks and a printed grain.
 */

import { RISO, RisoFilter } from "./Riso";

const { orange: ORANGE, red: RED, pink: PINK, pinkLight: PINK_LIGHT, teal: TEAL, yellow: YELLOW, cobalt: COBALT, cream: CREAM } = RISO;

const TOP =
  "M70 92 L40 120 L58 142 L76 130 V280 H178 V130 L196 142 L214 120 L184 92 Q160 108 127 108 Q94 108 70 92 Z";

export function RetailStillLife({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 380"
      className={className}
      role="img"
      aria-label="Illustration: a retail still life, a pink top on a hanger, a shopping trolley with a box and a bag, a price tag and a stack of folded clothes, in flat print colours with blue shadows."
    >
      <defs>
        <RisoFilter id="retail-print" />
      </defs>

      <g filter="url(#retail-print)">
        {/* ---------- shadows: offset cobalt copies, down and right ---------- */}
        <g fill={COBALT} opacity={0.9} style={{ mixBlendMode: "multiply" }}>
          <path d={TOP} transform="translate(14 10)" />
          <ellipse cx={340} cy={318} rx={96} ry={14} />
          <rect x={456} y={258} width={98} height={82} rx={10} />
          <g transform="rotate(12 480 160) translate(10 8)">
            <path d="M462 104 h36 l18 22 v88 h-72 v-88 z" />
          </g>
        </g>

        {/* ---------- confetti ---------- */}
        {[
          { x: 30, y: 60, r: 5, c: YELLOW },
          { x: 236, y: 46, r: 6, c: PINK },
          { x: 300, y: 70, r: 4, c: TEAL },
          { x: 420, y: 40, r: 5, c: ORANGE },
          { x: 548, y: 60, r: 4, c: PINK },
          { x: 24, y: 300, r: 4.5, c: ORANGE },
          { x: 222, y: 200, r: 3.5, c: RED },
          { x: 426, y: 236, r: 4, c: YELLOW },
        ].map((d) => (
          <circle key={`${d.x}-${d.y}`} cx={d.x} cy={d.y} r={d.r} fill={d.c} />
        ))}
        <path d="M330 36 q10 -10 20 0 q10 10 20 0" fill="none" stroke={TEAL} strokeWidth={5} strokeLinecap="round" />
        <path d="M60 340 q8 -9 16 0 q8 9 16 0" fill="none" stroke={PINK} strokeWidth={5} strokeLinecap="round" />

        {/* ---------- top on a hanger ---------- */}
        <path d={TOP} fill={PINK} />
        <path d="M100 100 Q127 128 154 100" fill="none" stroke={CREAM} strokeWidth={5} strokeLinecap="round" />
        <rect x={76} y={182} width={102} height={16} fill={PINK_LIGHT} />
        <rect x={76} y={214} width={102} height={16} fill={PINK_LIGHT} />
        <path d="M74 96 L127 66 L180 96" fill="none" stroke={ORANGE} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M127 66 v-10 q12 -4 12 -14 q0 -12 -12 -12 q-12 0 -12 12" fill="none" stroke={ORANGE} strokeWidth={5} strokeLinecap="round" />

        {/* ---------- shopping trolley ---------- */}
        {/* goods first, so the basket sits in front of them */}
        <rect x={272} y={110} width={62} height={56} rx={4} fill={YELLOW} />
        <rect x={272} y={128} width={62} height={8} fill={ORANGE} />
        <path d="M344 104 h48 l6 62 h-60 z" fill={ORANGE} />
        <path d="M356 104 q12 -24 24 0" fill="none" stroke={RED} strokeWidth={4} strokeLinecap="round" />
        <path d="M244 150 H426 L404 252 H266 Z" fill={CREAM} opacity={0.92} />
        <g stroke={TEAL} strokeWidth={4} strokeLinecap="round" fill="none">
          <path d="M244 150 H426 L404 252 H266 Z" strokeLinejoin="round" />
          {[290, 318, 346, 374, 402].map((x, i) => (
            <line key={x} x1={x} y1={150} x2={x - 6 - i * 1.5} y2={252} />
          ))}
          <line x1={252} y1={184} x2={418} y2={184} />
          <line x1={259} y1={218} x2={411} y2={218} />
          <path d="M244 150 L226 124 H204" strokeWidth={6} />
          <path d="M266 252 L274 292 H398" strokeWidth={5} strokeLinejoin="round" />
        </g>
        <circle cx={286} cy={306} r={12} fill={PINK} />
        <circle cx={388} cy={306} r={12} fill={PINK} />
        <circle cx={286} cy={306} r={4} fill={CREAM} />
        <circle cx={388} cy={306} r={4} fill={CREAM} />

        {/* ---------- price tag on a string ---------- */}
        <path d="M482 118 q-30 -40 -6 -70" fill="none" stroke={RED} strokeWidth={2.5} strokeLinecap="round" transform="rotate(12 480 160)" />
        <g transform="rotate(12 480 160)">
          <path d="M462 104 h36 l18 22 v88 h-72 v-88 z" fill={YELLOW} />
          <circle cx={480} cy={122} r={6} fill="#ffffff" />
          <text
            x={480}
            y={176}
            textAnchor="middle"
            fontSize={34}
            fontWeight={800}
            fill={RED}
            fontFamily="var(--font-archivo), system-ui, sans-serif"
          >
            %
          </text>
          {[454, 458, 463, 466, 471, 476, 479, 484, 489, 492, 497, 502].map((x, i) => (
            <rect key={x} x={x} y={190} width={i % 3 === 0 ? 3 : 1.6} height={14} fill={COBALT} />
          ))}
        </g>

        {/* ---------- folded clothes ---------- */}
        <rect x={446} y={304} width={100} height={30} rx={8} fill={TEAL} />
        <rect x={452} y={276} width={90} height={28} rx={8} fill={ORANGE} />
        <rect x={458} y={250} width={80} height={26} rx={8} fill={PINK} />
        <path d="M470 318 h76 M466 290 h70 M472 263 h60" stroke={CREAM} strokeWidth={2.5} strokeLinecap="round" opacity={0.8} />
      </g>
    </svg>
  );
}
