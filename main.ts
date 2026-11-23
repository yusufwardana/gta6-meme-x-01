// gta6-meme-x-01 — carrier program.
// The entry itself is the X post named in POST.json: the house reads that post
// from X and builds the judge dossier from it. This program only carries
// POST.json into the output directory so the grader can find it.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// Fail fast on a malformed POST.json instead of copying a broken file.
const postPath = join(repoRoot, "POST.json");
const post = JSON.parse(readFileSync(postPath, "utf8"));
if (typeof post.url !== "string" || post.url.length === 0) {
  throw new Error("POST.json must hold a url string");
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(postPath, join(outputDir, "POST.json"));
console.log("POST.json copied to " + outputDir);
