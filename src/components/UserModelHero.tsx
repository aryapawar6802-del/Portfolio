/**
 * Hero animation for the discovery study, drawn in code like SimulatorHero.
 *
 * Builds left to right in three steps: the 3 user types in the brief, the
 * 17 who actually touch the product, then the 6 × 5 grid they all fit on.
 * The grid's filled cells match the full user model in UserModelGrid. Every
 * element holds at 100%, which is also what the
 * global reduced-motion rule jumps to, so the last frame is the whole story.
 */

const LOOP = "14s";
const INK = "#111111";
const GREEN = "#3F5C2C";
const WASH = "#EDF3E4";
const MUTED = "#6c6c6c";
const LINE = "#d5d5d0";
const FILL = "#efefed";
const FONT = "var(--font-archivo), system-ui, sans-serif";

/* Each element blinks out at the loop's start, then builds in at `at`%. */
function appear(name: string, at: number) {
  return `@keyframes ${name} {
  0% { opacity: 1; transform: translateY(0); }
  2% { opacity: 0; transform: translateY(8px); }
  ${at}% { opacity: 0; transform: translateY(8px); }
  ${at + 2}% { opacity: 1; transform: translateY(0); }
  100% { opacity: 1; transform: translateY(0); }
}`;
}

/* Captions swap in turn; the last one holds to the end. */
function caption(name: string, from: number, to: number) {
  return `@keyframes ${name} {
  0% { opacity: ${to === 100 ? 1 : 0}; }
  2% { opacity: 0; }
  ${from}% { opacity: 0; }
  ${from + 2}% { opacity: 1; }
  ${to === 100 ? "100% { opacity: 1; }" : `${to - 2}% { opacity: 1; }\n  ${to}% { opacity: 0; }\n  100% { opacity: 0; }`}
}`;
}

const PITCH = ["Bottler", "Regional team", "Super user"];

/* The types the study names carry a label; the rest are blank chips. */
const MAPPED: { label?: string; w: number }[][] = [
  [{ label: "Plant managers", w: 132 }, { w: 60 }, { w: 78 }],
  [{ w: 70 }, { label: "Regional heads", w: 132 }, { w: 68 }],
  [{ label: "Admins", w: 72 }, { w: 90 }, { label: "Translators", w: 108 }],
  [{ w: 52 }, { label: "Content approvers", w: 160 }, { w: 58 }],
  [{ label: "Tech team", w: 92 }, { w: 84 }, { w: 94 }],
  [{ w: 96 }, { w: 120 }],
];

const PANEL_A = { x: 48, w: 214 };
const PANEL_B = { x: 298, w: 322 };
const PANEL_C = { x: 656, w: 376 };
const TOP = 96;
const BOTTOM = 490;
const BODY = 222;

const LEVELS = 5;
const CELL = { w: 34, h: 34, gap: 6, x: PANEL_C.x + 158 };
/* The first level each capability reaches; it then runs up to Global. */
const ROWS = [
  { label: "Data operator", from: 0 },
  { label: "Access manager", from: 2 },
  { label: "Content manager", from: 4 },
  { label: "Deployment manager", from: 2 },
  { label: "Programme monitor", from: 4 },
  { label: "System maintainer", from: 4 },
];

const STYLES = [
  appear("um-a", 3),
  ...PITCH.map((_, i) => appear(`um-a${i}`, 5 + i * 2)),
  appear("um-ar1", 15),
  appear("um-b", 18),
  ...Array.from({ length: 17 }, (_, i) => appear(`um-b${i}`, 21 + i * 1.5)),
  appear("um-ar2", 50),
  appear("um-c", 53),
  appear("um-grid", 57),
  ...ROWS.map((_, i) => appear(`um-row${i}`, 62 + i * 5)),
  caption("um-c1", 3, 18),
  caption("um-c2", 18, 53),
  caption("um-c3", 53, 100),
  `.um-anim { transform-box: fill-box; }`,
].join("\n");

const play = (name: string) => ({ animation: `${name} ${LOOP} ease-out infinite` });

