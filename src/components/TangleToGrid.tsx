/**
 * Title illustration for the discovery study: a tangle of threads on the
 * left, with three of them pulling straight into the rows of a tidy grid.
 * It draws the study's title, a messy problem becoming a clear model, so
 * unlike the two still lifes it shows the idea and not the client's world.
 *
 * Same print as the still lifes: the shared risograph register in Riso.tsx,
 * offset cobalt shadows, flat inks and a printed grain. The confetti only
 * sits on the messy side.
 */

import { RISO, RisoFilter } from "./Riso";

const { orange: ORANGE, pink: PINK, teal: TEAL, yellow: YELLOW, cobalt: COBALT, cream: CREAM } = RISO;

type Point = [number, number];

/** A smooth line through the points (Catmull-Rom, written as cubic Béziers). */
const smooth = (points: Point[]) => {
  let d = `M${points[0][0]} ${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const [ax, ay] = points[Math.max(i - 1, 0)];
    const [bx, by] = points[i];
    const [cx, cy] = points[i + 1];
    const [ex, ey] = points[Math.min(i + 2, points.length - 1)];
    d += ` C${bx + (cx - ax) / 6} ${by + (cy - ay) / 6} ${cx - (ex - bx) / 6} ${cy - (ey - by) / 6} ${cx} ${cy}`;
  }
  return d;
};

const CELL = 36;
const GAP = 8;
const GRID = { x: 310, y: 62, cols: 5, rows: 6 };
const rowY = (row: number) => GRID.y + row * (CELL + GAP);
const rowMiddle = (row: number) => rowY(row) + CELL / 2;
const BALL = { x: 140, y: 188, r: 106 };

/** Each thread wanders round the tangle, then runs straight into its row. */
const THREADS: { row: number; color: string; points: Point[] }[] = [
  {
    row: 5,
    color: ORANGE,
    points: [[140, 85], [230, 180], [150, 290], [50, 230], [60, 120], [180, 120], [205, 235], [110, 265], [85, 165], [170, 140], [190, 210], [120, 235], [115, 165], [165, 190], [140, 260], [190, 276], [250, rowMiddle(5)], [GRID.x + 4, rowMiddle(5)]],
  },
  {
    row: 3,
    color: PINK,
    points: [[215, 130], [120, 100], [50, 160], [90, 260], [200, 280], [235, 190], [150, 105], [70, 200], [150, 270], [210, 220], [130, 160], [75, 130], [60, 240], [170, 240], [195, 175], [222, 204], [262, rowMiddle(3)], [GRID.x + 4, rowMiddle(3)]],
  },
  {
    row: 1,
    color: TEAL,
    points: [[70, 130], [160, 90], [225, 150], [170, 250], [70, 270], [45, 180], [130, 120], [215, 205], [140, 285], [60, 220], [110, 150], [190, 165], [165, 225], [95, 225], [100, 170], [150, 180], [212, 146], [262, rowMiddle(1)], [GRID.x + 4, rowMiddle(1)]],
  },
];

const COLS = Array.from({ length: GRID.cols }, (_, i) => i);
const ROWS = Array.from({ length: GRID.rows }, (_, i) => i);

export function TangleToGrid({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="16 30 524 330"
      className={className}
      role="img"
      aria-label="Illustration: a messy tangle of coloured threads, with three threads pulling straight into three neat rows of a tidy grid, in flat print colours with blue shadows."
    >
      <defs>
        <RisoFilter id="tangle-print" />
      </defs>

      <g filter="url(#tangle-print)">
        {/* ---------- shadows: offset cobalt copies, down and right ---------- */}
        <g opacity={0.9} style={{ mixBlendMode: "multiply" }} transform="translate(10 12)">
          <circle cx={BALL.x} cy={BALL.y} r={BALL.r} fill={COBALT} />
          <rect x={GRID.x} y={GRID.y} width={GRID.cols * CELL + (GRID.cols - 1) * GAP} height={GRID.rows * CELL + (GRID.rows - 1) * GAP} rx={8} fill={COBALT} />
        </g>

        {/* ---------- confetti, on the messy side only ---------- */}
        {[
          { x: 34, y: 66, r: 6, c: ORANGE },
          { x: 96, y: 40, r: 4, c: PINK },
          { x: 214, y: 58, r: 5, c: YELLOW },
          { x: 262, y: 92, r: 4, c: TEAL },
          { x: 22, y: 300, r: 5, c: YELLOW },
          { x: 80, y: 340, r: 4, c: TEAL },
          { x: 236, y: 340, r: 5, c: PINK },
        ].map((d) => (
          <circle key={`${d.x}-${d.y}`} cx={d.x} cy={d.y} r={d.r} fill={d.c} />
        ))}
        <path d="M144 42 q8 -9 16 0 q8 9 16 0" fill="none" stroke={ORANGE} strokeWidth={5} strokeLinecap="round" />

        {/* ---------- the grid: the rows the threads reach are inked in ---------- */}
        {ROWS.map((row) =>
          COLS.map((col) => {
            const thread = THREADS.find((t) => t.row === row);
            return (
              <rect
                key={`${row}-${col}`}
                x={GRID.x + col * (CELL + GAP)}
                y={rowY(row)}
                width={CELL}
                height={CELL}
                rx={7}
                fill={thread ? thread.color : CREAM}
              />
            );
          }),
        )}

        {/* ---------- the tangle's body, so the threads read as one ball ---------- */}
        <circle cx={BALL.x} cy={BALL.y} r={BALL.r} fill={YELLOW} />

        {/* ---------- the threads ---------- */}
        {THREADS.map((t) => (
          <path key={t.row} d={smooth(t.points)} fill="none" stroke={t.color} strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" />
        ))}
      </g>
    </svg>
  );
}
