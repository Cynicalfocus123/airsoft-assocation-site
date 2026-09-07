"use client";
import manifest from "./image-manifest.json";

// URLs point to real build-time files; shared hosting needs no image service.
export default function imageLoader({ src, width }: { src: string; width: number }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "/airsoft-assocation-site";
  const path = base && src.startsWith(base + "/") ? src.slice(base.length) : src;
  const variants = Object.values(manifest).find((items) => items.some((item) => item.src === path));
  if (!variants) return src;
  return base + (variants.find((item) => item.width >= width) ?? variants[variants.length - 1]).src;
}
