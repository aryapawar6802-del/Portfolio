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
      "I designed a calibration tool for a Fortune 1 US retailer. It keeps four teams’ edits in the right order, which they used to manage by hand over email.",
    tags: ["B2B web app", "Agentic AI", "Human-in-the-loop", "Enterprise"],
    question:
      "If the math only took days, why did the numbers take three weeks?",
    headline:
      "Cut a three-week calibration cycle to a few days by letting four teams work in parallel",
    standfirst:
      "Calibration used to take two to three weeks a cycle, and now it takes a few days. Time spent on it is tracking down from about 210 hours a cycle to about 45. I started by modelling the data, and the flow came after.",
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
      { from: "2–3 weeks", to: "days", label: "calibration loop" },
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
              "Market-share numbers took days to calculate and weeks to agree on. Four teams edited them one after another, and because the numbers roll up, a late edit from one team could undo another team’s sign-off without anyone noticing.",
          },
          {
            label: "My contribution",
            value:
              "I designed the calibration workflow end to end, along with the information architecture underneath it.",
          },
          { label: "Team", value: "One DS lead, product and client stakeholders, me on design." },
          {
            label: "Result",
            value:
              "About 210 hours a cycle went down to about 45. Calibration used to run in sequence over weeks, and now it runs in parallel over a few days.",
          },
        ],
      },
      {
        type: "prose",
        eyebrow: "My role",
        heading: "What I owned",
        body: [
          "I led the UX end to end. That covered the guided entry, the summary, the calibration table, the review step, the empty states, and the object model underneath all of it.",
          "Data Science built the calibration engine and the agentic pipeline, and I designed everything a person touches. Where the engine’s behaviour shaped a design decision, I say so below, so I’m not claiming the whole outcome as mine.",
        ],
      },
      {
        type: "prose",
        eyebrow: "The product",
        heading: "What the platform does",
        body: [
          "Every month, the retailer has to report how much of each market it holds. That’s its share of the market, which is a different number from its sales. The platform takes the calculated estimates and lets a person calibrate them into numbers leadership can defend.",
          "It runs the calibration pipeline automatically and hands the results to that person, with a note on what changed and why, and a list of what still needs them. They adjust the numbers, check the impact, and sign off one level at a time, in an order the tool enforces.",
        ],
      },
      {
        type: "prose",
        eyebrow: "The situation",
        heading: "Market share has to be estimated",
        body: [
          "The company knows its own sales exactly, but it doesn’t know its competitors’. To size a market like Women’s Apparel, Electronics or Pet Care, it estimates the total from outside sources such as surveys, credit-card panels and external retail feeds. That data covers a small slice of real sales. The sources disagree with each other, and the figures move every month.",
          "So before any of it reaches leadership, someone has to calibrate it. They look for jumps that aren’t realistic, keep the year-on-year movement believable, and check that each subcategory still adds up to its parent.",
        ],
      },
      {
        type: "prose",
        eyebrow: "The complication",
        heading: "How a cycle used to run",
        body: [
          "The numbers took three or four days to calculate. Then they went out to four business-unit teams, and each team took another three or four days to send its adjustments back. The numbers were recalculated and published, and after that the next team’s edits would arrive.",
          "Everything rolls up the hierarchy, so a late edit could move numbers well beyond the place it was made. A change to one department could shift a figure another team had already approved, and a signed-off number could change without anyone deciding it should. All of this ran through spreadsheets and email threads, and nothing in them tracked how the numbers depended on each other. Each cycle took two to three weeks, and the numbers never fully settled.",
          "Everyone pictured the new tool as a better dashboard. When I looked at the process, though, the delays came from the dependencies between the teams’ numbers, and the software they were using had no idea those dependencies existed.",
        ],
      },
      {
        type: "image",
        caption:
          "A map of the old process, reverse-engineered from how a cycle ran. Most of the weeks went into the loop between “adjust” and “recalibrate”.",
      },
      {
        type: "prose",
        eyebrow: "The question",
        heading: "Could the tool keep the order instead of the teams?",
        body: [
          "That changed the brief. The question became whether the software could take over the sequencing that the four teams had been managing by hand.",
        ],
      },
      {
        type: "list",
        eyebrow: "Angles of inquiry",
        heading: "Questions I took to the people doing the work",
        items: [
          "Where does someone even start? What’s already been done this cycle?",
          "When a number looks wrong, what do they change, and what are they allowed to change?",
          "How does anyone know a level is finished and safe to build the next one on?",
          "What has to stay true as numbers roll up, and what breaks if it doesn’t?",
        ],
      },
      {
        type: "prose",
        eyebrow: "What I found",
        heading: "What the calibrators needed",
        body: [
          "The people doing the calibration didn’t want more data on screen. They wanted the tool to tell them where the problem was and what to do about it. The old process gave them a spreadsheet and left them to find the trouble on their own.",
          "I also realised the hierarchy worked as a chain of dependencies, even though it looked like a navigation tree. A department is the sum of its category groups, so you can’t safely change it until the levels beneath it are locked. Nothing enforced that rule, and all of the weeks of back-and-forth traced back to it.",
          "Those two findings shaped everything after. I designed the tool around the decisions people had to make, and I treated the hierarchy as a rule the tool enforces.",
        ],
      },
      {
        type: "prose",
        eyebrow: "Object model",
        heading: "Modelling the domain before the screens",
        body: [
          "Before I drew any screens, I modelled the domain as objects and relationships using ORCA. I called the main unit the Calibration Slice, meaning one thing you calibrate, such as Department · Total Market. Everything else hangs off it: the metrics inside it, the rules run against it and the violations they raise, its status, its change log, and the review and approval steps that take it to a published number.",
          "When I sorted every possible action against this model, I could see the interface needed separate modes for judging numbers, resolving rule conflicts and signing off, instead of one flat table holding everything at once. That gave me the list of screens to design.",
        ],
      },
      {
        type: "image",
        src: "/work/calibration/00-orca-board.png",
        ratio: 1.5814,
        alt: "The ORCA board: four columns of sticky notes headed Objects, Relationships, Core CTAs and Attributes. Objects include User, Metric, Rule, Workflow, Approval and Published Result. The Relationships column spells out the hierarchy: SBU to Department to Category Group to Category, feeding into the Calibration Slice and its metrics, rules, rule violations, status, change logs, review task and approval task.",
        caption:
          "The ORCA board. Every later decision about navigation and states came from the Calibration Slice and its relationships.",
      },
      {
        type: "beforeAfter",
        eyebrow: "The decisions",
        heading: "Five design decisions",
        pairs: [
          {
            aspect: "01 · You start in one place, and the rest stays locked",
            before:
              "Anyone could edit anything, which is how a late edit ended up breaking a finished number.",
            after:
              "The home screen opens on the only calibration you’re allowed to start and greys out the others. Once you finish Department, Category Group and Category unlock on their own. The navigation follows the dependencies in the data model, so a number can’t change behind you after you’ve finished it.",
            note: "the tool enforces the order",
          },
          {
            aspect: "02 · The summary starts with what needs deciding",
            before:
              "A wall of departments and metrics, where the person had to find the problem before they could fix it.",
            after:
              "The summary describes the situation in one sentence, for example “07 departments remain blocked due to pricing issues in Apparel and Pet Care”, and offers two ways in: the blocked departments, or all of them. The AI diagnoses the problem and the person decides what to do about it.",
          },
          {
            aspect: "03 · Every number shows its working",
            before:
              "People were asked to trust adjusted figures they had no way to question. “Why did this change?” was the question I heard most often in discovery.",
            after:
              "Each metric shows three columns side by side: last month’s reported value, the calibrated value and the uncalibrated value. People can see the before, the after and the raw source at once, and judge the change for themselves.",
          },
          {
            aspect: "04 · Designing the edge cases",
            before:
              "There was no way to mark a number as “not yet” or “careful”, so half-finished numbers leaked into published ones.",
            after:
              "When there’s nothing to compare against yet, the reference values say so. Edits are only saved or discarded on purpose, and an interrupt makes you choose. Rules chosen for a run apply to that run only, so a one-off choice doesn’t turn into policy without anyone noticing.",
          },
          {
            aspect: "05 · You see the impact before you commit",
            before: "You published first and found out the consequences later.",
            after:
              "Before you finalise, the review step shows how each department’s calibration changes GMV and market share, so you can still change your mind.",
            note: "impact-before-commit",
          },
        ],
      },
      {
        type: "prose",
        eyebrow: "The screens",
        body: [
          "I’ve removed the client’s branding from the screens below. Everything else is as it was built.",
        ],
      },
      {
        type: "image",
        src: "/work/calibration/01-home.png",
        alt: "Home screen. Six calibration cards: Department, Category Group and Category, each against Total Market and Competitor. Only Department · Total Market has an active Calibrate button; the other five are locked.",
        caption:
          "The home screen. Only one card is open, the one the data model says you can start with.",
      },
      {
        type: "image",
        src: "/work/calibration/02-home-progress.png",
        alt: "The same home screen after the first calibration is finished. Department · Total Market now reads Completed with a View Details button, and the next two cards have unlocked.",
        caption:
          "When you come back, the same screen tracks your progress. Here one of six steps is done and the next level has opened.",
      },
      {
        type: "image",
        src: "/work/calibration/03-summary.png",
        alt: "Department Calibration Summary. A headline stating that seven departments remain blocked due to pricing issues, with View Blocked and View All actions, a calibration health breakdown, and a list of the top department blockers.",
        caption:
          "The summary, with its one-sentence description of what’s blocked and the two ways in.",
      },
      {
        type: "image",
        src: "/work/calibration/04-department-list.png",
        alt: "Department Calibration list filtered to the seven blocked departments, each row showing the fiscal months affected.",
        caption:
          "The blocked queue. Each filter shows its count, so you can see how big the job is before you open anything.",
      },
      {
        type: "image",
        src: "/work/calibration/05-calibration-table.png",
        alt: "A department expanded in the calibration table, showing Market Share, Market Share YoY, GMV, GMV YoY and Digital Mix, each split into LM Reported, Calibrated and Uncalibrated columns across October, November and December, with a Rules column flagging blocking violations.",
        caption:
          "The Department Calibration table. Every metric shows LM Reported, Calibrated and Uncalibrated, so you can always see how far a number moved.",
      },
      {
        type: "image",
        src: "/work/calibration/06-review.png",
        alt: "Calibration Review screen listing every department with its GMV and market-share impact before finalising, with Go back and edit and Finalize actions.",
        caption:
          "The review step, where you check each department’s impact before you finalise.",
      },
      {
        type: "prose",
        eyebrow: "The system",
        heading: "End to end",
        body: [
          "The flow starts with guided entry. You set up the run by choosing competitors and rules, then land on the summary, which shows what’s blocked and what needs you. You calibrate with the full before and after in view, review the impact, and finalise, and the next level opens.",
          "Each step fixes one problem from the old process. Guided entry stops edits from happening out of order, and the summary means nobody has to diagnose problems by hand. The table lets people check a number instead of trusting it blindly. With the review step, there are no surprises after publishing.",
        ],
      },
      {
        type: "image",
        src: "/work/calibration/07-calibration-flow.png",
        ratio: 1.5,
        alt: "Calibration flow diagram, titled “Every screen answers a question the calibrator was already asking.” Three stages: Orient, where home doubles as a progress tracker; Calibrate the level, running Summary, Compare, Edit and Approve, with a Blocked branch that loops back to the summary when a rule conflict stops the level; and Unlock, where finalising a level locks it in and opens the one beneath. A return line reads “next level, same four steps”.",
        caption:
          "Each screen next to the question it answers. The loop back to the summary happens when a rule conflict blocks a level, and the line along the bottom is the next level running through the same four steps.",
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
          "The time saved and the untangled dependencies come straight from the design. A guided flow that enforces the order and leads with decisions is what let a three-week chain of hand-offs become a parallel run of a few days. That efficiency is now tracked as a saving of about $3.5K a month for the first business unit. The second is projected to match, which would make it roughly $7K a month once both are live.",
          "The savings are logged against a baseline every month, so this is a measured number.",
        ],
      },
      {
        type: "prose",
        eyebrow: "Reflection",
        heading: "Starting with the data model",
        body: [
          "The tool feels calm to use. That comes from taking one relationship in the data, the roll-up, seriously enough to build the whole interaction around it. Most of the hard work doesn’t show in the final screens, and I think that’s how it should be.",
          "Next, I’d like to test the AI’s summary language with real users. “Would you like to take action?” works, but people will probably only trust an AI that tells them what’s wrong up to a point, and I’d rather find where that limit is than assume it.",
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
      "Planners kept going back to their spreadsheets even though the model was sound. The five-stage wizard asked them for structure before it knew what they were trying to solve, and its results gave a number with no reasoning behind it.",
    tags: ["B2B web app", "Marketing Mix Modeling", "Enterprise", "Data product"],
    question:
      "The model worked, so why were planners still deciding in spreadsheets?",
    headline:
      "Rebuilt a five-stage optimisation flow so planners could explain its results",
    standfirst:
      "Marketing Mix Modeling could tell the client’s planners what worked. Rapid ROI let them run it themselves, without waiting on the data science team. The math was sound, but planners still went back to their spreadsheets.",
    role: "[FILL: e.g. Design lead on the optimization flow — owned it end to end across Phases 1–2]",
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
              "Rapid ROI, a media investment optimisation tool powered by Marketing Mix Modeling.",
          },
          {
            label: "Challenge",
            value:
              "Turn a rigid five-stage configuration wizard into a flow planners would trust with spend decisions worth many crores.",
          },
          {
            label: "My role",
            value:
              "[FILL: e.g. Design lead on the optimization flow — owned it end to end across Phases 1–2]",
          },
          {
            label: "Team",
            value:
              "Data science, PM [FILL], engineering [FILL], and client stakeholders.",
          },
          {
            label: "Impact",
            value:
              "[FILL: the one line that matters most — adoption, sign-off, task completion]",
          },
        ],
      },
      {
        type: "prose",
        eyebrow: "The situation",
        heading: "Planners had a working model and still used spreadsheets",
        body: [
          "The client’s media planners decide where hundreds of crores go across brands, markets and channels. Marketing Mix Modeling can tell them what worked. It accounts for adstock, and for saturation: the tenth crore spent in a channel never returns what the first one did.",
          "Rapid ROI was built to put that model in planners’ hands, so they could ask a question and get an allocation without going through the data science queue.",
          "Even so, planners kept going back to their spreadsheets.",
        ],
      },
      {
        type: "numbered",
        eyebrow: "The complication",
        heading: "Four problems with the flow",
        intro:
          "The flow had five stages, in this order: state your intent, set your scope, configure the run, apply your constraints, and read your results. Each screen was reasonable on its own. The trouble was the order. Planners had to make structural decisions before the flow knew what they were solving for, and at the end it gave them a number with no argument behind it.",
        items: [
          {
            heading: "It asked for structure before intent",
            body: "Planners chose scope, granularity and constraints before the system knew which way they were solving. Some were solving forward (“I have this budget, allocate it”) and others backward (“I need to hit this target, tell me what it takes”). Those are mathematically inverse problems. Putting both down one shared path meant the flow asked too much and guided too little at the same time.",
          },
          {
            heading: "Scope was mathematically ambiguous",
            body: "Say you picked three regions and four sub-brands. Had you selected twelve combinations, only the valid ones, or only the ones the model had coverage for? The screen never said, and different planners read the same selection differently. Nobody filed a ticket about it. They just stopped believing the output.",
          },
          {
            heading: "Constraints broke down at portfolio scale",
            body: "Constraints are where planners write down the realities they work within, like contracted minimums, channel caps and market rules. For a single brand, a flat list was fine. A portfolio has dozens of brand × market × channel rows, and planners ended up scrolling through lines that all looked the same, with no way to find anything or apply a rule to many rows at once. The feature worked, but nobody could use it at that size. [FILL: how many rows did a real portfolio run actually produce?]",
          },
          {
            heading: "The results didn’t explain themselves",
            body: "MROI, the marginal return that tells you why a channel can or can’t take another rupee, was scattered around and shown more than once. When a goal-based target turned out to be impossible, the planner landed on a separate screen called Target Not Achievable. It named the failure and offered nothing else. The only way out was to go back and guess.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Why the dead end mattered most",
        body: [
          "A planner has to walk into a room and defend this plan to their leadership. When a tool says no without saying why, the planner goes back to the spreadsheet, where at least they know how the number was made.",
        ],
      },
      {
        type: "list",
        eyebrow: "Angles of inquiry",
        heading: "Questions I set out to answer",
        items: [
          "What does a planner need to see before they’ll defend a number they didn’t calculate?",
          "Where does trust break: at the input, or at the output?",
          "What does “set your constraints” mean when there are two hundred of them?",
          "And when the honest answer is that the target isn’t reachable, what’s the useful thing to say next?",
          "[FILL: name the method concretely — usability sessions, stakeholder interviews, watching a planner work. Without it these questions read as rhetorical.]",
        ],
      },
      {
        type: "prose",
        eyebrow: "What I found",
        heading: "Planners needed an answer they could defend",
        body: [
          "Planners had no problem with MMM itself. What they pushed back on was a black box that produced allocations without an argument they could defend. Every planner I [FILL: spoke to / observed] had the same job underneath: they needed an answer they could defend upstairs, and that mattered more to them than the best answer on paper.",
          "That changed how I thought about the interface. It had to lay out an argument the planner could reconstruct, instead of collecting inputs and returning an output.",
          "I learned the second thing from studying the model, not from users. Spend Based and Goal Based are inverse operations. Building them as one flow with conditional fields had caused most of the ambiguity further down.",
          "[FILL: the MMM depth — adstock, saturation curves, Bayesian vs frequentist, Robyn and Meridian, working with the DS lead. This is the most differentiating thing in the study and it is currently a placeholder.]",
        ],
      },
      {
        type: "beforeAfter",
        eyebrow: "The solutions",
        heading: "Five changes to the flow",
        pairs: [
          {
            aspect: "01 · Ask what they’re solving for, first",
            before:
              "A single flow that asked everyone the same questions and hoped they’d ignore the ones that didn’t apply.",
            after:
              "Planners now state their intent at the start. Goal Based and Spend Based branch straight away, and every later stage adapts its fields, defaults and results to match. I moved flighting into Configure, where it fits better, and granularity into Constraints, because granularity only means something once you know what you’re constraining.",
            note: "the pivot in 05 only works because the two modes are modelled as siblings",
          },
          {
            aspect: "02 · Stop asking planners to multiply in their heads",
            before: "Two selectors, with an unstated relationship between them.",
            after:
              "A flat combination table. The system generates every combination your selection produces and lists them, so what you see selected is exactly what the model runs on. [FILL: what else was on the table — nested tree, dependent dropdowns, a matrix grid? Say what you rejected and why.]",
          },
          {
            aspect: "03 · Setting rules across a whole portfolio",
            before: "One flat list, however long the portfolio was.",
            after:
              "Two-level searchable navigation, brand first and then combination, so planners find things the way they already think about them. Smart filters on the constraints table [FILL: which ones, and what job each does]. And a portfolio cascade, where you set a rule once at portfolio level, let it flow down, and override it wherever reality differs.",
            note: "at portfolio scale, planners work with rules more than with single rows",
          },
          {
            aspect: "04 · Results that explain the recommendation",
            before:
              "Charts that only displayed numbers, and the one metric that explained them buried where nobody used it.",
            after:
              "A waterfall shows how you get from current spend to recommended spend. Grouped bars put current against recommended for each channel, and a heatmap with Pareto ordering brings the few channels that matter most to the top. MROI now appears on Results and nowhere else, and each channel has a saturation tag. The MAT bar became a full peer on the Results Breakdown at the client’s request, and it was a good request. [FILL: describe what each of these replaced.]",
          },
          {
            aspect: "05 · When the answer is no, hand back a decision",
            before:
              "A screen called Target Not Achievable. It was correct, and it didn’t help anyone.",
            after:
              "Every outcome, reachable or not, now lands on the same Results screen. When a target can’t be met, the planner has two ways forward. They can edit the constraints, with MROI-ranked guidance inline so the lever with the most effect is already at the top. Or they can switch to Spend Based, pre-filled with the numbers already on screen, so nothing is lost and they don’t have to start over. I also removed the Maximum Budget field. In a goal-based flow the system works out the budget ceiling, so the user shouldn’t have to cap it by hand.",
            note: "an unreachable target still tells the planner something useful",
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
            theme: "Expensive to reverse: resolve first",
            items: [
              {
                heading: "High impact",
                body: "Intent-first architecture, the scope model, and removing Maximum Budget. I settled these with data science and the client in the room, because reversing the scope model after engineering had built against it would have cost weeks.",
              },
              {
                heading: "Low impact",
                body: "Market Share as a KPI, and budget ceiling logic. These were deferred on purpose and documented as open at [FILL: milestone], so they weren’t forced into a flow that wasn’t ready for them.",
              },
            ],
          },
          {
            theme: "Cheap to reverse: ship and learn",
            items: [
              {
                heading: "High impact",
                body: "Banner copy, chart sorting and saturation tag styling. Changing a banner headline back takes an afternoon.",
              },
              { heading: "Low impact", body: "Visual polish and micro-copy." },
            ],
          },
        ],
      },
      {
        type: "prose",
        eyebrow: "What it took",
        heading: "I logged every decision, from D1 to D103",
        body: [
          "Each entry recorded what was considered and what was rejected, along with what was chosen.",
          "[FILL: pull two or three entries. Reasoning frozen at a point in time is unusually strong evidence — most portfolios claim process, very few can show it.]",
          "[FILL: milestone versions — V1 → what broke → V2 → shipped. The three comparisons that earn their space: Scope Setup, Constraints at portfolio scale, and the dead-end screen against the unified Results screen.]",
        ],
      },
      { type: "image", caption: "Scope Setup: V1 next to the shipped combination table." },
      { type: "image", caption: "Constraints at portfolio scale: the flat list next to the cascade." },
      { type: "image", caption: "Target Not Achievable next to the unified Results screen." },
      {
        type: "prose",
        eyebrow: "What changed",
        heading: "Outcomes",
        body: [
          "[FILL: quantitative — adoption, task completion, abandonment on infeasible targets, portfolio combinations manageable in a single session. Qualitative — a line from the client stakeholder, the DS lead or your PM. Client sign-off is itself a legitimate result.]",
          "[FILL: still open — name what didn’t ship. It reads as maturity.]",
        ],
      },
      {
        type: "prose",
        eyebrow: "Reflection",
        heading: "What I’d do differently",
        body: [
          "[FILL: two or three sentences. Strong angles — what designing on top of a statistical model taught you about explanation as a design material; how portfolio scale moved your unit of design from the screen to the rule; what you couldn’t validate given client-facing enterprise constraints, and how you’d fight for it next time.]",
        ],
      },
    ],
  },




];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
