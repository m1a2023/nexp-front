"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const ExpenseIncomeBlock = ({ classExpenseIncome }) => {
  const Quit = () => {
    return <></>;
  };
  const Head = () => {
    return (
      <div className="flex flex-row">
        <div className="font-semibold text-lg">Add</div>
        <Quit />
      </div>
    );
  };
  const Type = () => {
    return (
      <div className="flex flex-row">
        <input type="radio" id="ExpenseRadiobutton" name="expense"></input>
        <label for="ExpenseRadiobutton">Expense</label>

        <input type="radio" id="IncomeRadiobutton" name="income"></input>
        <label for="IncomeRadiobutton">Income</label>
      </div>
    );
  };
  const Label = () => {};
  const Amount = () => {};
  const Tags = () => {};
  const Save = () => {};

  return (
    <div
      className={`flex flex-col backdrop-blur-lg backdrop-brightness-75 w-full h-full ${classExpenseIncome} text-black justify-center items-center`}
    >
      <div className="flex flex-col w-[35%] h-[74%] p-4 shadow-xl bg-white rounded-3xl items-center">
        <Head />

        <div className="flex flex-col w-full h-full p-[8%]">
          <Type />
        </div>
      </div>
    </div>
  );
};
