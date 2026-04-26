import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christopher Wenzlick | Full Stack & Cloud Infrastructure Engineer",
  description: "Software engineer specializing in full-stack development, cloud infrastructure, and healthcare data integration. Experienced with C#, .NET, React, SQL Server, HL7, Epic/Cerner interoperability, and Azure DevOps.",
  keywords: [
    "Christopher Wenzlick",
    "software engineer",
    "full stack developer",
    "cloud infrastructure",
    "healthcare integration",
    "HL7",
    "Epic Cerner",
    "C# developer",
    ".NET developer",
    "React developer",
    "clinical data integration",
  ],
  authors: [{ name: "Christopher Wenzlick" }],
  openGraph: {
    title: "Christopher Wenzlick | Full Stack & Cloud Infrastructure Engineer",
    description: "Software engineer with expertise in clinical data integration, full-stack development, and scalable system design.",
    url: "https://chriswenzlick.com",
    siteName: "Christopher Wenzlick",
    type: "website",
    images: [
      {
        url: "/images/chris-headshot.jpg",
        width: 800,
        height: 800,
        alt: "Christopher Wenzlick",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Christopher Wenzlick | Software Engineer",
    description: "Full stack and cloud infrastructure engineer specializing in healthcare data integration.",
  },
  metadataBase: new URL("https://chriswenzlick.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <div className="grow">
          {children}
        </div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
