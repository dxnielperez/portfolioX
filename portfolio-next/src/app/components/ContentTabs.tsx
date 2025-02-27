"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useDarkMode } from "../context/useDarkMode";
import { tabs, Tab } from "../data";
import { NotFoundPage } from "./NotFound";

export function ContentTabs() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { darkMode } = useDarkMode();

  // Ensure URL includes ?tab=about unless another tab is present
  useEffect(() => {
    if (!searchParams.get("tab")) {
      router.replace("/?tab=about", { scroll: false });
    }
  }, [searchParams, router]);

  // Get tab from query param or default to "about"
  const activeTab = searchParams.get("tab") || "about";

  const isValidTab = tabs.some((tab) => tab.id === activeTab);

  // Handle tab change & update URL
  const handleTabClick = (tabId: string) => {
    router.push(`/?tab=${tabId}`, { scroll: false });
  };

  return (
    <div>
      {/* Tab Navigation */}
      <div className="grid grid-cols-4 mt-5 gap-4 mx-2">
        {tabs.map((tab: Tab) => (
          <div
            key={tab.id}
            className={`rounded-lg ${
              darkMode ? "hover:bg-[#37363c]" : "hover:bg-lighter"
            } w-full flex justify-center cursor-pointer p-2 duration-300 ease-in-out transition-all ${
              activeTab === tab.id
                ? darkMode
                  ? "bg-[#37363c]"
                  : "bg-[#e5e5e5]"
                : ""
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            <h3>{tab.label}</h3>
          </div>
        ))}
      </div>

      <div>
        <hr className="text-white my-2 mx-1 md:mx-0" />
      </div>

      {isValidTab ? (
        tabs.map((tab: Tab) => (
          <div key={tab.id} className={activeTab === tab.id ? "" : "hidden"}>
            <tab.component />
          </div>
        ))
      ) : (
        <div className="w-full">
          <NotFoundPage />
        </div>
      )}
    </div>
  );
}
