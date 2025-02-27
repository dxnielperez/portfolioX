"use client";
import { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useDarkMode } from "../context";
import { Banner, Nav, ProfileAbout, ProfilePic } from ".";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { darkMode } = useDarkMode();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${darkMode ? "bg-dark text-light" : "bg-light text-dark"} min-h-screen relative min-w-[400px]`}
    >
      <div className="relative z-10">
        <div className="sticky top-0 z-30 w-full">
          <Nav />
        </div>
        <div className="flex justify-center w-full">
          <div className="flex flex-col items-center">
            <div className="max-w-[950px] w-full relative aspect-[3/1]">
              <div className="overflow-y-hidden aspect-[3/1] max-w-[950px]">
                <Banner
                  darkModeImage="/dark-mode-banner.gif"
                  lightModeImage="/light-mode-banner.gif"
                />
              </div>
              <div className="absolute bottom-[-4rem] left-0 md:left-[2rem] z-10">
                <ProfilePic src="/me-memoji.png" alt="my memoji" />
              </div>
            </div>
            <div className="max-w-[890px] w-full">
              <ProfileAbout />
              {children}
            </div>
          </div>
        </div>
      </div>
      {showScrollTop && (
        <div
          className={`fixed bottom-4 p-1 right-4 z-[999] ring-0 rounded-full backdrop-blur-md cursor-pointer transition-all duration-300 ease-in-out ${
            darkMode
              ? "text-light bg-slate-500/30 hover:bg-slate-500/45"
              : "text-dark bg-slate-500/20 hover:bg-slate-500/35"
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <MdKeyboardArrowUp size={30} />
        </div>
      )}
    </div>
  );
}
