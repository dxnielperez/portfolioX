import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DarkModeProvider, LinksProvider } from "./context";
import { Footer } from "./components/Footer";
import TsParticles from "./components/Particles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel (@dxnieldev)",
  icons: "/favicon.png",
  description:
    "The portfolio of Daniel Perez, a full stack web developer showcasing his projects, experience, and skills in web development. Visit the About section for more information about Daniel and his journey. Links to relevant profiles are available, as well as a way to contact Daniel for collaboration or inquiries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DarkModeProvider>
          <LinksProvider>
            {children}
            <Footer />
            <TsParticles />
          </LinksProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
