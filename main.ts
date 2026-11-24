// One Letter for Your Day — entry: Z (zombie)
// The program writes exactly one letter to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "Z";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate accepts exactly one character, A-Z, nothing else.
if (LETTER.length !== 1 || !/^[A-Z]$/.test(LETTER)) {
  throw new Error("entry must be exactly one letter A-Z");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
console.log(`wrote entry: ${LETTER}`);
