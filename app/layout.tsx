import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Untuk Kamu, Sayangku ♡",
  description: "A little corner of the internet made with love.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
