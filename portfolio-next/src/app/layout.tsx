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
    "Hey everyone, I'm Daniel Perez, a full stack web developer! Welcome to my portfolio website, where I showcase my projects, experience, and skills in web development. Check out the About section to learn more about my journey, and feel free to reach out for collaborations or inquiries through the available links.",
  keywords: [
    "Daniel Perez",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Portfolio",
    "JavaScript",
    "TypeScript",
    "NextJs",
    "Frontend Developer",
    "Freelance Web Developer",
  ],
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
