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

        <div className="flex flex-row gap-4 justify-center ">
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
  const Label = () => {
    return (
      <div className="flex flex-col gap-y-2">
        <div className="font-semibold">Label</div>

        <div className="flex justify-center w-full">
          <input
            className="flex p-1 w-[75%] text-lg ring-2 ring-black focus:ring-black outline-none rounded-md"
            placeholder="Enter a label"
          ></input>
        </div>
      </div>
    );
  };
  const Amount = () => {
    return (
      <div className="flex flex-col gap-y-2">
        <div className="font-semibold">Amount</div>

        <div className="flex justify-center w-full">
          <input
            className="flex p-1 w-[75%] h-[100%] text-lg ring-2 ring-black focus:ring-black outline-none rounded-md"
            placeholder="Enter an amount"
          ></input>
        </div>
      </div>
    );
  };
  const Tags = () => {
    const [activeTagIndex, setActiveTagIndex] = useState(null);

    const tags = [
      "Supermarkets",
      "Online shops",
      "Pharmacies",
      "Online services",
      "Other",
    ];

    function handleTagClick(index) {
      setActiveTagIndex(index);
    }

    const Tag = ({ label, index }) => {
      const tagColor = index === activeTagIndex ? "#6320ee" : "#000000";

      return (
        <button onClick={() => handleTagClick(index)}>
          <div
            className="flex flex-row w-fit justify-center p-2 text-white font-normal rounded-lg text-base flex-wrap"
            style={{ backgroundColor: tagColor }}
          >
            <div>{label}</div>
          </div>
        </button>
      );
    };

    return (
      <div className="flex flex-col gap-y-2">
        <div className="font-semibold">Tags</div>

        <div className="flex relative *:rounded-lg flex-row flex-wrap gap-3">
          {tags.map((label, index) => (
            <Tag label={label} key={index} index={index} />
          ))}
        </div>
      </div>
    );
  };
  const Save = () => {
    return (
      <div className="flex justify-end w-full items-centre font-light rounded-xl">
        <button>
          <div className="flex justify-center bg-ash-gray w-fit px-8 py-1 font-light rounded-xl">
            save
          </div>
        </button>
      </div>
    );
  };

  return (
    <div
      className={`flex flex-col backdrop-blur-lg backdrop-brightness-75 w-full h-full ${classExpenseIncome} text-black text-2xl justify-center items-center select-none`}
    >
      <div className="flex flex-col w-[35%] h-fit p-4 shadow-xl bg-white rounded-3xl items-center">
        <Head />

        <div className="flex flex-col w-full h-full gap-4 p-[5%]">
          <Type />
          <Label />
          <Amount />
          <Tags />
        </div>
        <Save />
      </div>
    </div>
  );
};
