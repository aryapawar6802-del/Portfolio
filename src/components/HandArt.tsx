/**
 * Shared hand primitives for the two illustrated beats — chopping mid-page,
 * serving at the close.
 *
 * Everything is drawn around a local origin at the centre of the palm, so a
 * hand can be placed, rotated and mirrored with a single transform on the
 * caller's side. Absolute coordinates would have locked these to one scene.
 */

/* Line-work: the hands are drawn, not filled, so the broth is the only
   colour in the scene. The bangles stay as outlined bands — they read as
   jewellery from their stacking and spacing, not from being gold. */
export const INK = "#111111";
export const SKIN = "none";
export const SKIN_SHADE = "none";
export const SKIN_DEEP = "none";
export const GOLD = "none";
export const GOLD_DEEP = INK;
const STROKE = 2.4;

const PALM_H = 92;
const ARM_TOP = PALM_H / 2 - 10;
const ARM_LEN = 320;

/* Real gaps between bands so skin shows through and the stack reads as
   separate bracelets rather than one ribbed cylinder. */
const BANGLES = [
  { d: 6, h: 13 },
  { d: 25, h: 8 },
  { d: 40, h: 14 },
  { d: 61, h: 10 },
  { d: 78, h: 13 },
  { d: 98, h: 7 },
  { d: 112, h: 14 },
  { d: 133, h: 9 },
];

const FINGERS = [
  { len: 74, w: 24 },
  { len: 90, w: 25 },
  { len: 84, w: 25 },
  { len: 66, w: 23 },
];

/** Forearm, palm and bangles — drawn behind whatever the hand is holding. */
export function HandBase() {
  return (
    <g>
      <rect x={-54} y={ARM_TOP} width={108} height={ARM_LEN} rx={42} fill="none" stroke={INK} strokeWidth={STROKE} />
      

      {/* thumb, tucked to the outside edge */}
      <rect
        x={38}
        y={-50}
        width={26}
        height={84}
        rx={13}
        fill="none"
        stroke={INK}
        strokeWidth={STROKE}
        transform="rotate(20 51 -16)"
      />

      <rect x={-56} y={-46} width={112} height={PALM_H} rx={38} fill="none" stroke={INK} strokeWidth={STROKE} />
      

      {BANGLES.map((b) => (
        <g key={b.d}>
          <rect
            x={-55}
            y={ARM_TOP + b.d}
            width={110}
            height={b.h}
            rx={b.h / 2}
            fill="none"
            stroke={INK}
            strokeWidth={1.8}
          />

        </g>
      ))}
    </g>
  );
}

/** Fingers and rings — drawn over whatever the hand is holding, so the grip closes. */
export function HandFingers() {
  return (
    <g>
      {FINGERS.map((f, i) => {
        const fx = -49 + i * 26;
        const top = -128 + (90 - f.len);
        return (
          <g key={i}>
            <rect x={fx} y={top} width={f.w} height={f.len + 42} rx={f.w / 2} fill="none" stroke={INK} strokeWidth={STROKE} />
            
            {i === 1 && (
              <>
                <rect x={fx - 2} y={top + 34} width={f.w + 4} height={10} rx={4} fill="none" stroke={INK} strokeWidth={1.8} />
                <rect x={fx - 2} y={top + 49} width={f.w + 4} height={7} rx={3} fill="none" stroke={INK} strokeWidth={1.8} />
              </>
            )}
            {i === 2 && (
              <rect x={fx - 2} y={top + 30} width={f.w + 4} height={11} rx={4} fill="none" stroke={INK} strokeWidth={1.8} />
            )}
            {i === 3 && (
              <rect x={fx - 2} y={top + 24} width={f.w + 4} height={9} rx={4} fill="none" stroke={INK} strokeWidth={1.8} />
            )}
          </g>
        );
      })}
    </g>
  );
}
