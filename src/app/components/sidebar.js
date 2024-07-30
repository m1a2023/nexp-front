"use client";
import Link from "next/link";
import { Logo } from "./logo";
import { changeColor, colorQ } from "./colorQueue";
import { useState } from "react";

const SidebarLinkTemplate = ({ href, name }) => {
  const [bgColor, setBgColor] = useState("");

  const handleMouseEnter = () => {
    setBgColor(changeColor());
  };

  const handleMouseLeave = () => {
    setBgColor("");
  };

  return (
    <Link href={href}>
      <li
        className="flex justify-center p-3 rounded-3xl transition-all duration-150 hover:text-white select-none"
        style={{
          backgroundColor: bgColor,
          color:
            bgColor === "#ffffff" || bgColor === "#f8f0fb"
              ? "#000000"
              : "#ffffff",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {name}
      </li>
    </Link>
  );
};

export const Sidebar = () => {
  let currentColor = changeColor();

  return (
    <div className="flex p-5 grow-0 flex-col h-full w-full justify-start space-y-10 bg-black">
      <Logo />
      <div className="flex flex-col justify-center text-2xl gap-4 select-none">
        <SidebarLinkTemplate href="/" name="Overview" />
        <SidebarLinkTemplate href="/Profile" name="Profile" />
        <SidebarLinkTemplate href="/Settings" name="Settings" />
        <SidebarLinkTemplate href="/Tables" name="Tables" />
        <SidebarLinkTemplate href="/About" name="About" />
      </div>
    </div>
  );
};
