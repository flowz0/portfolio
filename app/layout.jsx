import Navbar from "./_components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Billy's Portfolio",
  description: "Software engineer portfolio by Billy Flowers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
