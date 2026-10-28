/**
 * Footer illustration: skill tags hop into a pot one at a time while it
 * bubbles away. Then the tags come back and it starts again.
 *
 * Line-work in ink on white, like the rest of the site. Each tag gets its
 * own keyframes (generated below) so the hops can be staggered within one
 * shared loop, which keeps every cycle in step without JS timers. Under
 * reduced motion the global rule jumps every animation to its end state:
 * the tags sit on the shelf above the pot and nothing moves.
 */

const INK = "#111111";
const LOOP = "11s";
const POT = { x: 180, y: 214 };

/* Base positions are the shelf the tags wait on; the hop goes from there
   into the pot's mouth. */
const SKILLS = [
  { word: "Research", x: 70, y: 34, tilt: -10 },
  { word: "Systems thinking", x: 196, y: 30, tilt: 8 },
  { word: "Figma", x: 306, y: 38, tilt: -6 },
  { word: "Prototyping", x: 74, y: 80, tilt: 12 },
  { word: "Design systems", x: 196, y: 78, tilt: -12 },
  { word: "OOUX", x: 302, y: 86, tilt: 6 },
];

const chipWidth = (word: string) => Math.round(word.length * 6.7 + 26);

function keyframes() {
  return SKILLS.map((s, i) => {
    const start = 6 + i * 8.5;
    const dx = POT.x - s.x;
    const dy = POT.y - 6 - s.y;
    return `
@keyframes hop-${i} {
  0%, ${start}% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
  ${start + 3.5}% { transform: translate(${dx * 0.55}px, ${dy * 0.3 - 46}px) rotate(${s.tilt}deg) scale(0.9); opacity: 1; }
  ${start + 7}% { transform: translate(${dx}px, ${dy}px) rotate(${s.tilt * 2}deg) scale(0.25); opacity: 0; }
  91% { transform: translate(0, -14px) rotate(0deg) scale(1); opacity: 0; }
  97%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
}`;
  }).join("\n");
}

const STYLES = `
${keyframes()}
@keyframes pot-steam {
  0% { transform: translateY(8px); opacity: 0; }
  30% { opacity: 0.55; }
  100% { transform: translateY(-34px); opacity: 0; }
}
@keyframes bubble {
  0%, 100% { transform: scale(0.2); opacity: 0; }
  40% { transform: scale(1); opacity: 1; }
  70% { transform: scale(1.15); opacity: 0; }
}
@keyframes stir {
  0%, 100% { transform: rotate(-9deg); }
  50% { transform: rotate(9deg); }
}
@keyframes flame {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.72); }
}
.sp-chip, .sp-steam, .sp-bubble, .sp-spoon, .sp-flame {
  transform-box: fill-box;
}
.sp-chip { transform-origin: center; }
.sp-steam { animation: pot-steam 2.6s ease-out infinite; }
.sp-bubble { transform-origin: center; animation: bubble 1.8s ease-in-out infinite; }
.sp-spoon { transform-origin: 0% 100%; animation: stir 2.2s ease-in-out infinite; }
.sp-flame { transform-origin: center bottom; animation: flame 0.9s ease-in-out infinite; }
`;

export function SkillPot({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 320"
      className={className}
      role="img"
      aria-label="Skill tags (research, systems thinking, Figma, prototyping, design systems, OOUX) hop one by one into a bubbling pot."
    >
      <style>{STYLES}</style>

      {/* steam */}
      <g fill="none" stroke={INK} strokeWidth={2} strokeLinecap="round">
        {[150, 180, 210].map((x, i) => (
          <path
            key={x}
            className="sp-steam"
            d={`M${x} 186 q-8 -12 0 -22 q8 -10 0 -20`}
            style={{ animationDelay: `${i * 0.7}s` }}
          />
        ))}
      </g>


      {/* spoon, behind the rim */}
      <g className="sp-spoon">
        <line x1={POT.x + 18} y1={POT.y} x2={POT.x + 62} y2={POT.y - 74} stroke={INK} strokeWidth={4} strokeLinecap="round" />
      </g>

      {/* pot */}
      <g stroke={INK} strokeWidth={2.6} strokeLinejoin="round">
        <path d={`M${POT.x - 92} ${POT.y} q-20 0 -20 14 q0 10 16 10`} fill="none" />
        <path d={`M${POT.x + 92} ${POT.y} q20 0 20 14 q0 10 -16 10`} fill="none" />
        <path
          d={`M${POT.x - 86} ${POT.y} L${POT.x - 74} ${POT.y + 62} Q${POT.x} ${POT.y + 82} ${POT.x + 74} ${POT.y + 62} L${POT.x + 86} ${POT.y} Z`}
          fill="#ffffff"
        />
        <ellipse cx={POT.x} cy={POT.y} rx={88} ry={15} fill="#ffffff" />
        <ellipse cx={POT.x} cy={POT.y + 1} rx={76} ry={10} fill="#e7e7e4" strokeWidth={1.6} />
      </g>

      {/* bubbles on the surface */}
      <g fill="none" stroke={INK} strokeWidth={1.6}>
        {[
          { x: POT.x - 38, r: 5, d: "0s" },
          { x: POT.x - 6, r: 4, d: "0.6s" },
          { x: POT.x + 30, r: 6, d: "1.1s" },
          { x: POT.x + 54, r: 3.5, d: "0.3s" },
        ].map((b) => (
          <circle key={b.x} className="sp-bubble" cx={b.x} cy={POT.y + 1} r={b.r} style={{ animationDelay: b.d }} />
        ))}
      </g>

      {/* flames */}
      <g fill="none" stroke={INK} strokeWidth={2} strokeLinejoin="round">
        {[POT.x - 34, POT.x, POT.x + 34].map((x, i) => (
          <path
            key={x}
            className="sp-flame"
            d={`M${x} 312 c-10 -8 -8 -18 0 -26 c8 8 10 18 0 26 z`}
            style={{ animationDelay: `${i * 0.25}s` }}
          />
        ))}
      </g>

      {/* skill tags */}
      {SKILLS.map((s, i) => {
        const w = chipWidth(s.word);
        return (
          <g key={s.word} transform={`translate(${s.x} ${s.y})`}>
            <g className="sp-chip" style={{ animation: `hop-${i} ${LOOP} ease-in-out infinite` }}>
              <rect x={-w / 2} y={-13} width={w} height={26} rx={13} fill="#ffffff" stroke={INK} strokeWidth={1.8} />
              <text
                x={0}
                y={4.5}
                textAnchor="middle"
                fontSize={12}
                fontWeight={500}
                fill={INK}
                fontFamily="var(--font-archivo), system-ui, sans-serif"
              >
                {s.word}
              </text>
            </g>
          </g>
        );
      })}
    </svg>
  );
}
