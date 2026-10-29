/**
 * The simulator's object map after the redesign: the planning hierarchy and
 * the media hierarchy never touch directly. They meet only through two
 * junction objects, Combination and Constraint, which hold the
 * relationship as data of their own. That's what lets new requests plug in
 * without reworking the journey.
 *
 * Laid out on a fixed grid in SVG so the connectors stay exact; the block
 * around it scrolls sideways on phones rather than shrinking the type.
 */

const INK = "#111111";
const MUTED = "#6c6c6c";
const RULE = "#cfcfcc";
const FILL = "#efefed";
const FONT = "var(--font-archivo), system-ui, sans-serif";

type BoxProps = {
  x: number;
  y: number;
  w?: number;
  h?: number;
  title: string;
  sub?: string;
  kind?: "plain" | "junction" | "conditional";
  tint: string;
  wash: string;
};

function Box({ x, y, w = 160, h = 62, title, sub, kind = "plain", tint, wash }: BoxProps) {
  const junction = kind === "junction";
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        fill={junction ? wash : "#ffffff"}
        stroke={junction ? tint : RULE}
        strokeWidth={junction ? 2 : 1.5}
        strokeDasharray={kind === "conditional" ? "6 5" : undefined}
      />
      <text x={x + w / 2} y={y + (sub ? h / 2 - 3 : h / 2 + 5)} textAnchor="middle" fontSize={14} fontWeight={600} fill={junction ? tint : INK} fontFamily={FONT}>
        {title}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 15} textAnchor="middle" fontSize={11.5} fill={MUTED} fontFamily={FONT}>
          {sub}
        </text>
      )}
    </g>
  );
}

function Tag({ x, y, children, tint }: { x: number; y: number; children: string; tint: string }) {
  return (
    <text x={x} y={y} fontSize={11} fontWeight={600} fill={tint} fontFamily={FONT} letterSpacing={0.3}>
      {children}
    </text>
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

function Leaf({ x, y, w = 128, label }: { x: number; y: number; w?: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={30} rx={7} fill={FILL} />
      <text x={x + w / 2} y={y + 19.5} textAnchor="middle" fontSize={12.5} fill={INK} fontFamily={FONT}>
        {label}
      </text>
    </g>
  );
}

export function JunctionMap({ tint, wash }: { tint: string; wash: string }) {
  const planning = ["Market", "Brand", "Business group", "Region", "Sub-brand"];
  const media = ["Channel", "Platform", "Campaign"];

  return (
    <svg
      viewBox="0 0 760 530"
      className="block h-auto w-full"
      role="img"
      aria-label="Object map. The planning hierarchy (market, brand, business group, region, sub-brand) feeds a Combination junction object, which a named Portfolio holds one or many of. A Portfolio has one or many Scenarios, spend or goal based. A goal-based Scenario has a Target. A Scenario has many Constraints, a second junction object that links scope to the media hierarchy (channel, platform, campaign). A Scenario has runs, each run produces a result, and results are compared across approaches."
    >
      {/* planning hierarchy */}
      <text x={0} y={26} fontSize={11.5} fill={MUTED} fontFamily={FONT}>
        Planning hierarchy
      </text>
      {planning.map((label, i) => (
        <Leaf key={label} x={0} y={40 + i * 38} label={label} />
      ))}
      <Edge d={`M128 55 H146 M128 93 H146 M128 131 H146 M128 169 H146 M128 207 H146 M146 55 V207 M146 131 H172`} />

      {/* combination, the first junction */}
      <Tag x={172} y={92} tint={tint}>
        Junction object
      </Tag>
      <Box x={172} y={100} title="Combination" sub="one cell of scope" kind="junction" tint={tint} wash={wash} />

      <Edge d="M332 131 H392" label="1–many" lx={342} ly={124} />
      <Box x={392} y={100} title="Portfolio" sub="named, saved, reused" tint={tint} wash={wash} />

      {/* user */}
      <Box x={600} y={16} w={150} h={50} title="User" sub="market-scoped access" tint={tint} wash={wash} />
      <Edge d="M675 66 V82 H472 V100" label="creates" lx={560} ly={77} />

      {/* scenario and its target */}
      <Edge d="M472 162 V236" label="has 1–many" lx={480} ly={204} />
      <Box x={392} y={236} title="Scenario" sub="spend or goal based" tint={tint} wash={wash} />
      <Box x={172} y={236} title="Target" sub="goal based only" kind="conditional" tint={tint} wash={wash} />
      <Edge d="M332 267 H392" label="0–1" lx={352} ly={260} />

      {/* constraint, the second junction, and the media hierarchy */}
      <Tag x={600} y={228} tint={tint}>
        Junction object
      </Tag>
      <Edge d="M552 267 H600" label="1–many" lx={556} ly={260} />
      <Box x={600} y={236} w={150} title="Constraint" sub="scope × channel rule" kind="junction" tint={tint} wash={wash} />
      <text x={622} y={336} fontSize={11.5} fill={MUTED} fontFamily={FONT}>
        Media hierarchy
      </text>
      {media.map((label, i) => (
        <Leaf key={label} x={622} y={346 + i * 38} label={label} />
      ))}
      <Edge d="M608 298 V437 M608 361 H622 M608 399 H622 M608 437 H622" />

      {/* run, result, comparison */}
      <Edge d="M472 298 V360" label="has 0–many" lx={480} ly={334} />
      <Box x={392} y={360} h={50} title="Run" sub="queued · running · failed" tint={tint} wash={wash} />
      <Edge d="M472 410 V456" label="produces 1" lx={480} ly={438} />
      <Box x={392} y={456} h={50} title="Result" sub="vs the MAT baseline" tint={tint} wash={wash} />
      <Edge d="M392 481 H332" label="2–many" lx={342} ly={474} />
      <Box x={172} y={456} h={50} title="Comparison" sub="across approaches" tint={tint} wash={wash} />

      {/* legend */}
      <rect x={0} y={454} width={14} height={14} rx={3} fill={wash} stroke={tint} strokeWidth={1.5} />
      <text x={22} y={465} fontSize={11.5} fill={MUTED} fontFamily={FONT}>
        Junction: the link
      </text>
      <text x={22} y={480} fontSize={11.5} fill={MUTED} fontFamily={FONT}>
        holds its own data
      </text>
      <rect x={0} y={494} width={14} height={14} rx={3} fill="#ffffff" stroke={RULE} strokeWidth={1.5} strokeDasharray="4 3" />
      <text x={22} y={505} fontSize={11.5} fill={MUTED} fontFamily={FONT}>
        Only for one approach
      </text>
    </svg>
  );
}
