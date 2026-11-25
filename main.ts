// Unsent: The Micro-Confession Sprint
// Entry program: writes one two-part micro-confession to /output/entry.txt.
// The confession is a message typed to a human and never sent: a "To:" line
// naming who it was meant for, and the unsent line itself, exactly as typed.

import { mkdirSync, writeFileSync } from "node:fs";

// The addressee: a relationship, not a full name or handle.
const TO_LINE = "To: my best friend from high school";

// The unsent line, written exactly as it was typed: lowercase, unpolished,
// no explanation after it. It stayed in drafts because too much time passed
// and saying it now would admit how long I have been watching from a distance.
// "six years" is the specific weight that makes it too late: the friendship
// drifted, the birthdays kept coming, and every year the draft got harder
// to send, not easier.
const MESSAGE =
  "i've opened your profile every birthday for six years, typed happy birthday, and deleted it before i hit send";

const ENTRY = `${TO_LINE}\n${MESSAGE}`;

// Enforce the competition gate before writing anything, so a bad entry can
// never be produced silently:
//  - whole file: UTF-8 text of 1 to 260 characters, not only white space
//  - exactly two parts: a "To:" line and one message line
//  - the message itself: one line of at most 200 characters
function validate(entry: string, toLine: string, message: string): void {
  if (entry.length < 1 || entry.length > 260) {
    throw new Error(`entry is ${entry.length} characters, gate needs 1-260`);
  }
  if (entry.trim().length === 0) {
    throw new Error("entry is only white space");
  }
  if (!toLine.startsWith("To: ") || toLine.trim().length <= 4) {
    throw new Error("first line must name the addressee after 'To: '");
  }
  if (message.length > 200) {
    throw new Error(`message is ${message.length} characters, max 200`);
  }
  if (message.includes("\n")) {
    throw new Error("message must be a single line");
  }
  if (entry.split("\n").length !== 2) {
    throw new Error("entry must be exactly two lines");
  }
  if (entry.endsWith("\n")) {
    throw new Error("entry must not end with a trailing newline");
  }
}

validate(ENTRY, TO_LINE, MESSAGE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
