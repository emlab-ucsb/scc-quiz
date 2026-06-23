// Trivia question bank, authored at build time.
// Answers are stored per player at /rooms/{room}/answers/{poll}/{playerId}.
//
// Every question is multiple choice with a `correct` option id.
// Scoring is dead simple: +1 for each correct answer, 0 otherwise.
export const POLLS = {
  // ---- Santa Barbara history ----
  sb1: {
    topic: "Santa Barbara History",
    question:
      "The 1969 Santa Barbara oil spill helped inspire what annual event, first held in 1970?",
    correct: "b",
    options: [
      { id: "a", label: "Arbor Day" },
      { id: "b", label: "Earth Day" },
      { id: "c", label: "World Oceans Day" },
      { id: "d", label: "Coastal Cleanup Day" },
    ],
  },
  sb2: {
    topic: "Santa Barbara History",
    question:
      "Founded in 1786, Old Mission Santa Barbara is known by what nickname?",
    correct: "c",
    options: [
      { id: "a", label: "King of the Missions" },
      { id: "b", label: "Jewel of the Coast" },
      { id: "c", label: "Queen of the Missions" },
      { id: "d", label: "Crown of California" },
    ],
  },
  sb3: {
    topic: "Santa Barbara History",
    question:
      "A 1925 earthquake leveled much of downtown Santa Barbara, prompting a rebuild in what signature architectural style?",
    correct: "d",
    options: [
      { id: "a", label: "Art Deco" },
      { id: "b", label: "Victorian" },
      { id: "c", label: "Brutalist" },
      { id: "d", label: "Spanish Colonial Revival" },
    ],
  },

  // ---- Climate change news and history ----
  cc1: {
    topic: "Climate Change",
    question:
      "Who first calculated, in 1896, that CO₂ from burning coal could warm the planet?",
    correct: "a",
    options: [
      { id: "a", label: "Svante Arrhenius" },
      { id: "b", label: "Charles Keeling" },
      { id: "c", label: "John Tyndall" },
      { id: "d", label: "Guy Callendar" },
    ],
  },
  cc2: {
    topic: "Climate Change",
    question:
      "The famous 'Keeling Curve,' measured at Mauna Loa since 1958, tracks the rising concentration of what gas?",
    correct: "c",
    options: [
      { id: "a", label: "Methane" },
      { id: "b", label: "Ozone" },
      { id: "c", label: "Carbon dioxide" },
      { id: "d", label: "Nitrous oxide" },
    ],
  },
  cc3: {
    topic: "Climate Change",
    question:
      "2024 became the first full calendar year in which global average temperature exceeded what level of warming above pre-industrial?",
    correct: "b",
    options: [
      { id: "a", label: "1.0 °C" },
      { id: "b", label: "1.5 °C" },
      { id: "c", label: "2.0 °C" },
      { id: "d", label: "0.5 °C" },
    ],
  },

  // ---- UCSB Nobel laureates and history ----
  uc1: {
    topic: "UCSB Nobel Laureates",
    question:
      "UCSB's Shuji Nakamura shared the 2014 Nobel Prize in Physics for inventing what?",
    correct: "d",
    options: [
      { id: "a", label: "The transistor" },
      { id: "b", label: "The laser" },
      { id: "c", label: "Graphene" },
      { id: "d", label: "The blue LED" },
    ],
  },
  uc2: {
    topic: "UCSB Nobel Laureates",
    question:
      "Alan Heeger shared the 2000 Nobel Prize in Chemistry for the discovery of conductive what?",
    correct: "a",
    options: [
      { id: "a", label: "Polymers (plastics)" },
      { id: "b", label: "Superconductors" },
      { id: "c", label: "Semiconductors" },
      { id: "d", label: "Liquid crystals" },
    ],
  },
  uc3: {
    topic: "UCSB Nobel Laureates",
    question:
      "Roughly how many Nobel Prizes have UCSB faculty won since 1998, making it one of the era's most decorated public universities?",
    correct: "c",
    options: [
      { id: "a", label: "One" },
      { id: "b", label: "Twenty" },
      { id: "c", label: "Six" },
      { id: "d", label: "Zero" },
    ],
  },

  // ---- Marine biology ----
  mb1: {
    topic: "Marine Biology",
    question:
      "Giant kelp, the backbone of Santa Barbara's underwater forests, can grow as fast as how much per day?",
    correct: "b",
    options: [
      { id: "a", label: "About 2 inches" },
      { id: "b", label: "Up to 2 feet" },
      { id: "c", label: "About 2 millimeters" },
      { id: "d", label: "Up to 20 feet" },
    ],
  },
  mb2: {
    topic: "Marine Biology",
    question:
      "Sea otters are a keystone species because they keep what kelp-grazing animal in check?",
    correct: "d",
    options: [
      { id: "a", label: "Jellyfish" },
      { id: "b", label: "Anchovies" },
      { id: "c", label: "Crabs" },
      { id: "d", label: "Sea urchins" },
    ],
  },
  mb3: {
    topic: "Marine Biology",
    question:
      "Coral bleaching happens when heat-stressed corals expel what symbiotic organism?",
    correct: "a",
    options: [
      { id: "a", label: "Zooxanthellae (algae)" },
      { id: "b", label: "Plankton" },
      { id: "c", label: "Bacteria" },
      { id: "d", label: "Sea anemones" },
    ],
  },

  // ---- Development economics ----
  de1: {
    topic: "Development Economics",
    question:
      "Who shared the 2019 Nobel Prize in Economics with Esther Duflo and Michael Kremer for an experimental approach to fighting global poverty?",
    correct: "c",
    options: [
      { id: "a", label: "Amartya Sen" },
      { id: "b", label: "Paul Romer" },
      { id: "c", label: "Abhijit Banerjee" },
      { id: "d", label: "Jeffrey Sachs" },
    ],
  },
  de2: {
    topic: "Development Economics",
    question:
      "Muhammad Yunus and the Grameen Bank won the 2006 Nobel Peace Prize for pioneering what?",
    correct: "b",
    options: [
      { id: "a", label: "Foreign aid" },
      { id: "b", label: "Microcredit" },
      { id: "c", label: "Carbon trading" },
      { id: "d", label: "Crop insurance" },
    ],
  },
  de3: {
    topic: "Development Economics",
    question:
      "Amartya Sen helped create what index that measures development beyond GDP?",
    correct: "d",
    options: [
      { id: "a", label: "Gini coefficient" },
      { id: "b", label: "Consumer Price Index" },
      { id: "c", label: "Dow Jones Index" },
      { id: "d", label: "Human Development Index" },
    ],
  },

  // ---- Artificial intelligence ----
  ai1: {
    topic: "Artificial Intelligence",
    question:
      "The term 'artificial intelligence' was coined at a now-famous 1956 summer workshop held at which university?",
    correct: "b",
    options: [
      { id: "a", label: "MIT" },
      { id: "b", label: "Dartmouth College" },
      { id: "c", label: "Stanford" },
      { id: "d", label: "Carnegie Mellon" },
    ],
  },
  ai2: {
    topic: "Artificial Intelligence",
    question:
      "In what year did IBM's Deep Blue defeat reigning world chess champion Garry Kasparov in a full match?",
    correct: "c",
    options: [
      { id: "a", label: "1989" },
      { id: "b", label: "2005" },
      { id: "c", label: "1997" },
      { id: "d", label: "2011" },
    ],
  },
  ai3: {
    topic: "Artificial Intelligence",
    question:
      "Today's leading AI systems — and the likely path ahead — are built on what neural-network architecture introduced in 2017?",
    correct: "a",
    options: [
      { id: "a", label: "The Transformer" },
      { id: "b", label: "The perceptron" },
      { id: "c", label: "Convolutional networks" },
      { id: "d", label: "Decision trees" },
    ],
  },
};

// Topics in presentation order: a divider slide then its three questions.
export const TOPICS = [
  { name: "Santa Barbara History", icon: "🌴", polls: ["sb1", "sb2", "sb3"] },
  { name: "Climate Change", icon: "🌍", polls: ["cc1", "cc2", "cc3"] },
  { name: "UCSB Nobel Laureates", icon: "🏅", polls: ["uc1", "uc2", "uc3"] },
  { name: "Marine Biology", icon: "🐋", polls: ["mb1", "mb2", "mb3"] },
  { name: "Development Economics", icon: "📈", polls: ["de1", "de2", "de3"] },
  { name: "Artificial Intelligence", icon: "🤖", polls: ["ai1", "ai2", "ai3"] },
];

// Flat order of poll slides (also used by standalone tools).
export const POLL_ORDER = TOPICS.flatMap((t) => t.polls);

// Points a single answer earns toward the leaderboard: 1 if correct, else 0.
export function scoreAnswer(poll, answer) {
  if (!poll || poll.correct == null) return 0;
  return answer === poll.correct ? 1 : 0;
}
