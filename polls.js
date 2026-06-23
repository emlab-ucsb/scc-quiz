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
    correct: "c",
    options: [
      { id: "a", label: "Boiling water", note: "~100 °C" },
      { id: "b", label: "A campfire", note: "~1,000 °C" },
      { id: "c", label: "The surface of the sun", note: "~4,800 °C" },
      { id: "d", label: "A lightning bolt", note: "~30,000 °C" },
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
    correct: "c",
    options: [
      { id: "a", label: "A thrown baseball", note: "~45 m/s²" },
      { id: "b", label: "A sprinting cheetah", note: "~13,000 m/s²" },
      { id: "c", label: "A .22-caliber bullet", note: "~100,000 m/s²" },
      { id: "d", label: "A space shuttle launch", note: "~30 m/s²" },
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
      { id: "c", label: "A full-grown lion", note: "~190 kg" },
      { id: "d", label: "A grand piano", note: "~450 kg" },
    ],
  },
  q5: {
    question:
      "Chasing giant squid in the dark, a sperm whale can hold its breath and dive to depths of roughly how much?",
    background: "pics/640x427-sperm-whale.png",
    correct: "c",
    options: [
      { id: "a", label: "100 meters" },
      { id: "b", label: "600 meters" },
      { id: "c", label: "2,000 meters" },
      { id: "d", label: "7,000 meters" },
    ],
  },
  q6: {
    question:
      "Who shared the 2019 Nobel Prize in Economics with Esther Duflo and Michael Kremer for an experimental approach to fighting global poverty?",
    background: "pics/Candy-Cane-Pistol-Shrimp.png.webp",
    correct: "c",
    options: [
      { id: "a", label: "Amartya Sen" },
      { id: "b", label: "Paul Romer" },
      { id: "c", label: "Abhijit Banerjee" },
      { id: "d", label: "Jeffrey Sachs" },
    ],
  },
  q7: {
    question:
      "The term 'artificial intelligence' was coined at a now-famous 1956 summer workshop held at which university?",
    background: "pics/Candy-Cane-Pistol-Shrimp.png.webp",
    correct: "b",
    options: [
      { id: "a", label: "MIT" },
      { id: "b", label: "Dartmouth College" },
      { id: "c", label: "Stanford" },
      { id: "d", label: "Carnegie Mellon" },
    ],
  },
  q8: {
    question:
      "Founded in 1786, Old Mission Santa Barbara is known by what nickname?",
    background: "pics/Candy-Cane-Pistol-Shrimp.png.webp",
    correct: "c",
    options: [
      { id: "a", label: "King of the Missions" },
      { id: "b", label: "Jewel of the Coast" },
      { id: "c", label: "Queen of the Missions" },
      { id: "d", label: "Crown of California" },
    ],
  },
  q9: {
    question:
      "The famous 'Keeling Curve,' measured at Mauna Loa since 1958, tracks the rising concentration of what gas?",
    background: "pics/Candy-Cane-Pistol-Shrimp.png.webp",
    correct: "c",
    options: [
      { id: "a", label: "Methane" },
      { id: "b", label: "Ozone" },
      { id: "c", label: "Carbon dioxide" },
      { id: "d", label: "Nitrous oxide" },
    ],
  },
  q10: {
    question:
      "Alan Heeger shared the 2000 Nobel Prize in Chemistry for the discovery of conductive what?",
    background: "pics/Candy-Cane-Pistol-Shrimp.png.webp",
    correct: "a",
    options: [
      { id: "a", label: "Polymers (plastics)" },
      { id: "b", label: "Superconductors" },
      { id: "c", label: "Semiconductors" },
      { id: "d", label: "Liquid crystals" },
    ],
  },
  q11: {
    question:
      "Sea otters are a keystone species because they keep what kelp-grazing animal in check?",
    background: "pics/Candy-Cane-Pistol-Shrimp.png.webp",
    correct: "d",
    options: [
      { id: "a", label: "Jellyfish" },
      { id: "b", label: "Anchovies" },
      { id: "c", label: "Crabs" },
      { id: "d", label: "Sea urchins" },
    ],
  },
  q12: {
    question:
      "Muhammad Yunus and the Grameen Bank won the 2006 Nobel Peace Prize for pioneering what?",
    background: "pics/Candy-Cane-Pistol-Shrimp.png.webp",
    correct: "b",
    options: [
      { id: "a", label: "Foreign aid" },
      { id: "b", label: "Microcredit" },
      { id: "c", label: "Carbon trading" },
      { id: "d", label: "Crop insurance" },
    ],
  },
  q13: {
    question:
      "In what year did IBM's Deep Blue defeat reigning world chess champion Garry Kasparov in a full match?",
    background: "pics/Candy-Cane-Pistol-Shrimp.png.webp",
    correct: "c",
    options: [
      { id: "a", label: "1989" },
      { id: "b", label: "2005" },
      { id: "c", label: "1997" },
      { id: "d", label: "2011" },
    ],
  },
  q14: {
    question:
      "A 1925 earthquake leveled much of downtown Santa Barbara, prompting a rebuild in what signature architectural style?",
    background: "pics/Candy-Cane-Pistol-Shrimp.png.webp",
    correct: "d",
    options: [
      { id: "a", label: "Art Deco" },
      { id: "b", label: "Victorian" },
      { id: "c", label: "Brutalist" },
      { id: "d", label: "Spanish Colonial Revival" },
    ],
  },
  q15: {
    question:
      "2024 became the first full calendar year in which global average temperature exceeded what level of warming above pre-industrial?",
    background: "pics/Candy-Cane-Pistol-Shrimp.png.webp",
    correct: "b",
    options: [
      { id: "a", label: "1.0 °C" },
      { id: "b", label: "1.5 °C" },
      { id: "c", label: "2.0 °C" },
      { id: "d", label: "0.5 °C" },
    ],
  },
  q16: {
    question:
      "Roughly how many Nobel Prizes have UCSB faculty won since 1998, making it one of the era's most decorated public universities?",
    background: "pics/Candy-Cane-Pistol-Shrimp.png.webp",
    correct: "c",
    options: [
      { id: "a", label: "One" },
      { id: "b", label: "Twenty" },
      { id: "c", label: "Six" },
      { id: "d", label: "Zero" },
    ],
  },
  q17: {
    question:
      "Coral bleaching happens when heat-stressed corals expel what symbiotic organism?",
    background: "pics/Candy-Cane-Pistol-Shrimp.png.webp",
    correct: "a",
    options: [
      { id: "a", label: "Zooxanthellae (algae)" },
      { id: "b", label: "Plankton" },
      { id: "c", label: "Bacteria" },
      { id: "d", label: "Sea anemones" },
    ],
  },
  q18: {
    question:
      "Amartya Sen helped create what index that measures development beyond GDP?",
    background: "pics/Candy-Cane-Pistol-Shrimp.png.webp",
    correct: "d",
    options: [
      { id: "a", label: "Gini coefficient" },
      { id: "b", label: "Consumer Price Index" },
      { id: "c", label: "Dow Jones Index" },
      { id: "d", label: "Human Development Index" },
    ],
  },
  q19: {
    question:
      "Today's leading AI systems — and the likely path ahead — are built on what neural-network architecture introduced in 2017?",
    background: "pics/Candy-Cane-Pistol-Shrimp.png.webp",
    correct: "a",
    options: [
      { id: "a", label: "The Transformer" },
      { id: "b", label: "The perceptron" },
      { id: "c", label: "Convolutional networks" },
      { id: "d", label: "Decision trees" },
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
