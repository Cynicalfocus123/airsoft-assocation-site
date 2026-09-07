import manifest from "./image-manifest.json";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/airsoft-assocation-site";

export function imageSrc(path: string) {
  const variants = (manifest as Record<string, { src: string; width: number }[]>)[path];
  return `${basePath}${variants ? variants[variants.length - 1].src : path}`;
}
