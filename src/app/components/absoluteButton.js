import { useState } from "react";

export const TemplateAbsoluteButton = ({ styles }) => {
  const [isAbsoluteBlock, setIsAbsoluteBlock] = useState(false);

  function homePageAbsoluteBlock() {
    setIsAbsoluteBlock((current) => !current);
  }

  function AddExpensesBlock({ display }) {
    return (
      <div
        className={`backdrop-blur-lg backdrop-brightness-95 w-full h-full ${display} justify-center items-center `}
      >
        <div className="w-[35%] h-[60%] bg-gray-200 rounded-3xl flex flex-col items-center text-black p-4">
          <h1>Add Expenses</h1>
          <button
            className="p-4 bg-[red] text-white rounded-3xl"
            onClick={() => {
              homePageAbsoluteBlock();
            }}
          >
            Exit dialog window
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {isAbsoluteBlock ? (
        <div className="absolute w-full h-full flex flex-row">
          <AddExpensesBlock display={"flex"} />
        </div>
      ) : (
        <div
          className={
            styles.addInfoBtn +
            " absolute bottom-5 right-5 " +
            styles.addExpensesBtn
          }
          onClick={() => {
            homePageAbsoluteBlock();
          }}
        >
          <span>
            {/* <i class="fa-solid fa-plus"></i> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="38"
              height="38"
              color="bg-gray-200"
              fill="none"
            >
              <path
                d="M12 4V20M20 12H4"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      )}
    </>
  );
};
