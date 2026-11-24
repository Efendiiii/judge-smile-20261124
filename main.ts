import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "This morning the warung auntie remembered my order, then slipped an extra krupuk on top and winked like we had planned a heist together.";

if (!TEXT.trim() || TEXT.length > 200) throw new Error("entry text out of range");
if (TEXT.includes("\n")) throw new Error("entry must be exactly one line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
