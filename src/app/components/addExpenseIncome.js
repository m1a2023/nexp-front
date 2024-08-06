"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const ExpenseIncomeBlock = ({ classExpenseIncome }) => {
  const Quit = () => {
    return (
      <div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 170 170"
            fill="none"
          >
            <circle cx="85" cy="85" r="85" fill="#0C0101" />
            <rect
              x="50.1396"
              y="110.244"
              width="85"
              height="12.75"
              rx="6.375"
              transform="rotate(-45 50.1396 110.244)"
              fill="white"
            />
            <rect
              x="50.1396"
              y="110.244"
              width="85"
              height="12.75"
              rx="6.375"
              transform="rotate(-45 50.1396 110.244)"
              fill="white"
            />
            <rect
              x="110.244"
              y="119.86"
              width="85"
              height="12.75"
              rx="6.375"
              transform="rotate(-135 110.244 119.86)"
              fill="white"
            />
            <rect
              x="110.244"
              y="119.86"
              width="85"
              height="12.75"
              rx="6.375"
              transform="rotate(-135 110.244 119.86)"
              fill="white"
            />
          </svg>
        </button>
      </div>
    );
  };
  const Head = () => {
    return (
      <div className="flex flex-row w-full">
        <div className="flex justify-center font-semibold w-full">Add</div>
        <Quit />
      </div>
    );
  };
  const Type = () => {
    return (
      <div className="flex flex-col gap-y-2">
        <div className="font-semibold">Type</div>

        <div className="flex flex-row gap-4">
          <div className="flex gap-2">
            <input
              type="radio"
              id="ExpenseRadiobutton"
              name="typeofAdding"
            ></input>
            <label for="ExpenseRadiobutton">Expense</label>
          </div>

          <div className="flex gap-2">
            <input
              type="radio"
              id="IncomeRadiobutton"
              name="typeofAdding"
            ></input>
            <label for="IncomeRadiobutton">Income</label>
          </div>
        </div>
      </div>
    );
  };
  const Label = () => {};
  const Amount = () => {};
  const Tags = () => {};
  const Save = () => {};

  return (
    <div
      className={`flex flex-col backdrop-blur-lg backdrop-brightness-75 w-full h-full ${classExpenseIncome} text-black text-2xl justify-center items-center select-none`}
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
