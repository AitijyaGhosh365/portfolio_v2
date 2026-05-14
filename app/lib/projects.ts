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
    links: [{ label: "Live Demo", href: "#" }],
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
    links: [{ label: "Play Store", href: "#" }],
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
    links: [{ label: "GitHub", href: "#" }],
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
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
