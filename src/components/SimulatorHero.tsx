/**
 * Hero animation for the media simulator study, drawn in code instead of a
 * video file so it stays sharp at any width.
 *
 * A linear before/after diagram that builds left to right: the "Before"
 * row first (one page, run once per brand, stitched in Excel), then the
 * "After" row (the five-stage journey), then the 4 → 1 result. Nothing
 * leaves the screen once it's in, so the last frame reads at a glance as
 * the whole comparison. Every element holds at 100%, which is also what
 * the global reduced-motion rule jumps to.
 */

const LOOP = "14s";
const NAVY = "#13213f";
const BLUE = "#1a5fd0";
const MUTED = "#6b7487";
const LINE = "#d5dbe6";
const FILL = "#eef2f8";
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

const BEFORE = [
  { title: "Everything on one page", sub: "Filters, scope, rules, budget", x: 160, w: 236, at: 5 },
  { title: "Run it once per brand", sub: "Same setup, four times", x: 432, w: 236, at: 13 },
  { title: "Stitch it in Excel", sub: "Outputs merged by hand", x: 704, w: 200, at: 21 },
];

const AFTER = [
  { title: "Approach", sub: "Spend, goal or in flight" },
  { title: "Scope", sub: "4 brands, 1 portfolio" },
  { title: "Plan", sub: "Only stage that changes" },
  { title: "Run", sub: "Once" },
  { title: "Compare", sub: "Side by side" },
].map((s, i) => ({ ...s, x: 160 + i * 150, w: 128, at: 47 + i * 6 }));

const ROW_BEFORE = 170;
const ROW_AFTER = 368;

const STYLES = [
  appear("sh-lb", 2),
  ...BEFORE.map((_, i) => appear(`sh-b${i}`, BEFORE[i].at)),
  ...BEFORE.map((_, i) => appear(`sh-ba${i}`, BEFORE[i].at + 5)),
  appear("sh-br", 28),
  appear("sh-la", 44),
  ...AFTER.map((s, i) => appear(`sh-a${i}`, s.at)),
  ...AFTER.map((s, i) => appear(`sh-aa${i}`, s.at + 4)),
  appear("sh-ar", 78),
  caption("sh-c1", 3, 44),
  caption("sh-c2", 45, 84),
  caption("sh-c3", 84, 100),
  `.sh-anim { transform-box: fill-box; }`,
].join("\n");

const play = (name: string) => ({ animation: `${name} ${LOOP} ease-out infinite` });

