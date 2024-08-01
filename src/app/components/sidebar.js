"use client";
import Link from "next/link";
import { Logo } from "./logo";
import { changeColor } from "./colorQueue";
import { useState } from "react";
import logo from "../../../public/profile-bg-element3.png";
import { Quit } from "./quit";

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
        className="flex justify-start p-3 px-10 rounded-3xl transition-all duration-75 select-none"
        style={{
          backgroundColor: bgColor,
          color:
            bgColor === "#ffffff" || bgColor === "#cad5ca"
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
  return (
    <div className="flex p-5 grow-0 flex-col h-full w-full justify-start space-y-10 bg-black">
      <div className="flex justify-center h-fit">
        <Logo source={logo} className="flex justify-center pt-[10%]" />
      </div>
      <div className="flex flex-col h-full justify-center text-2xl gap-2 select-none">
        <SidebarLinkTemplate href="/" name="Overview" />
        <SidebarLinkTemplate href="/Profile" name="Profile" />
        <SidebarLinkTemplate href="/Settings" name="Settings" />
        <SidebarLinkTemplate href="/Tables" name="Tables" />
        <SidebarLinkTemplate href="/About" name="About" />
      </div>
      <div className="flex justify-center h-[25%]">
        <Quit classQuit={"flex"} />
      </div>
    </div>
  );
};
