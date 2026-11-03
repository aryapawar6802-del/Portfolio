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
    role: "Sole designer",
    timeline: "3–4 months",
    status: "Shipped",
    platform: "B2B web app · Agentic AI, human-in-the-loop",
    years: "[year]",
    details: [
      { label: "Client", value: "A global retailer (enterprise retail)" },
      { label: "Role", value: "Sole designer" },
      { label: "Process", value: "Analyst interviews, OOUX, flows, testing" },
      { label: "Timeline", value: "3–4 months" },
    ],
    heroVideo: {
      mp4: "/work/calibration/four-team-excel-to-tool.mp4",
      gif: "/work/calibration/four-team-excel-to-tool.gif",
      alt: "Animation: four teams passing one Excel file around, replaced by one tool.",
      ratio: 1080 / 608,
    },
    illustration: "retail",
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
          "**Role:** Sole designer. Analyst interviews, OOUX, flows, testing and all the screens.",
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
        type: "timeline",
        nav: "A day in the life",
        heading: "A day in the life",
        intro: "Let’s say you’re an analyst on this, and you’re in charge of Clothing.",
        columns: [
          {
            label: "In Excel",
            steps: [
              { title: "You open the file.", body: "It’s your team’s turn now, but there are a bunch of you in it, all working on your own bits." },
              { title: "You need to go through each number.", body: "Hundreds of rows, each product. Somewhere under Clothing, under Women’s wear, there’s something you need to change. But which one? So you deep dive into all of it." },
              { title: "Tops looks high. Or maybe it doesn’t?", body: "You check it against another tab, and you’re still not sure. You leave a note: *“recheck??”*" },
              { title: "You change a few numbers and tell everyone you’re done.", body: "Then the file goes to the category leads. Then finance. Then sign-off." },
              { title: "Then someone changes something at the bottom.", body: "It rolls up, and the total you already agreed on is different now. Nobody notices." },
            ],
            end: "And this goes on for weeks.",
          },
          {
            label: "Same day, with the tool",
            highlight: true,
            steps: [
              { title: "You open your stage.", body: "It’s your team’s turn, and the tool knows that. Nobody from the next team can jump in early." },
              { title: "You can see where the flags are.", body: "The AI already went through everything. Women’s wear has 3 flags, so you go there first." },
              { title: "Tops is flagged, way above the threshold.", body: "The AI gives you a number. You change it a little based on your experience." },
              { title: "The other two look fine,", body: "so you just accept what the AI gave." },
              { title: "Before you complete, you see what your changes affect.", body: "If it touches something another team already signed off, you know right away." },
              { title: "You complete your stage.", body: "The category leads unlock and can start." },
            ],
            end: "That’s it. You only touch the numbers that actually need you.",
          },
        ],
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
        type: "image",
        src: "/work/calibration/00-orca-board.png",
        ratio: 1.5814,
        alt: "The ORCA board: four columns of sticky notes headed Objects, Relationships, Core CTAs and Attributes. The relationships column spells out the hierarchy, SBU to Department to Category Group to Category, feeding the Calibration Slice and its metrics, rules, rule violations, status, change logs, review task and approval task.",
        caption: "The ORCA board. Every later call about navigation and states came out of this.",
      },
      {
        type: "diagram",
        nav: "The object model",
        heading: "One object at the centre",
        intro: "The OOUX map is where the roll-up problem became really clear. Everything a team touches is one thing: a calibration slice, like Department · Total market. Metrics, rules, status and the change log all hang off it, and every sign-off runs out of it.",
        name: "calibration",
        plugs: [
          {
            request: "A number goes past the threshold",
            object: "Rule violation",
            note: "Rules run against the slice and raise a violation. That’s the flag the AI shows you.",
          },
          {
            request: "A late edit lower down",
            object: "Change log",
            note: "Every edit is logged against its slice, so the impact review can show what it touches, including numbers someone already signed off.",
          },
          {
            request: "The next team’s turn",
            object: "Status",
            note: "A slice only opens when its stage does. Completing one stage unlocks the next.",
          },
        ],
        outro: "So the screens didn’t start from a table. They started from this.",
      },
      {
        type: "groups",
        nav: "Modes",
        heading: "Every action, sorted into modes",
        intro: "Every action on the ORCA board got sorted by what it’s for. That’s where the screens came from: separate modes, instead of one huge table doing everything.",
        items: [
          { title: "Calibrate", sub: "Judging the numbers", chips: ["Select slice", "Edit metric", "Save changes", "Recalculate", "Reset changes", "Mark as final", "Unlock"] },
          { title: "Resolve rules", sub: "When something’s flagged", chips: ["View rule details", "Fix violation", "Override rule"] },
          { title: "Decide", sub: "Finishing your stage", chips: ["Finalize", "Submit for review"] },
          { title: "Review", sub: "The next team checks it", chips: ["View submitted", "Approve", "Request changes", "Add review comments"] },
          { title: "Approve and publish", sub: "Sign-off", chips: ["View approved submission", "Approve for publish", "Reject and send back", "Publish numbers"] },
          { title: "History", sub: "Who changed what", chips: ["View change history", "Compare versions", "Export audit log"] },
        ],
      },
      {
        type: "numbered",
        nav: "Design decisions",
        heading: "The decisions that shaped it",
        intro: "These are the calls that turned the object map into the tool.",
        items: [
          {
            heading: "The order is enforced, not remembered.",
            body: "Stages unlock one after another, so nobody edits out of turn. In Excel, the order lived in people’s heads and email threads.",
          },
          {
            heading: "The AI flags, the person decides.",
            body: "The agent goes through every row and suggests a number. But nothing moves to the next team until a person completes the stage.",
          },
          {
            heading: "The summary leads with the problem.",
            body: "The first screen says what’s blocked in one sentence, like “07 departments remain blocked due to pricing issues”, with two ways in: the blocked ones, or all of them.",
          },
          {
            heading: "Every number shows its working.",
            body: "Last month’s reported value, the calibrated value and the raw value sit side by side, so you can judge a change instead of just trusting it.",
          },
          {
            heading: "You see the impact before you commit.",
            body: "Because the numbers roll up, the review shows what your changes touch, including numbers someone already signed off.",
          },
          {
            heading: "Edge cases get designed, not left.",
            body: "When there’s nothing to compare against yet, the screen says so. Edits are saved or discarded on purpose. And a rule picked for one run doesn’t quietly become policy.",
          },
        ],
      },
      {
        type: "image",
        src: "/work/calibration/07-calibration-flow.png",
        ratio: 1.5,
        alt: "Calibration flow diagram, titled Every screen answers a question the calibrator was already asking. Three stages: Orient, where home doubles as a progress tracker; Calibrate the level, running Summary, Compare, Edit and Approve, with a Blocked branch that loops back to the summary when a rule conflict stops the level; and Unlock, where finalising a level locks it in and opens the one beneath.",
        caption: "Each screen next to the question it answers. When a rule conflict blocks a level, it loops back to the summary.",
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
    slug: "media-investment-optimisation",
    accent: "blue",
    company: "A global CPG company",
    title: "Rebuilding a media simulator that planners kept leaving for spreadsheets",
    summary:
      "A media simulator that planned one cell at a time, only from a budget, all on one page. Rebuilt around intent, so planners plan a whole portfolio in one run.",
    tags: ["B2B web app", "Marketing Mix Modeling", "Enterprise", "Data product"],
    question: "Rebuilding a media simulator that planners kept leaving for spreadsheets",
    headline:
      "Rebuilt a single-cell media simulator into one intent-first journey for portfolio planning",
    standfirst:
      "A global CPG company had a media simulator that told planners where to put their money. But it planned one cell at a time (market × brand × region × sub-brand), only from a budget, and everything sat on one page. Planners don’t plan one cell, though. They plan a whole portfolio. So a planner covering four brands ran four scenarios, stitched them together in Excel before anything could go to their leadership, and dropped off. The new simulator asks what you’re trying to do first, and plans the whole portfolio in one run.",
    role: "Sole designer",
    timeline: "3 months",
    status: "Handed off to engineering",
    platform: "B2B web app · Marketing Mix Modeling",
    years: "",
    details: [
      { label: "Client", value: "A global CPG company" },
      { label: "Role", value: "Sole designer" },
      {
        label: "Process",
        value: "User interviews, three approaches, OOUX, flows, edge states",
      },
      { label: "Timeline", value: "3 months" },
    ],
    heroArt: "simulator",
    illustration: "cpg",
    deltas: [
      { from: "4 scenarios", to: "1 run", label: "Per portfolio plan" },
      { from: "1", to: "2", label: "Ways to plan" },
    ],
    framework: "custom",
    body: [
      {
        type: "stats",
        eyebrow: "At a glance",
        heading: "What moved",
        items: [
          { value: "1 run", label: "Per portfolio plan, down from four scenarios and an Excel file" },
          { value: "2", label: "Ways to plan: from a budget or from a target" },
          { value: "5", label: "Stages, the same for every approach" },
          { value: "3", label: "New objects: combination, portfolio, constraint" },
        ],
      },
      {
        type: "list",
        nav: "What was wrong with the old simulator",
        heading: "What was wrong with the old simulator",
        intro:
          "The model was fine, right? It did single-cell planning well. It just didn’t scale to how planners actually work.",
        items: [
          "**One combination per run.** Each run covered one cell. A portfolio plan meant several runs, and the planner had to reconcile the outputs by hand.",
          "**Only one way to plan.** You could only go forwards from a budget. You couldn’t start from a business target and let the tool work back to the spend. And that’s the most common question planners get asked.",
          "**Everything on one page.** Scope, constraints and setup, all together on one screen. Fine for one cell. Really heavy once a plan covered many.",
          "**Nothing got saved.** Market, brand, region, sub-brand were just filters. The screen read them, and then they were gone. So you set up the same thing every single time.",
          "**Problems showed up after the run.** You’d only find out something was off once the run had already gone out and come back.",
        ],
        outro:
          "The bigger the plan, the more the work multiplied. The tool didn’t take on any of that scale. The planner did.",
      },
      {
        type: "image",
        src: "/work/rapid-roi/00-old-simulator.png",
        ratio: 1920 / 2274,
        alt: "The old simulator on one page: KPI cards, Create New Portfolio, an Existing Scenarios table, Create New Scenario, and a constraints table with a hierarchy tree, all stacked together. Names are blurred.",
        caption: "The old simulator. Portfolio, scenarios, setup and constraints, all on one page. Names blurred.",
      },
      {
        type: "numbered",
        nav: "The jobs",
        heading: "The jobs",
        intro:
          "These came out of the user interviews and all the feedback on the old flow. They’re what planners were actually hiring the simulator to do.",
        items: [
          {
            heading: "“Let me plan my whole portfolio in one go.”",
            body: "When I plan across several brands and markets, I want to plan them together, so I don’t run four scenarios and stitch them in Excel.",
          },
          {
            heading: "“Let me start from my target.”",
            body: "When I’ve got a business target, I want the tool to work back to the spend that gets me there, so I can answer the question I actually get asked.",
          },
          {
            heading: "“Ask me what I’m trying to do first.”",
            body: "When I start a plan, I want to pick my approach first, so I only see what matters for it.",
          },
          {
            heading: "“Let me reuse my setup.”",
            body: "When I’ve built my scope once, I want to save it and plan with it again, so I’m not re-entering the same thing every cycle.",
          },
          {
            heading: "“Tell me what won’t work before I run it.”",
            body: "When a combination isn’t available or data is missing, I want to know at setup, so I’m not waiting on a run that fails.",
          },
          {
            heading: "“Let me compare my options.”",
            body: "When I’ve got two plans, I want to see them side by side against last year’s numbers, so I can pick the one I’ll present.",
          },
        ],
      },
      {
        type: "table",
        nav: "What was delivered",
        heading: "What was delivered",
        intro:
          "So the simulator got rebuilt around intent. You say what kind of planning you’re doing, and everything after that adapts to it.",
        columns: ["In the old simulator", "In the new simulator"],
        rows: [
          ["One cell per run", "A portfolio: many brand-market combinations, planned together in one run"],
          ["Only forwards from a budget", "Pick your approach: Spend based, Goal based, or In flight"],
          ["Everything on one page", "One journey in five stages: Approach → Scope → Plan → Run → Compare"],
          ["Scope was a filter that disappeared", "Scope is something you build, name, save and reuse"],
          ["Errors after the run", "Problems caught at setup, before anything runs"],
          ["Comparing only the same type", "Compare across approaches, against the MAT baseline"],
        ],
        outro:
          "**Role:** Sole designer. Discovery, user interviews, the three approaches, OOUX, flows and all the screens.",
      },
      {
        type: "options",
        nav: "Three approaches",
        heading: "Three approaches",
        intro: [
          "So after discovery and the interviews, it came down to one question: what does a planner want to know when they open this tool?",
          "There were three good answers to that. Each one got mapped as a full journey, from landing to results, with what it’s good at and what it costs. Then all three went to the client, with the pros and cons laid out side by side.",
        ],
        items: [
          {
            name: "Inline",
            framing: "They know nothing new. Same entry, same screens as today.",
            flow: ["Existing scenarios", "New scenario", "Inline filters", "Save as portfolio?", "Set constraints", "Run", "Results + compare"],
            optimisesFor: "Adoption. It mirrors the current flow exactly, so nobody has to relearn anything.",
            tradesAway: "Portfolio clarity. Planners don’t see a portfolio until they’ve already done the work, so multi-brand planning stays hidden.",
            winsWhen: "The portfolio only shows up when it actually adds value, not as a forced step.",
            risks: "The “Save as portfolio?” prompt becomes one more dialog people close without reading.",
          },
          {
            name: "Portfolio first",
            framing: "They know their portfolio. The portfolio is the first thing they see.",
            flow: ["Portfolio shelf", "Pick or create a portfolio", "New scenario (scoped)", "Set constraints", "Run", "Results + compare"],
            optimisesFor: "Clarity. The portfolio is the first thing on screen, so the idea sinks in before anything else.",
            tradesAway: "Ease for people coming from the old tool. They have to make or pick a portfolio before they can do anything, and that’s a new step.",
            winsWhen: "Multi-brand category leads, and second-time users who’ve already built up a few portfolios.",
            risks: "An empty screen on day one, and “why do I have to make a portfolio first?” in every demo. Single-scenario users get an extra click.",
          },
          {
            name: "Intent first",
            framing: "They know their goal. What they’re trying to do is the first thing they pick.",
            flow: ["Pick your intent", "Scope (portfolio or filters)", "Set up for that intent", "Constraints (or skip)", "Run", "Results for that question"],
            optimisesFor: "Decision speed, for planners who already know what they want.",
            tradesAway: "Exploring. Once you pick an intent, the screens commit to it, so someone who doesn’t know yet gets stopped at the door.",
            winsWhen: "Repeat work, like running the same kind of plan every week. And In flight becomes a real choice, not something buried in a dropdown.",
            risks: "It’s a new pattern, so it needs some learning. And someone asking “what can I do here?” has no neutral way in.",
            picked: true,
          },
        ],
      },
      {
        type: "quotes",
        nav: "Why intent first",
        heading: "Why intent first",
        intro: "We recommended intent first, and the client went with it. Three reasons:",
        items: [
          { text: "Planners come in with a question. So the first screen asks it back.", label: "It starts with their question" },
          { text: "The portfolio doesn’t go away. It just happens while you scope.", label: "The portfolio stays" },
          { text: "Each screen only shows what that intent needs.", label: "Less on every screen" },
        ],
        outro: "And the risks are covered: recent optimisations give a way in without picking anything, and one journey means the new pattern is learned once.",
      },
      {
        type: "journey",
        nav: "The new simulator",
        heading: "One journey for every approach",
        intro: "So now, you pick your approach first. But it’s not a different flow for each one. The same five stages carry every approach, and only the Plan stage changes.",
        highlight: 2,
        rows: [
          { label: "Spend based", sub: "I have a budget", stages: ["Approach", "Scope", "Set budget & rules", "Run", "Compare"] },
          { label: "Goal based", sub: "I have a target", stages: ["Approach", "Scope", "Set target & rules", "Run", "Compare"] },
          { label: "In flight", sub: "Coming next", stages: ["Approach", "Scope", "Plan adapts", "Run", "Compare"], future: true },
        ],
        outro: "Scope, Run and Compare stay exactly where they were. So a planner learns one journey, and a new approach doesn’t reset that.",
      },
      {
        type: "timeline",
        nav: "A day in the life",
        heading: "A day in the life, before and after",
        intro: "Let’s say you’re a planner, and you’ve got four brands across a couple of markets this quarter.",
        columns: [
          {
            label: "Before",
            steps: [
              { title: "Open the simulator", body: "One page. Set the filters for brand one." },
              { title: "Fill in everything", body: "Scope, constraints, budget, all on one screen." },
              { title: "Do it again", body: "Same setup for brands two, three and four." },
              { title: "Guess a budget", body: "Your boss wants a target hit. The tool can’t start from one." },
              { title: "A run fails", body: "Something wasn’t available. You find out now." },
              { title: "Stitch it in Excel", body: "Four outputs, by hand." },
            ],
            end: "4 runs + an Excel file",
          },
          {
            label: "After",
            highlight: true,
            steps: [
              { title: "Pick Goal based", body: "You’ve got a target, so you start there." },
              { title: "Build your scope", body: "All four brands, in one place." },
              { title: "Save it as a portfolio", body: "Next cycle, it’s already there." },
              { title: "Set target and rules", body: "Apply a rule to many rows at once." },
              { title: "See the flag at setup", body: "One combination isn’t available. Fixed before you run." },
              { title: "Run once, then compare", body: "Side by side with a Spend based version." },
            ],
            end: "1 run",
          },
        ],
      },
      {
        type: "numbered",
        nav: "Design decisions",
        heading: "The decisions that shaped it",
        intro: "Picking intent first was the big one. These are the calls that came after it.",
        items: [
          {
            heading: "One journey, not one flow per approach.",
            body: "Every approach runs Approach → Scope → Plan → Run → Compare. Only the Plan stage changes. So planners learn it once, and goal based went in without a new flow.",
          },
          {
            heading: "Scope became something you can save.",
            body: "It used to be a filter the screen read and threw away. Now it’s combinations you build, name as a portfolio, and plan with again next cycle.",
          },
          {
            heading: "Rules live on their own.",
            body: "A constraint is a spend rule for a scope × channel, kept separate from the screens. So new kinds of rules extend it, instead of changing how planning works.",
          },
          {
            heading: "Catch problems at setup, not after the run.",
            body: "Combinations that aren’t available in a market, missing data and locked rows show up while you’re setting up. Nobody waits on a run that comes back failed.",
          },
          {
            heading: "Compare across approaches.",
            body: "A spend based plan and a goal based plan sit side by side, against the MAT baseline, so the planner picks the one they’ll present.",
          },
          {
            heading: "Show In flight before it’s live.",
            body: "It sits on the landing as inactive, so planners know it’s coming, and the structure it needs is already there.",
          },
        ],
      },
      {
        type: "list",
        nav: "The process",
        heading: "The process",
        items: [
          "**Discovery and user feedback.** Went through everything users had said about the old flow, and where it was breaking.",
          "**User interviews.** Talked to planners about how they actually plan across a portfolio, and where the time really goes.",
          "**Three approaches.** Inline, portfolio first and intent first, each mapped as a full journey with its trade-offs. All three went to the client, and we recommended intent first.",
          "**OOUX.** Mapped the old tool as objects. That’s where the real problem showed up: scope was never an object. It was just a filter the screen read and then threw away. So any request to work across more than one cell had nothing to attach to.",
          "**One journey.** Five stages for every approach, with only the Plan stage changing.",
          "**The states nobody sees.** Five screens, and a lot of their states are about failures, limits and missing data. The old tool showed problems after a run had already gone out. These get caught at setup.",
        ],
      },
      {
        type: "diagram",
        nav: "The objects",
        heading: "Three objects hold it together",
        intro: "The OOUX map of the old tool showed the real problem: scope was never an object. So three had to exist before any of this could work. The planning hierarchy and the media hierarchy never touch directly. They only meet through a junction object, and that object holds the relationship.",
        name: "junctions",
        plugs: [
          {
            request: "A new kind of rule",
            object: "Constraint",
            note: "Rules are their own object, so a new one extends it. **Already proven:** today’s channel spend rules run on it.",
          },
          {
            request: "A new approach, like In flight",
            object: "Scenario · Plan stage",
            note: "Approach, Scope, Run and Compare don’t care which type made them. **Already proven:** goal based went in this way.",
          },
          {
            request: "One cell or a whole portfolio",
            object: "Combination",
            note: "A portfolio is just a set of combinations, so there are no special cases. **Already proven:** portfolio planning runs on it today.",
          },
        ],
        outro: "So every time a new request comes in, it plugs into one of these objects. The work goes into the new feature, not into rebuilding what’s underneath.",
      },
      {
        type: "screens",
        nav: "Final design",
        heading: "Final design",
        items: [
          {
            heading: "Pick your approach",
            src: "/work/rapid-roi/01-approach.png",
            ratio: 1440 / 515,
            alt: "Start a new optimisation screen with three cards: Spend Based, Goal Based and In Flight, each with a start button.",
            caption: "Start a new optimisation: Spend based, Goal based and In flight.",
            body: "This wasn’t there before. You say what kind of planning you’re doing first, and the rest of the flow follows from that.",
          },
          {
            heading: "Pick up where you left off",
            src: "/work/rapid-roi/02-recent.png",
            ratio: 1440 / 560,
            alt: "Recent Optimizations list with filter chips for single cell, portfolio, goal based, spend based and run status. Each row shows scope, granularity, quarter, ROI, spend and who created it. Brand names are blurred.",
            caption: "Recent optimisations, filtered by type or status. Brand names blurred.",
            body: "Every run is listed with its scope, quarter, ROI and spend. Filter by type or status, and open the results straight from here.",
          },
          {
            heading: "Build your scope",
            src: "/work/rapid-roi/03-scope.png",
            ratio: 1440 / 1205,
            alt: "Scope setup screen before any brands are added: scenario details and time period at the top, a searchable brand list on the left, an empty Your Scenario panel, a target spend slider, and a MAT reference panel on the right. Brand names are blurred.",
            caption: "Scope setup, before any brands are added. Brands on the left, your scenario on the right, MAT reference alongside.",
            body: "Add brands, build the combinations you want to plan together, and save them as a portfolio. Last year’s numbers sit right next to it, so you always know your starting point.",
          },
          {
            heading: "Set your rules once",
            src: "/work/rapid-roi/04-constraints.png",
            ratio: 1440 / 1104,
            alt: "Set constraints table at channel level. Two rows are checked with Apply to checked active, rules come from a reference scenario, two rows are locked, and the table shows 1–10 of 37 rows.",
            caption: "Set constraints: two rows checked, rules taken from a reference scenario, two rows locked.",
            body: "Check the rows, apply a rule to all of them at once, or start from a past scenario. Even at 37 rows, it stays manageable.",
          },
          {
            heading: "Read the result",
            src: "/work/rapid-roi/05-results.png",
            ratio: 1440 / 1269,
            alt: "Scenario results: KPI cards for spend, incremental sales, volume, ROI, MROI, market share and profit against MAT, a results breakdown bar chart, and a platform breakdown table comparing optimised and MAT values.",
            caption: "Scenario results against the MAT baseline, broken down by platform.",
            body: "The result sits against last year’s numbers. If the target isn’t met, you see the shortfall, not just a “no”.",
          },
          {
            heading: "Compare and decide",
            src: "/work/rapid-roi/06-compare.png",
            ratio: 1440 / 1350,
            alt: "Scenario comparison: two scenarios picked at the top, KPI cards with both values, outcome bars side by side, and a channel comparison table with a MAT baseline toggle. Scenario names are blurred.",
            caption: "Scenario comparison: two scenarios side by side, with the MAT baseline one toggle away.",
            body: "Put two plans side by side, even across approaches, and decide which one you’re taking into the room.",
          },
        ],
      },
      {
        type: "list",
        nav: "Outcome",
        heading: "Outcome",
        intro:
          "**4 → 1.** What took four scenarios and manual consolidation is now one portfolio, one run, one result.",
        items: [
          "**Two ways to plan.** Planners can now start from a budget or from a target, in the same journey.",
          "**Built to extend.** In flight, and any new kind of rule, slots into the same flow. Goal based was already added this way. So the next piece of work goes into the new feature itself, not into rebuilding what’s underneath.",
        ],
        outro: "The designs are handed off to engineering and not in production yet.",
      },
    ],
  },
  {
    slug: "benchmarking-discovery",
    accent: "green",
    company: "A global beverage company",
    title: "Simplifying a messy problem into a clear model",
    summary:
      "Discovery for a 7-year-old supply chain programme at a global beverage company. The brief already told us what to build, but once we started talking to people, 10 things in it changed before a single screen got designed.",
    tags: ["Discovery", "User research", "Requirements", "Enterprise"],
    question: "Simplifying a messy problem into a clear model",
    headline:
      "10 things in the brief changed before a single screen got designed",
    standfirst:
      "This project came with the brief already written. We had to move a dashboard with 15 sub dashboards onto a new platform, for mainly 3 types of users, in 4 months. It seemed very simple. We thought, okay, the brief is pretty clear. But then we started talking to the people who were actually going to use it on the ground, and we figured out that the brief didn’t even touch the real problem. This is the story of the weeks before a single screen got designed, and how they changed what we built.",
    role: "Design Analyst, discovery and requirements",
    timeline: "Sept to Nov 2025",
    status: "",
    platform: "Research, requirement gathering, discovery",
    years: "2025",
    details: [
      { label: "Client", value: "A global beverage company, supply chain team" },
      { label: "Product", value: "A benchmarking-to-value platform used by bottlers across ~2,000 plants" },
      { label: "Role", value: "Design Analyst, discovery and requirements" },
      { label: "Timeline", value: "Sept to Nov 2025" },
      { label: "Phase", value: "Research, requirement gathering, discovery" },
    ],
    heroArt: "usermodel",
    illustration: "tangle",
    deltas: [],
    framework: "custom",
    body: [
      {
        type: "tldr",
        eyebrow: "TL;DR",
        rows: [
          {
            label: "Problem",
            value:
              "A 7-year-old programme was running on 5 apps, password-locked Excel files, SharePoint folders and a lot of emails. The brief already had a fix for it, but it was written before anyone had asked the users what was actually hurting.",
          },
          {
            label: "What was done",
            value:
              "We planned and ran discovery with the client’s tech lead and programme lead, kept track of what we had and hadn’t learned, used the gaps to set the agenda for the next call, and pulled 17 user types into one access model.",
          },
          { label: "Team", value: "PM, tech lead, data team" },
          {
            label: "Result",
            value:
              "10 things in the brief changed before design started. The scope changed, the user model changed, and the client himself gave us a clear test for success.",
          },
        ],
      },
      {
        type: "list",
        nav: "The brief",
        heading: "The brief",
        intro: [
          "Some context first.",
          "Every year, bottlers (the companies that make and ship the drinks) share their supply chain numbers with the global team, like costs, volumes and efficiency. They then get compared against each other, anonymously. Bottlers who want to go deeper fill in a cost breakdown and a 400+ question best-practice survey, and they get an action plan at the end.",
          "**Nobody has to do any of this.** It has been running for 7 years only because bottlers find it useful.",
          "This is what it was all running on:",
        ],
        items: [
          "An Excel template, shared over SharePoint",
          "A cost template, locked with a password that only a couple of people had",
          "5 separate Power BI apps, which made up the 15 sub dashboards",
          "A survey app in 6 languages",
          "Someone at the end of it all, screenshotting reports into PowerPoint by hand",
        ],
        outro: [
          "Even getting someone access meant two separate IDs and a ticket to IT.",
          "So the brief made sense on paper. Put everything on one platform, convert the 15 sub dashboards, and design for 3 types of users: bottler, regional team and super user. It had to ship by January.",
          "Our job was to run discovery and lock the requirements, which basically meant checking if that answer was actually right.",
        ],
      },
      {
        type: "prose",
        nav: "How discovery ran",
        heading: "How discovery ran",
        body: [
          "We had two people to learn from. The tech lead knew how everything was wired, and the programme lead had built the templates and knew why every number existed.",
          "Both of them were busy, so we couldn’t afford vague calls.",
        ],
      },
      {
        type: "table",
        sub: true,
        heading: "Every question had a follow-up",
        intro: [
          "Next to each question, we wrote a follow-up for when the first answer came back too neat, because people usually answer the question you asked and not the one you meant.",
          "Here are a few examples:",
        ],
        columns: ["What we asked first", "What we asked if the answer was too neat"],
        rows: [
          ["What would you automate?", "What did you spend 2 hours on last week that should’ve taken 20 minutes?"],
          ["How do you segment bottlers?", "Give me an example of a high-priority bottler vs a low-priority one. What’s different about how you treat them?"],
          ["How are action plans approved?", "Has a bottler ever said no to a plan? What happened?"],
          ["What can regional teams customise?", "Tell me about a time you and a regional team disagreed. Who had the final say?"],
        ],
        outro:
          "We also marked some questions to skip. AI and predictions were too early. We only planned to ask about language if they pushed on it, because we weren’t sure it was a top-3 pain. It turned out to be one, and that comes up later.",
      },
      {
        type: "numbered",
        items: [
          {
            heading: "Tracking what we didn’t know",
            body: "After every call, we marked each question as fully covered, partly covered or not covered. The partly covered ones were the most interesting. For example, we knew how many bottlers submit data, but nobody could tell us the completion rate.",
          },
          {
            heading: "Gaps became the next agenda",
            body: "The first call left us with 11 gaps, and those 11 gaps became the agenda for the call with the programme lead. Whatever he couldn’t answer went to the next session with a name next to it. So every open question either got answered or got an owner, and nothing just got lost.",
          },
        ],
      },
      {
        type: "findings",
        nav: "What we heard",
        heading: "What we heard",
        intro: "We found a lot of things, but these are the four that actually changed what we built.",
        items: [
          {
            heading: "The plan doesn’t belong to the regional team. It belongs to the bottler.",
            body: [
              "The brief said regional teams create action plans and bottlers view them. That sounded reasonable, but it’s not how it works at all.",
              "The whole thing is voluntary, so bottlers decide what they want to fix, and they build the plan themselves with some help. Nobody hands them a to-do list.",
            ],
            change:
              "The action planning space became the bottler’s workspace instead of a report they receive. That one change decided who the main user was for half the product.",
          },
          {
            heading: "“As easy as Excel, or they’ll go back to 100 systems.”",
            body: [
              "You would expect people to want to get rid of Excel, but they didn’t.",
              "A single bottler can have 15 to 20 people filling in data. They split the Excel file, work offline, stitch it back together and upload it. And it works. The programme lead said getting bottlers to fill data was “zero problem.”",
              "Then he said the line that stayed with us for the whole project. If it’s not easy, bottlers will go back to their own systems, which means 100 systems at the end of the day.",
              "So the web form was competing with Excel, and he was very specific about what that meant: copy and paste, and seeing lots of fields at once. If you can only see 5 values on screen, people will just fill Excel and type it all over again.",
            ],
            change:
              "Excel stayed, and the web form became an option instead of a replacement. And when two people edit the same form, their answers merge so that one doesn’t wipe out the other.",
          },
          {
            heading: "Success meant fewer “how do I use this” questions",
            body: [
              "We asked what success would look like six months after launch, and we expected an answer about revenue numbers or adoption rates.",
              "He said fewer complaints, faster responses and less support. People should be asking about the content, not about how to use the tool.",
              "That gave us a very clear test, and every design decision after this had to pass it. We also found out that a separate company was building training material at the same time, and they needed our screens while we were still designing.",
            ],
            change:
              "Help went into every step instead of one training session at the start, and screenshots went to the training team during design instead of after launch.",
          },
          {
            heading: "“Analytics” was actually two products",
            body: [
              "Everyone kept saying “analytics” like it was one thing, but it wasn’t.",
              "A bottler wants to see *their* results from *their* workshop. The global team wants to see the whole programme across ~2,000 plants, like whether bottlers are actually saving money, or which survey questions everyone answers “yes” to. If 50 questions are always yes, they can be removed. If 90 are always no, that’s a global problem and not a bottler problem.",
              "So it was the same data, but for completely different jobs.",
            ],
            change:
              "We split it into process analytics for bottlers and a programme view for the global team, which we called Mission Control. Mission Control went from a nice-to-have to the top priority.",
          },
        ],
      },
      {
        type: "prose",
        nav: "From 17 user types to one grid",
        heading: "From 17 user types to one grid",
        body: [
          "The brief had 3 types of users. When we mapped everyone who actually touches this thing, we got 17, including plant managers, regional heads, admins on both sides, content approvers, translators and the tech team.",
          "You can’t really design for 17 personas, because it just turns into a spreadsheet nobody reads.",
          "So instead of asking who someone is, we started asking two questions: what can you do, and how far can you see? That gave us 6 capabilities and 5 levels, and all 17 types fit somewhere on this grid.",
        ],
      },
      {
        type: "diagram",
        name: "usermodel",
      },
      {
        type: "prose",
        body: [
          "Once it was on the grid, the pattern was easy to see. Entering data happens at every level, but changing the rules only happens at the top, which is exactly the control the programme lead wanted. It also meant we had to design 5 flows (the 6th is backend only) and not 17 versions of the same screen.",
        ],
      },
      {
        type: "table",
        nav: "What the brief assumed",
        heading: "What the brief assumed vs what we found",
        intro:
          "This is the most important part of the project. Here are the 10 things the brief assumed, next to what people actually told us.",
        columns: ["The brief said", "What we found"],
        rows: [
          ["Regional teams create action plans", "Bottlers own their plans, because the whole thing is voluntary"],
          ["3 types of users", "17 types, which we pulled into 6 capabilities across 5 levels"],
          ["Super users will need Python to configure things", "The programme lead wanted to change things through the interface, and code stays with the tech team"],
          ["Convert all 15 sub dashboards", "Some reports nobody opens, so rebuild based on what’s actually used instead of copying the old ones"],
          ["Languages are an add-on", "Languages were core. The real pain was waiting 2 to 4 weeks for every translation before anything could be published"],
          ["Regional teams send reminders", "The global team sends reminders by hand, based on relationships, and regional teams don’t even have admin access"],
          ["“Monitor usage”", "Mission Control became the top priority"],
          ["There’s no system for cost mapping", "There was one. It was Excel on SharePoint, just not connected to anything"],
          ["(Excel wasn’t mentioned)", "Excel stays, and that was non-negotiable"],
          ["A chatbot as an add-on", "It moved out of the first version, and when it does come, it has to say “I don’t know, ask X” instead of guessing"],
        ],
        outro:
          "This doesn’t mean the brief was bad. It was written before anyone had spoken to users, and that’s what discovery is for.",
      },
      {
        type: "list",
        nav: "Checking the platform",
        heading: "Then we checked it against the platform",
        intro: [
          "So now we knew what users needed, and the next question was whether the platform could actually do it.",
          "We went through every requirement with the platform team and colour-coded each one: already available, not available, needs more clarity, or needs the platform team to confirm.",
          "Some of the answers were hard to hear:",
        ],
        items: [
          "**No auto-translation on the platform,** and we had just learned that languages were core.",
          "**Region-based data access wasn’t built in,** which is a big deal when bottlers must *never* see each other’s data.",
          "**The platform ships as a locked image,** so “admins with coding skills can extend it” wasn’t really true.",
        ],
        outro: [
          "So we had to be honest about what could go in the first version. A deployment-tracking tool, a community forum and the chatbot all moved out. Exporting to PowerPoint moved out too, which hurt, because of the person screenshotting reports into slides. Action plans export to Excel, PDF and image instead.",
          "There were also some things we protected no matter what. Bottlers only ever see their own data. Question IDs stay the same when only the wording changes, so you can still ask “has this plant improved over 3 years?” And data is kept forever, because, quote, “data is not a cost factor.”",
          "A big part of requirements is saying no to things and being able to explain why.",
        ],
      },
      {
        type: "prose",
        nav: "Being honest about it",
        heading: "Being honest about it",
        body: [],
      },
      {
        type: "list",
        sub: true,
        heading: "What this role was part of",
        items: [
          "The question bank and the follow-ups",
          "Running the discovery calls",
          "The coverage tracker and the gap analysis",
          "Turning findings into features, design decisions and success criteria",
          "The 6 x 5 access model",
        ],
      },
      {
        type: "list",
        sub: true,
        heading: "What this role didn’t own",
        items: [
          "The brief, the scope and the commercials",
          "The platform feasibility calls, which sat with the platform and tech team",
          "The templates and the maths behind the benchmarks, which are all the programme lead’s work and genuinely impressive",
        ],
      },
      {
        type: "list",
        sub: true,
        heading: "What was still open when discovery ended",
        intro: "We didn’t have everything figured out, so here’s what was still open.",
        items: [
          "Mission Control needed its own session. We knew what it was for, but not exactly what went in it.",
          "The plan-on-a-page had no designs yet. The programme lead said, fairly, “I have not seen anything so I can’t comment.”",
          "We still hadn’t confirmed how much regional teams can see in the cost and survey modules.",
          "We never got a real answer on what happens when a bottler says no to a plan.",
        ],
      },
      {
        type: "prose",
        sub: true,
        heading: "What would change next time",
        body: [
          "Push to talk to a bottler directly, and not just the global team. Every insight about bottlers here came secondhand. The “as easy as Excel” line was right, but it would’ve been great to watch 15 people actually stitch that Excel file together.",
          "And count things earlier. The tracker covered what we had learned, but not how many requirements actually changed because of it, and that number would’ve made this story easier to tell.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
