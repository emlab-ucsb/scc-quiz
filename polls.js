// Trivia question bank — hand-edit this file to change the quiz.
//
// To edit: change the `question`, the `options` labels, or which option is
// `correct`. Keep each option's `id` (a/b/c/d) and point `correct` at the id
// of the right answer. Add or remove whole q# entries to change the lineup —
// the deck and phones follow this file's order automatically. Reload the page
// (or push to redeploy) to see your changes.
//
// An option may carry an optional `note` (e.g. note: "~100 °C"). The note is
// hidden while voting and pops in next to the label on the answer slide.
//
// `background` is the image shown behind that question's slides. Drop a file
// into the pics/ folder and set background to its path, e.g.
// background: "pics/kelp.jpg". The shrimp placeholder is just a default —
// give each question its own. The deck scales it to fit without stretching.
//
// Answers are stored per player at /rooms/{room}/answers/{poll}/{playerId}.
// Scoring is dead simple: +1 for each correct answer, 0 otherwise.
export const POLLS = {
  q1: {
    question:
      "When a pistol shrimp snaps its claw shut, the collapsing cavitation bubble briefly flashes light and reaches a peak temperature roughly comparable to what?",
    background: "pics/Candy-Cane-Pistol-Shrimp.png.webp",
    correct: "d",
    options: [
      { id: "a", label: "Boiling water", note: "~100 °C" },
      { id: "b", label: "A campfire", note: "~1,000 °C" },
      { id: "c", label: "A lightning bolt", note: "~30,000 °C" },
      { id: "d", label: "The surface of the sun", note: "~4,800 °C" },
    ],
  },
  q2: {
    question:
      "Giant kelp, the backbone of Santa Barbara's underwater forests, can grow as fast as how much per day?",
    background: "pics/header-kelp-structure.jpg",
    correct: "c",
    options: [
      { id: "a", label: "1 centimeter" },
      { id: "b", label: "6 inches" },
      { id: "c", label: "2 feet" },
      { id: "d", label: "3 meters" },
    ],
  },
  q3: {
    question:
      "A mantis shrimp throws the fastest punch in the animal kingdom — its club accelerates underwater about as fast as what?",
    background: "pics/mantis-shrimp.jpg.webp",
    correct: "d",
    options: [
      { id: "a", label: "A space shuttle launch", note: "~30 m/s²" },
      { id: "b", label: "A thrown baseball", note: "~45 m/s²" },
      { id: "c", label: "A sprinting cheetah", note: "~10 m/s²" },
      { id: "d", label: "A .22-caliber bullet", note: "~100,000 m/s²" },
    ],
  },
  q4: {
    question:
      "A blue whale is the largest animal ever known to live — its heart alone weighs roughly as much as what?",
    background: "pics/blue-whale.jpg",
    correct: "c",
    options: [
      { id: "a", label: "A house cat", note: "~5 kg" },
      { id: "b", label: "A golden retriever", note: "~30 kg" },
      { id: "c", label: "A lion", note: "~190 kg" },
      { id: "d", label: "A grand piano", note: "~450 kg" },
    ],
  },
  q5: {
    question:
      "Chasing giant squid in the dark, the deepest a sperm whale has been observed to dive is approximately...",
    background: "pics/640x427-sperm-whale.png",
    correct: "b",
    options: [
      { id: "a", label: "1,000 meters" },
      { id: "b", label: "2,000 meters" },
      { id: "c", label: "3,000 meters" },
      { id: "d", label: "4,000 meters" },
    ],
  },
  q6: {
    question:
      "Which of the following businesses did NOT originate in Santa Barbara County?",
    background: "pics/aerial-view-ocean-front.jpg",
    correct: "a",
    options: [
      { id: "a", label: "Patagonia", note: "Ventura, 1973" },
      { id: "b", label: "Motel 6", note: "Santa Barbara, 1962" },
      { id: "c", label: "Kinko's", note: "Isla Vista, 1970" },
      { id: "d", label: "The Habit Burger Grill", note: "Goleta, 1969" },
    ],
  },
  q7: {
    question:
      "Which three-time world champion surfer — celebrated for his silky-smooth style — grew up surfing in Santa Barbara?",
    background: "pics/aerial-view-ocean-front.jpg",
    correct: "b",
    options: [
      { id: "a", label: "Kelly Slater", note: "11× champ, Florida" },
      { id: "b", label: "Tom Curren", note: "Santa Barbara" },
      { id: "c", label: "Laird Hamilton", note: "big-wave, Hawaii" },
      { id: "d", label: "Shaun Tomson", note: "1977 champ, South Africa" },
    ],
  },
  q8: {
    question:
      "Founded in 1786, Old Mission Santa Barbara is known by what nickname?",
    background: "pics/aerial-view-ocean-front.jpg",
    correct: "c",
    options: [
      { id: "a", label: "Castle by the Sea" },
      { id: "b", label: "Jewel of the Coast" },
      { id: "c", label: "Queen of the Missions" },
      { id: "d", label: "Crown of California" },
    ],
  },
  q9: {
    question:
      "Surfers cross oceans for a cobblestone right-hand point break on the Santa Barbara–Ventura county line, nicknamed the 'Queen of the Coast.' What is it?",
    background: "pics/aerial-view-ocean-front.jpg",
    correct: "a",
    options: [
      { id: "a", label: "Rincon", note: "SB–Ventura line" },
      { id: "b", label: "Mavericks", note: "Half Moon Bay" },
      { id: "c", label: "Trestles", note: "San Clemente" },
      { id: "d", label: "Steamer Lane", note: "Santa Cruz" },
    ],
  },
  q10: {
    question:
      "During his presidency, Ronald Reagan's mountaintop ranch above Santa Barbara was dubbed the 'Western White House.' What was it named?",
    background: "pics/aerial-view-ocean-front.jpg",
    correct: "b",
    options: [
      { id: "a", label: "Rancho Mirage" },
      { id: "b", label: "Rancho del Cielo" },
      { id: "c", label: "Casa del Sol" },
      { id: "d", label: "El Rancho Grande" },
    ],
  },
};

// Presentation order follows the order of POLLS above.
export const POLL_ORDER = Object.keys(POLLS);

// Points a single answer earns toward the leaderboard: 1 if correct, else 0.
export function scoreAnswer(poll, answer) {
  if (!poll || poll.correct == null) return 0;
  return answer === poll.correct ? 1 : 0;
}
