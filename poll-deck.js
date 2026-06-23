// Drives the audience phones from the slide deck.
// On each slide change: if it's a poll slide (data-poll="qN"), make that the
// live poll (phones follow) and render the live tally into its .poll-chart.
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
    subscribeVotes(pollId, slide);
  } else {
    set(ref(db, `rooms/${ROOM}/currentPoll`), null); // -> phones wait
    if (votesUnsub) { votesUnsub(); votesUnsub = null; }
  }
}

function subscribeVotes(pollId, slide) {
  const container = slide.querySelector(".poll-chart");
  if (votesUnsub) votesUnsub();
  votesUnsub = onValue(ref(db, `rooms/${ROOM}/votes/${pollId}`), (snap) => {
    renderChart(container, POLLS[pollId], snap.val() || {});
  });
}

function renderChart(container, poll, votes) {
  if (!container) return;
  const total = poll.options.reduce((s, o) => s + (votes[o.id] || 0), 0);
  container.innerHTML = "";
  for (const o of poll.options) {
    const count = votes[o.id] || 0;
    const pct = total ? Math.round((count / total) * 100) : 0;
    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML =
      `<div class="bar-top"><span>${o.label}</span><span>${count} (${pct}%)</span></div>` +
      `<div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>`;
    container.appendChild(row);
  }
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
