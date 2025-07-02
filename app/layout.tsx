import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { FloatingNav, Loader, ThemeToggle } from "@/components/index";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_CURRENT_SITE_URL as string),
  openGraph: {
    type: "website",
    locale: "en_US",
    title:
      "Thomas Pappas | Senior Software Engineer based in Brighton, MI, USA",
    description:
      "Explore the portfolio of Thomas Pappas based in Brighton, MI, USA, a skilled C#/Angular Developer.",
    images: [
      {
        url: "/og-image.webp",
        alt: "Thomas Pappas | Senior Software Engineer based in Brighton, MI, USA",
      },
    ],
  },
  title: "Thomas Pappas | Senior Software Engineer based in Brighton, MI, USA",
  description: "Explore the portfolio of Thomas Pappas based in Brighton, MI, USA, a skilled C#/Angular Developer.",
  keywords:
    "Thomas Pappas, Airbnb, Brex, SHEIN, Intel, C#, Angular, Azure, Brighton, Michigan, United States",
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const revalidate = Number(process.env.REVALIDATE_INTERVAL) || 600;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative bg-background flex justify-center items-center flex-col overflow-hidden">
            <Suspense fallback={<Loader />}>{children}</Suspense>
            <FloatingNav />
            <ThemeToggle />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
