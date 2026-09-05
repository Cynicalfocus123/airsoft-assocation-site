/* eslint-disable @typescript-eslint/no-require-imports */
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { resolve } = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

const code = ts.transpileModule(readFileSync(resolve(__dirname, "../components/hooks/useCinematicScroll.ts"), "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;

function setup(width, reducedAtStart = false) {
  const callbacks = new Map();
  const frames = new Map();
  const values = new Map();
  let cleanup, intersect, resize, rectTop = 800, frameId = 0, reads = 0, disconnected = 0;
  const media = (matches) => ({
    matches,
    addEventListener(name, fn) { this.listener = fn; },
    removeEventListener() { this.listener = null; },
  });
  const reduced = media(reducedAtStart);
  const mobile = media(width <= 700);
  const section = {
    style: { setProperty: (key, value) => values.set(key, value) },
    getBoundingClientRect() { reads++; return { top: rectTop, height: 600 }; },
  };
  const win = {
    innerHeight: 800,
    matchMedia: (query) => query.includes("reduced-motion") ? reduced : mobile,
    addEventListener: (name, fn) => callbacks.set(name, fn),
    removeEventListener: (name) => callbacks.delete(name),
    visualViewport: { addEventListener() {}, removeEventListener() {} },
  };
  const exports = {};
  vm.runInNewContext(code, {
    exports,
    require: () => ({ useEffect: (effect) => { cleanup = effect(); } }),
    window: win,
    requestAnimationFrame: (fn) => { frames.set(++frameId, fn); return frameId; },
    cancelAnimationFrame: (id) => frames.delete(id),
    IntersectionObserver: class {
      constructor(fn) { intersect = fn; }
      observe() {}
      disconnect() { disconnected++; }
    },
    ResizeObserver: class {
      constructor(fn) { resize = fn; }
      observe() {}
      disconnect() { disconnected++; }
    },
  });
  exports.useCinematicScroll({ current: section });
  const flush = () => { for (const [id, fn] of [...frames]) { frames.delete(id); fn(); } };
  return {
    values, frames, callbacks, reduced, mobile, win, flush,
    active: (on) => intersect([{ isIntersecting: on }]),
    progress(p) { rectTop = 800 - p * 1400; callbacks.get("scroll")(); flush(); },
    resize: () => { resize(); flush(); },
    cleanup: () => cleanup(),
    get reads() { return reads; },
    get disconnected() { return disconnected; },
  };
}

for (const width of [390, 700, 820, 1440]) {
  test(`scroll reverses, coalesces and cleans up at width ${width}`, () => {
    const h = setup(width);
    h.callbacks.get("scroll")();
    assert.equal(h.frames.size, 0, "offscreen sections do not schedule frames");
    h.active(true);
    h.callbacks.get("scroll")();
    h.callbacks.get("scroll")();
    assert.equal(h.frames.size, 1, "multiple events share one frame");
    h.flush();
    const travel = width <= 700 ? 28 : 56;
    for (const p of [0, .2, .5, .8, 1, .8, .5, .2, 0]) {
      h.progress(p);
      assert.equal(parseFloat(h.values.get("--cinematic-media-y")), (p - .5) * 2 * travel);
      assert.ok(Math.abs(parseFloat(h.values.get("--cinematic-text-y")) + (p - .5) * 2 * (width <= 700 ? 18 : 34)) < 1e-9);
      assert.ok(parseFloat(h.values.get("--cinematic-text-opacity")) >= .92);
    }
    h.reduced.matches = true;
    h.reduced.listener();
    assert.equal(h.values.get("--cinematic-media-y"), "0px");
    assert.equal(h.values.get("--cinematic-text-opacity"), "1");
    const before = h.reads;
    h.progress(.8);
    assert.equal(h.reads, before);
    h.reduced.matches = false;
    h.reduced.listener();
    h.flush();
    assert.ok(parseFloat(h.values.get("--cinematic-media-y")) > 0);
    h.mobile.matches = !h.mobile.matches;
    h.mobile.listener();
    h.flush();
    h.resize();
    h.active(false);
    assert.equal(h.frames.size, 0);
    h.cleanup();
    assert.equal(h.callbacks.size, 0);
    assert.equal(h.disconnected, 2);
  });
}
test("reduced motion is static from mount", () => {
  const h = setup(390, true);
  h.active(true);
  h.progress(.8);
  assert.equal(h.reads, 0);
  assert.equal(h.frames.size, 0);
  assert.equal(h.values.get("--cinematic-text-y"), "0px");
  h.cleanup();
});
