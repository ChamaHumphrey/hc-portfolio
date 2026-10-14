import type { Metadata, Viewport } from "next";
import { Sora, Source_Sans_3 } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const head = Sora({ subsets: ["latin"], variable: "--font-head" });
const body = Source_Sans_3({ subsets: ["latin"], variable: "--font-body" });

const description = "Computer Science graduate and software developer focused on backend systems, AI integration and practical digital solutions. Based in Ndola, Zambia.";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: { default: "Humphrey Chama | Software Developer and AI Integration", template: "%s | Humphrey Chama" },
  description,
  openGraph: { title: "Humphrey Chama | Software Developer", description, type: "website", locale: "en_ZM", siteName: site.name },
  twitter: { card: "summary", title: "Humphrey Chama | Software Developer", description },
};
export const viewport: Viewport = { themeColor: "#050a17", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
