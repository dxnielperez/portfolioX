"use client";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Image from "next/image";
import { useDarkMode } from "../context";
import Link from "next/link";

export function Nav({ is404 = false }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={`flex w-full justify-between items-center px-4 py-2 transition duration-300 
     backdrop-blur-md z-50
   ${darkMode ? "bg-dark/75" : "bg-light/45"}`}
    >
      <Link href="/">
        <Image
          src="/orange-icon.png"
          alt="my logo"
          width={35}
          height={35}
          className="hover:scale-105 duration-300 ease-in-out cursor-pointer"
        />
      </Link>
      {!is404 && (
        <DarkModeSwitch
          checked={darkMode}
          onChange={toggleDarkMode}
          moonColor="white"
          sunColor="orange"
          size={30}
        />
      )}
    </div>
  );
}
