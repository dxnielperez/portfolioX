"use client";
import Image from "next/image";
import { useDarkMode } from "../context/useDarkMode";

export function ProfilePic({ src, alt }: { src: string; alt: string }) {
  const { darkMode } = useDarkMode();

  return (
    <div className="w-full">
      <Image
        width={112}
        height={112}
        src={src}
        alt={alt}
        className={`rounded-full h-28 w-28 object-cover m-4 ring-4 transition-all ease-in-out bg-orange duration-300 ${darkMode ? "ring-light " : "ring-dark"}`}
      />
    </div>
  );
}
