"use client";
import Image from "next/image";
import { useDarkMode } from "./context";
import { Nav } from "./components";
import DialogueBox from "./components/DialogueBox";

export default function NotFound() {
  const { darkMode } = useDarkMode();

  return (
    <div className="h-full w-full flex justify-center items-center z-50">
      <div
        className={`text-center w-full h-[50rem] flex flex-col
          ${darkMode ? "bg-dark" : " bg-light"} 
          duration-300 ease-in-out`}
      >
        <Nav is404={true} />

        <div className="w-full h-[50rem] items-center flex flex-col justify-center px-4 pb-8">
          <Image
            width={180}
            height={180}
            alt="Pixel art landscape"
            src="/astronaut.png"
            className="rounded-xl animate-float z-50"
          />
          <DialogueBox />
        </div>
      </div>
    </div>
  );
}
