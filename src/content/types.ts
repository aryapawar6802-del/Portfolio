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
 * A block whose heading already names the section can set `nav` instead,
 * which lists it in the navigator without printing a label above it.
 *
 * Text fields render `**bold**` and `*italic*`, plus the [FILL: …] markers.
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
  /** What the number measures, sentence case — e.g. "Activation". */
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
  | { type: "prose"; eyebrow?: string; nav?: string; heading?: string; body: string[] }
  /** Pull quote. `author`/`role` turn it into an attributed testimonial. */
  | { type: "quote"; eyebrow?: string; text: string; author?: string; role?: string }
  /** Bulleted list, optionally under its own heading. */
  | {
      type: "list";
      eyebrow?: string;
      nav?: string;
      heading?: string;
      intro?: string | string[];
      items: string[];
      outro?: string | string[];
    }
  /** Metric row rendered with the delta-arrow signature. */
  | { type: "metrics"; eyebrow?: string; items: Delta[] }
  /** Big-number tile grid — the "outcome at a glance" pattern. */
  | {
      type: "stats";
      eyebrow?: string;
      nav?: string;
      heading?: string;
      items: { value: string; label: string }[];
    }
  /** Numbered findings — research insights, problem breakdowns. */
  | {
      type: "numbered";
      eyebrow?: string;
      nav?: string;
      heading?: string;
      /** Render the heading one step down, as a sub-section of the block above. */
      sub?: boolean;
      intro?: string | string[];
      items: NumberedItem[];
      outro?: string | string[];
    }
  /** Two-column comparison table, e.g. old way against new way. */
  | {
      type: "table";
      eyebrow?: string;
      nav?: string;
      heading?: string;
      intro?: string | string[];
      columns: [string, string];
      rows: [string, string][];
      outro?: string | string[];
    }
  /** Short statements as quote cards, side by side. */
  | {
      type: "quotes";
      eyebrow?: string;
      nav?: string;
      heading?: string;
      intro?: string | string[];
      items: { text: string; label?: string }[];
      outro?: string | string[];
    }
  /**
   * Step-by-step flows set next to each other, e.g. the same task before
   * and after. `highlight` puts a column in the study's colour.
   */
  | {
      type: "timeline";
      eyebrow?: string;
      nav?: string;
      heading?: string;
      intro?: string | string[];
      columns: {
        label: string;
        highlight?: boolean;
        steps: { title: string; body?: string }[];
        end?: string;
      }[];
      outro?: string | string[];
    }
  /**
   * Rows that run through the same stages, with one stage that differs per
   * row. `highlight` is that stage's index; `future` greys a row out.
   */
  | {
      type: "journey";
      eyebrow?: string;
      nav?: string;
      heading?: string;
      intro?: string | string[];
      highlight?: number;
      rows: { label: string; sub?: string; stages: string[]; future?: boolean }[];
      outro?: string | string[];
    }
  /**
   * A named diagram drawn in code, plus the requests it absorbs: each one
   * says which object it plugs into.
   */
  | {
      type: "diagram";
      eyebrow?: string;
      nav?: string;
      heading?: string;
      intro?: string | string[];
      name: "junctions";
      plugs?: { request: string; object: string; note: string }[];
      outro?: string | string[];
    }
  /**
   * Design directions weighed against each other: each one's framing, its
   * happy-path flow and four trade-offs. `picked` marks the recommendation.
   */
  | {
      type: "options";
      eyebrow?: string;
      nav?: string;
      heading?: string;
      intro?: string | string[];
      items: {
        name: string;
        framing: string;
        flow: string[];
        optimisesFor: string;
        tradesAway: string;
        winsWhen: string;
        risks: string;
        picked?: boolean;
      }[];
      outro?: string | string[];
    }
  /**
   * Final screens, each with a heading, an image and a note. Omit `src` and
   * the image renders as a labelled empty slot, as in the `image` block.
   */
  | {
      type: "screens";
      eyebrow?: string;
      nav?: string;
      heading?: string;
      items: {
        heading: string;
        src?: string;
        alt?: string;
        caption?: string;
        /** Native width ÷ height, as on the `image` block. Defaults to 16:9. */
        ratio?: number;
        body: string;
      }[];
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
  | {
      type: "image";
      src?: string;
      alt?: string;
      caption?: string;
      /**
       * Native width ÷ height. The frame matches the artwork so nothing is
       * ever cropped; screens are 16:9, boards and diagrams are not.
       */
      ratio?: number;
    };

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
  /**
   * Replaces the default Role / Timeline / Status / Platform grid in the
   * page header. The client then shows here instead of under the title.
   */
  details?: { label: string; value: string }[];
  /** Looping hero animation. The GIF plays where `<video>` can't. */
  heroVideo?: { mp4: string; gif: string; alt: string; ratio: number };
  /** Hero animation drawn in code, by name, instead of a video file. */
  heroArt?: "simulator";
  /** Illustration beside the title, by name. */
  illustration?: "cpg" | "retail";
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
