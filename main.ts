import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of Monday, written as though Monday were a restaurant.
// Concrete diner detail (table, dish, bill) + a twist in the second half:
// Monday seats you next to the work you left behind, then bills you for the
// weekend you just had. Plain text, one line, no explanation attached.
// v2 (round-2 revision after mock-judge round 1): 18 words, not 21 — the
// generic middle beat ("the waiter forgot my coffee") is cut, the dish is
// now served cold, and Monday itself is the subject throughout, so the
// restaurant IS Monday and nothing needs trimming to retype it.
const LINE =
  "Monday sat me beside my unread emails, served me cold coffee, and billed me for the whole weekend.";

// Guards: the competition caps the line at 25 words and the gate scorer
// requires /output/entry.txt to be 1-180 UTF-8 characters.
const words = LINE.trim().split(/\s+/).filter(Boolean);
if (words.length > 25) {
  throw new Error(`line has ${words.length} words, over the 25-word cap`);
}
if (LINE.length > 180) {
  throw new Error(`line has ${LINE.length} characters, over the 180-character gate`);
}
if (!LINE.trim()) {
  throw new Error("line must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${words.length} words, ${LINE.length} chars to /output/entry.txt`);
