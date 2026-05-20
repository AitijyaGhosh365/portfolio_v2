export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  stack: string[];
  links?: { label: string; href: string }[];
  summary: string;
  body: {
    heading: string;
    paragraphs: string[];
  }[];
};

export const projects: Project[] = [
  {
    slug: "evalitix",
    title: "Evalitix",
    tagline: "AI-powered candidate evaluation platform",
    year: "2026",
    stack: ["FastAPI", "React", "Firebase", "LLMs"],
    links: [{ label: "Live Demo", href: "https://evalitix.vercel.app/" }],
    summary:
      "A full-stack AI system that analyses candidate submissions and returns structured, explainable feedback — built on FastAPI microservices, an LLM-driven scoring pipeline, and a real-time React + Firestore frontend.",
    body: [
      {
        heading: "The problem",
        paragraphs: [
          "Hiring teams spend most of their time on the wrong half of the funnel — reading near-identical submissions, scoring them inconsistently, and writing the same feedback over and over. Evalitix exists to take that load off humans and hand it to a model that can stay calibrated across hundreds of candidates.",
        ],
      },
      {
        heading: "What I built",
        paragraphs: [
          "On the backend, I designed FastAPI microservices that handle quantifier generation, multi-step scoring, and the evaluation workflow itself. Each step is its own service, which keeps prompts isolated and makes it cheap to swap models per stage.",
          "On the frontend, a React app talks to Firebase Firestore for real-time updates so recruiters watch evaluations stream in instead of refreshing a dashboard.",
        ],
      },
      {
        heading: "Prompt engineering",
        paragraphs: [
          "The hard part wasn't the plumbing — it was making the model agree with itself across runs. I built role-aware prompts with explicit rubrics and bias-reduction guardrails, then ran calibration passes against known-good samples until the variance was acceptable.",
        ],
      },
      {
        heading: "Extensibility",
        paragraphs: [
          "The scoring API is modular: you describe the role, the rubric, and the weighting, and the same pipeline serves a frontend hire, an SRE, or a designer without me touching a line of code.",
        ],
      },
    ],
  },
  {
    slug: "silvo",
    title: "Silvo",
    tagline: "Gamified productivity, shipped to the Play Store",
    year: "2025 — 2026",
    stack: ["React Native", "RevenueCat", "AdMob"],
    links: [{ label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.chilledoutaj.silvo" }],
    summary:
      "A production React Native app that turns task completion into a growing visual jungle. End-to-end ownership: offline-first storage, subscription monetisation, analytics, and the long tail of release polish.",
    body: [
      {
        heading: "The idea",
        paragraphs: [
          "Most productivity apps reward you with a checkmark. Silvo grows a jungle. Every habit you complete plants something; every streak you keep alive lets it grow. The dopamine loop is visual, not numeric — which, it turns out, sticks.",
        ],
      },
      {
        heading: "Offline-first by design",
        paragraphs: [
          "Productivity apps that need a network to add a task are dead on arrival. I architected Silvo around persistent local storage so every interaction works without a connection, with sync as the icing rather than the cake.",
        ],
      },
      {
        heading: "Monetisation",
        paragraphs: [
          "Integrated RevenueCat for subscription management and Google AdMob for ad-supported tiers. That meant entitlement checks, paywall flows, restore-purchases, and the kind of edge cases that only show up when a real user gets a refund.",
        ],
      },
      {
        heading: "Performance",
        paragraphs: [
          "Animated jungles on low-end Android devices is a recipe for jank. I spent a real chunk of time profiling React Native's render pipeline and pruning re-renders until the jungle felt alive on a $100 phone.",
        ],
      },
    ],
  },
  {
    slug: "fifs",
    title: "FIFS — IPL Fantasy Predictor",
    tagline: "ML model that placed 4th nationally",
    year: "2025",
    stack: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    links: [{ label: "GitHub", href: "https://github.com/AitijyaGhosh365/FIFS" }],
    summary:
      "A machine learning pipeline that predicts optimal IPL fantasy line-ups from historical match and player data. Ranked 4th out of 30+ teams in the FIFS All India ML Competition; featured in Waves.",
    body: [
      {
        heading: "Feature engineering",
        paragraphs: [
          "Raw IPL data is noisy — pitch reports, weather, recent form, head-to-head history. I built a Pandas-heavy pipeline that turned each match into a feature vector blending player stats, conditions, and match context.",
        ],
      },
      {
        heading: "Model selection",
        paragraphs: [
          "I trained and benchmarked Random Forests against XGBoost via Scikit-learn. After normalisation and a fair amount of hyperparameter tuning, XGBoost edged ahead on the validation splits I trusted most.",
        ],
      },
      {
        heading: "The result",
        paragraphs: [
          "Submitted to the FIFS All India ML competition and placed 4th of 30+ teams. The writeup was featured in the Waves publication, which was a fun bonus.",
        ],
      },
    ],
  },
  {
    slug: "discloud",
    title: "Discloud",
    tagline: "A Discord server as a personal cloud drive",
    year: "2025",
    stack: ["FastAPI", "Python", "SQLite", "Discord API"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AitijyaGhosh365/discloud",
      },
    ],
    summary:
      "A self-hosted cloud drive that uses a Discord server as its storage backend. Files split into 6 MB chunks, each posted as an attachment in a storage channel; a single 'address' message in a separate channel indexes the whole file. Locally, the only thing I keep is the address message ID — Discord holds the bytes.",
    body: [
      {
        heading: "The premise",
        paragraphs: [
          "Discord effectively gives every server unlimited attachment storage for small files. So I asked the obvious question: what if a Discord server were the cloud drive? Files split into chunks, each chunk a message, one tidy index message stitching them together.",
        ],
      },
      {
        heading: "How it actually works",
        paragraphs: [
          "Uploads stream from the browser into FastAPI, get chunked into 6 MB blocks, and each block is POSTed to Discord in parallel via a ThreadPoolExecutor — SHA-256 runs on the producer thread so the hash is ready by the time the last chunk lands. The resulting list of attachment URLs gets packed into a JSON 'address' message in a second channel; that's the only ID stored locally.",
          "Downloads use a sliding-window fetcher that drains chunks in order into a StreamingResponse. The full file never materialises on the server's disk — it's a continuous pipe from Discord to the browser.",
        ],
      },
      {
        heading: "Live pipeline feedback",
        paragraphs: [
          "While the pipeline works, the server pushes per-chunk events — chunk_started, chunk_received, chunk_yielded — over Server-Sent Events. The frontend renders each chunk as a coloured cell that fills the progress bar in real time, so you can watch the parallelism happen.",
        ],
      },
      {
        heading: "Why it's interesting",
        paragraphs: [
          "Half the fun was the systems-thinking puzzle — bounded producers, sliding-window consumers, in-order drain to a streaming response. The other half was the absurdity of the premise. The result is a working drive with a SQLite metadata table, a Discord server full of chunked binaries, and an architecture that wouldn't survive contact with a real ToS team. Exactly the kind of project I built it to be.",
        ],
      },
    ],
  },
  {
    slug: "claude-chat",
    title: "Claude Chat",
    tagline: "Self-hosted chat client for the Anthropic API",
    year: "2026",
    stack: ["Next.js", "React 19", "Redux Toolkit", "Anthropic API"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AitijyaGhosh365/claude-chat-with-api",
      },
    ],
    summary:
      "A streaming Claude client I built because I wanted local control over conversations, files, and model choice. Sessions persist as plain JSON on disk, file uploads flow through the Anthropic Files API, and on thinking-capable models the reasoning streams live alongside the response.",
    body: [
      {
        heading: "Why build it",
        paragraphs: [
          "I wanted a chat surface that ran on my own machine, kept conversation history in JSON I could read and back up, and let me swap between Opus, Sonnet, and Haiku without leaving the page. So I built one.",
        ],
      },
      {
        heading: "Streaming + thinking",
        paragraphs: [
          "Chat responses stream over SSE so tokens land as they come. On models that support extended thinking, the reasoning chunks render in a collapsible block above the answer — you can watch the model work before it commits to a reply.",
        ],
      },
      {
        heading: "Files + sessions",
        paragraphs: [
          "Drag-and-drop a file anywhere in the chat area and it's routed through the Anthropic Files API as a typed reference, not a base64 blob. Each conversation persists as its own JSON document, and the first message gets auto-summarised by Haiku into a title so the sidebar reads like a tidy notebook.",
        ],
      },
      {
        heading: "Shape of it",
        paragraphs: [
          "Next.js 15 App Router on the server, Redux Toolkit on the client. The API key never reaches the browser — every model call goes through a server route that holds the secret. About as small as a useful Claude client can reasonably be.",
        ],
      },
    ],
  },
  {
    slug: "primetrade-bot",
    title: "Primetrade Trading Bot",
    tagline: "Binance Futures Testnet CLI — MARKET, LIMIT, STOP-LIMIT",
    year: "2025",
    stack: ["Python", "Binance API", "argparse"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AitijyaGhosh365/primetrade-binance-api",
      },
    ],
    summary:
      "A small, structured Python CLI that places MARKET, LIMIT, and STOP-LIMIT orders on the Binance USDT-M Futures Testnet. Built as the take-home for the Primetrade.ai Python Developer application — input validation up front, rotating logs, and clean separation between the API client, order logic, and the CLI surface.",
    body: [
      {
        heading: "What it does",
        paragraphs: [
          "Three subcommands — market, limit, stop-limit — each with its own argparse surface for symbol, side, quantity, and prices. Every order is validated locally before it touches the API: bad symbols, wrong sides, non-numeric quantities, all rejected with clear errors and the right exit code.",
        ],
      },
      {
        heading: "Engineering choices",
        paragraphs: [
          "Pinned to the testnet so the code can't accidentally hit production. Order logic, the Binance client wrapper, and validators live in separate modules so each can be tested or replaced in isolation. Every request, response, and error lands in a rotating log file alongside a console summary — the kind of trail you'd want during an audit.",
        ],
      },
      {
        heading: "Why STOP-LIMIT matters",
        paragraphs: [
          "The brief asked for MARKET and LIMIT; STOP-LIMIT was an explicit bonus. I went after it because that's where the real gotchas live — triggers fire on mark price, the limit posts after, and decimal precision rules suddenly start to matter. Implementing it forced a more honest pass over the rest of the codebase.",
        ],
      },
    ],
  },
  {
    slug: "phantom-scraper",
    title: "Phantom Scraper X",
    tagline: "Authenticated social-media scraper for Smart India Hackathon",
    year: "2024",
    stack: ["Python", "Selenium", "JSON"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AitijyaGhosh365/phantom_scraper_x",
      },
    ],
    summary:
      "A Selenium-driven scraper that signs in to a real social account in a fresh browser, persists the session, and pulls profile data, posts, replies, DMs, and media into structured JSON. Built for Smart India Hackathon, where the brief required working inside an authenticated session — not the public-page kind of scraping.",
    body: [
      {
        heading: "Why authenticated scraping",
        paragraphs: [
          "Public scrapers fall over the moment a target requires login. SIH's problem statement assumed a logged-in operator, so the scraper had to live inside a real authenticated session and survive across runs without re-prompting for credentials.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "On first launch the scraper opens a real Chrome instance via Selenium and hands the keyboard to the user — credentials never touch the codebase. Once the session lands, cookies are persisted locally; every subsequent run hydrates that cookie jar instead of asking again.",
          "From there it walks an account's profile, posts, replies, DMs, and media, normalising each into a JSON document. Screenshots are captured throughout so the evidence chain matches the data dump.",
        ],
      },
      {
        heading: "What I learned",
        paragraphs: [
          "Browser automation is unglamorous — half the work is timing waits, handling rate limits, and noticing when a layout silently shifted under you. The reward is a tool that turns the boring half of investigative work from hours into minutes.",
        ],
      },
    ],
  },
  {
    slug: "luna",
    title: "Luna",
    tagline: "tmux power, zero tmux pain",
    year: "2026",
    stack: ["Bun", "React", "Ink", "tmux"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AitijyaGhosh365/luna",
      },
    ],
    summary:
      "A keyboard-only launcher that wraps tmux's persistent-session machinery in a UI you can use without ever opening the tmux manual. Arrows to navigate, Enter to open, Esc to detach — luna handles the socket plumbing, live previews, and slot bookkeeping underneath.",
    body: [
      {
        heading: "Why luna",
        paragraphs: [
          "tmux is the most powerful terminal multiplexer ever shipped, and its keybindings are why most people don't use it. Luna keeps everything that makes tmux great — persistent sessions, named workspaces, true detach — and throws out the chord-based UX. Arrows and Enter cover ninety percent of what you'd ever do.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "Each visual slot in the launcher maps to a stable tmux session id on an isolated `tmux -L luna` socket — so Luna can never collide with your existing tmux configs. Press Enter, tmux's display-popup attaches to that session. Press Esc, the popup closes and the session keeps running in the background. Come back tomorrow, hit Enter again, you're right where you left off.",
        ],
      },
      {
        heading: "Live previews",
        paragraphs: [
          "The right pane polls each session once a second via `tmux capture-pane`, so you see the last few lines of output, the current working directory, and the foreground command of every slot without ever attaching. It's the small feature that flips tmux from \"powerful but blind\" to \"powerful and obvious\".",
        ],
      },
      {
        heading: "Hackable",
        paragraphs: [
          "Every tmux command Luna runs lives in one editable `tmux-commands.json` — popup size, detach key, escape-time, history-limit. Bun + React + Ink underneath, so the whole UI is a normal React tree you can read in a single sitting.",
        ],
      },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
