"use client";
import { useEffect, memo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useDarkMode } from "../context/useDarkMode";
import { tabs, Tab } from "../data";
import ErrorPage from "./Error";

function ContentTabs() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { darkMode } = useDarkMode();

  useEffect(() => {
    if (!searchParams.get("tab")) {
      router.push("/?tab=about", { scroll: false });
    }
  }, [searchParams, router]);

  const activeTab = searchParams.get("tab") || "about";
  const isValidTab = tabs.some((tab) => tab.id === activeTab);

  const handleTabClick = (tabId: string) => {
    router.push(`/?tab=${tabId}`, { scroll: false });
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
          <ErrorPage />
        </div>
      )}
    </div>
  );
}

export default memo(ContentTabs);
