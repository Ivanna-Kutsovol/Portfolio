import type { Metadata } from "next";

import { Header } from "@/components/layout/header/header";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./styles/App.scss";

export const metadata: Metadata = {
  title: "Ivanna Kutsovol | Frontend Developer & Visual Creative",
  description:
    "Portfolio of Ivanna Kutsovol, a frontend developer and visual creative building responsive websites, UI/UX designs, WordPress projects, and brand visuals.",
  keywords: [
    "Ivanna Kutsovol",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "UI UX designer",
    "web portfolio",
    "WordPress developer",
  ],
  authors: [{ name: "Ivanna Kutsovol" }],
  creator: "Ivanna Kutsovol",
  openGraph: {
    title: "Ivanna Kutsovol | Frontend Developer & Visual Creative",
    description:
      "Frontend, UI/UX, WordPress, creative content and brand identity portfolio.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivanna Kutsovol | Frontend Developer & Visual Creative",
    description:
      "Frontend, UI/UX, WordPress, creative content and brand identity portfolio.",
  },
  metadataBase: new URL("https://ivannacodeslab.vercel.app"),
  alternates: {
    canonical: "/",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ivanna Kutsovol",
  url: "https://ivannacodeslab.vercel.app",
  jobTitle: "Frontend Developer and Visual Creative",
  description:
    "Frontend developer and visual creative building responsive websites, UI/UX designs, WordPress projects, and brand visuals.",
  sameAs: [
    "https://github.com/Ivanna-Kutsovol",
    "https://www.linkedin.com/in/ivanna-kucovol/",
    "https://www.instagram.com/ivanna.codeslab/",
  ],
  knowsAbout: [
    "Frontend Development",
    "React",
    "Next.js",
    "TypeScript",
    "UI/UX Design",
    "WordPress",
    "Brand Identity",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
