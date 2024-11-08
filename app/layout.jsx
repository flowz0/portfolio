import "./globals.css";

export const metadata = {
  title: "Billy's Portfolio",
  description: "Software engineer portfolio by Billy Flowers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
