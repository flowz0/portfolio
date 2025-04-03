import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Billy's Developer Portfolio",
  description: "Software Engineer portfolio by Billy Flowers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-neutral-950 text-neutral-200">
      <body className="antialiased">
        {children}
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
