import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DarkModeProvider, LinksProvider } from "./context";
import { Footer } from "./components/Footer";
// import TsParticles from "./components/Particles";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import PersistentParticles from "./components/PersistentParticles";

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
      <head>
        <meta name="theme-color" content="#FB904D" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <link rel="canonical" href="https://www.dxniel.dev/" />

        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7TSWK844WQ"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-7TSWK844WQ');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DarkModeProvider>
          <LinksProvider>
            {children}
            <Analytics />
            <Footer />
            <PersistentParticles />
          </LinksProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
