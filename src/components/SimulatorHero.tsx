/**
 * Hero animation for the media simulator study, drawn in code instead of a
 * video file so it stays sharp at any width.
 *
 * Five scenes on one 14s loop: a crowded single page, the same page run
 * four times, the four outputs stitched into a spreadsheet, the three
 * intent cards, and the one five-stage journey ending on "4 → 1". Every
 * element's keyframes are written against the shared loop, so scenes stay
 * in step without JS. The last scene holds at 100%, which is also what the
 * global reduced-motion rule jumps to: the finished journey, standing still.
 */

const LOOP = "14s";
const NAVY = "#13213f";
const BLUE = "#1a5fd0";
const LINE = "#d5dbe6";
const FILL = "#eef2f8";
const FONT = "var(--font-archivo), system-ui, sans-serif";

type Stop = [number, string];

/* One keyframe rule per element, written as `percent: declarations`. */
function rule(name: string, stops: Stop[]) {
  return `@keyframes ${name} {\n${stops.map(([p, d]) => `  ${p}% { ${d} }`).join("\n")}\n}`;
}

/* Visible between `from` and `to`, with a short fade either side. */
function windowed(name: string, from: number, to: number) {
  return rule(name, [
    [0, "opacity: 0"],
    [from, "opacity: 0"],
    [from + 2, "opacity: 1"],
    [to - 2, "opacity: 1"],
    [to, "opacity: 0"],
    [100, "opacity: 0"],
  ]);
}

/* Scene 1: the clutter. Each bar pops in on its own beat. */
const CLUTTER = [
  // filter row
  { x: 312, y: 128, w: 92, h: 22 },
  { x: 412, y: 128, w: 92, h: 22 },
  { x: 512, y: 128, w: 92, h: 22 },
  { x: 612, y: 128, w: 92, h: 22 },
  // fields
  { x: 312, y: 168, w: 210, h: 30 },
  { x: 534, y: 168, w: 232, h: 30 },
  { x: 312, y: 208, w: 140, h: 30 },
  { x: 462, y: 208, w: 140, h: 30 },
  { x: 612, y: 208, w: 154, h: 30 },
  // constraints table
  { x: 312, y: 252, w: 290, h: 16 },
  { x: 312, y: 274, w: 290, h: 16 },
  { x: 312, y: 296, w: 290, h: 16 },
  { x: 312, y: 318, w: 290, h: 16 },
  { x: 312, y: 340, w: 290, h: 16 },
  { x: 312, y: 362, w: 290, h: 16 },
  // chart and budget
  { x: 616, y: 252, w: 150, h: 126 },
  { x: 312, y: 392, w: 454, h: 30 },
  { x: 312, y: 432, w: 220, h: 30 },
  { x: 546, y: 432, w: 220, h: 30 },
];

/* Scene 2–3: four runs, one per brand, that then fly into the spreadsheet. */
const RUNS = [0, 1, 2, 3].map((i) => ({ x: 150 + i * 205, y: 130 }));
const SHEET = { x: 540, y: 270 };

const STEPS = ["Approach", "Scope", "Plan", "Run", "Compare"];
const STEP_W = 150;
const STEP_GAP = 34;
const STEP_X0 = (1080 - (STEPS.length * STEP_W + (STEPS.length - 1) * STEP_GAP)) / 2;

