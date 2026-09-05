import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

export const metadata: Metadata = { title: "Thailand Airsoft Association", description: "Standards, safety, events and sport tourism for airsoft and paintball in Thailand." };
const thaiFont = Noto_Sans_Thai({ subsets: ["thai"], weight: ["400", "500", "600", "700"], variable: "--font-thai", display: "swap" });
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={thaiFont.variable}><body><LanguageProvider><SiteHeader /><main>{children}</main><SiteFooter /></LanguageProvider></body></html>; }
