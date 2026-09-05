/* eslint-disable @typescript-eslint/no-require-imports */
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { resolve } = require("node:path");

const hero = readFileSync(resolve(__dirname, "../components/events/FeaturedEventHero.tsx"), "utf8");
const css = readFileSync(resolve(__dirname, "../components/events/Events.module.css"), "utf8");

test("featured event hero uses the shared native drag-scroll pattern", () => {
  assert.match(hero, /import \{ useDragScroll \} from "@\/components\/hooks\/useDragScroll"/);
  assert.match(hero, /const \{ ref, isDragging, pointerHandlers \} = useDragScroll\(\)/);
  assert.match(hero, /ref=\{ref\}/);
  assert.match(hero, /\{\.\.\.pointerHandlers\}/);
  assert.match(hero, /event\.key === "ArrowLeft" \|\| event\.key === "ArrowRight"/);
  assert.match(css, /\.heroRail\{[^}]*overflow-x:auto[^}]*scroll-snap-type:x mandatory[^}]*touch-action:auto/);
  assert.match(css, /\.heroSlide\{[^}]*flex:0 0 100%[^}]*scroll-snap-align:start[^}]*scroll-snap-stop:always/);
});

test("featured event actions are clean inline text rather than bordered buttons", () => {
  assert.match(hero, /className=\{styles\.heroActionText\}/);
  assert.doesNotMatch(hero, /styles\.primaryAction|styles\.secondaryAction|styles\.comingSoon|styles\.heroControls/);
  assert.match(css, /\.heroActionText\{[^}]*font-size:\.75rem[^}]*color:#d0d7d1/);
  assert.doesNotMatch(css, /\.primaryAction|\.secondaryAction|\.comingSoon|\.heroControls/);
});

test("event rail hides its scrollbar without disabling native scrolling", () => {
  assert.match(css, /\.eventRail\{[^}]*overflow-x:auto[^}]*scrollbar-width:none[^}]*touch-action:auto/);
  assert.match(css, /\.eventRail::-webkit-scrollbar\{display:none\}/);
  assert.match(css, /\.eventRail\{[^}]*scroll-snap-type:x proximity/);
});
