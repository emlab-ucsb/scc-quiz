// Question definitions, authored at build time.
// Answers are stored per player at /rooms/{room}/answers/{poll}/{playerId}.
//
// Scoring (for the end-of-talk podium only):
//   - MC with `correct`: full points for the right option, else 0.
//   - number with `target`: points scale with closeness to the target.
//   - anything without `correct`/`target` is an *opinion* question (unscored).
export const POLLS = {
  q1: {
    question: "Your gut: what's the social cost of one tonne of CO₂?",
    correct: "c", // Rennert et al. central estimate ≈ $185
    options: [
      { id: "a", label: "Under $25" },
      { id: "b", label: "Around $50" },
      { id: "c", label: "Around $185" },
      { id: "d", label: "Over $300" },
    ],
  },
  q4: {
    type: "number",
    question: "Now pin it down: your social cost of CO₂ (US$ / tonne)",
    target: 185,
    unit: "$",
    min: 0,
    max: 2000,
    placeholder: "e.g. 185",
  },
  q2: {
    question:
      "Weitzman's Dismal Theorem says that with fat-tailed catastrophic risk, the 'correct' carbon price could be…",
    correct: "b", // the theorem's literal claim (debatable — easy to change)
    options: [
      { id: "a", label: "A modest, finite number" },
      { id: "b", label: "Effectively unbounded" },
      { id: "c", label: "Zero — too uncertain to act" },
      { id: "d", label: "Whatever the discount rate implies" },
    ],
  },
  q3: {
    // opinion — no scoring
    question:
      "Be honest — what peak warming (vs. pre-industrial) do you think we'll actually hit?",
    options: [
      { id: "a", label: "1.5 °C or less" },
      { id: "b", label: "Around 2 °C" },
      { id: "c", label: "Around 3 °C" },
      { id: "d", label: "4 °C or more" },
    ],
  },
  q5: {
    // opinion — no scoring (no ground truth)
    type: "number",
    question: "Your number: peak warming above pre-industrial (°C)",
    unit: "",
    min: 0,
    max: 8,
    step: 0.1,
    placeholder: "e.g. 2.7",
  },
};

// Order the deck presents poll slides in (also used by standalone tools).
export const POLL_ORDER = ["q1", "q4", "q2", "q3", "q5"];

// Points a single answer earns toward the podium.
export function scoreAnswer(poll, answer) {
  if (!poll) return 0;
  if (poll.type === "number") {
    if (poll.target == null) return 0;
    const v = Number(answer);
    if (!isFinite(v)) return 0;
    return Math.round(100 * Math.max(0, 1 - Math.abs(v - poll.target) / poll.target));
  }
  if (poll.correct == null) return 0;
  return answer === poll.correct ? 100 : 0;
}
