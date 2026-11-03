import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { notifyIndexNow } from "../scripts/notify-indexnow.mjs";
import { validateManifest } from "../scripts/seo-manifest-lib.mjs";

const manifest = JSON.parse(fs.readFileSync("public/seo-manifest.json", "utf8"));
const key = fs.readFileSync("public/31f106bf49733ffad3e10177719671d2.txt", "utf8").trim();
const workflow = fs.readFileSync(".github/workflows/indexnow.yml", "utf8");
const sitemap = fs.readFileSync("app/sitemap.ts", "utf8");

test("SEO manifest lists every public canonical route once", () => {
  assert.deepEqual(validateManifest(manifest), []);
  assert.equal(manifest.entries.length, 37);
  assert.equal(new Set(manifest.entries.map((entry) => entry.canonicalUrl)).size, 37);
  assert.ok(manifest.entries.some((entry) => entry.canonicalUrl === "https://jambussandfall.org/levels/25/"));
  assert.ok(manifest.entries.some((entry) => entry.canonicalUrl === "https://jambussandfall.org/find-level/"));
});

test("IndexNow uses a public validation key and waits for production", () => {
  assert.match(key, /^[a-f0-9]{32}$/);
  assert.match(workflow, /deployment_status/);
  assert.match(workflow, /push:/);
  assert.match(workflow, /workflow_dispatch/);
  assert.match(workflow, /vercel\[bot\]/);
  assert.match(workflow, /seo-manifest\.json/);
  assert.match(workflow, /notify-indexnow\.mjs/);
  assert.match(workflow, /upload-artifact/);
});

test("Sitemap and IndexNow share the same route manifest", async () => {
  assert.match(sitemap, /seoManifest\.entries/);
  const dryRun = await notifyIndexNow({ current: manifest, checkpoint: null });
  assert.equal(dryRun.mode, "dry-run");
  assert.equal(dryRun.urls, 37);
});
