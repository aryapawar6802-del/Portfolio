import type { AccentName } from "./palette";

/**
 * Case study content model.
 *
 * The page body is an ordered array of blocks rather than a fixed template.
 * That is deliberate: SCQA is only the framework for the first few studies.
 * A later one can run Story Spine, Sparkline, or anything else by reordering
 * blocks — no layout code changes. `framework` records which structure the
 * author used so the choice stays legible when editing months later.
 *
 * Any block carrying an `eyebrow` becomes a stop in the sticky section
 * navigator, so eyebrows double as the table of contents. Keep them short.
 */

export type Framework =
  | "SCQA"
  | "story-spine"
  | "sparkline"
  | "heros-journey"
  | "custom";

/** A number that moved. The core unit of the whole site. */
export type Delta = {
  /** Starting value. Omit for metrics that had no prior baseline. */
  from?: string;
  /** Ending value. */
  to: string;
  /** What the number measures, lowercase — e.g. "activation". */
  label: string;
};

/** One numbered finding, problem, or decision. */
export type NumberedItem = {
  heading: string;
  body: string;
  /** Optional verbatim user quote sitting under the item. */
  quote?: string;
};

export type Block =
  /** Scannable summary table. Recruiters read this and nothing else. */
  | {
      type: "tldr";
      eyebrow?: string;
      rows: { label: string; value: string }[];
    }
  /** Labelled prose section. `eyebrow` is the small chip and TOC label. */
  | { type: "prose"; eyebrow?: string; heading?: string; body: string[] }
  /** Pull quote. `author`/`role` turn it into an attributed testimonial. */
  | { type: "quote"; eyebrow?: string; text: string; author?: string; role?: string }
  /** Bulleted list, optionally under its own heading. */
  | { type: "list"; eyebrow?: string; heading?: string; items: string[] }
  /** Metric row rendered with the delta-arrow signature. */
  | { type: "metrics"; eyebrow?: string; items: Delta[] }
  /** Big-number tile grid — the "outcome at a glance" pattern. */
  | {
      type: "stats";
      eyebrow?: string;
      heading?: string;
      items: { value: string; label: string }[];
    }
  /** Numbered findings — research insights, problem breakdowns. */
  | {
      type: "numbered";
      eyebrow?: string;
      heading?: string;
      intro?: string;
      items: NumberedItem[];
    }
  /** Numbered items bucketed into themes — the "screen diagnosis" pattern. */
  | {
      type: "themes";
      eyebrow?: string;
      heading?: string;
      groups: { theme: string; items: NumberedItem[] }[];
    }
  /** Before/after decision pairs, grouped by the aspect they changed. */
  | {
      type: "beforeAfter";
      eyebrow?: string;
      heading?: string;
      pairs: { aspect: string; before: string; after: string; note?: string }[];
    }
  /**
   * Image with optional caption. Omit `src` to render a labelled empty
   * slot — useful while a study is written but the screens are not yet
   * exported, so the layout shows exactly what is still missing.
   */
  | { type: "image"; src?: string; alt?: string; caption?: string };

export type CaseStudy = {
  slug: string;
  /** Client or product name, e.g. "Sprouts.ai". */
  company: string;
  /** Card title — the thing you designed, not the company. */
  title: string;
  /** Card description. Two sentences maximum. */
  summary: string;
  /** Domain tags shown on the card, e.g. ["B2B SaaS", "PLG"]. */
  tags: string[];
  /**
   * The tension, asked as a question. This is the case study's H1 — it
   * opens on the problem nobody could explain, not on the result.
   */
  question: string;
  /** Outcome statement. Used where the result should lead, not the tension. */
  headline: string;
  /** Paragraph under the headline, expanding on it. */
  standfirst?: string;
  role: string;
  timeline: string;
  status: string;
  platform: string;
  /** Years shown in the meta line, e.g. "2025–2026". */
  years: string;
  /** Who else was on it, and what they owned. */
  team?: { name: string; scope: string }[];
  tools?: string[];
  /** Card thumbnail. Path under /public. */
  cover?: string;
  /** Which ingredient on the chopping board this study is keyed to. */
  accent: AccentName;
  /** Headline metrics. The first one surfaces on the home page ticker. */
  deltas: Delta[];
  framework: Framework;
  body: Block[];
};
