// Worst Superpower — u-suroto-worst-superpower-461dcdbe
// Writes one line (<=140 chars) inventing the most useless superpower to
// $MAKEFUN_OUTPUT_DIR/entry.txt, exactly as the grader expects.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I can instantly know how many jelly beans are in any jar \u2014 but only after someone else has already counted them.";

// The gate rejects anything over 140 chars or whitespace-only: fail loudly
// here instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 140 || !LINE.trim()) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-140 range`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars)`);