function Arrow({ x, y, name, color }: { x: number; y: number; name: string; color: string }) {
  return (
    <g className="sh-anim" style={play(name)}>
      <line x1={x} y1={y} x2={x + 20} y2={y} stroke={color} strokeWidth={2.5} strokeLinecap="round" />
      <path d={`M${x + 14} ${y - 6} L${x + 21} ${y} L${x + 14} ${y + 6}`} fill="none" stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

function Caption({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <text
      x={540}
      y={560}
      textAnchor="middle"
      fontSize={26}
      fontWeight={700}
      fill={NAVY}
      fontFamily={FONT}
      style={play(name)}
    >
      {children}
    </text>
  );
}

export function SimulatorHero({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 1080 608" className="block h-auto w-full bg-white" role="img" aria-label={label}>
      <style>{STYLES}</style>

      {/* frame label */}
      <text x={48} y={58} fontSize={20} fontWeight={600} fill={NAVY} fontFamily={FONT}>
        One cell <tspan fill={BLUE}>→</tspan> One portfolio
      </text>
      <rect x={862} y={36} width={170} height={34} rx={17} fill={FILL} />
      <text x={947} y={58} textAnchor="middle" fontSize={15} fontWeight={600} fill={BLUE} fontFamily={FONT}>
        Media simulator
      </text>

      {/* ---------- Before ---------- */}
      <g className="sh-anim" style={play("sh-lb")}>
        <rect x={48} y={ROW_BEFORE - 18} width={88} height={36} rx={18} fill={FILL} />
        <text x={92} y={ROW_BEFORE + 6} textAnchor="middle" fontSize={16} fontWeight={700} fill={MUTED} fontFamily={FONT}>
          Before
        </text>
      </g>

      {BEFORE.map((b, i) => (
        <g key={b.title}>
          <g className="sh-anim" style={play(`sh-b${i}`)}>
            <rect x={b.x} y={ROW_BEFORE - 52} width={b.w} height={104} rx={14} fill="#ffffff" stroke={LINE} strokeWidth={2} />
            <text x={b.x + 18} y={ROW_BEFORE - 14} fontSize={18} fontWeight={700} fill={NAVY} fontFamily={FONT}>
              {b.title}
            </text>
            <text x={b.x + 18} y={ROW_BEFORE + 12} fontSize={14} fill={MUTED} fontFamily={FONT}>
              {b.sub}
            </text>
            {/* a small mark per step: clutter, ×4, a grid */}
            {i === 0 &&
              [0, 1, 2, 3, 4].map((k) => (
                <rect key={k} x={b.x + 18 + k * 40} y={ROW_BEFORE + 26} width={32} height={10} rx={3} fill={FILL} />
              ))}
            {i === 1 && (
              <text x={b.x + 18} y={ROW_BEFORE + 40} fontSize={16} fontWeight={700} fill={MUTED} fontFamily={FONT}>
                ×4
              </text>
            )}
            {i === 2 &&
              [0, 1, 2, 3, 4, 5].map((k) => (
                <rect key={k} x={b.x + 18 + k * 22} y={ROW_BEFORE + 26} width={18} height={12} fill="none" stroke={MUTED} strokeWidth={1.2} />
              ))}
          </g>
          {i < BEFORE.length - 1 && (
            <Arrow x={b.x + b.w + 8} y={ROW_BEFORE} name={`sh-ba${i}`} color={MUTED} />
          )}
        </g>
      ))}
      <Arrow x={BEFORE[2].x + BEFORE[2].w + 8} y={ROW_BEFORE} name="sh-ba2" color={MUTED} />
      <g className="sh-anim" style={play("sh-br")}>
        <rect x={940} y={ROW_BEFORE - 24} width={96} height={48} rx={24} fill={FILL} />
        <text x={988} y={ROW_BEFORE + 7} textAnchor="middle" fontSize={20} fontWeight={700} fill={NAVY} fontFamily={FONT}>
          4 runs
        </text>
      </g>

      {/* divider between the two rows */}
      <line x1={48} y1={268} x2={1032} y2={268} stroke={LINE} strokeWidth={1.5} strokeDasharray="6 6" />

      {/* ---------- After ---------- */}
      <g className="sh-anim" style={play("sh-la")}>
        <rect x={48} y={ROW_AFTER - 18} width={88} height={36} rx={18} fill={BLUE} />
        <text x={92} y={ROW_AFTER + 6} textAnchor="middle" fontSize={16} fontWeight={700} fill="#ffffff" fontFamily={FONT}>
          After
        </text>
      </g>

      {AFTER.map((s, i) => {
        const plan = i === 2;
        return (
          <g key={s.title}>
            <g className="sh-anim" style={play(`sh-a${i}`)}>
              <rect
                x={s.x}
                y={ROW_AFTER - 30}
                width={s.w}
                height={60}
                rx={14}
                fill={plan ? BLUE : NAVY}
              />
              <text x={s.x + s.w / 2} y={ROW_AFTER + 7} textAnchor="middle" fontSize={19} fontWeight={700} fill="#ffffff" fontFamily={FONT}>
                {s.title}
              </text>
              <text x={s.x + s.w / 2} y={ROW_AFTER + 56} textAnchor="middle" fontSize={13} fill={plan ? BLUE : MUTED} fontWeight={plan ? 600 : 400} fontFamily={FONT}>
                {s.sub}
              </text>
            </g>
            <Arrow x={s.x + s.w + 1} y={ROW_AFTER} name={`sh-aa${i}`} color={NAVY} />
          </g>
        );
      })}
      <g className="sh-anim" style={play("sh-ar")}>
        <rect x={940} y={ROW_AFTER - 24} width={96} height={48} rx={24} fill={BLUE} />
        <text x={988} y={ROW_AFTER + 7} textAnchor="middle" fontSize={20} fontWeight={700} fill="#ffffff" fontFamily={FONT}>
          1 run
        </text>
      </g>

      {/* captions */}
      <Caption name="sh-c1">Before: one brand at a time, stitched together by hand.</Caption>
      <Caption name="sh-c2">After: pick what you’re trying to do, then one journey.</Caption>
      <Caption name="sh-c3">
        4 runs <tspan fill={BLUE}>→ 1 run.</tspan> One portfolio, planned together.
      </Caption>
    </svg>
  );
}
