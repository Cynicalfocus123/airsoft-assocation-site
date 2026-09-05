"use client";

import { useEffect, type RefObject } from "react";

type CinematicScrollOptions = {
  desktopMediaTravel?: number;
  tabletMediaTravel?: number;
  mobileMediaTravel?: number;
  desktopTextTravel?: number;
  tabletTextTravel?: number;
  mobileTextTravel?: number;
};

export function useCinematicScroll(
  ref: RefObject<HTMLElement | null>,
  {
    desktopMediaTravel = 56,
    tabletMediaTravel = 64,
    mobileMediaTravel = 48,
    desktopTextTravel = 34,
    tabletTextTravel = 38,
    mobileTextTravel = 28,
  }: CinematicScrollOptions = {},
) {
  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 767px)");
    const tablet = window.matchMedia("(min-width: 768px) and (max-width: 1199px)");
    let active = false;
    let frame: number | null = null;
    const reset = () => {
      section.style.setProperty("--cinematic-media-y", "0px");
      section.style.setProperty("--cinematic-text-y", "0px");
      section.style.setProperty("--cinematic-text-opacity", "1");
    };
    const cancel = () => {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
    };
    const update = () => {
      frame = null;
      if (!active || reduced.matches) return;
      // Measure the untransformed section, never one of its moving children.
      const rect = section.getBoundingClientRect();
      const height = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (height - rect.top) / (height + rect.height)));
      const centered = (progress - 0.5) * 2;
      const mediaTravel = mobile.matches
        ? mobileMediaTravel
        : tablet.matches
          ? tabletMediaTravel
          : desktopMediaTravel;
      const textTravel = mobile.matches
        ? mobileTextTravel
        : tablet.matches
          ? tabletTextTravel
          : desktopTextTravel;
      const opacityTravel = mobile.matches || tablet.matches ? 0.055 : 0.08;
      section.style.setProperty("--cinematic-media-y", `${centered * mediaTravel}px`);
      section.style.setProperty("--cinematic-text-y", `${-centered * textTravel}px`);
      section.style.setProperty("--cinematic-text-opacity", `${1 - Math.abs(centered) * opacityTravel}`);
    };
    const requestUpdate = () => {
      if (active && !reduced.matches && frame === null) {
        frame = requestAnimationFrame(update);
      }
    };
    const motionChanged = () => {
      cancel();
      if (reduced.matches) reset();
      else requestUpdate();
    };
    const observer = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting;
      if (active) requestUpdate();
      else cancel();
    }, { rootMargin: "25% 0px 25% 0px" });
    observer.observe(section);
    // Recalculate after content/image layout changes as well as orientation changes.
    const resizeObserver = new ResizeObserver(requestUpdate);
    resizeObserver.observe(section);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.visualViewport?.addEventListener("resize", requestUpdate);
    reduced.addEventListener("change", motionChanged);
    mobile.addEventListener("change", requestUpdate);
    tablet.addEventListener("change", requestUpdate);
    if (reduced.matches) reset();

    return () => {
      cancel();
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.visualViewport?.removeEventListener("resize", requestUpdate);
      reduced.removeEventListener("change", motionChanged);
      mobile.removeEventListener("change", requestUpdate);
      tablet.removeEventListener("change", requestUpdate);
      reset();
    };
  }, [ref, desktopMediaTravel, tabletMediaTravel, mobileMediaTravel, desktopTextTravel, tabletTextTravel, mobileTextTravel]);
}
