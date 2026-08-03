import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alejandro Pablos Sánchez · Business observer, AI product builder",
  description:
    "AI practitioner and innovation builder based in Oslo. MSc Entrepreneurship & Innovation at UiO. Computer Vision researcher, data consultant, startup advisor at iHub & StartupLab.",
  keywords: ["AI", "Innovation", "Oslo", "Norway", "Entrepreneurship", "Computer Vision", "Machine Learning", "Data", "Portfolio", "UiO", "NTNU"],
  authors: [{ name: "Alejandro Pablos Sánchez" }],
  openGraph: {
    title: "Alejandro Pablos Sánchez · Business observer, AI product builder",
    description: "AI practitioner and innovation builder based in Oslo.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