const STYLES = [
  // Scene windows. The last one is lit at both ends so the loop crossfades
  // from it into scene 1, and so reduced motion lands on it.
  windowed("sh-s1", 1, 25),
  windowed("sh-s2", 25, 58),
  windowed("sh-s4", 58, 76),
  rule("sh-s5", [
    [0, "opacity: 1"],
    [2, "opacity: 0"],
    [76, "opacity: 0"],
    [79, "opacity: 1"],
    [100, "opacity: 1"],
  ]),
  windowed("sh-c1", 2, 25),
  windowed("sh-c2", 26, 43),
  windowed("sh-c3", 43, 58),
  windowed("sh-c4", 59, 76),
  ...CLUTTER.map((_, i) => {
    const at = 3 + i * 0.75;
    return rule(`sh-bar-${i}`, [
      [0, "opacity: 0; transform: translateY(6px)"],
      [at, "opacity: 0; transform: translateY(6px)"],
      [at + 1.2, "opacity: 1; transform: translateY(0)"],
      [100, "opacity: 1; transform: translateY(0)"],
    ]);
  }),
  ...RUNS.map((r, i) => {
    const at = 27 + i * 3;
    const dx = SHEET.x - (r.x + 85);
    const dy = SHEET.y - (r.y + 105);
    return rule(`sh-run-${i}`, [
      [0, "opacity: 0; transform: translate(0, 10px) scale(1)"],
      [at, "opacity: 0; transform: translate(0, 10px) scale(1)"],
      [at + 1.5, "opacity: 1; transform: translate(0, 0) scale(1)"],
      [45 + i, "opacity: 1; transform: translate(0, 0) scale(1)"],
      [50 + i, `opacity: 0; transform: translate(${dx}px, ${dy}px) scale(0.25)`],
      [100, `opacity: 0; transform: translate(${dx}px, ${dy}px) scale(0.25)`],
    ]);
  }),
  rule("sh-sheet", [
    [0, "opacity: 0; transform: scale(0.8)"],
    [44, "opacity: 0; transform: scale(0.8)"],
    [47, "opacity: 1; transform: scale(1)"],
    [53, "opacity: 1; transform: scale(1)"],
    [55, "opacity: 1; transform: scale(1.06)"],
    [57, "opacity: 1; transform: scale(1)"],
    [100, "opacity: 1; transform: scale(1)"],
  ]),
  ...[0, 1, 2].map((i) =>
    rule(`sh-card-${i}`, [
      [0, "opacity: 0; transform: translateY(14px)"],
      [59 + i * 1.5, "opacity: 0; transform: translateY(14px)"],
      [61 + i * 1.5, "opacity: 1; transform: translateY(0)"],
      [100, "opacity: 1; transform: translateY(0)"],
    ]),
  ),
  rule("sh-pick", [
    [0, "opacity: 0"],
    [67, "opacity: 0"],
    [69, "opacity: 1"],
    [100, "opacity: 1"],
  ]),
  ...STEPS.map((_, i) => {
    const at = 79 + i * 2;
    return rule(`sh-step-${i}`, [
      [0, "opacity: 1"],
      [2, "opacity: 0"],
      [at, "opacity: 0"],
      [at + 1, "opacity: 1"],
      [100, "opacity: 1"],
    ]);
  }),
  rule("sh-total", [
    [0, "opacity: 1; transform: scale(1)"],
    [2, "opacity: 0; transform: scale(0.85)"],
    [88, "opacity: 0; transform: scale(0.85)"],
    [90, "opacity: 1; transform: scale(1.05)"],
    [92, "opacity: 1; transform: scale(1)"],
    [100, "opacity: 1; transform: scale(1)"],
  ]),
  `.sh-anim { transform-box: fill-box; transform-origin: center; }`,
].join("\n");

const play = (name: string) => ({ animation: `${name} ${LOOP} ease-in-out infinite` });

