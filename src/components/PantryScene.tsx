"use client";

import { useEffect, useRef, useState } from "react";
import { HandBase, HandFingers } from "./HandArt";

const VIEW = { w: 900, h: 620 };
const BOWL = { x: 450, y: 392 };
const SHELF_Y = 178;

/**
 * The single food beat: labelled jars on a shelf above, the finished bowl
 * held out below.
 *
 * One image doing both jobs — the jars name what goes in, the offered bowl
 * is the invitation — which is why the site no longer needs a separate
 * skills illustration and a separate contact illustration.
 */
type Jar = {
  word: string;
  cx: number;
  fill: string;
  shade: string;
  label: string;
};

/* Colours match the case study accents, so a jar and a study read as the
   same thing. `label` is the darkened variant used for the jar's text. */
/* Drained to line-work. Only the pot below keeps colour, so the eye lands
   there — the jars are what goes in, the broth is the thing itself. */
const INK = "#111111";
const JARS: Jar[] = [
  { word: "research", cx: 168, fill: "none", shade: INK, label: INK },
  { word: "onboarding", cx: 309, fill: "none", shade: INK, label: INK },
  { word: "systems", cx: 450, fill: "none", shade: INK, label: INK },
  { word: "workflow", cx: 591, fill: "none", shade: INK, label: INK },
  { word: "craft", cx: 732, fill: "none", shade: INK, label: INK },
];

export function PantryScene() {
  const ref = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setPlaying(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`kitchen ${playing ? "is-playing" : ""}`}>
      {/* Five labels across 900 units shrink past legibility on a phone, so
          the scene scrolls in its own box rather than shrinking the type. */}
      <div className="-mx-6 overflow-x-auto px-6 sm:mx-0 sm:px-0">
        <div className="min-w-[640px]">
          <svg
            viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
            className="w-full"
            role="img"
            aria-label="A shelf of labelled jars — research, onboarding, systems, workflow, craft — above a pair of bangled hands holding out a bowl of finished broth."
          >
            <defs>
              <linearGradient id="p-broth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F2BC5C" />
                <stop offset="100%" stopColor="#D98F27" />
              </linearGradient>
              <clipPath id="p-panel">
                <rect width={VIEW.w} height={VIEW.h} rx={18} />
              </clipPath>
              <clipPath id="p-bowl-clip">
                <ellipse cx={BOWL.x} cy={BOWL.y} rx={148} ry={50} />
              </clipPath>
            </defs>

            <g clipPath="url(#p-panel)">
              <rect width={VIEW.w} height={VIEW.h} rx={18} fill="none" />

              {/* jars */}
              {JARS.map((jar, i) => (
                <g
                  key={jar.word}
                  className="k-jar"
                  style={{ "--d": `${0.15 + i * 0.09}s` } as React.CSSProperties}
                >
                  {/* glass body */}
                  <rect x={jar.cx - 54} y={62} width={108} height={116} rx={9} fill="none" stroke={INK} strokeWidth={2.4} />
                  {/* contents, filling most of the jar */}
                  <path
                    d={`M${jar.cx - 48} 104 h96 v62 a8 8 0 0 1 -8 8 h-80 a8 8 0 0 1 -8 -8 z`}
                    fill="none"
                    stroke={INK}
                    strokeWidth={2}
                  />
                  <line x1={jar.cx - 48} y1={104} x2={jar.cx + 48} y2={104} stroke={INK} strokeWidth={2} />
                  {/* lid */}
                  <rect x={jar.cx - 60} y={44} width={120} height={24} rx={4} fill="none" stroke={INK} strokeWidth={2.4} />
                  
                  {/* label band */}
                  
                  <text
                    x={jar.cx}
                    y={142}
                    textAnchor="middle"
                    fontSize={13}
                    fontWeight={600}
                    fill={jar.label}
                    fontFamily="var(--font-archivo), system-ui, sans-serif"
                  >
                    {jar.word}
                  </text>
                  {/* glass highlight */}
                  
                </g>
              ))}

              {/* shelf */}
              <g className="k-jar" style={{ "--d": "0.1s" } as React.CSSProperties}>
                <line x1={84} y1={SHELF_Y + 4} x2={816} y2={SHELF_Y + 4} stroke={INK} strokeWidth={3} strokeLinecap="round" />
              </g>

              {/* steam, rising between the shelf and the bowl */}
              <g fill="none" stroke={INK} strokeWidth={3} opacity={0.55} strokeLinecap="round">
                {[
                  { d: "M400 356 q-13 -28 2 -48 q15 -20 2 -36", delay: "0.9s" },
                  { d: "M450 344 q-15 -30 0 -52 q15 -22 0 -38", delay: "1.35s" },
                  { d: "M500 356 q-13 -28 2 -48 q15 -20 2 -36", delay: "1.8s" },
                ].map((s) => (
                  <path key={s.d} className="k-steam" d={s.d} style={{ "--d": s.delay } as React.CSSProperties} />
                ))}
              </g>

              {/* hands come in from below, cradling the bowl from either side */}
              <g className="k-hand">
                <g transform="translate(238 534) rotate(26)">
                  <HandBase />
                </g>
                <g transform="translate(662 534) scale(-1 1) rotate(26)">
                  <HandBase />
                </g>
              </g>

              {/* bowl */}
              <g>
                
                <path
                  d={`M${BOWL.x - 148} ${BOWL.y} a148 50 0 0 0 296 0 l-28 86 a122 32 0 0 1 -240 0 z`}
                  fill="none"
                  stroke={INK}
                  strokeWidth={3}
                />
                <ellipse cx={BOWL.x} cy={BOWL.y} rx={148} ry={50} fill="none" stroke={INK} strokeWidth={3} />
                <ellipse cx={BOWL.x} cy={BOWL.y} rx={131} ry={43} fill="url(#p-broth)" />
                <g clipPath="url(#p-bowl-clip)">
                  <ellipse
                    className="k-brew"
                    cx={BOWL.x}
                    cy={BOWL.y}
                    rx={129}
                    ry={41}
                    fill="url(#p-broth)"
                    style={{ transformOrigin: `${BOWL.x}px ${BOWL.y}px` }}
                  />
                  {/* one fleck per jar, so the bowl visibly contains the shelf */}
                  <ellipse cx={BOWL.x - 76} cy={BOWL.y + 8} rx={12} ry={5} fill="#6E9E52" opacity={0.85} />
                  <ellipse cx={BOWL.x - 24} cy={BOWL.y - 16} rx={10} ry={4} fill="#E2762F" opacity={0.8} />
                  <ellipse cx={BOWL.x + 12} cy={BOWL.y + 17} rx={10} ry={4} fill="#8155A6" opacity={0.7} />
                  <ellipse cx={BOWL.x + 66} cy={BOWL.y - 11} rx={11} ry={5} fill="#C8443C" opacity={0.8} />
                  <ellipse cx={BOWL.x + 96} cy={BOWL.y + 12} rx={10} ry={4} fill="#E5B93C" opacity={0.85} />
                  <ellipse cx={BOWL.x - 48} cy={BOWL.y - 4} rx={24} ry={8} fill="#F8D386" opacity={0.6} />
                </g>
              </g>

              {/* fingers close over the rim, so the bowl is genuinely held */}
              <g className="k-hand">
                <g transform="translate(238 534) rotate(26)">
                  <HandFingers />
                </g>
                <g transform="translate(662 534) scale(-1 1) rotate(26)">
                  <HandFingers />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
