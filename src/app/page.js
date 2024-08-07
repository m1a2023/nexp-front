"use client";
import React from "react";
import { Sidebar } from "./components/sidebar";
import { Logo } from "./components/logo";
import { colors } from "./components/header";
import styles from "./assets/page.module.css";
import { TemplateMoneyCard } from "./components/moneyCard";
import { TemplateGraphic } from "./components/graphic";
import { TemplateAbsoluteButton } from "./components/absoluteButton";

export default function Home() {
  return (
    <div className="flex flex-row w-full h-full box-border bg-gray-200">
      <div
        className="flex flex-col p-6 grow justify-start text-1xl h-full max-h-[100vh]
        gap-6"
      >
        <div className="h-1/3 w-full flex flex-row py-3 gap-6 ">
          <div className="w-3/4 h-full flex felx-row gap-6">
            <TemplateMoneyCard
              cardTitle={"Balance"}
              mainInformation={"199.3"}
              currency={"USD"}
              color={colors.ElectricIndigo}
              width={"w-1/3"}
            ></TemplateMoneyCard>

            <TemplateMoneyCard
              cardTitle={"Income"}
              mainInformation={"1,300"}
              currency={"USD"}
              color={colors.RaisinBlack}
              width={"w-1/3"}
            ></TemplateMoneyCard>

            <TemplateMoneyCard
              color={colors.RoseBright}
              cardTitle={"Expenses"}
              currency={"USD"}
              mainInformation={"1,100.7"}
              width={"w-1/3"}
            ></TemplateMoneyCard>
          </div>

          <TemplateMoneyCard
            color={colors.AshGray}
            cardTitle={"Money box"}
            mainInformation={"19,351"}
            currency={"RUB"}
            width={"w-1/4"}
          ></TemplateMoneyCard>
        </div>

        <div className={"h-2/3 w-full flex flex-row gap-6"}>
          <TemplateGraphic
            graphicTitle={"Expenses"}
            mainInformation={""}
            color={"bg-gray-100"}
          ></TemplateGraphic>
          {/*DEMO BLOCKS! DO NOT DELETE!*/}
          <div className="flex flex-col w-1/4 gap-6">
            <div className="flex w-1/8 h-full p-4 font-bold text-neutral-800 bg-gray-100 text-lg rounded-3xl shadow-2xl select-none">
              Demo block
            </div>
            <div className="flex w-1/8 h-full p-4 font-bold text-neutral-800  bg-gray-100 text-lg rounded-3xl shadow-2xl select-none">
              Demo block
            </div>
          </div>
        </div>
      </div>
      {/* <TemplateAbsoluteButton styles={styles} /> */}
    </div>
  );
}
