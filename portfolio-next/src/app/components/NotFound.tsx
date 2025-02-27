"use client";
import { useDarkMode } from "../context/useDarkMode";

export function NotFoundPage() {
  const { darkMode } = useDarkMode();

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div
        className={`md:p-4 mb-4 mx-2 md:mx-0 rounded-lg pb-6 text-center max-w-[890px] w-full
          ${darkMode ? "hover:bg-[#37363c] bg-[#303034]" : "hover:bg-[#e5e5e5] bg-[#ebebeb]"} 
          duration-300 ease-in-out`}
      >
        <div className="w-full flex justify-center">
          <p className="pt-4 pb-6 text-lg font-semibold w-max">404 Not Found</p>
        </div>
      </div>
    </div>
  );
}
