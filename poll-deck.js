// Drives the audience phones from the slide deck.
// On each slide change: if it's a poll slide (data-poll="qN"), make that the
// live poll (phones follow) and render the live results into its .poll-chart.
// On any non-poll slide, clear the poll so phones show "waiting".
import { ref, onValue, set } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-database.js";
import { db } from "./firebase-config.js";
import { POLLS } from "./polls.js";

const ROOM = "TTT"; // Tuesday Team Time

let votesUnsub = null;

function onSlide(slide) {
  if (!slide) return;
  const pollId = slide.getAttribute("data-poll");
  if (pollId && POLLS[pollId]) {
    set(ref(db, `rooms/${ROOM}/currentPoll`), pollId);
    subscribe(pollId, slide);
  } else {
    set(ref(db, `rooms/${ROOM}/currentPoll`), null); // -> phones wait
    if (votesUnsub) { votesUnsub(); votesUnsub = null; }
  }
}

function subscribe(pollId, slide) {
  const container = slide.querySelector(".poll-chart");
  const poll = POLLS[pollId];
  if (votesUnsub) votesUnsub();
  if (poll.type === "number") {
    votesUnsub = onValue(ref(db, `rooms/${ROOM}/responses/${pollId}`), (snap) => {
      renderNumbers(container, poll, snap.val() || {});
    });
  } else {
    votesUnsub = onValue(ref(db, `rooms/${ROOM}/votes/${pollId}`), (snap) => {
      renderChoices(container, poll, snap.val() || {});
    });
  }
}

const letter = (i) => String.fromCharCode(65 + i);

function columnChart(bars) {
  // bars: [{ label, top, heightPct }]
  const chart = document.createElement("div");
  chart.className = "chart-cols";
  for (const b of bars) {
    const col = document.createElement("div");
    col.className = "bar-col";
    col.innerHTML =
      `<div class="bar-count">${b.top}</div>` +
      `<div class="bar-track"><div class="bar-fill" style="height:${b.heightPct}%"></div></div>` +
      `<div class="bar-label">${b.label}</div>`;
    chart.appendChild(col);
  }
  return chart;
}

function renderChoices(container, poll, votes) {
  if (!container) return;
  const total = poll.options.reduce((s, o) => s + (votes[o.id] || 0), 0);
  const bars = poll.options.map((o, i) => {
    const count = votes[o.id] || 0;
    const pct = total ? Math.round((count / total) * 100) : 0;
    return { label: letter(i), top: `${count} (${pct}%)`, heightPct: pct };
  });
  container.innerHTML = "";
  container.appendChild(columnChart(bars));
}

function renderNumbers(container, poll, responses) {
  if (!container) return;
  const vals = Object.values(responses).map(Number).filter((v) => isFinite(v));
  container.innerHTML = "";
  if (vals.length === 0) {
    container.innerHTML = `<div class="poll-empty">No numbers yet…</div>`;
    return;
  }
  vals.sort((a, b) => a - b);
  const n = vals.length;
  const mean = vals.reduce((a, b) => a + b, 0) / n;
  const median = n % 2 ? vals[(n - 1) / 2] : (vals[n / 2 - 1] + vals[n / 2]) / 2;
  const fmt = (x) => (poll.step && poll.step < 1 ? x.toFixed(1) : String(Math.round(x)));
  const u = poll.unit || "";

  const stats = document.createElement("div");
  stats.className = "poll-stats";
  stats.textContent = `n=${n} · mean ${u}${fmt(mean)} · median ${u}${fmt(median)}`;
  container.appendChild(stats);

  // Histogram across the poll's range (or the data range).
  const lo = poll.min != null ? poll.min : vals[0];
  const hi = poll.max != null ? poll.max : vals[n - 1];
  const span = hi - lo || 1;
  const BINS = 7;
  const counts = new Array(BINS).fill(0);
  for (const v of vals) {
    let idx = Math.floor(((v - lo) / span) * BINS);
    idx = Math.max(0, Math.min(BINS - 1, idx));
    counts[idx]++;
  }
  const max = Math.max(...counts, 1);
  const bars = counts.map((c, i) => ({
    label: fmt(lo + (span * i) / BINS),
    top: c || "",
    heightPct: Math.round((c / max) * 100),
  }));
  container.appendChild(columnChart(bars));
}

// Join slide: QR to the vote page + live count of connected phones.
function initJoin() {
  const box = document.querySelector(".join-box");
  if (!box) return;
  const voteUrl = new URL("vote.html", location.href);
  voteUrl.searchParams.set("room", ROOM);
  box.innerHTML =
    `<div class="qr"></div>` +
    `<div class="join-meta">` +
    `<div class="join-count">👥 0 phones connected</div>` +
    `<div class="join-url">${voteUrl.href}</div></div>`;
  // eslint-disable-next-line no-undef
  new QRCode(box.querySelector(".qr"), { text: voteUrl.href, width: 240, height: 240 });

  onValue(ref(db, `rooms/${ROOM}/presence`), (snap) => {
    const n = snap.size || 0;
    box.querySelector(".join-count").textContent =
      `👥 ${n} phone${n === 1 ? "" : "s"} connected`;
  });
}

// Reveal may initialize slightly after this module runs; wait for it.
function start() {
  if (!window.Reveal) { setTimeout(start, 50); return; }
  initJoin();
  Reveal.on("slidechanged", (e) => onSlide(e.currentSlide));
  onSlide(Reveal.getCurrentSlide());
}
start();
