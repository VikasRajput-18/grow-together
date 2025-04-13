import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import JobProvider from "@/context/JobContext";

const monaSans = Mona_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grow Together - Your Gateway to Top Job Opportunities",
  description:
    "Discover and apply to jobs from multiple platforms like LinkedIn, Indeed, and Naukri, all in one place. Stay ahead in your career with our job aggregator platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monaSans.variable} antialiased`}>
        <JobProvider>{children}</JobProvider>
      </body>
    </html>
  );
}
