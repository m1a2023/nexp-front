"use client";
import React from "react";
import { colors } from "./components/header";
import styles from "./assets/page.module.css";
import { TemplateMoneyCard } from "./components/moneyCard";
import { TemplateGraphic } from "./components/graphic";
import { TemplateAbsoluteButton } from "./components/absoluteButton";

export default function Home() {
  return (
    <div className="flex flex-row w-full box-border bg-gray-200">
      <div
        className="flex flex-col p-6 grow justify-start text-1xl h-full max-h-[100vh]
        gap-6"
      >
        <div className="h-1/3 w-full flex flex-row py-3 gap-x-6 ">
          <TemplateMoneyCard
            cardTitle={"Balance"}
            mainInformation={"199.3"}
            currency={"USD"}
            color={colors.ElectricIndigo}
            width={"w-1/4"}
          ></TemplateMoneyCard>

          <TemplateMoneyCard
            cardTitle={"Income"}
            mainInformation={"1,300"}
            currency={"USD"}
            color={colors.RaisinBlack}
            width={"w-1/4"}
          ></TemplateMoneyCard>

          <TemplateMoneyCard
            color={colors.RoseBright}
            cardTitle={"Expenses"}
            currency={"USD"}
            mainInformation={"1,100.7"}
            width={"w-1/4"}
          ></TemplateMoneyCard>

          <TemplateMoneyCard
            color={colors.AshGray}
            cardTitle={"Money box"}
            mainInformation={"19,351"}
            currency={"RUB"}
            width={"w-1/4"}
          ></TemplateMoneyCard>
        </div>

        <div className={"h-2/3 w-full flex flex-row flex-nowrap gap-x-6"}>
          <TemplateGraphic
            graphicTitle={"Expenses"}
            mainInformation={""}
            color={"bg-gray-100"}
          ></TemplateGraphic>

          {/*DEMO BLOCKS! DO NOT DELETE!*/}
          <div className="flex flex-col w-1/4 gap-6">
            <div className="flex w-full h-full pl-4 pr-3 pb-2 pt-3 grow-0 font-bold text-neutral-800 bg-gray-100 text-lg rounded-3xl shadow-2xl select-none">
              Demo block
            </div>
            <div className="flex w-1/8 h-full pl-4 pr-3 pb-2 pt-3 grow-0 font-bold text-neutral-800  bg-gray-100 text-lg rounded-3xl shadow-2xl select-none">
              Demo block
            </div>
          </div>
          {/*DEMO BLOCKS! DO NOT DELETE!*/}
        </div>
      </div>
      {/* <TemplateAbsoluteButton styles={styles} /> */}
    </div>
  );
}
