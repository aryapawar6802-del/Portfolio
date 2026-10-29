/**
 * Shared risograph register for the title illustrations: one ink palette
 * and one print filter, so every still life reads as the same series.
 */

export const RISO = {
  orange: "#F28C28",
  red: "#E8452C",
  pink: "#E04A8B",
  pinkLight: "#F27BAE",
  teal: "#2AA7B8",
  tealLight: "#5CC4D1",
  yellow: "#F6C343",
  cobalt: "#2E4FC7",
  cream: "#FFF4DE",
};

/**
 * Hand-printed edges (a low-frequency wobble on every shape) plus a grain
 * of sparse pale specks kept to the inked shapes. Each SVG passes its own
 * id so two illustrations never share a filter reference.
 */
export function RisoFilter({ id }: { id: string }) {
  return (
    <filter id={id} x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" result="wobble" />
      <feDisplacementMap in="SourceGraphic" in2="wobble" scale="3.5" xChannelSelector="R" yChannelSelector="G" result="inked" />
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" result="noise" />
      <feColorMatrix
        in="noise"
        type="matrix"
        values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 3.2 -1.75"
        result="specks"
      />
      <feComposite in="specks" in2="inked" operator="in" result="grain" />
      <feMerge>
        <feMergeNode in="inked" />
        <feMergeNode in="grain" />
      </feMerge>
    </filter>
  );
}
