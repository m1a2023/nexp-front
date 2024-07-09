"use client";
import React from "react";
import { Navbar } from "./components/navbar";
import { Logo } from "./components/logo";
import { TemplateCard } from "./components/main";

export default function Home() {
  //FIXME: change font and font size
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
        className="flex flex-row p-5 flex-wrap grow justify-start text-1xl min-w-25 min-h-full 
        gap-6"
      >
        <TemplateCard
          cardTitle={"Demo"}
          mainInformation={"Some information"}
          color={"bg-violet-700"}
        ></TemplateCard>

        <TemplateCard
          color={"bg-ash-gray"}
          cardTitle={"NewCard"}
          mainInformation={"None"}
        ></TemplateCard>

        <TemplateCard
          cardTitle={"Current balance"}
          mainInformation={"200$"}
          color={"bg-medium-state-blue"}
        ></TemplateCard>

        <TemplateCard
          color={"bg-raisin-black"}
          cardTitle={"NewCard2"}
          mainInformation={"Empty"}
        ></TemplateCard>
      </div>
    </div>
  );
}
