import type { Metadata } from "next";
import "./globals.css"

export const metadata: Metadata = {
  title: "Unsplash images tagged with AI",
  description: "A simple app that uses AI to tag images from Unsplash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
