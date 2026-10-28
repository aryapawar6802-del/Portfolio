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
    company: "A global retailer",
    title: "Moving a four-team Excel process into one tool",
    summary:
      "A calibration tool for a global retailer. It keeps four teams’ edits in the right order, which they used to manage by hand over email.",
    tags: ["B2B web app", "Agentic AI", "Human-in-the-loop", "Enterprise"],
    question: "Moving a four-team Excel process into one tool",
    headline:
      "Cut a three-week calibration cycle to a few days by letting four teams work in parallel",
    standfirst:
      "A global retailer had four teams running one huge process on Excel. This tool replaced it, with an AI agent that flags what’s off, so nobody has to go through every single number.",
    role: "Sole designer, end to end",
    timeline: "3–4 months",
    status: "Shipped",
    platform: "B2B web app · Agentic AI, human-in-the-loop",
    years: "[year]",
    details: [
      { label: "Client", value: "A global retailer (enterprise retail)" },
      { label: "Role", value: "Sole designer, end to end" },
      { label: "Process", value: "Analyst interviews, OOUX, flows, testing" },
      { label: "Timeline", value: "3–4 months" },
    ],
    heroVideo: {
      mp4: "/work/calibration/four-team-excel-to-tool.mp4",
      gif: "/work/calibration/four-team-excel-to-tool.gif",
      alt: "Animation: four teams passing one Excel file around, replaced by one tool.",
      ratio: 1080 / 608,
    },
    deltas: [
      { from: "~210 h", to: "~45 h", label: "Per cycle" },
      { from: "2–3 weeks", to: "Days", label: "Calibration loop" },
    ],
    framework: "custom",
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
        type: "prose",
        nav: "Problem",
        heading: "Problem",
        body: [
          "Market-share numbers took days to calculate and weeks to agree on. Four teams edited them one after another, and because the numbers roll up, a late edit from one team could undo another team’s sign-off without anyone noticing.",
        ],
      },
      {
        type: "list",
        nav: "What was wrong with Excel",
        heading: "What was wrong with Excel",
        intro:
          "Excel had all the functions, right? The maths was never the problem. The problem was everything around it.",
        items: [
          "**Four teams, one file, one after the other.** Analysts, then category leads, then finance, then sign-off. And every team has multiple people working on it.",
          "**You have to go through each number.** Hundreds of rows, each product. Under Clothing, under Women’s wear, there’s something you need to change, but you don’t know which one. So you deep dive into all of it.",
          "**Nothing tells you what’s off.** No flags, no threshold. You find a problem only if you happen to look at that row.",
          "**A late edit can undo someone’s sign-off.** The numbers roll up. So if someone changes something at the bottom, the total another team already agreed on changes too, and nobody notices.",
          "**It takes weeks.** Days to calculate, weeks to agree on.",
        ],
      },
      {
        type: "table",
        nav: "What was delivered",
        heading: "What was delivered",
        intro:
          "So this is a tool built for them, like a proper calibration tool. It keeps what Excel was good at and fixes how the four teams work with it.",
        columns: ["In Excel", "In the tool"],
        rows: [
          ["Four teams passing one file around", "Stages. You finish yours, then the next team unlocks"],
          ["Going through each number", "The AI agent goes through it first and gives you the numbers"],
          ["Finding problems by luck", "Anything above or below the threshold gets flagged"],
          [
            "A late edit quietly breaking a sign-off",
            "Before you complete a stage, you see what your changes affect, including numbers someone already signed off",
          ],
          [
            "Weeks of back and forth",
            "You only change the few numbers you feel like changing, based on your experience",
          ],
        ],
        outro:
          "**Role:** Sole designer, end to end. Analyst interviews, OOUX, flows, testing and all the screens.",
      },
      {
        type: "numbered",
        nav: "A day in the life",
        heading: "A day in the life",
        intro: "Let’s say you’re an analyst on this, and you’re in charge of Clothing.",
        items: [
          {
            heading: "You open the file.",
            body: "It’s your team’s turn now, but there are a bunch of you in it, all working on your own bits.",
          },
          {
            heading: "You need to go through each number.",
            body: "Hundreds of rows, each product. Somewhere under Clothing, under Women’s wear, there’s something you need to change. But which one? So you deep dive into all of it.",
          },
          {
            heading: "Tops looks high. Or maybe it doesn’t?",
            body: "You check it against another tab, and you’re still not sure. You leave a note: *“recheck??”*",
          },
          {
            heading: "You change a few numbers and tell everyone you’re done.",
            body: "Then the file goes to the category leads. Then finance. Then sign-off.",
          },
          {
            heading: "Then someone changes something at the bottom.",
            body: "It rolls up, and the total you already agreed on is different now. Nobody notices.",
          },
        ],
        outro: "And this goes on for weeks.",
      },
      {
        type: "list",
        nav: "The new tool: AI in the loop",
        heading: "The new tool: AI in the loop",
        intro: [
          "So where does the AI come in? The analysts weren’t short on experience, right? They were short on time. Most of the day went into finding the numbers, not fixing them.",
          "So that’s what the agentic AI does:",
        ],
        items: [
          "**It goes through everything first.** Every row, before anyone even opens their stage.",
          "**It flags the numbers that look off.** If something goes above or below the threshold, it gets flagged.",
          "**It gives you the numbers.** For each flag, it suggests what the number should be.",
        ],
        outro:
          "But the AI doesn’t decide anything on its own. The analyst still makes the call, and nothing moves to the next team until a person completes the stage.",
      },
      {
        type: "numbered",
        heading: "Same day, with the tool",
        sub: true,
        items: [
          {
            heading: "You open your stage.",
            body: "It’s your team’s turn, and the tool knows that. Nobody from the next team can jump in early.",
          },
          {
            heading: "You can see where the flags are.",
            body: "The AI already went through everything. Women’s wear has 3 flags, so you go there first.",
          },
          {
            heading: "Tops is flagged, way above the threshold.",
            body: "The AI gives you a number. You change it a little based on your experience.",
          },
          {
            heading: "The other two look fine,",
            body: "so you just accept what the AI gave.",
          },
          {
            heading: "Before you complete, you see what your changes affect.",
            body: "If it touches something another team already signed off, you know right away.",
          },
          {
            heading: "You complete your stage.",
            body: "The category leads unlock and can start.",
          },
        ],
        outro: "That’s it. You only touch the numbers that actually need you.",
      },
      {
        type: "list",
        nav: "The process",
        heading: "The process",
        items: [
          "**Analyst interviews.** Talked to the analysts to see how they actually do this in Excel today, and where the time really goes.",
          "**OOUX.** Mapped out the objects, like categories, products, numbers, stages and teams, and how they connect. This is where the roll-up problem became really clear.",
          "**Flows.** For each of the four teams: who does what, and when the next team unlocks.",
          "**Testing.** Ran the flows with the people who’d actually use the tool.",
        ],
        outro: [
          "One thing that came up in both the interviews and the testing: a little rigidness about moving from Excel to a tool. People know Excel, right? They’ve used it for years.",
          "So to understand that rigidness, we went through what their day actually looks like, step by step. Then we redesigned the workflow around it, to save them time and make the tool easy to use. If the new way isn’t clearly faster and easier, nobody’s leaving Excel.",
        ],
      },
      {
        type: "screens",
        nav: "Final design",
        heading: "Final design",
        items: [
          {
            heading: "Stages that unlock",
            src: "/work/calibration/01-home.png",
            alt: "Home screen. Six calibration cards: Department, Category Group and Category, each against Total Market and Competitor. Only Department · Total Market has an active Calibrate button; the other five are locked.",
            caption:
              "The home screen. Only one card is open, the one the data model says you can start with.",
            body: "This wasn’t there before in Excel. One team finishes their stage, then the next team unlocks. So people aren’t editing things out of turn.",
          },
          {
            heading: "Where are the flags?",
            src: "/work/calibration/04-department-list.png",
            alt: "Department Calibration list filtered to the seven blocked departments, each row showing the fiscal months affected.",
            caption:
              "The blocked queue. Each filter shows its count, so you can see how big the job is before you open anything.",
            body: "Before you open any data, you can already see where the flags are. Women’s wear has 3 flags, so you know where to go.",
          },
          {
            heading: "The table",
            src: "/work/calibration/05-calibration-table.png",
            alt: "A department expanded in the calibration table, showing Market Share, Market Share YoY, GMV, GMV YoY and Digital Mix, each split into LM Reported, Calibrated and Uncalibrated columns across October, November and December, with a Rules column flagging blocking violations.",
            caption:
              "The Department Calibration table. Every metric shows LM Reported, Calibrated and Uncalibrated, so you can always see how far a number moved.",
            body: "Every row shows the number they bought, how far it is from their own data, and what the AI suggests. If it goes above or below the threshold, it’s flagged. Everything else just stays quiet.",
          },
          {
            heading: "Change it or accept it",
            src: "/work/calibration/05b-inline-edit.png",
            ratio: 830 / 400,
            alt: "Close-up of the calibration table. Calibrated GMV YoY values sit in editable fields, the Rules column shows 2 Blocking on each month, and the row header has info, reject and accept buttons.",
            caption:
              "Calibrated values are edited in place. The tick and cross accept or reject the row.",
            body: "You can change the number right there, or just accept what the AI gave. Once you’re done, the flag goes away.",
          },
          {
            heading: "Check before you’re done",
            src: "/work/calibration/06-review.png",
            alt: "Calibration Review screen listing every department with its GMV and market-share impact before finalising, with Go back and edit and Finalize actions.",
            caption:
              "The review step, where you check each department’s impact before you finalise.",
            body: "Before you complete your stage, you see what your changes affect. Because the numbers roll up, this is where you catch a change that would mess with another team’s sign-off.",
          },
          {
            heading: "The next team unlocks",
            src: "/work/calibration/02-home-progress.png",
            alt: "The same home screen after the first calibration is finished. Department · Total Market now reads Completed with a View Details button, and the next two cards have unlocked.",
            caption:
              "When you come back, the same screen tracks your progress. Here one of six steps is done and the next level has opened.",
            body: "You complete your stage and the next team unlocks. Nobody has to message everyone saying “I’m done.”",
          },
        ],
      },
      {
        type: "stats",
        nav: "Outcome",
        heading: "Outcome",
        items: [
          { value: "~45 h", label: "Per cycle, down from ~210" },
          { value: "Days", label: "Calibration loop, down from two to three weeks" },
          { value: "$3.5K", label: "Monthly saving realised for the first business unit" },
          { value: "4", label: "Teams moved from sequential to parallel" },
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
      "Planners kept going back to their spreadsheets even though the model was sound. The five-stage flow was rebuilt around what they needed to defend a plan to their leadership.",
    tags: ["B2B web app", "Marketing Mix Modeling", "Enterprise", "Data product"],
    question:
      "The client had the model, so why were planners still deciding in spreadsheets?",
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
          { label: "Timeline", value: "[FILL]" },
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
          "[FILL: this section should reflect how you really approached it. Was this framed through usability sessions, stakeholder interviews, watching a planner work? Name your method concretely and honestly, whatever it was.]",
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
          "[FILL: I went deep on MMM fundamentals here — adstock, saturation curves, Bayesian vs frequentist approaches, open-source implementations like Robyn and Meridian — working closely with the DS lead on the data science side. Write this up properly. Most designers can’t discuss saturation curves. It’s the reason you could design the explanation layer at all, and it’s the most differentiating thing in this case study.]",
        ],
      },
      {
        type: "numbered",
        eyebrow: "The jobs",
        heading: "What planners were hiring it to do",
        intro:
          "Planners open Rapid ROI to prepare for a conversation they’ll have later, with someone more senior, about money. Five jobs came out of that. [FILL: name where these came from — sessions, stakeholder interviews, watching planners work. The jobs are only as credible as their source.]",
        items: [
          {
            heading: "“Ask me what I’m solving for before you ask me anything else.”",
            body: "When I start a planning cycle, I want to state my business question first, so the tool only asks me what’s relevant to it. [FILL: validated or assumed?]",
          },
          {
            heading: "“Show me what I actually selected.”",
            body: "When I define scope, I want to see exactly which brand-market combinations I’ve picked, so I can trust the model ran on what I meant. [FILL: validated or assumed?]",
          },
          {
            heading: "“Let me set a rule once.”",
            body: "When I apply constraints across a portfolio, I want to work at the level I think at, brand first and then combination, so I’m not editing forty rows by hand. [FILL: validated or assumed?]",
          },
          {
            heading: "“Tell me why this channel got what it got.”",
            body: "When I read a recommendation, I want to understand the reasoning behind the split, so I can defend the plan to my leadership. [FILL: validated or assumed?]",
          },
          {
            heading: "“When it’s not possible, tell me which lever to pull.”",
            body: "When my target can’t be reached, I want to know what’s blocking it and what moving it would cost, so I can make an informed trade instead of guessing. [FILL: validated or assumed?]",
          },
        ],
      },
      {
        type: "prose",
        body: [
          "Four of the five jobs are about being able to defend the plan. Planners wanted to be able to explain the number they’d been given more than they wanted a better one.",
          "[FILL: be honest about which of these you actually validated and which stayed assumptions. “Three validated, two inferred from stakeholder input” is a stronger sentence than five unqualified claims — reviewers trust stated limits more than uniform confidence.]",
        ],
      },
      {
        type: "beforeAfter",
        eyebrow: "The solutions",
        heading: "Five changes, one for each job",
        pairs: [
          {
            aspect: "01 · Ask what they’re solving for, first",
            before:
              "A single flow that asked everyone the same questions and hoped they’d ignore the ones that didn’t apply.",
            after:
              "Planners now state their intent at the start. Goal Based and Spend Based branch straight away, and every later stage adapts its fields, defaults and results to match. I moved flighting into Configure, because it describes how spend is spread over time and belongs with the setup of the run. Granularity moved into Constraints, because it only means something once you know what you’re constraining. Modelling the two modes as siblings from the start is also the only reason the pivot in 05 was possible.",
            note: "answers job 01",
          },
          {
            aspect: "02 · Stop asking planners to multiply in their heads",
            before: "Two selectors, with an unstated relationship between them.",
            after:
              "A flat combination table. The system generates every combination your selection produces and lists them, so what you see selected is exactly what the model runs on. [FILL: what else was on the table — nested tree, dependent dropdowns, a matrix grid? Say what you rejected and why. Showing the discarded options is the clearest proof that you decided rather than defaulted.]",
            note: "answers job 02",
          },
          {
            aspect: "03 · Setting rules across a whole portfolio",
            before: "One flat list, however long the portfolio was.",
            after:
              "Two-level searchable navigation, brand first and then combination, so planners find things the way they already think about them. Smart filters on the constraints table [FILL: which ones, and what job each does]. And a portfolio cascade, where you set a rule once at portfolio level, let it flow down, and override it wherever reality differs. All three let a planner state an intention once instead of making the same edit forty times.",
            note: "answers job 03",
          },
          {
            aspect: "04 · Results that explain the recommendation",
            before:
              "Charts that only displayed numbers, and the one metric that explained them buried where nobody used it.",
            after:
              "A waterfall shows how you get from current spend to recommended spend. Grouped bars put current and recommended side by side for each channel. The heatmap now uses Pareto ordering, so the few channels that matter most come first and nobody has to hunt for them. [FILL: describe what each of these replaced] MROI now lives on Results and nowhere else, so there’s one place to answer why a channel got what it got. I took it out of the earlier steps, where it added weight without helping anyone decide. Each channel has a saturation tag, so planners can see which channels still have room before they hit a wall. The MAT bar became a full peer on the Results Breakdown at the client’s request, and it was a good request: a new recommendation is easier to believe when it sits next to a number you already trust.",
            note: "answers job 04",
          },
          {
            aspect: "05 · When the answer is no, hand back a decision",
            before:
              "A screen called Target Not Achievable. It was correct, and it didn’t help anyone.",
            after:
              "Every outcome, reachable or not, now lands on the same Results screen. When a target can’t be met, the planner has two ways forward. They can edit the constraints, with MROI-ranked guidance inline so the lever with the most effect is already at the top. Or they can switch to Spend Based, pre-filled with the numbers already on screen, so nothing is lost and they don’t have to start over. Editing the target happens in a modal instead of on a separate screen, so the planner never leaves the flow to change their mind. I also removed the Maximum Budget field. In a goal-based flow the system works out the budget ceiling itself, and asking the user to cap it by hand broke their picture of how the flow worked.",
            note: "answers job 05, and it’s the change I’d defend hardest",
          },
        ],
      },
      {
        type: "quote",
        text: "When a target can’t be reached, the system’s job is to hand the planner their next decision.",
      },
      {
        type: "prose",
        heading: "Getting a deletion agreed",
        body: [
          "[FILL: how did you get alignment on deleting a field? Removing things is harder than adding them, and getting both a data science lead and a client to agree to a deletion is a real influence story. Tell it.]",
        ],
      },
      {
        type: "prose",
        eyebrow: "Prioritisation",
        heading: "How I decided what to fix first",
        body: [
          "There were over a hundred open decisions across the five stages, and the client had to sign off. So I looked for the decisions that had to be right before anything downstream could be built, and sorted everything by impact and by how expensive it would be to undo.",
        ],
      },
      {
        type: "themes",
        groups: [
          {
            theme: "Expensive to reverse: resolve first",
            items: [
              {
                heading: "High impact",
                body: "Intent-first architecture, the scope model, and removing Maximum Budget. I settled these first, with data science and the client in the room. Reversing the scope model after engineering had built against it would have meant reopening it with data science and re-briefing the client, which takes weeks.",
              },
              {
                heading: "Low impact",
                body: "Market Share as a KPI, and budget ceiling logic. These were deferred on purpose and documented as open gaps at [FILL: milestone], so they weren’t forced into a flow that wasn’t ready for them.",
              },
            ],
          },
          {
            theme: "Cheap to reverse: ship and learn",
            items: [
              {
                heading: "High impact",
                body: "Banner copy, chart sorting and saturation tag styling. These could ship early and change later, since reversing a banner headline takes an afternoon.",
              },
              { heading: "Low impact", body: "Visual polish and micro-copy." },
            ],
          },
        ],
      },
      {
        type: "prose",
        body: [
          "Sorting the decisions this way also gave me a clear reason not to solve everything at once.",
          "[OPTIONAL: if your real-time prioritization was looser than this, say so. “This is the logic I was applying, which I’ve since formalized” reads as self-aware. A framework retrofitted for effect gets probed hard in interviews.]",
        ],
      },
      {
        type: "prose",
        eyebrow: "What it took",
        heading: "I logged every decision, from D1 to D103",
        body: [
          "Each entry recorded what was considered and what was rejected, along with what was chosen.",
          "[FILL: pull two or three entries. Reasoning frozen at a point in time is unusually strong evidence. Most portfolios claim process. Very few can show it.]",
          "[FILL: milestone versions here. V1 → what broke → V2 → shipped. Even rough frames. The three comparisons that earn their space: Scope Setup, Constraints at portfolio scale, and the dead-end screen against the unified Results screen.]",
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
          "[FILL: be honest here — inflated numbers are the fastest way to lose a senior reviewer, and they get probed. Quantitative: adoption, task completion, abandonment on infeasible targets, portfolio combinations manageable in a single session. Qualitative: a line from the client stakeholder, the DS lead, or your PM. Client sign-off is itself a legitimate result.]",
          "[FILL: still open — name what didn’t ship. It reads as maturity.]",
        ],
      },
      {
        type: "prose",
        eyebrow: "Reflection",
        heading: "What I’d do differently",
        body: [
          "[FILL: two or three sentences. Strong angles available: what designing on top of a statistical model taught you about explanation as a design material; how portfolio scale moved your unit of design from the screen to the rule; what you couldn’t validate, given the constraints of client-facing enterprise work, and how you’d fight for it next time.]",
        ],
      },
    ],
  },




];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
