"use client";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Image from "next/image";
import { useDarkMode } from "../context";

export function Nav() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={`flex w-full justify-between items-center px-4 py-2 transition duration-300 
     backdrop-blur-md
   ${darkMode ? "bg-dark/75" : "bg-light/45"}`}
    >
      {" "}
      <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <Image
          src="/orange-icon.png"
          alt="my logo"
          width={35}
          height={35}
          className="hover:scale-105 duration-300 ease-in-out cursor-pointer"
        />
      </div>
      <DarkModeSwitch
        checked={darkMode}
        onChange={toggleDarkMode}
        moonColor="white"
        sunColor="orange"
        size={30}
      />
    </div>
  );
}
