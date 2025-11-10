import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../assets/fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

const museoSans = localFont({
  src: [
    {
      path: "../assets/fonts/fonnts.com-Museo_Sans_Rounded_100.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/fonnts.com-Museo_Sans_Rounded_300.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/fonnts.com-Museo_Sans_Rounded_500.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/fonnts.com-Museo_Sans_Rounded_700.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/fonnts.com-Museo_Sans_Rounded_900.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-museo-sans",
});

export const metadata: Metadata = {
  title: "Vansh-Parate | Developer",
  description: "Personal portfolio showcasing my projects, skills, and experience in software development",
  keywords: ["portfolio", "developer", "software", "projects", "web development"],
  authors: [{ name: "Vansh Parate" }],
  creator: "Vansh Parate",
  publisher: "Vansh Parate",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vansh-parate.vercel.app",
    title: "Vansh-Parate | Developer",
    description: "Personal portfolio showcasing my projects, skills, and experience in software development",
    siteName: "Vansh Parate Portfolio",
    images: [
      {
        url: "/pfp.jpeg",
        width: 1200,
        height: 630,
        alt: "Vansh Parate Profile Picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansh-Parate | Developer",
    description: "Personal portfolio showcasing my projects, skills, and experience in software development",
    images: ["/pfp.jpeg"],
    creator: "@radeon74055",
  },
  icons: {
    icon: "/pfp.jpeg",
    apple: "/pfp.jpeg",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${museoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
