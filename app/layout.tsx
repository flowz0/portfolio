import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Billy's Portfolio",
  description: "Full-Stack Web Developer Portfolio created by Billy Flowers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-neutral-950 text-neutral-300"
      >
        <NextUIProvider>
          <Navigation />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
