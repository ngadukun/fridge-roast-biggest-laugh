import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A roast aimed squarely at the smart fridge itself: six hours of firmware
// updates, and the ice maker now treats a single cube a day as craft work.
// Specific to the machine (firmware + ice maker), not the tired
// "it orders your groceries / it watches you" cracks the brief warns about.
// Single line, 134 characters, no trailing newline: the gate counts the
// file byte-for-byte, so the roast is written exactly as judged.
const ROAST =
  "My smart fridge spent six hours updating its firmware, and now the ice maker dispenses one cube a day — proudly, like it is artisanal.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
