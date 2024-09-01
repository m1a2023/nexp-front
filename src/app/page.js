"use client";
import { React, useState } from "react";
import { colors } from "./components/header";
import { TemplateMoneyCard } from "./components/moneyCard";
import { TemplateGraphic } from "./components/pieGraphic";
import { TemplateBarGraphic } from "./components/barGraphic";
import styles from "./assets/page.module.css";
import { ExpensePerdayBlock } from "./components/expensePerDay";
import { SquareExpenseChartBlock } from "./components/squareExpenseChart";

export default function Home() {
  const [chartPressedState, changeChartState] = useState(true);

  function homePageChangeChart() {
    changeChartState((current) => !current);
  }

  return (
    <div className="flex flex-row w-full h-full box-border bg-gray-200 relative">
      <div
        className={`${styles.mainContainer} p-6 grow justify-start text-1xl h-full max-h-[100vh]
      gap-x-6`}
      >
        <TemplateMoneyCard
          cardTitle={"Balance"}
          mainInformation={"199.3"}
          currency={"USD"}
          color={colors.ElectricIndigo}
          width={"w-[100%]"}
        />

        <TemplateMoneyCard
          cardTitle={"Income"}
          mainInformation={"1,300"}
          currency={"USD"}
          color={colors.RaisinBlack}
          width={"w-[100%]"}
        />

        <TemplateMoneyCard
          color={colors.RoseBright}
          cardTitle={"Expenses"}
          currency={"USD"}
          mainInformation={"1,100.7"}
          width={"w-[100%]"}
        />

        <TemplateMoneyCard
          color={colors.AshGray}
          cardTitle={"all Money box"}
          mainInformation={"19,351"}
          currency={"RUB"}
          width={"w-[100%]"}
        />

        {chartPressedState ? (
          <TemplateGraphic
            graphicTitle={"Expenses"}
            color={"bg-gray-100"}
            graphicContainer={styles.graphicContainer}
          />
        ) : (
          <TemplateBarGraphic
            graphicTitle={"Expenses"}
            color={"bg-gray-100"}
            classGraphicContainer={styles.graphicContainer}
          />
        )}

        <div className="flex flex-col w-full gap-6">
          <ExpensePerdayBlock />
          <div
            onClick={homePageChangeChart}
            className="flex flex-col w-full h-full pl-4 pr-3 pb-2 pt-3 grow-0 font-bold text-neutral-800  bg-gray-100 text-lg rounded-3xl shadow-2xl select-none"
          >
            <SquareExpenseChartBlock chartPressedState={chartPressedState} />
          </div>
        </div>
      </div>
    </div>
  );
}
