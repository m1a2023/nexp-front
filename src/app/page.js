"use client";
import React from "react";
import { Navbar } from "./components/navbar";
import { Logo } from "./components/logo";
import { TemplateMoneyCard } from "./components/main";

export default function Home() {
  //FIXME: change font and font size
  return (
    <div className="flex flex-row w-full box-border bg-gray-200">
      <div
        className="flex p-5 grow-0 flex-col justify-start text-2xl font-bold space-y-10
				w-[18%] min-h-full bg-black"
      >
        <Logo />
        <Navbar />
      </div>

      <div
        className="flex flex-col p-6 grow justify-start text-1xl h-full max-h-[100vh]
        gap-6"
      >
        <div className={"h-1/3 w-full flex flex-row space-x-6 py-3"}>
          <TemplateMoneyCard
            cardTitle={"Current balance"}
            mainInformation={"199.3$"}
            currency={"USD"}
            color={"bg-medium-state-blue"}
          ></TemplateMoneyCard>

          <TemplateMoneyCard
            cardTitle={"Income"}
            mainInformation={"1,300$"}
            currency={"USD"}
            color={"bg-violet-500"}
          ></TemplateMoneyCard>

          <TemplateMoneyCard
            color={"bg-gray-500"}
            cardTitle={"Expenses"}
            currency={"USD"}
            mainInformation={"1,100.7$"}
          ></TemplateMoneyCard>

          <TemplateMoneyCard
            color={"bg-raisin-black"}
            cardTitle={"Money box"}
            mainInformation={"19,351"}
            currency={"RUB"}
          ></TemplateMoneyCard>
        </div>
        <div className={"h-2/3 w-full flex flex-row space-x-6"}>
          <div className="w-1/2 pt-4">
            <div className="w-full h-full bg-ash-gray justify-start rounded-3xl shadow-2xl">
              <p>Expenses graphic</p>
            </div>
          </div>
          <div className="w-1/2 py-4 space-y-4">
            <div className="w-full h-1/2 bg-violet-500 justify-start rounded-3xl shadow-2xl"></div>
            <div className="w-full h-1/2 bg-emerald-500 justify-start rounded-3xl shadow-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
