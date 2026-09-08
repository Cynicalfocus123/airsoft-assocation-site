import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageContent } from "@/components/services/ServicePageContent";
import { serviceSlugs, servicesCopy, type ServiceSlug } from "@/data/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const copy = servicesCopy[slug as ServiceSlug];
  if (!copy) return {};
  const isField = slug === "field-design-engineering";
  return {
    title: isField ? "Field Design & Development Services | Thailand Airsoft Association" : `${copy.title.en} | Thailand Airsoft Association`,
    description: isField
      ? "Professional Airsoft and Paintball field design, planning, safety, MilSim development, operations, technology, event readiness and marketing support."
      : `${copy.title.en} services from the Thailand Airsoft and Paintball Association.`,
    other: {
      "x-th-title": isField ? "บริการออกแบบและพัฒนาสนาม | สมาคมแอร์ซอฟต์ประเทศไทย" : `${copy.title.th} | สมาคมแอร์ซอฟต์ประเทศไทย`,
      "x-th-description": isField ? "บริการให้คำปรึกษาด้านการออกแบบและพัฒนาสนามแอร์ซอฟต์และเพ้นท์บอล ครอบคลุมการวางผังสนาม ความปลอดภัย ระบบเกม MilSim การบริหาร เทคโนโลยี อีเวนต์ และการตลาด" : `${copy.title.th} จากสมาคมแอร์ซอฟต์และเพ้นท์บอลประเทศไทย`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!serviceSlugs.includes(slug as ServiceSlug)) notFound();
  return <ServicePageContent slug={slug as ServiceSlug} />;
}
