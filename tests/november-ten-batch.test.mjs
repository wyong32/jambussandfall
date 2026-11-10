import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const guides = JSON.parse(fs.readFileSync("data/level-guides.json", "utf8"));
const levels = JSON.parse(fs.readFileSync("data/levels.json", "utf8"));

const expectedVideos = new Map([
  [36, "lYTB-261m9E"],
  [37, "v4rjrbgLcbM"],
  [38, "XVSPfkq1t3o"],
  [39, "rhSd-IOjxl4"],
  [40, "YsnvgNbMAYE"],
]);

test("Levels 36-40 use their source videos and November 10 release date", () => {
  for (let id = 36; id <= 40; id += 1) {
    const guide = guides[id];
    const level = levels.find((item) => Number(item.id) === id);

    assert.ok(guide, `Level ${id} guide`);
    assert.ok(level, `Level ${id} record`);
    assert.equal(level.videoId, expectedVideos.get(id));
    assert.equal(level.category, "Levels 36-40");
    assert.equal(level.publishedAt, "2026-11-10");
    assert.match(level.videoUploadDate, /^2026-10-18T/);
    assert.equal(guide.positionSystem, "full-frame");
    assert.equal(guide.moveCheckpoints.length, 6);

    for (const move of guide.moveCheckpoints) {
      assert.match(move.instruction, /x \d+%, y \d+%/);
      assert.ok(move.precondition.length > 20);
      assert.ok(move.result.length > 20);
      assert.equal(move.row, undefined);
      assert.equal(move.column, undefined);
    }
  }
});

test("the new batch has unique board descriptions and opening moves", () => {
  const openings = new Set();
  const boards = new Set();

  for (let id = 36; id <= 40; id += 1) {
    const guide = guides[id];
    openings.add(JSON.stringify(guide.moveCheckpoints[0]));
    boards.add(guide.startingBoard);
  }

  assert.equal(openings.size, 5);
  assert.equal(boards.size, 5);
});
