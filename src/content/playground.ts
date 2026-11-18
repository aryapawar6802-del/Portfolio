import type { AccentName } from "./palette";

/**
 * Side projects on the home page. Text in [square brackets] is still to be
 * written and shows as a marked placeholder; an item with no `image` shows
 * an empty frame describing what goes there.
 */
export type PlayItem = {
  kind: string;
  title: string;
  line: string;
  /** Path under /public once the picture exists. */
  image?: string;
  /** Describes the missing picture until `image` is set. */
  placeholder: string;
  /** Tint for the card, from the riso palette. Plain white without one. */
  accent?: AccentName;
};

export const playground: PlayItem[] = [
  {
    kind: "Data, for fun",
    title: "[Your free-time viz #1]",
    line: "[What it shows, the tool you used, one thing that surprised you]",
    placeholder: "[Your visualisation]",
  },
  {
    kind: "Data, for fun",
    title: "[Your free-time viz #2]",
    line: "[What it shows, the tool you used, one thing that surprised you]",
    placeholder: "[Your visualisation]",
  },
  {
    kind: "Data, by hand",
    title: "A running log, drawn by hand",
    line: "[Your training weeks as a brush-pen drawing, Dear Data style]",
    placeholder: "[Scan of the hand-drawn chart]",
    accent: "amber",
  },
  {
    kind: "Tool",
    title: "Decision-log tool",
    line: "Turns meeting transcripts into a decision log and task list.",
    placeholder: "[Short demo video or screenshot]",
    accent: "blue",
  },
  {
    kind: "Made by hand",
    title: "A card deck in brush pen",
    line: "[One line on why you made it]",
    placeholder: "[Photo of the cards]",
    accent: "red",
  },
];
