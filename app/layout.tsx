import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nguyen Huy Hung | Technical Engineer",
  description:
    "Technical Engineer bridging business requirements and technical execution across educational technology, finance workflows, and system architecture.",
  keywords: [
    "Nguyen Huy Hung",
    "Technical Engineer",
    "Requirements Engineering",
    "Technical Specifications",
    "Data Modeling",
    "Laravel",
    "Spring Boot",
    "DDD",
    "Clean Architecture",
  ],
  authors: [{ name: "Nguyen Huy Hung", url: "https://yisus.dev" }],
  creator: "Nguyen Huy Hung",
  metadataBase: new URL("https://yisus.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nguyen Huy Hung | Technical Engineer",
    description:
      "Technical Engineer bridging business requirements and technical execution across educational technology, finance workflows, and system architecture.",
    type: "website",
    url: "https://yisus.dev",
    siteName: "Nguyen Huy Hung Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Nguyen Huy Hung - Technical Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Huy Hung | Technical Engineer",
    description:
      "Technical Engineer bridging business requirements and technical execution across educational technology and financial platforms.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
