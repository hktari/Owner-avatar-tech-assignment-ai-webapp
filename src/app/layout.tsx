import type { Metadata } from "next";
import "./globals.css"
import StyledComponentsRegistry from "@/lib/registry";

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
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
