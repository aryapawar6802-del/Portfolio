/**
 * Hand-drawn divider.
 *
 * Stretched with preserveAspectRatio="none" so one path covers any width.
 * The wobble is small and low-frequency on purpose: enough to read as drawn
 * rather than ruled, not so much that a page of them looks shaky. Reserved
 * for top-level section breaks — using it on dense internal rules (table
 * rows, numbered lists) turns warmth into noise.
 */
export function HandRule({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 7"
      preserveAspectRatio="none"
      className={`block h-[7px] w-full text-rule-strong ${className}`}
    >
      <path
        d="M2 4.1 C 96 2.5, 190 5.2, 286 3.6 S 470 2.2, 566 4.3 S 748 5.4, 844 3.2 S 1026 2.6, 1120 4.4 C 1152 4.9, 1176 3.8, 1198 3.4"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
      />
    </svg>
  );
}
