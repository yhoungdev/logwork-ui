import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata= {
  title: "Loggworks | Homepage",
  description: "Find reliable home service providers near you",
  icons: {
    icon: {
      url: "/favicon.svg",
      type: "image/svg",
    },
    shortcut: { url: "/favicon.svg", type: "image/svg" },
  },
  openGraph: {
    title: "Loggworks",
    description:
      "Find reliable home service providers near you",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
