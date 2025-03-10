import type { Metadata } from "next";
import { Inter } from "next/font/google"; // ✅ Import Google Font
import "./globals.css";

export const metadata: Metadata = {
  title: "WAE",
  description:
    "WAE leads transformative projects and develops cutting-edge purification systems, all aimed at ensuring a sustainable future.",
};

// ✅ Load the font
const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://github.com/wae-corp/WAE-F-B/blob/main/public/favicon-32x32.png?raw=true"
          sizes="32x32"
        />
      </head>
      {/* ✅ Apply font globally */}
      <body className={`${inter.className} bg-black supressHydrationWarning`}>
        {children}
      </body>
    </html>
  );
}
