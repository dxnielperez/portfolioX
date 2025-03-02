"use client";
import Image from "next/image";
import { useDarkMode } from "../context/useDarkMode";
import { BannerProps } from "../data";

export function Banner({ darkModeImage, lightModeImage }: BannerProps) {
  const { darkMode } = useDarkMode();

  return (
    <div className="w-full flex justify-center">
      <div className="relative aspect-[3/1] w-full">
        <Image
          width={500}
          height={500}
          src={lightModeImage}
          unoptimized={true}
          alt="light mode banner"
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-300 rounded-none lg:rounded-lg ${
            darkMode ? "opacity-0" : "opacity-100"
          }`}
        />
        <Image
          width={500}
          height={500}
          src={darkModeImage}
          unoptimized={true}
          alt="dark mode banner"
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-300 rounded-none lg:rounded-lg ${
            darkMode ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
