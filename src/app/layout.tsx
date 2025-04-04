import { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "KAUTILYA ACADEMY",
  icons: "/Klogo.png",
  description: "Kautilya Academy is a premier educational institution dedicated to providing high-quality education and fostering holistic development in students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  ); 
}
