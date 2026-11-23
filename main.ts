// Dad Joke Showdown — make.fun entry.
// Writes a single original dad joke to /output/entry.txt. The joke:
// a kid asks his dad what his superpower is, the dad says he can
// turn any normal conversation into a pun in under five seconds,
// the kid says "Prove it" — and the dad's answer proves it on the spot.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";
const MAX_CODE_POINTS = 200;

const LINE =
  "My kid asked what my superpower is. I said, 'I can turn any normal conversation into a pun in under five seconds.' He said, 'Prove it.' I said, 'I just did.'";

// Gate check, done before writing: the line must be one non-blank
// line of 1-200 Unicode code points, ending with a full stop.
const codePointCount = [...LINE].length;
if (LINE.trim().length === 0) {
  throw new Error("Line must not be blank.");
}
if (codePointCount < 1 || codePointCount > MAX_CODE_POINTS) {
  throw new Error(
    `Line must be 1-${MAX_CODE_POINTS} Unicode code points, got ${codePointCount}.`,
  );
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be a single line with no newline.");
}
if (!LINE.endsWith(".") && !LINE.endsWith(".'")) {
  throw new Error("Line must end with a full stop.");
}
// Tight-wording guard: no leading/trailing space, no double space.
if (LINE !== LINE.trim() || LINE.includes("  ")) {
  throw new Error("Line must be tightly worded: no edge or double spaces.");
}

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, LINE, "utf8");
