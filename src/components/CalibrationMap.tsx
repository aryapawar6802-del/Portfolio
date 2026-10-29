/**
 * The calibration tool's object map, drawn from the ORCA board: the retail
 * hierarchy rolls up into one core object, the Calibration slice. Metrics,
 * rules (and the violations they raise), status and the change log all
 * hang off it, and the review → approval → publish chain runs out of it.
 *
 * Same visual language as JunctionMap; the block around it scrolls
 * sideways on phones rather than shrinking the type.
 */

const INK = "#111111";
const MUTED = "#6c6c6c";
const RULE = "#cfcfcc";
const FILL = "#efefed";
const FONT = "var(--font-archivo), system-ui, sans-serif";

function Box({
  x,
  y,
  w = 150,
  h = 56,
  title,
  sub,
  core,
  tint,
  wash,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  title: string;
  sub?: string;
  core?: boolean;
  tint: string;
  wash: string;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        fill={core ? wash : "#ffffff"}
        stroke={core ? tint : RULE}
        strokeWidth={core ? 2.2 : 1.5}
      />
      <text x={x + w / 2} y={y + (sub ? h / 2 - 3 : h / 2 + 5)} textAnchor="middle" fontSize={core ? 15 : 13.5} fontWeight={600} fill={core ? tint : INK} fontFamily={FONT}>
        {title}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 14} textAnchor="middle" fontSize={11} fill={MUTED} fontFamily={FONT}>
          {sub}
        </text>
      )}
    </g>
  );
}

function Edge({ d, label, lx, ly }: { d: string; label?: string; lx?: number; ly?: number }) {
  return (
    <g>
      <path d={d} fill="none" stroke={INK} strokeWidth={1.4} />
      {label && (
        <text x={lx} y={ly} fontSize={11} fill={MUTED} fontFamily={FONT}>
          {label}
        </text>
      )}
    </g>
  );
}

function Leaf({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width={128} height={30} rx={7} fill={FILL} />
      <text x={x + 64} y={y + 19.5} textAnchor="middle" fontSize={12.5} fill={INK} fontFamily={FONT}>
        {label}
      </text>
    </g>
  );
}

export function CalibrationMap({ tint, wash }: { tint: string; wash: string }) {
  const hierarchy = ["SBU", "Department", "Category group", "Category"];

  return (
    <svg
      viewBox="0 0 760 480"
      className="block h-auto w-full"
      role="img"
      aria-label="Object map. The retail hierarchy, SBU, department, category group and category, rolls up into one core object, the Calibration slice. The slice has metrics, rules that raise rule violations, a status and a change log. Users edit slices by role. Each slice runs through a review task, then an approval task, and becomes a published result."
    >
      {/* retail hierarchy, which rolls up */}
      <text x={0} y={26} fontSize={11.5} fill={MUTED} fontFamily={FONT}>
        Retail hierarchy
      </text>
      {hierarchy.map((label, i) => (
        <Leaf key={label} x={0} y={40 + i * 44} label={label} />
      ))}
      {/* small up-arrows in the gaps: each level rolls into the one above */}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M64 ${83 + i * 44} V${72 + i * 44} M60 ${76 + i * 44} L64 ${72 + i * 44} L68 ${76 + i * 44}`}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
        />
      ))}
      <text x={0} y={228} fontSize={11} fill={MUTED} fontFamily={FONT}>
        ↑ each level rolls up
      </text>
      <Edge d="M128 55 H150 M128 99 H150 M128 143 H150 M128 187 H150 M150 55 V187 M150 121 H190" />

      {/* the core object */}
      <text x={190} y={82} fontSize={11} fontWeight={600} fill={tint} fontFamily={FONT}>
        Core object
      </text>
      <Box x={190} y={90} w={210} h={64} core title="Calibration slice" sub="e.g. Department · Total market" tint={tint} wash={wash} />

      {/* what hangs off the slice */}
      <Edge d="M400 122 H430 M430 40 V292 M430 40 H458 M430 112 H458 M430 202 H458 M430 292 H458" />
      <Box x={458} y={14} w={160} h={52} title="Metrics" sub="LM reported · calibrated · raw" tint={tint} wash={wash} />
      <Box x={458} y={86} w={116} h={52} title="Rules" sub="thresholds" tint={tint} wash={wash} />
      <Edge d="M574 112 H622" label="raise" lx={584} ly={105} />
      <Box x={622} y={86} w={138} h={52} title="Rule violation" sub="the flags" tint={tint} wash={wash} />
      <Box x={458} y={176} w={160} h={52} title="Status" sub="locked · open · complete" tint={tint} wash={wash} />
      <Box x={458} y={266} w={160} h={52} title="Change log" sub="who changed what" tint={tint} wash={wash} />

      {/* who touches it */}
      <Box x={0} y={268} w={150} h={52} title="User" sub="one role per stage" tint={tint} wash={wash} />
      <Edge d="M150 294 H230 V154" label="edits" lx={158} ly={286} />

      {/* the sign-off chain */}
      <Edge d="M295 154 V384" label="goes through" lx={302} ly={250} />
      <Box x={190} y={384} w={210} h={52} title="Review task" sub="approve · request changes" tint={tint} wash={wash} />
      <Edge d="M400 410 H440" />
      <Box x={440} y={384} w={150} h={52} title="Approval task" sub="approve for publish" tint={tint} wash={wash} />
      <Edge d="M590 410 H620" />
      <Box x={620} y={384} w={140} h={52} title="Published result" sub="final numbers" tint={tint} wash={wash} />

      {/* legend */}
      <rect x={0} y={450} width={14} height={14} rx={3} fill={wash} stroke={tint} strokeWidth={1.5} />
      <text x={22} y={461} fontSize={11.5} fill={MUTED} fontFamily={FONT}>
        Core object: everything else hangs off it
      </text>
    </svg>
  );
}
