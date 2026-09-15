/**
 * Study accents, taken directly from the ingredients on the chopping board.
 *
 * This is what ties the illustration to the rest of the page: the colours in
 * the pot are the same colours the work is keyed to, so the scene reads as
 * the site's legend rather than as a picture dropped into it.
 *
 * `solid` is for fills and rules only. `ink` is the darkened variant that
 * clears WCAG AA on paper — use it for anything that is text.
 */
export const ACCENTS = {
  green: { solid: "#6E9E52", ink: "#3F5C2C", wash: "#EDF3E4" },
  orange: { solid: "#E2762F", ink: "#8E4413", wash: "#FBEBDD" },
  purple: { solid: "#8155A6", ink: "#533470", wash: "#F0E8F6" },
  red: { solid: "#C8443C", ink: "#8C2823", wash: "#FBE6E4" },
  amber: { solid: "#E5B93C", ink: "#6E5209", wash: "#F0EBDD" },
  blue: { solid: "#3A6EA5", ink: "#234769", wash: "#E5EBF2" },
} as const;

export type AccentName = keyof typeof ACCENTS;
