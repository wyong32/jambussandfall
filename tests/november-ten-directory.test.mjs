import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const levelsPage = fs.readFileSync("app/levels/page.tsx", "utf8");
const hero = fs.readFileSync("components/home/hero-section.tsx", "utf8");
const detailPage = fs.readFileSync("app/levels/[id]/page.tsx", "utf8");
const detailLayout = fs.readFileSync("app/levels/[id]/layout.tsx", "utf8");

test("the directory renders crawlable links for every published level", () => {
  assert.match(levelsPage, /LevelGrid levels=\{levels\} variant="button"/);
  assert.match(levelsPage, /All Published Level Guides/);
});

test("guide counts and release dates come from current data", () => {
  assert.match(hero, /\{TOTAL_GUIDES\} verified guides/);
  assert.doesNotMatch(hero, />20 verified guides</);
  assert.match(detailPage, /level\.publishedAt/);
  assert.match(detailLayout, /level\.publishedAt/);
});
