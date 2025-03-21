"use client";
import { useDarkMode } from "../context/useDarkMode";
import { FaGithub, FaLinkedin, SiMinutemailer } from "../icons/icons";

export function Footer() {
  const { darkMode } = useDarkMode();
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={`w-full pt-20 flex-col gap-4 z-[9] select-none ${
        darkMode ? "bg-dark" : "bg-light"
      } flex items-center h-[200px]`}
    >
      <div
        className={`${
          darkMode ? "text-light" : "text-gray-500"
        } flex justify-center gap-4 text-2xl`}
      >
        <a
          aria-label="Links to Daniel Perez linkedin"
          href="https://www.linkedin.com/in/daniel-f-perez/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 duration-300 ease-in-out cursor-pointer z-[9]"
        >
          <FaLinkedin />
        </a>
        <a
          aria-label="Links to Daniel Perez's GitHub"
          href="https://github.com/dxnielperez"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 duration-300 ease-in-out cursor-pointer z-[9]"
        >
          <FaGithub />
        </a>
        <a
          aria-label="Opens email to Daniel Perez's email at dxnieldev@gmail.com"
          href="mailto:dxnieldev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 duration-300 ease-in-out cursor-pointer z-[9]"
        >
          <SiMinutemailer />
        </a>
      </div>
      <span
        className={` ${
          darkMode ? "text-gray-300" : "text-gray-500"
        } font-light text-xs bg-[#ADAAB1]/10 p-2 rounded-md backdrop-blur-md `}
      >
        {`dxniel © ${currentYear}`}
      </span>
    </div>
  );
}