function Arrow({ x, name }: { x: number; name: string }) {
  const y = (TOP + BOTTOM) / 2;
  return (
    <g className="um-anim" style={play(name)}>
      <line x1={x} y1={y} x2={x + 20} y2={y} stroke={INK} strokeWidth={2.5} strokeLinecap="round" />
      <path d={`M${x + 14} ${y - 6} L${x + 21} ${y} L${x + 14} ${y + 6}`} fill="none" stroke={INK} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

function Panel({
  x,
  w,
  label,
  value,
  unit,
  name,
  strong,
}: {
  x: number;
  w: number;
  label: string;
  value: string;
  unit: string;
  name: string;
  strong?: boolean;
}) {
  return (
    <g className="um-anim" style={play(name)}>
      <rect x={x} y={TOP} width={w} height={BOTTOM - TOP} rx={14} fill="#ffffff" stroke={strong ? GREEN : LINE} strokeWidth={2} />
      <text x={x + 18} y={TOP + 34} fontSize={15} fontWeight={600} fill={strong ? GREEN : MUTED} fontFamily={FONT}>
        {label}
      </text>
      <text x={x + 18} y={TOP + 82} fontSize={44} fontWeight={700} fill={strong ? GREEN : INK} fontFamily={FONT}>
        {value}
      </text>
      <text x={x + 18} y={TOP + 106} fontSize={14} fill={MUTED} fontFamily={FONT}>
        {unit}
      </text>
    </g>
  );
}

function Caption({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <text x={540} y={552} textAnchor="middle" fontSize={25} fontWeight={700} fill={INK} fontFamily={FONT} style={play(name)}>
      {children}
    </text>
  );
}

export function UserModelHero({ label }: { label: string }) {
  let chip = 0;

  return (
    <svg viewBox="0 0 1080 608" className="block h-auto w-full bg-white" role="img" aria-label={label}>
      <style>{STYLES}</style>

      {/* frame label */}
      <text x={48} y={58} fontSize={20} fontWeight={600} fill={INK} fontFamily={FONT}>
        17 user types <tspan fill={GREEN}>→</tspan> One grid
      </text>
      <rect x={902} y={36} width={130} height={34} rx={17} fill={WASH} />
      <text x={967} y={58} textAnchor="middle" fontSize={15} fontWeight={600} fill={GREEN} fontFamily={FONT}>
        Discovery
      </text>

      {/* ---------- the brief ---------- */}
      <Panel {...PANEL_A} label="The brief" value="3" unit="user types" name="um-a" />
      {PITCH.map((type, i) => (
        <g key={type} className="um-anim" style={play(`um-a${i}`)}>
          <rect x={PANEL_A.x + 18} y={BODY + i * 48} width={PANEL_A.w - 36} height={38} rx={19} fill={FILL} />
          <text x={PANEL_A.x + PANEL_A.w / 2} y={BODY + i * 48 + 24} textAnchor="middle" fontSize={15} fontWeight={600} fill={INK} fontFamily={FONT}>
            {type}
          </text>
        </g>
      ))}

      <Arrow x={PANEL_A.x + PANEL_A.w + 8} name="um-ar1" />

      {/* ---------- what we mapped ---------- */}
      <Panel {...PANEL_B} label="What we mapped" value="17" unit="user types" name="um-b" />
      {MAPPED.map((row, r) => {
        let x = PANEL_B.x + 18;
        return row.map((type) => {
          const at = x;
          const name = `um-b${chip++}`;
          x += type.w + 8;
          return (
            <g key={name} className="um-anim" style={play(name)}>
              <rect x={at} y={BODY + r * 42} width={type.w} height={32} rx={16} fill={type.label ? FILL : "#ffffff"} stroke={type.label ? "none" : LINE} strokeWidth={1.5} />
              {type.label && (
                <text x={at + type.w / 2} y={BODY + r * 42 + 21} textAnchor="middle" fontSize={13.5} fill={INK} fontFamily={FONT}>
                  {type.label}
                </text>
              )}
            </g>
          );
        });
      })}

      <Arrow x={PANEL_B.x + PANEL_B.w + 8} name="um-ar2" />

      {/* ---------- the model ---------- */}
      <Panel {...PANEL_C} label="The model" value="6 × 5" unit="capabilities × levels" name="um-c" strong />
      <g className="um-anim" style={play("um-grid")}>
        <text x={CELL.x} y={BODY - 8} fontSize={12.5} fill={MUTED} fontFamily={FONT}>
          Plant
        </text>
        <text x={CELL.x + LEVELS * CELL.w + (LEVELS - 1) * CELL.gap} y={BODY - 8} textAnchor="end" fontSize={12.5} fill={MUTED} fontFamily={FONT}>
          Global
        </text>
        {ROWS.map((row, r) =>
          Array.from({ length: LEVELS }, (_, c) => (
            <rect
              key={`${row.label}-${c}`}
              x={CELL.x + c * (CELL.w + CELL.gap)}
              y={BODY + r * (CELL.h + 8)}
              width={CELL.w}
              height={CELL.h}
              rx={6}
              fill="#ffffff"
              stroke={LINE}
              strokeWidth={1.5}
            />
          )),
        )}
      </g>
      {ROWS.map((row, r) => (
        <g key={row.label} className="um-anim" style={play(`um-row${r}`)}>
          <text x={PANEL_C.x + 18} y={BODY + r * (CELL.h + 8) + 22} fontSize={12.5} fontWeight={600} fill={INK} fontFamily={FONT}>
            {row.label}
          </text>
          {Array.from({ length: LEVELS - row.from }, (_, c) => (
            <rect key={c} x={CELL.x + (row.from + c) * (CELL.w + CELL.gap)} y={BODY + r * (CELL.h + 8)} width={CELL.w} height={CELL.h} rx={6} fill={GREEN} />
          ))}
        </g>
      ))}

      {/* captions */}
      <Caption name="um-c1">The brief said 3 types of users.</Caption>
      <Caption name="um-c2">When we mapped who actually touches it, we got 17.</Caption>
      <Caption name="um-c3">
        So we asked <tspan fill={GREEN}>what you can do and how far you can see.</tspan>
      </Caption>
    </svg>
  );
}
