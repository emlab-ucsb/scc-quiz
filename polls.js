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
  // Free-number questions: phone shows a number input; deck shows a histogram.
  q4: {
    type: "number",
    question: "Now pin it down: your social cost of CO₂ (US$ / tonne)",
    unit: "$",
    min: 0,
    max: 2000,
    placeholder: "e.g. 185",
  },
  q5: {
    type: "number",
    question: "Your number: peak warming above pre-industrial (°C)",
    unit: "",
    min: 0,
    max: 8,
    step: 0.1,
    placeholder: "e.g. 2.7",
  },
};

// Order presenter advances through. Must match keys in POLLS.
export const POLL_ORDER = ["q1", "q4", "q2", "q3", "q5"];
