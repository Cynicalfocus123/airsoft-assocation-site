import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

export const metadata: Metadata = { title: "Thailand Airsoft Association", description: "Standards, safety, events and sport tourism for airsoft and paintball in Thailand." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>; }
