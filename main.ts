// One-Line Roast: The Gadget You Use Every Day — u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
// One line (114 characters): my charger cable only works at one exact angle,
// held up by a book and a prayer. It is not a cable, it is a ritual.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My charger cable only works at one exact angle, held up by a book and a prayer. It is not a cable, it is a ritual.";

// The sealed scorer only accepts 1–200 characters, one line, UTF-8.
if ([...LINE].length > 200 || LINE.trim() === "" || LINE.includes("\n")) {
  throw new Error("entry line violates the 200-character single-line rule");
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(out.slice(0, out.lastIndexOf("/")) || ".", { recursive: true });
writeFileSync(out, LINE, "utf8");

// Read-back self-check: the file on disk must be byte-identical to the line
// above, with no trailing newline added by the write, and it must stay a
// single line (the scorer reads one line, not a paragraph).
const written = readFileSync(out, "utf8");
if (written !== LINE || written.split("\n").length !== 1) {
  throw new Error("entry.txt does not match the entry line exactly");
}
console.log(LINE);
