import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gather — Grocery pickup",
  description: "Shop your local stores, share a grocery cart, and pick up on your schedule.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
