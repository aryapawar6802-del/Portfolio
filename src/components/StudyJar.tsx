import { ACCENTS, type AccentName } from "@/content/palette";

/**
 * Spot illustration for a case study hero.
 *
 * It is that study's jar from the closing scene, enlarged, with its contents
 * spilled out in front — so opening a case study shows you the same object
 * the home page ends on. Cast shadows sit in the study's own colour rather
 * than grey, which is what keeps it in the same world as the bowl scene.
 */
const SPILL = [
  { cx: 148, cy: 470, r: 34 },
  { cx: 236, cy: 500, r: 27 },
  { cx: 316, cy: 462, r: 31 },
  { cx: 402, cy: 498, r: 24 },
  { cx: 470, cy: 452, r: 29 },
];

export function StudyJar({ accent }: { accent: AccentName }) {
  const { solid, wash } = ACCENTS[accent];

  return (
    <svg
      viewBox="0 0 600 600"
      className="w-full"
      role="img"
      aria-label="An illustrated jar with its contents spilled in front of it."
    >
      {/* loose pieces, each with its own cast shadow */}
      {SPILL.map((p) => (
        <g key={`${p.cx}-${p.cy}`}>
          <ellipse
            cx={p.cx + p.r * 0.75}
            cy={p.cy + p.r * 0.55}
            rx={p.r * 1.15}
            ry={p.r * 0.42}
            fill={solid}
            opacity={0.22}
          />
          <circle cx={p.cx} cy={p.cy} r={p.r} fill={solid} />
          <circle cx={p.cx - p.r * 0.3} cy={p.cy - p.r * 0.34} r={p.r * 0.3} fill="#FFFFFF" opacity={0.26} />
        </g>
      ))}

      {/* the jar itself, tipped slightly as though just set down */}
      <g transform="rotate(-6 340 250)">
        {/* cast shadow */}
        <ellipse cx={382} cy={392} rx={140} ry={34} fill={solid} opacity={0.18} />

        {/* glass body */}
        <rect x={222} y={128} width={232} height={252} rx={18} fill="#FFFFFF" />
        {/* contents */}
        <path d="M238 214 h200 v134 a16 16 0 0 1 -16 16 h-168 a16 16 0 0 1 -16 -16 z" fill={solid} />
        <rect x={238} y={214} width={200} height={22} rx={11} fill={solid} />
        <rect x={238} y={214} width={200} height={22} rx={11} fill="#000000" opacity={0.12} />

        {/* lid */}
        <rect x={204} y={86} width={268} height={52} rx={9} fill={solid} />
        <rect x={204} y={86} width={268} height={18} rx={9} fill="#FFFFFF" opacity={0.22} />

        {/* label band */}
        <rect x={252} y={252} width={172} height={70} rx={9} fill="#FFFFFF" />
        <rect x={272} y={276} width={132} height={9} rx={4.5} fill={solid} opacity={0.5} />
        <rect x={272} y={294} width={92} height={9} rx={4.5} fill={solid} opacity={0.3} />

        {/* glass highlight */}
        <rect x={242} y={150} width={20} height={200} rx={10} fill="#FFFFFF" opacity={0.55} />
      </g>

      {/* a soft ground tint so the objects sit on something */}
      <ellipse cx={300} cy={528} rx={280} ry={30} fill={wash} opacity={0.7} />
    </svg>
  );
}
