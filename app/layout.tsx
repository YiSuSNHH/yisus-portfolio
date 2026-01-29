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
    "Nguyen Huy Hung",
    "Portfolio",
    "Vietnam Developer",
  ],
  authors: [{ name: "Nguyen Huy Hung", url: "https://yisus.dev" }],
  creator: "Nguyen Huy Hung",
  publisher: "Nguyen Huy Hung",
  metadataBase: new URL("https://yisus.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "YiSuS | Nguyen Huy Hung - Software Engineer",
    description:
      "Software Engineer specializing in educational technology and financial platforms. Expert in DDD, Clean Architecture, and modern backend development.",
    type: "website",
    locale: "en_US",
    url: "https://yisus.dev",
    siteName: "YiSuS Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YiSuS - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YiSuS | Nguyen Huy Hung - Software Engineer",
    description:
      "Software Engineer specializing in educational technology and financial platforms.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Thay bằng mã verification thực tế
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
