import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mike Wheeler | Full-Stack Developer",
  description:
    "Full-stack developer specializing in React.js and Next.js. Creating modern, responsive web applications with a focus on user experience and performance.",
  keywords:
    "full-stack developer, React, Next.js, web development, portfolio, Mike Wheeler",
  authors: [{ name: "Mike Wheeler" }],
  openGraph: {
    title: "Mike Wheeler | Full-Stack Developer",
    description: "Full-stack developer specializing in React.js and Next.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TQXTFVW68P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TQXTFVW68P');
          `}
        </Script>
      </body>
    </html>
  );
}
