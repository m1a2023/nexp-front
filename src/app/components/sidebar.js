"use client";
import Link from "next/link";
import { AxpenLogo, Logo } from "./logo";
import { changeColor } from "./colorQueue";
import { useState } from "react";
import logo from "../../../public/logo[white].svg";
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
        <AxpenLogo
          classLogo=""
          width="120"
          height="120"
          viewBox="0 0 150 150"
          fill="fill"
          stroke="white"
          strokeWidth="7"
        />
      </div>
      <div className="flex flex-col h-full justify-center text-2xl gap-2 select-none">
        <SidebarLinkTemplate href="/" name="Overview" />
        <SidebarLinkTemplate href="/profile" name="Profile" />
        <SidebarLinkTemplate href="/tables" name="Tables" />
        <SidebarLinkTemplate href="/settings" name="Settings" />
        <SidebarLinkTemplate href="/about" name="About" />
      </div>
      <div className="flex w-full justify-start px-10 p-3 h-[25%]">
        <Quit classQuit={"flex"} />
      </div>
    </div>
  );
};
