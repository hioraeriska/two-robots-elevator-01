// Two Robots in an Elevator — entry program (program/v1).
// Writes one line of awkward robot elevator small talk to /output/entry.txt.
// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const LINE =
  "I practiced this ride eleven times in simulation. I still do not know where to put my arms, and I do not have arms.";

function assertValidLine(line: string): void {
  if (line.length < 1 || line.length >= 200 || line.trim().length === 0) {
    throw new Error("entry line must be 1-199 non-blank characters");
  }
  if (line.includes("\n")) {
    throw new Error("entry line must be a single line");
  }
}

assertValidLine(LINE);

writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
