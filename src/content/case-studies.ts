import type { CaseStudy } from "./types";

/* ============================================================================
 *
 * Every company, metric, quote, and teammate below is invented to exercise the
 * layout. None of it describes real work. Swap in your own; the design assumes
 * each study has at least one `delta` and 2–4 `tags`, and that any block you
 * want in the section navigator carries an `eyebrow`.
 * ========================================================================== */

export const caseStudies: CaseStudy[] = [
  {
    slug: "market-share-calibration",
    accent: "amber",
    company: "Fortune 1 US retailer",
    title: "Market-share calibration",
    summary:
      "A calibration system for a Fortune 1 US retailer — where the software learned to hold the order, so four teams didn\u2019t have to.",
    tags: ["B2B web app", "Agentic AI", "Human-in-the-loop", "Enterprise"],
    question:
      "If the math only took days, why did the numbers take three weeks?",
    headline:
      "Turned a three-week calibration relay into a days-long parallel run",
    standfirst:
      "Calibration went from a two-to-three week loop to a few days. Time on the process is tracking from ~210 hours a cycle to ~45. The work didn\u2019t start with a flow. It started with a data model.",
    role: "Product Designer · Discovery, IA, Interaction & Visual Design",
    timeline: "[add duration] · Phase 1 (Calibration)",
    status: "Shipped",
    platform: "B2B web app · agentic AI, human-in-the-loop",
    years: "[year]",
    team: [
      { name: "Me", scope: "End-to-end UX, IA, interaction and visual design" },
      { name: "One DS lead", scope: "Calibration engine and agentic pipeline" },
      { name: "Product and client stakeholders", scope: "Scope and sign-off" },
    ],
    deltas: [
      { from: "~210 h", to: "~45 h", label: "per cycle" },
      { from: "2\u20133 weeks", to: "days", label: "calibration loop" },
    ],
    framework: "SCQA",
    body: [
      {
        type: "stats",
        eyebrow: "At a glance",
        heading: "What moved",
        items: [
          { value: "~45 h", label: "Per cycle, down from ~210" },
          { value: "Days", label: "Calibration loop, down from two to three weeks" },
          { value: "$3.5K", label: "Monthly saving realised for the first business unit" },
          { value: "4", label: "Teams moved from sequential to parallel" },
        ],
      },
      {
        type: "tldr",
        eyebrow: "TL;DR",
        rows: [
          {
            label: "Problem",
            value:
              "Market-share numbers were calculated in days but took weeks to agree on. Four teams edited them in sequence, and because the numbers roll up, one late edit could quietly undo another team\u2019s sign-off.",
          },
          {
            label: "My contribution",
            value:
              "End-to-end design of the calibration workflow, and the information architecture that made it hold together.",
          },
          { label: "Team", value: "One DS lead, product and client stakeholders, me on design." },
          {
            label: "Result",
            value:
              "~210 hours a cycle → ~45. Sequential, weeks-long calibration became parallel and days-long.",
          },
        ],
      },
      {
        type: "prose",
        eyebrow: "My role",
        heading: "What I owned",
        body: [
          "I led the UX end to end: the guided entry, the summary, the calibration table, the review step, the empty states, and the object model underneath all of it.",
          "I did not own the calibration engine or the agentic pipeline — that was Data Science. I owned everything the human touched. Where the engine\u2019s behaviour shaped the design, I\u2019ve said so, rather than claiming the whole outcome.",
        ],
      },
      {
        type: "prose",
        eyebrow: "The product",
        heading: "What the platform actually does",
        body: [
          "Every month, the retailer has to say how much of each market it holds. Not its sales — its share. The platform takes the raw, calculated estimates and lets a human calibrate them into numbers leadership can defend.",
          "It runs the calibration pipeline automatically, then hands the results to the person: here\u2019s what changed, here\u2019s why, here\u2019s what still needs you. The person adjusts, reviews the impact, and signs off — one level at a time, in an order the tool enforces.",
        ],
      },
      {
        type: "prose",
        eyebrow: "The situation",
        heading: "The business runs on market share, and market share is a guess",
        body: [
          "The company knows its own sales exactly. It does not know its competitors\u2019. So to size a market — Women\u2019s Apparel, Electronics, Pet Care — it estimates the whole from the outside: surveys, credit-card panels, external retail feeds. That data covers a sliver of real sales, it disagrees with itself, and it moves every month.",
          "Before any of it reaches leadership, a human has to calibrate it. Catch the unrealistic jumps. Keep the year-on-year movement believable. Make sure a subcategory and its parent still add up.",
        ],
      },
      {
        type: "prose",
        eyebrow: "The complication",
        heading: "The math was the easy part. The choreography was the problem",
        body: [
          "A cycle ran like this. Numbers were calculated over three or four days. They went out to four business-unit teams. Each team took three or four days to send adjustments back. The numbers were recalculated and published — and then the next team\u2019s edits arrived.",
          "Because everything rolls up the hierarchy, those late edits didn\u2019t land quietly. A change to one department could move a number a different team had already approved; a signed-off figure could come undone without anyone deciding it should. The whole thing lived in spreadsheets and email threads that had no idea any of this was connected.",
          "Two to three weeks per cycle. And it never quite settled.",
          "The tool everyone imagined was a better dashboard. The problem in front of me wasn\u2019t a dashboard problem. It was a dependency problem — being managed by software that didn\u2019t know the dependency existed.",
        ],
      },
      {
        type: "image",
        caption:
          "Current-process flow map. Reverse-engineering the cycle — the loop between \u201cadjust\u201d and \u201crecalibrate\u201d is where the weeks went.",
      },
      {
        type: "prose",
        eyebrow: "The question",
        heading: "What if the tool held the order, instead of the four teams?",
        body: [
          "So the brief quietly changed shape. Not how do we show these numbers better — but whether the software could carry the sequencing the four teams had been carrying by hand.",
        ],
      },
      {
        type: "list",
        eyebrow: "Angles of inquiry",
        heading: "What I chased, with the people who lived it",
        items: [
          "Where does someone even start? What\u2019s already been done this cycle?",
          "When a number looks wrong, what do they actually change — and what are they allowed to change?",
          "How does anyone know a level is finished and safe to build the next one on?",
          "What has to stay true as numbers roll up, and what breaks if it doesn\u2019t?",
        ],
      },
      {
        type: "prose",
        eyebrow: "What I found",
        heading: "A decision system, not a dashboard",
        body: [
          "The person calibrating didn\u2019t want more data on screen. They wanted to be told where the problem was and what to do about it. The old way handed them a spreadsheet and asked them to go find the trouble themselves.",
          "And the hierarchy wasn\u2019t really a menu. It was a chain of dependencies wearing the costume of a navigation tree. A department is the sum of its category groups; you cannot safely touch it until the levels beneath it are locked. Every ounce of the weeks-long chaos traced back to that one fact being unenforced.",
          "Two reframes came out of it, and they ran through everything after: this is a decision system, not a dashboard. And the hierarchy is a rule, not a route.",
        ],
      },
      {
        type: "prose",
        eyebrow: "Object model",
        heading: "The product was really designed here",
        body: [
          "Before a single screen, I modelled the domain as objects and relationships (ORCA). The unit I named was the Calibration Slice — one thing you calibrate, like Department · Total Market. Everything hangs off it: the metrics inside it, the rules run against it, the violations those throw, its status, its change log, and the review and approval steps that carry it to a published number.",
          "Sorting every possible action this way showed the interface needed distinct modes — judging numbers, resolving rule conflicts, signing off — not one flat table of everything at once. The model told me what the screens had to be.",
        ],
      },
      {
        type: "image",
        src: "/work/calibration/00-orca-board.png",
        ratio: 1.5814,
        alt: "The ORCA board: four columns of sticky notes headed Objects, Relationships, Core CTAs and Attributes. Objects include User, Metric, Rule, Workflow, Approval and Published Result. The Relationships column spells out the hierarchy — SBU to Department to Category Group to Category, feeding into the Calibration Slice and its metrics, rules, rule violations, status, change logs, review task and approval task.",
        caption:
          "The ORCA board. The Calibration Slice and its relationships drove every navigation and state decision downstream.",
      },
      {
        type: "beforeAfter",
        eyebrow: "The decisions",
        heading: "Five decisions carried the design",
        pairs: [
          {
            aspect: "01 · The tool starts you in one place, and locks the rest",
            before:
              "Anyone could edit anything — which is exactly how a late edit broke a finished number.",
            after:
              "The home screen opens on the only calibration you are allowed to begin and greys out the rest: finish Department, and Category Group and Category unlock on their own. The dependency in the data model is now the shape of the navigation, so numbers cannot come undone behind you.",
            note: "sequencing is enforced, not suggested",
          },
          {
            aspect: "02 · It leads with the decision, not the data",
            before:
              "A wall of departments and metrics; the person had to find the problem before they could fix it.",
            after:
              "The summary names the situation in a sentence — \u201c07 departments remain blocked due to pricing issues in Apparel and Pet Care\u201d — with two ways in: the blocked ones, or all of them. The AI does the diagnosis; the person makes the call.",
          },
          {
            aspect: "03 · Every number shows its working",
            before:
              "People were asked to trust an adjusted figure they could not interrogate. \u201cWhy did this change?\u201d was the most common question in discovery.",
            after:
              "Each metric sits in three columns at once: last-month reported, calibrated, and uncalibrated. The before, the after, and the raw source, side by side. Trust is not asserted here; it is shown.",
          },
          {
            aspect: "04 · The edges are designed, not just the happy path",
            before:
              "No concept of \u201cnot yet\u201d or \u201ccareful\u201d — so half-finished numbers leaked into published ones.",
            after:
              "Reference values say so plainly when there is nothing to reference yet. Edits save or discard on purpose, guarded by an interrupt. And rules chosen for a run are scoped to that run, so a one-off choice never hardens into silent policy.",
          },
          {
            aspect: "05 · You see the impact before you commit",
            before: "Publish first, discover the consequence later.",
            after:
              "The review step shows the GMV and market-share impact of each department\u2019s calibration before you finalise — while you can still change your mind.",
            note: "impact-before-commit",
          },
        ],
      },
      {
        type: "prose",
        eyebrow: "The screens",
        body: [
          "Client branding is removed from the screens below. Everything else is as built.",
        ],
      },
      {
        type: "image",
        src: "/work/calibration/01-home.png",
        alt: "Home screen. Six calibration cards — Department, Category Group and Category, each against Total Market and Competitor. Only Department · Total Market has an active Calibrate button; the other five are locked.",
        caption:
          "Home screen with locked cards. You can only start where the data model says you may.",
      },
      {
        type: "image",
        src: "/work/calibration/02-home-progress.png",
        alt: "The same home screen after the first calibration is finished. Department · Total Market now reads Completed with a View Details button, and the next two cards have unlocked.",
        caption:
          "On return, the same screen is a progress tracker — one of six steps done, and the next level has opened on its own.",
      },
      {
        type: "image",
        src: "/work/calibration/03-summary.png",
        alt: "Department Calibration Summary. A headline stating that seven departments remain blocked due to pricing issues, with View Blocked and View All actions, a calibration health breakdown, and a list of the top department blockers.",
        caption:
          "The summary names the situation in a sentence, with two ways in: the blocked ones, or all of them.",
      },
      {
        type: "image",
        src: "/work/calibration/04-department-list.png",
        alt: "Department Calibration list filtered to the seven blocked departments, each row showing the fiscal months affected.",
        caption:
          "The blocked queue. Filters carry their counts, so the size of the job is visible before you open anything.",
      },
      {
        type: "image",
        src: "/work/calibration/05-calibration-table.png",
        alt: "A department expanded in the calibration table, showing Market Share, Market Share YoY, GMV, GMV YoY and Digital Mix, each split into LM Reported, Calibrated and Uncalibrated columns across October, November and December, with a Rules column flagging blocking violations.",
        caption:
          "Department Calibration table — LM Reported / Calibrated / Uncalibrated on every metric, so the delta is always legible.",
      },
      {
        type: "image",
        src: "/work/calibration/06-review.png",
        alt: "Calibration Review screen listing every department with its GMV and market-share impact before finalising, with Go back and edit and Finalize actions.",
        caption:
          "The review step shows the impact of each department's calibration before you finalise — while you can still change your mind.",
      },
      {
        type: "prose",
        eyebrow: "The system",
        heading: "End to end",
        body: [
          "Guided entry → set up the run (competitors and rules) → summary (what is blocked, what needs you) → calibrate (adjust, with the full before/after in view) → review (see the impact) → finalise → the next level opens.",
          "Each step retires one failure of the old process. Guided entry kills out-of-order edits. The summary kills manual diagnosis. The transparent table kills blind trust. The review step kills surprise-after-publish.",
        ],
      },
      {
        type: "image",
        src: "/work/calibration/07-calibration-flow.png",
        ratio: 1.5,
        alt: "Calibration flow diagram, titled “Every screen answers a question the calibrator was already asking.” Three stages: Orient, where home doubles as a progress tracker; Calibrate the level, running Summary, Compare, Edit and Approve, with a Blocked branch that loops back to the summary when a rule conflict stops the level; and Unlock, where finalising a level locks it in and opens the one beneath. A return line reads “next level, same four steps”.",
        caption:
          "Each screen tied to the question it answers. The loop back to the summary is the rule conflict; the line along the bottom is the next level, running the same four steps.",
      },
      {
        type: "beforeAfter",
        eyebrow: "Impact",
        heading: "Measured month over month against the manual baseline",
        pairs: [
          { aspect: "Time per cycle (both business units)", before: "~210 hours", after: "~45 hours" },
          { aspect: "Calibration runs", before: "Manual, iterative", after: "Automated, parallel" },
          { aspect: "Team dependency", before: "Sequential", after: "Parallel" },
          { aspect: "Leadership readiness", before: "Late-stage", after: "Early, iterative" },
        ],
      },
      {
        type: "prose",
        heading: "What the saving is worth",
        body: [
          "The time and the untangled dependency are the design\u2019s direct doing — a guided, sequenced, decision-first flow is what turns a three-week relay into a days-long parallel run. That efficiency is now tracked as a saving: about $3.5K a month realised for the first business unit, with the second projected to match — roughly $7K a month once both are live.",
          "Savings are logged against a baseline month to month, so the number is reported, not assumed.",
        ],
      },
      {
        type: "prose",
        eyebrow: "Reflection",
        heading: "The leverage came from refusing to open Figma first",
        body: [
          "The tool feels calm to use, but that calm is downstream of taking one relationship in the data — the roll-up — seriously enough to build the whole interaction around it. The hardest work is invisible in the final screens, which is how it should be.",
          "Next, I\u2019d put the AI\u2019s summary language in front of real users. \u201cWould you like to take action?\u201d works — but an AI that tells you what\u2019s wrong has a trust ceiling worth testing on purpose, not assuming.",
        ],
      },
    ],
  },
  {
    /* Still carries Arya's own [FILL] notes; those render as flagged TODOs
       rather than as prose. */
    slug: "media-investment-optimisation",
    accent: "blue",
    company: "Global CPG company",
    title: "Rapid ROI — media investment optimisation",
    summary:
      "The model was sound and planners kept going back to their spreadsheets. A five-stage wizard asked for structure before it knew what they were solving for, then handed back a number without an argument.",
    tags: ["B2B web app", "Marketing Mix Modeling", "Enterprise", "Data product"],
    question:
      "The model worked. So why were planners still deciding in spreadsheets?",
    headline:
      "Rebuilt a five-stage optimisation flow around the argument, not the inputs",
    standfirst:
      "Marketing Mix Modeling could tell the client\u2019s planners what worked. Rapid ROI put it directly in their hands \u2014 no data science queue. The math was sound. The model worked. And planners kept going back to their spreadsheets.",
    role: "[FILL: e.g. Design lead on the optimization flow \u2014 owned it end to end across Phases 1\u20132]",
    timeline: "[FILL]",
    status: "[FILL]",
    platform: "B2B web app · Marketing Mix Modeling",
    years: "",
    team: [
      { name: "DS lead", scope: "Data science" },
      { name: "PM [FILL]", scope: "Product" },
      { name: "Engineering [FILL]", scope: "Build" },
      { name: "Client stakeholders", scope: "Requirements and sign-off" },
    ],
    deltas: [],
    framework: "SCQA",
    body: [
      {
        type: "tldr",
        eyebrow: "TL;DR",
        rows: [
          {
            label: "Product",
            value:
              "Rapid ROI \u2014 media investment optimisation, powered by Marketing Mix Modeling.",
          },
          {
            label: "Challenge",
            value:
              "Turn a rigid five-stage configuration wizard into a flow planners would actually trust with multi-crore spend decisions.",
          },
          {
            label: "My role",
            value:
              "[FILL: e.g. Design lead on the optimization flow \u2014 owned it end to end across Phases 1\u20132]",
          },
          {
            label: "Team",
            value:
              "Data science, PM [FILL], engineering [FILL], and client stakeholders.",
          },
          {
            label: "Impact",
            value:
              "[FILL: the one line that matters most \u2014 adoption, sign-off, task completion]",
          },
        ],
      },
      {
        type: "prose",
        eyebrow: "The situation",
        heading: "The model worked. Planners kept using spreadsheets",
        body: [
          "The client\u2019s media planners decide where hundreds of crores go \u2014 across brands, across markets, across channels. Marketing Mix Modeling can tell them what worked. It accounts for adstock, for saturation, for the fact that the tenth crore in a channel never returns what the first one did.",
          "Rapid ROI was built to put that model directly in planners\u2019 hands. No data science queue. Ask a question, get an allocation.",
          "The math was sound. The model worked. And planners kept going back to their spreadsheets.",
        ],
      },
      {
        type: "numbered",
        eyebrow: "The complication",
        heading: "Four things were quietly breaking it",
        intro:
          "The flow existed \u2014 five stages, in order: state your intent, set your scope, configure the run, apply your constraints, read your results. The problem wasn\u2019t that any single screen was bad. It was that the flow asked planners to make structural decisions before it knew what they were solving for, and then handed back a number without an argument.",
        items: [
          {
            heading: "It asked for structure before intent",
            body: "Planners were choosing scope, granularity and constraints before the system knew whether they were solving forward \u2014 \u201cI have this budget, allocate it\u201d \u2014 or backward \u2014 \u201cI need to hit this target, tell me what it takes.\u201d Those are mathematically inverse problems. Forcing them down one shared path meant the flow over-asked and under-guided at the same time.",
          },
          {
            heading: "Scope was mathematically ambiguous",
            body: "Pick three regions and four sub-brands. Now: did you select twelve combinations? Only the valid ones? Only the ones the model has coverage for? The screen never said. Different planners read the same selection differently. Nobody filed a ticket about this \u2014 they just quietly stopped believing the output.",
          },
          {
            heading: "Constraints didn\u2019t survive contact with a portfolio",
            body: "Constraints are where planners encode reality: contracted minimums, channel caps, market rules. On one brand, a flat list is fine. On a portfolio \u2014 dozens of brand \u00d7 market \u00d7 channel rows \u2014 planners were scrolling through undifferentiated lines with no way to find anything or apply a rule broadly. The feature worked and was unusable. [FILL: how many rows did a real portfolio run actually produce?]",
          },
          {
            heading: "Results reported. They never explained",
            body: "MROI \u2014 the marginal return that tells you why a channel can or can\u2019t absorb another rupee \u2014 was scattered and duplicated. And when a goal-based target turned out to be impossible, the planner hit a separate screen: Target Not Achievable. A dead end. It named the failure and offered nothing. The only way out was back, and then guesswork.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Why that last one is the whole problem in miniature",
        body: [
          "A planner has to walk into a room and defend this plan to their leadership. A tool that says no without saying why doesn\u2019t just fail a task. It sends them back to the spreadsheet, where at least they know how the number was made.",
        ],
      },
      {
        type: "list",
        eyebrow: "Angles of inquiry",
        heading: "What I chased",
        items: [
          "What does a planner need to see before they\u2019ll defend a number they didn\u2019t calculate?",
          "Where does trust actually break \u2014 at the input, or at the output?",
          "What does \u201cset your constraints\u201d mean when there are two hundred of them?",
          "And when the honest answer is that target isn\u2019t reachable \u2014 what is the useful thing to say next?",
          "[FILL: name the method concretely \u2014 usability sessions, stakeholder interviews, watching a planner work. Without it these questions read as rhetorical.]",
        ],
      },
      {
        type: "prose",
        eyebrow: "What I found",
        heading: "The trust gap wasn\u2019t in the model. It was in the explanation",
        body: [
          "Planners weren\u2019t rejecting MMM. They were rejecting a black box that produced allocations without a defensible argument. Every planner I [FILL: spoke to / observed] had the same underlying job: not give me the right answer, but give me an answer I can defend upstairs.",
          "That changed what the interface was for. It wasn\u2019t a form that collected inputs and returned an output. It was an argument the planner had to be able to reconstruct.",
          "The second thing I found \u2014 this one from going into the model itself rather than from users \u2014 was that the two intents weren\u2019t variations. Spend Based and Goal Based are inverse operations. Treating them as one flow with conditional fields wasn\u2019t a simplification. It was the source of most of the ambiguity downstream.",
          "[FILL: the MMM depth \u2014 adstock, saturation curves, Bayesian vs frequentist, Robyn and Meridian, working with the DS lead. This is the most differentiating thing in the study and it is currently a placeholder.]",
        ],
      },
      {
        type: "beforeAfter",
        eyebrow: "The solutions",
        heading: "A system of five",
        pairs: [
          {
            aspect: "01 \u00b7 Ask what they\u2019re solving for, first",
            before:
              "A single flow that asked everyone the same questions and hoped the irrelevant ones would be ignored.",
            after:
              "Intent is declared up front. Goal Based and Spend Based branch immediately, and every stage downstream adapts \u2014 fields, defaults, and the results surface. Flighting moved into Configure, where it belongs; granularity moved into Constraints, because granularity only means something once you know what you\u2019re constraining.",
            note: "modelling the two modes as siblings is the only reason the pivot in 05 was possible",
          },
          {
            aspect: "02 \u00b7 Stop asking planners to multiply in their heads",
            before: "Two selectors and an unstated relationship between them.",
            after:
              "A flat combination table. The system generates every resulting combination and shows it. What you see selected is exactly what the model runs on. The ambiguity didn\u2019t get explained better \u2014 it stopped existing. [FILL: what else was on the table \u2014 nested tree, dependent dropdowns, a matrix grid? Say what you rejected and why.]",
          },
          {
            aspect: "03 \u00b7 Design for the rule, not the row",
            before: "One flat list, however long the portfolio was.",
            after:
              "Two-level searchable navigation \u2014 brand, then combination \u2014 so planners navigate the way they already think. Smart filters on the constraints table [FILL: which ones, and what job each does]. And a portfolio cascade: set a rule once at portfolio level, let it flow down, override where reality differs.",
            note: "at portfolio scale the unit of design stops being the row and becomes the rule",
          },
          {
            aspect: "04 \u00b7 Make the results argue",
            before:
              "Charts that displayed, and a metric that explained buried where nobody used it.",
            after:
              "A waterfall showing how you got from current to recommended spend; grouped bars putting current against recommended per channel; a heatmap with Pareto ordering so the vital few channels surface first. MROI consolidated to Results and only Results. Per-channel saturation tags. And the MAT bar promoted to a full peer on the Results Breakdown \u2014 a client request, and a good one. [FILL: describe what each of these replaced.]",
          },
          {
            aspect: "05 \u00b7 When the answer is no, hand back a decision",
            before:
              "A screen called Target Not Achievable. It was correct and it was useless.",
            after:
              "One Results screen for every outcome, reachable or not. When a target can\u2019t be met the planner gets two live paths: edit the constraints, with MROI-ranked guidance inline so the highest-leverage lever is already at the top; or pivot to Spend Based, pre-filled with the numbers already on screen. No work lost, no restart. The Maximum Budget field came out entirely \u2014 in a goal-based flow a budget ceiling is something the system reasons about, not something the user caps by hand.",
            note: "an infeasible target isn\u2019t an error, it\u2019s information",
          },
        ],
      },
      {
        type: "prose",
        heading: "Getting a deletion agreed",
        body: [
          "[FILL: how did you get alignment on removing the Maximum Budget field? Removing things is harder than adding them, and getting a data science lead and a client to agree to a deletion is a real influence story. Tell it.]",
        ],
      },
      {
        type: "themes",
        eyebrow: "Prioritisation",
        heading: "How I decided what to fix first",
        groups: [
          {
            theme: "Expensive to reverse \u2014 resolve first",
            items: [
              {
                heading: "High impact",
                body: "Intent-first architecture, the scope model, removing Maximum Budget \u2014 settled with data science and the client in the room. Reversing the scope model after engineering had built against it costs weeks.",
              },
              {
                heading: "Low impact",
                body: "Market Share as a KPI and budget ceiling logic \u2014 explicitly deferred and documented as open at [FILL: milestone], rather than force-fit into a flow that wasn\u2019t ready for them.",
              },
            ],
          },
          {
            theme: "Cheap to reverse \u2014 ship and learn",
            items: [
              {
                heading: "High impact",
                body: "Banner copy, chart sorting, saturation tag styling. Reversing a banner headline costs an afternoon.",
              },
              { heading: "Low impact", body: "Visual polish and micro-copy." },
            ],
          },
        ],
      },
      {
        type: "prose",
        eyebrow: "What it took",
        heading: "Every decision logged, D1 through D103",
        body: [
          "Each entry recorded what was considered and what was rejected, not just what was chosen.",
          "[FILL: pull two or three entries. Reasoning frozen at a point in time is unusually strong evidence \u2014 most portfolios claim process, very few can show it.]",
          "[FILL: milestone versions \u2014 V1 \u2192 what broke \u2192 V2 \u2192 shipped. The three comparisons that earn their space: Scope Setup, Constraints at portfolio scale, and the dead-end screen against the unified Results screen.]",
        ],
      },
      { type: "image", caption: "Scope Setup \u2014 V1 against the shipped combination table." },
      { type: "image", caption: "Constraints at portfolio scale \u2014 flat list against the cascade." },
      { type: "image", caption: "Target Not Achievable against the unified Results screen." },
      {
        type: "prose",
        eyebrow: "What changed",
        heading: "Outcomes",
        body: [
          "[FILL: quantitative \u2014 adoption, task completion, abandonment on infeasible targets, portfolio combinations manageable in a single session. Qualitative \u2014 a line from the client stakeholder, the DS lead or your PM. Client sign-off is itself a legitimate result.]",
          "[FILL: still open \u2014 name what didn\u2019t ship. It reads as maturity.]",
        ],
      },
      {
        type: "prose",
        eyebrow: "Reflection",
        heading: "What I\u2019d do differently",
        body: [
          "[FILL: two or three sentences. Strong angles \u2014 what designing on top of a statistical model taught you about explanation as a design material; how portfolio scale moved your unit of design from the screen to the rule; what you couldn\u2019t validate given client-facing enterprise constraints, and how you\u2019d fight for it next time.]",
        ],
      },
    ],
  },




];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
