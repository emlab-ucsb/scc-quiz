// Question definitions, authored at build time.
// The database only ever stores tallies + which poll is currently live.
// IMPORTANT: these ids/labels must match the data-poll slides in slides.qmd.
export const POLLS = {
  q1: {
    question: "Your gut: what's the social cost of one tonne of CO₂?",
    options: [
      { id: "a", label: "Under $25" },
      { id: "b", label: "Around $50" },
      { id: "c", label: "Around $185" },
      { id: "d", label: "Over $300" },
    ],
  },
  q2: {
    question:
      "Weitzman's Dismal Theorem says that with fat-tailed catastrophic risk, the 'correct' carbon price could be…",
    options: [
      { id: "a", label: "A modest, finite number" },
      { id: "b", label: "Effectively unbounded" },
      { id: "c", label: "Zero — too uncertain to act" },
      { id: "d", label: "Whatever the discount rate implies" },
    ],
  },
  q3: {
    question:
      "Be honest — what peak warming (vs. pre-industrial) do you think we'll actually hit?",
    options: [
      { id: "a", label: "1.5 °C or less" },
      { id: "b", label: "Around 2 °C" },
      { id: "c", label: "Around 3 °C" },
      { id: "d", label: "4 °C or more" },
    ],
  },
};

// Order presenter advances through. Must match keys in POLLS.
export const POLL_ORDER = ["q1", "q2", "q3"];
