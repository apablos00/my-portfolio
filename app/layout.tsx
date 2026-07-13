import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alejandro Pablos Sánchez · AI & Innovation",
  description:
    "AI practitioner and innovation builder based in Oslo. MSc Entrepreneurship & Innovation at UiO. Computer Vision researcher, data consultant, startup advisor at iHub & StartupLab.",
  keywords: ["AI", "Innovation", "Oslo", "Norway", "Entrepreneurship", "Computer Vision", "Machine Learning", "Data", "Portfolio", "UiO", "NTNU"],
  authors: [{ name: "Alejandro Pablos Sánchez" }],
  openGraph: {
    title: "Alejandro Pablos Sánchez · AI & Innovation",
    description: "AI practitioner and innovation builder based in Oslo.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
