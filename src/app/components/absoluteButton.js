"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

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
          <h1 className="font-bold text-[28px]">Add Expenses</h1>
          <div className="flex flex-col justify-center">
            <div>
              <label
                for="price"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Price
              </label>
              <div class="relative mt-2 rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span class="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="0.00"
                />
                <div class="absolute inset-y-0 right-0 flex items-center">
                  <label for="currency" class="sr-only">
                    Currency
                  </label>
                  <select
                    id="currency"
                    name="currency"
                    class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div>
                <label
                  id="listbox-label"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Assigned to
                </label>
                <div class="relative mt-2">
                  <button
                    type="button"
                    class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-labelledby="listbox-label"
                  >
                    <span class="flex items-center">
                      <span class="ml-3 block truncate">Tom Cook</span>
                    </span>
                    <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <svg
                        class="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* <!--
      Select popover, show/hide based on select state.

      Entering: ""
        From: ""
        To: ""
      Leaving: "transition ease-in duration-100"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
                  <ul
                    class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    tabindex="-1"
                    role="listbox"
                    aria-labelledby="listbox-label"
                    aria-activedescendant="listbox-option-3"
                  >
                    {/* <!--
        Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

        Highlighted: "bg-indigo-600 text-white", Not Highlighted: "text-gray-900"
      --> */}
                    <li
                      class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                      id="listbox-option-0"
                      role="option"
                    >
                      <div class="flex items-center">
                        {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                        <span class="ml-3 block truncate font-normal">
                          Wade Cooper
                        </span>
                      </div>
                      {/* 
        <!--
          Checkmark, only display for selected option.

          Highlighted: "text-white", Not Highlighted: "text-indigo-600"
        --> */}
                      <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                        <svg
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </li>

                    {/* <!-- More items... --> */}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <button>Send</button>
            </div>
          </div>
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
      {usePathname() == "/" ? (
        isAbsoluteBlock ? (
          <div className="absolute w-full h-full flex flex-row">
            <AddExpensesBlock display={"flex"} />
          </div>
        ) : (
          <div
            className={
              styles.addInfoBtn +
              " absolute bottom-5 right-5 "
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
        )
      ) : (
        <></>
      )}
      {/* {} */}
    </>
  );
};
