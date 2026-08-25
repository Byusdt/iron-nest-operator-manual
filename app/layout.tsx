import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "IRON NEST Wiki — Operator Guides & Firing Solutions",
  description: "Independent, source-led IRON NEST wiki with beginner guides, firing solutions, mission walkthroughs, shell references, save tips, and PC setup help.",
  keywords: "IRON NEST wiki, firing calculator, beginner guide, missions, shell types, save game",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "IRON NEST Wiki — Operator Guides & Firing Solutions",
    description: "Source-checked field manuals for firing solutions, missions, shells, and systems.",
    type: "website",
    siteName: "IRON NEST Operator Manual",
    images: [{ url: "/og.png", width: 1744, height: 909, alt: "IRON NEST Operator Manual" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IRON NEST Wiki — Operator Guides & Firing Solutions",
    description: "Source-checked field manuals for firing solutions, missions, shells, and systems.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
