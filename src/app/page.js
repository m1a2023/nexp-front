"use client";
import React from "react";
import { Navbar } from "./components/navbar";
import { Logo } from "./components/logo";

export default function Home() {
  return (
    <div className="flex flex-row h-full w-full box-border space-x-7 bg-gray-200">
      <div
        className="flex p-5 grow-0 flex-col justify-start text-2xl font-bold space-y-10
					w-44 min-h-full bg-black"
      >
        <Logo />
        <Navbar />
      </div>

      <div
        className="flex flex-col p-5 grow justify-center text-1xl rounded-2xl 
					min-w-25 min-h-full space-y-10 font-bold"
      >
        <div
          className="flex p-3 grow justify-center bg-violet-700 rounded-2xl text-1xl 
						min-h-16 max-h-24 border-solid border-4"
        ></div>

        <div className="flex grow justify-start bg-transparent text-1xl ">
          TEXT
        </div>
      </div>
    </div>
  );
}
