// Question definitions, authored at build time.
// The database only ever stores tallies + which poll is currently live.
// Swap these out for your real talk questions. Keep ids stable & url-safe.
export const POLLS = {
  q1: {
    question: "How familiar are you with Firebase?",
    options: [
      { id: "a", label: "Never used it" },
      { id: "b", label: "Tried it once or twice" },
      { id: "c", label: "Use it regularly" },
    ],
  },
  q2: {
    question: "Which session are you most excited for?",
    options: [
      { id: "a", label: "Realtime apps" },
      { id: "b", label: "Auth & security" },
      { id: "c", label: "Hosting & deploy" },
      { id: "d", label: "AI / ML" },
    ],
  },
};

// Order presenter advances through. Must match keys in POLLS.
export const POLL_ORDER = ["q1", "q2"];
