import type { Metadata } from "next";
import { Crimson_Pro, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YiSuS | Nguyen Huy Hung - Software Engineer",
  description:
    "Software Engineer with 3+ years of experience specializing in educational technology and financial platforms. Expert in PHP/Laravel, Java/Spring Boot, DDD, and Clean Architecture.",
  keywords: [
    "YiSuS",
    "Software Engineer",
    "Backend Developer",
    "PHP",
    "Laravel",
    "Java",
    "Spring Boot",
    "DDD",
    "Clean Architecture",
  ],
  authors: [{ name: "Nguyen Huy Hung" }],
  openGraph: {
    title: "YiSuS | Nguyen Huy Hung - Software Engineer",
    description:
      "Software Engineer specializing in educational technology and financial platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${crimsonPro.variable} ${inter.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
