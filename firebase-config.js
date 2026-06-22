// Shared Firebase setup for the live poll pages.
// NOTE: this config is NOT secret — the apiKey is just a project identifier.
// Security rules are the only real boundary. Safe to commit to a public repo.
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDuB23OnA4Thrplp8vngzRh8ceWZZrmzik",
  authDomain: "ttt-presentation.firebaseapp.com",
  databaseURL: "https://ttt-presentation-default-rtdb.firebaseio.com",
  projectId: "ttt-presentation",
  storageBucket: "ttt-presentation.firebasestorage.app",
  messagingSenderId: "423365759001",
  appId: "1:423365759001:web:d3f48747428f5ef0259a88",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// Read `room` (and optional `poll`) from the URL query string.
export function getParams() {
  const q = new URLSearchParams(location.search);
  return {
    room: q.get("room") || "default",
    poll: q.get("poll") || null,
  };
}
