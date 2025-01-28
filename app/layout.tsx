import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

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
    <html lang="en" className="scroll-smooth bg-neutral-950 text-neutral-200">
      <body className="antialiased">
        <NextUIProvider>
          <Navigation />
          {children}
          <Footer />
        </NextUIProvider>
        <Toaster 
          position="bottom-center" 
          reverseOrder={false}
          toastOptions={{
            style: {
              color: '#d4d4d4',
              backgroundColor: '#0a0a0a'
            }
          }}
        />
      </body>
    </html>
  );
}
