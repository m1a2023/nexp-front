"use client";
import React from "react";
import { Navbar } from "./components/navbar";
import { Logo } from "./components/logo";
import { TemplateMoneyCard, TemplateGraphic } from "./components/main";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="flex flex-row w-full box-border bg-gray-200">
      <div
        className="flex p-5 grow-0 flex-col justify-start space-y-10
				w-[18%] min-h-full bg-black"
      >
        <Logo />
        <Navbar />
      </div>

      <div
        className="flex flex-col p-6 grow justify-start text-1xl h-full max-h-[100vh]
        gap-6"
      >
        <div className="h-1/3 w-full flex flex-row gap-6 py-3">
          <div className="w-3/4 h-full flex felx-row gap-6">
            <TemplateMoneyCard
              cardTitle={"Current balance"}
              mainInformation={"199.3"}
              currency={"USD"}
              color={"bg-medium-state-blue"}
              width={"w-1/3"}
            ></TemplateMoneyCard>

            <TemplateMoneyCard
              cardTitle={"Income"}
              mainInformation={"1,300"}
              currency={"USD"}
              color={"bg-violet-500"}
              width={"w-1/3"}
            ></TemplateMoneyCard>

            <TemplateMoneyCard
              color={"bg-gray-500"}
              cardTitle={"Expenses"}
              currency={"USD"}
              mainInformation={"1,100.7"}
              width={"w-1/3"}
            ></TemplateMoneyCard>
          </div>

          <TemplateMoneyCard
            color={"bg-raisin-black"}
            cardTitle={"Money box"}
            mainInformation={"19,351"}
            currency={"RUB"}
            width={"w-1/4"}
          ></TemplateMoneyCard>
        </div>

        <div className={"h-2/3 w-full flex flex-row gap-6"}>
          <TemplateGraphic
            graphicTitle={"Expenses"}
            mainInformation={"Graphic"}
            color={"bg-emerald-500"}
          ></TemplateGraphic>
          {/* <div className="w-1/2 py-4 space-y-4">
            <div className="w-full h-1/2 bg-violet-500 justify-start rounded-3xl shadow-2xl"></div>
            <div className="w-full h-1/2 bg-emerald-500 justify-start rounded-3xl shadow-2xl"></div>
          </div> */}
          <div className="flex flex-col w-1/4 gap-6">
            <div className="flex w-1/8 h-full p-4 font-bold text-neutral-800 bg-gray-200 text-lg rounded-3xl shadow-2xl select-none">
              Demo block
            </div>
            <div className="flex w-1/8 h-full p-4 font-bold text-neutral-800  bg-slate-200 text-lg rounded-3xl shadow-2xl select-none">
              Demo block
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 flex flex-row">
        <div className={styles.addInfoBtn + ' ' + styles.addExpensesBtn}>
          <span>-</span>
        </div>
        <div className={styles.addInfoBtn + ' ' + styles.addIncomeBtn}>
          <span>+</span>
        </div>
      </div>
    </div>
  );
}
