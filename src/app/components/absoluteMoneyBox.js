"use client";
import { MoneyBoxStore } from "@/store/moneyBox";
import disabledArrow from "/public/disabledArrow.svg";
import enabledArrow from "/public/enabledArrow.svg";
import Image from "next/image";

export const AllMoneyBoxTemplate = ({ styles }) => {
  const isAllMoneyBox = MoneyBoxStore((state) => state.isMoneyBox);
  const changeMoneyBoxState = MoneyBoxStore(
    (state) => state.changeMoneyBoxState
  );

  return (
    <>
      {isAllMoneyBox ? (
        <div className="absolute w-full h-full flex justify-center items-center backdrop-blur-lg backdrop-brightness-95 select-none">
          <div
            className={`w-[35%] h-[70%] bg-[#fff] rounded-2xl text-black flex flex-col justify-center items-center relative`}
          >
            <div className="w-full h-full flex flex-row justify-center gap-x-8 items-center">
              <div>
                <Image
                  src={disabledArrow}
                  alt={"left arrow"}
                  style={{
                    cursor: "pointer",
                  }}
                />
              </div>
              {/*  max-h-[250px] */}
              <div
                className={`flex flex-col snap-start w-[60%] h-[80%] p-4 justify-start rounded-3xl shadow-2xl select-none capitalize`}
                style={{ backgroundColor: "#6320ee", color: "#fff" }}
              >
                <div className="flex w-full h-full justify-start font-bold text-lg">
                  <div className="flex">For car</div>
                </div>

                <div className="flex grow text-xl justify-start w-full ">
                  <div className="truncate text-4xl font-bold">1000</div>
                </div>

                <div className="flex flex-row w-full justify-end">
                  <div className="flex justify-end text-2xl opacity-45 font-bold">
                    USD
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={enabledArrow}
                  alt={"right arrow"}
                  style={{
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <div className="w-[70%] h-full flex flex-col justify-center items-center gap-y-8">
              <h2 className="font-[800] text-[30px]">Add expense or income</h2>
              <div className="flex flex-row gap-x-5 justify-center items-center">
                <div className="font-semibold text-[24px]">Type</div>

                <div
                  className={`${styles.form_radio} flex flex-row gap-4 justify-center text-[20px]`}
                >
                  <div className="flex gap-2">
                    <input
                      className="hidden"
                      type="radio"
                      id="ExpenseRadiobutton"
                      name="typeofAdding"
                      value="expense"
                      defaultChecked
                    ></input>

                    <label
                      htmlFor="ExpenseRadiobutton"
                      className={`${styles.radioLabel}`}
                    >
                      Expense
                    </label>
                  </div>

                  <div className="flex gap-2">
                    <input
                      className="hidden"
                      type="radio"
                      id="IncomeRadiobutton"
                      name="typeofAdding"
                      value="income"
                    ></input>
                    <label
                      htmlFor="IncomeRadiobutton"
                      className={`${styles.radioLabel}`}
                    >
                      Income
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-x-4">
                <div className="font-semibold text-[24px]">Amount</div>

                <div className="flex justify-center w-full">
                  <div className="w-[100%] relative flex items-center">
                    <input
                      name="amountText"
                      className="flex p-1 w-full text-lg ring-2 ring-black focus:ring-black outline-none rounded-md"
                      placeholder="Enter an amount"
                    ></input>
                    <div className="absolute right-2 text-gray-400 font-[600]">
                      <span>$</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-ash-gray px-10 py-2 font-light rounded-xl  cursor-pointer capitalize">
                <span className="text-[24px] font-bold">save</span>
              </div>
            </div>
            <div
              onClick={changeMoneyBoxState}
              className="absolute top-5 right-5 w-[36px] h-[36px] bg-black rounded-[50%] flex justify-center items-center select-none cursor-pointer"
            >
              <span className="text-white font-[800]">X</span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
