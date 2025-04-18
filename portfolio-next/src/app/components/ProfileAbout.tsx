"use client";
import { useDarkMode } from "../context/useDarkMode";
import { useEffect, useRef, useState } from "react";
import {
  BsFillSuitcaseLgFill,
  FaLink,
  IoLocation,
  MdOutlineMailOutline,
  RiVerifiedBadgeFill,
} from "../icons/icons";
import { DirectMessage, LinksContent, useOnScreen } from ".";
import { useLinksContext } from "../context/LinksContext";
import ConfettiExplosion from "react-confetti-blast";

export function ProfileAbout() {
  const { darkMode } = useDarkMode();
  const [confettiActive, setConfettiActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [showDirectMessage, setShowDirectMessage] = useState(false);
  const { showLinks, toggleLinks } = useLinksContext();
  const directMessageRef = useRef<HTMLDivElement>(null!);
  const isDirectMessageVisible = useOnScreen(directMessageRef);

  const [following, setFollowing] = useState(() => {
    const savedFollowing = sessionStorage.getItem("following");
    return savedFollowing ? JSON.parse(savedFollowing) : {};
  });
  const [followers, setFollowers] = useState(() => {
    const savedFollowers = sessionStorage.getItem("followers");
    return savedFollowers ? JSON.parse(savedFollowers) : "443";
  });

  const toggleFollow = () => {
    setFollowing((prevState: boolean) => !prevState);
    const newFollowers = following ? "444" : "443";
    setFollowers(newFollowers);
    sessionStorage.setItem("following", JSON.stringify(!following));
    sessionStorage.setItem("followers", JSON.stringify(newFollowers));
    if (following) {
      setTimeout(() => setConfettiActive(true), 400);
    }
  };

  const getButtonPosition = () => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;
      const buttonWidth = buttonRect.width;
      return {
        top: buttonRect.top + scrollTop + buttonRect.height / 2,
        left: buttonRect.left + scrollLeft + buttonWidth / 2,
      };
    }
    return { top: 0, left: 0 };
  };

  const handleLinksClick = () => {
    toggleLinks();
  };

  useEffect(() => {
    if (isDirectMessageVisible) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isDirectMessageVisible]);

  useEffect(() => {
    if (showDirectMessage) {
      const initialOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = initialOverflow;
      };
    }
  }, [showDirectMessage]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-end pt-4 pb-3 gap-4 relative">
          <div
            className={`text-2xl self-center ring-1 rounded-full p-1 cursor-pointer duration-300 ease-in-out ${
              darkMode
                ? "ring-light hover:bg-light hover:bg-opacity-25 hover:text-gray-200"
                : "ring-dark hover:bg-dark hover:bg-opacity-10 hover:text-gray-700"
            } `}
          >
            <MdOutlineMailOutline
              onClick={() => setShowDirectMessage(!showDirectMessage)}
            />
          </div>
          <button
            aria-label="Follow button"
            ref={buttonRef}
            onClick={toggleFollow}
            className={`${
              following ? "bg-orange" : "bg-purple-400"
            } px-4 py-[6px] rounded-full text-white mr-4 hover:scale-105 duration-300 ease-in-out cursor-pointer`}
          >
            {following ? "Follow" : "Following"}
          </button>
        </div>
        {confettiActive && (
          <ConfettiExplosion
            force={0.05}
            duration={2200}
            particleCount={20}
            zIndex={10}
            width={200}
            colors={["#FB904D", "#c084fc", "#F5CF43", "#FB904D"]}
            onComplete={() => setConfettiActive(false)}
            style={{
              position: "absolute",
              top: getButtonPosition().top,
              left: getButtonPosition().left,
            }}
          />
        )}
        <div className="px-4">
          <div className="text-2xl font-bold flex items-center gap-2">
            <h3>Daniel Perez</h3>
            <RiVerifiedBadgeFill className="text-blue-400" />
          </div>
          <h1
            className={`pb-4 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            } font-light`}
          >
            @dxnieldev
          </h1>
          <h2>
            Full Stack Web Developer
            <br /> For any inquiries reach out by DM
          </h2>
          <div
            className={`flex flex-wrap gap-x-4 gap-y-1 pt-2 font-light text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <div className="flex gap-1">
              <BsFillSuitcaseLgFill className="self-center" />
              Available
            </div>
            <div className="flex gap-1">
              <IoLocation className="self-center" />
              Southern California
            </div>
            <div
              className="flex gap-1 cursor-pointer"
              onClick={handleLinksClick}
            >
              <FaLink className="self-center" />
              <p className="text-orange underline-center-outward-bold font-medium">
                /links
              </p>
            </div>
          </div>
          <div className="flex w-[200px] justify-between pt-2">
            <div className="flex justify-between w-[35%]">
              <h3 className="mr-1">111</h3>
              <h3
                className={`text-md font-light ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Following
              </h3>
            </div>
            <div className="flex justify-between w-[35%]">
              <h3 className="mr-1">{followers}</h3>
              <h3
                className={`text-md font-light ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Followers
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className={`DirectMessage ${showDirectMessage ? "" : "closed"}`}>
        <div ref={directMessageRef} className="w-full h-full overflow-y-scroll">
          <DirectMessage
            onClose={() => setShowDirectMessage(!showDirectMessage)}
          />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 Links ${
          showLinks ? "" : "closed"
        }`}
      >
        <div
          className={`w-full h-full overflow-y-scroll  ${darkMode ? "" : ""}`}
        >
          <LinksContent onClose={toggleLinks} />
        </div>
      </div>
    </>
  );
}
