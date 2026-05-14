import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import LoadingScreen from "./components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Aitijya Ghosh — Software Developer",
  description:
    "Aitijya Ghosh — software developer working on AI tooling, mobile apps, and machine learning. Currently building Silvo at Silvo Labs.",
  metadataBase: new URL("https://aitijya.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="min-h-screen" suppressHydrationWarning>
        <LoadingScreen />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
