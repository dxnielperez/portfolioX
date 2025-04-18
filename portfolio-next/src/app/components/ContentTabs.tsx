"use client";
import { useEffect, useState } from "react";
import { useDarkMode } from "../context/useDarkMode";
import { tabs, Tab } from "../data";
import ErrorPage from "./Error";

const ContentTabs = () => {
  const { darkMode } = useDarkMode();
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab") || "about";
    setActiveTab(tabParam);
  }, []);

  const isValidTab = tabs.some((tab) => tab.id === activeTab);

  const handleTabClick = (tabId: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("tab", tabId);
    window.history.pushState({}, "", url.toString());
    setActiveTab(tabId);
  };

  return (
    <div>
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

      <hr className="text-white my-2 mx-1 md:mx-0" />

      {isValidTab ? (
        tabs.map((tab: Tab) => (
          <div key={tab.id} className={activeTab === tab.id ? "" : "hidden"}>
            <tab.component />
          </div>
        ))
      ) : (
        <div className="w-full">
          <ErrorPage />
        </div>
      )}
    </div>
  );
};

export default ContentTabs;