function Caption({ name, children }: { name: string; children: string }) {
  return (
    <text
      x={540}
      y={556}
      textAnchor="middle"
      fontSize={30}
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
    <svg
      viewBox="0 0 1080 608"
      className="block h-auto w-full bg-white"
      role="img"
      aria-label={label}
    >
      <style>{STYLES}</style>

      {/* frame label */}
      <text x={48} y={58} fontSize={20} fontWeight={600} fill={NAVY} fontFamily={FONT}>
        One cell <tspan fill={BLUE}>→</tspan> One portfolio
      </text>
      <rect x={862} y={36} width={170} height={34} rx={17} fill={FILL} />
      <text x={947} y={58} textAnchor="middle" fontSize={15} fontWeight={600} fill={BLUE} fontFamily={FONT}>
        Media simulator
      </text>

      {/* Scene 1: one crowded page */}
      <g style={play("sh-s1")}>
        <rect x={290} y={104} width={500} height={378} rx={14} fill="#ffffff" stroke={LINE} strokeWidth={2} />
        {CLUTTER.map((b, i) => (
          <rect
            key={i}
            className="sh-anim"
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            rx={b.h > 40 ? 8 : 5}
            fill={i < 4 ? "#dbe6f8" : FILL}
            style={play(`sh-bar-${i}`)}
          />
        ))}
      </g>
      <Caption name="sh-c1">One page. One cell.</Caption>

      {/* Scene 2–3: four runs, then stitched into a spreadsheet */}
      <g style={play("sh-s2")}>
        {RUNS.map((r, i) => (
          <g key={i} className="sh-anim" style={play(`sh-run-${i}`)}>
            <rect x={r.x} y={r.y} width={170} height={210} rx={12} fill="#ffffff" stroke={LINE} strokeWidth={2} />
            <text x={r.x + 16} y={r.y + 30} fontSize={15} fontWeight={600} fill={NAVY} fontFamily={FONT}>
              Brand {i + 1}
            </text>
            {[0, 1, 2, 3, 4].map((row) => (
              <rect key={row} x={r.x + 16} y={r.y + 48 + row * 28} width={row % 2 ? 110 : 138} height={14} rx={4} fill={FILL} />
            ))}
          </g>
        ))}
        <g className="sh-anim" style={play("sh-sheet")}>
          <rect x={SHEET.x - 90} y={SHEET.y - 66} width={180} height={132} rx={10} fill="#ffffff" stroke={NAVY} strokeWidth={2.5} />
          {[1, 2, 3].map((c) => (
            <line key={`c${c}`} x1={SHEET.x - 90 + c * 45} y1={SHEET.y - 66} x2={SHEET.x - 90 + c * 45} y2={SHEET.y + 66} stroke={NAVY} strokeWidth={1.5} />
          ))}
          {[1, 2, 3].map((r) => (
            <line key={`r${r}`} x1={SHEET.x - 90} y1={SHEET.y - 66 + r * 33} x2={SHEET.x + 90} y2={SHEET.y - 66 + r * 33} stroke={NAVY} strokeWidth={1.5} />
          ))}
          <text x={SHEET.x} y={SHEET.y + 100} textAnchor="middle" fontSize={16} fontWeight={600} fill={NAVY} fontFamily={FONT}>
            Spreadsheet
          </text>
        </g>
      </g>
      <Caption name="sh-c2">Four brands, four runs.</Caption>
      <Caption name="sh-c3">Then stitched together by hand.</Caption>

      {/* Scene 4: three intent cards */}
      <g style={play("sh-s4")}>
        {[
          { title: "Spend based", sub: "I have a budget.", dashed: false },
          { title: "Goal based", sub: "I have a target.", dashed: false },
          { title: "In flight", sub: "Adjust a live plan.", dashed: true },
        ].map((card, i) => {
          const x = 120 + i * 290;
          return (
            <g key={card.title} className="sh-anim" style={play(`sh-card-${i}`)}>
              <rect
                x={x}
                y={170}
                width={260}
                height={170}
                rx={16}
                fill="#ffffff"
                stroke={card.dashed ? "#b9c2d2" : LINE}
                strokeWidth={2}
                strokeDasharray={card.dashed ? "8 6" : undefined}
              />
              <rect x={x + 24} y={196} width={40} height={40} rx={10} fill={card.dashed ? "#c9d0dc" : BLUE} />
              <text x={x + 24} y={276} fontSize={24} fontWeight={700} fill={card.dashed ? "#8a94a6" : NAVY} fontFamily={FONT}>
                {card.title}
              </text>
              <text x={x + 24} y={306} fontSize={16} fill={card.dashed ? "#8a94a6" : "#4a5670"} fontFamily={FONT}>
                {card.sub}
              </text>
            </g>
          );
        })}
        {/* Goal based gets picked */}
        <rect
          x={408}
          y={168}
          width={264}
          height={174}
          rx={18}
          fill="none"
          stroke={BLUE}
          strokeWidth={4}
          style={play("sh-pick")}
        />
      </g>
      <Caption name="sh-c4">Start with what you’re trying to do.</Caption>

      {/* Scene 5: one journey, 4 → 1 */}
      <g style={play("sh-s5")}>
        {STEPS.map((step, i) => {
          const x = STEP_X0 + i * (STEP_W + STEP_GAP);
          return (
            <g key={step}>
              <rect x={x} y={196} width={STEP_W} height={60} rx={14} fill="#ffffff" stroke={LINE} strokeWidth={2} />
              <g style={play(`sh-step-${i}`)}>
                <rect x={x} y={196} width={STEP_W} height={60} rx={14} fill={i === 2 ? BLUE : NAVY} />
                <text x={x + STEP_W / 2} y={233} textAnchor="middle" fontSize={20} fontWeight={600} fill="#ffffff" fontFamily={FONT}>
                  {step}
                </text>
              </g>
              {i < STEPS.length - 1 && (
                <text x={x + STEP_W + STEP_GAP / 2} y={234} textAnchor="middle" fontSize={22} fill={NAVY} fontFamily={FONT}>
                  →
                </text>
              )}
            </g>
          );
        })}
        <text x={540} y={300} textAnchor="middle" fontSize={16} fill="#4a5670" fontFamily={FONT}>
          Only the Plan stage changes with the approach.
        </text>
        <g className="sh-anim" style={play("sh-total")}>
          <text x={540} y={420} textAnchor="middle" fontSize={84} fontWeight={700} fill={NAVY} fontFamily={FONT}>
            4 <tspan fill={BLUE}>→ 1</tspan>
          </text>
        </g>
        <text x={540} y={556} textAnchor="middle" fontSize={30} fontWeight={700} fill={NAVY} fontFamily={FONT}>
          One portfolio, one run.
        </text>
      </g>
    </svg>
  );
}
