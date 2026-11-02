import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const levels = JSON.parse(fs.readFileSync("data/levels.json", "utf8"));

test("level records remain ordered, unique, and limited to source rows", () => {
  assert.equal(levels.length, 20);
  const ids = levels.map((level) => Number(level.id));
  assert.deepEqual(ids, [...ids].sort((a, b) => a - b));
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(Math.max(...ids), 20);
  assert.deepEqual(ids, Array.from({ length: 20 }, (_, index) => index + 1));
});

test("first twenty levels expose workflow v3 assets and video metadata", () => {
  const pilot = levels.filter((level) => Number(level.id) <= 20);
  assert.equal(pilot.length, 20);
  for (const level of pilot) {
    assert.equal(level.coverImage, `/levels/${level.id}/cover.webp`);
    assert.ok(Array.isArray(level.guideImages) && level.guideImages.length >= 3);
    assert.match(level.videoUrl || "", /^https:\/\/www\.youtube\.com\/embed\//);
    assert.match(level.videoUploadDate || "", /^\d{4}-\d{2}-\d{2}T/);
    assert.match(level.videoDurationIso || "", /^PT/);
  }
});

test("level records contain Jam Bus source facts and no previous-site copy", () => {
  const serialized = JSON.stringify(levels);
  assert.match(serialized, /Jam Bus:Sandfall/);
  assert.doesNotMatch(serialized, /Colony Flow|ant colony|worker ants/i);
});
