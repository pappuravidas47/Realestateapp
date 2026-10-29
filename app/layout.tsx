import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Havenly | Exceptional places to call home",
    template: "%s | Havenly",
  },
  description: "A thoughtfully curated collection of exceptional homes across Dubai.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
