import Link from "next/link";
import { navbarColors } from "./header";

export const Sidebar = () => {
  //TODO: change routes

  //TODO: make a rainbowed navbar's Links
  /*const counter = {
    quantity: 0,
    increment() {
      this.quantity = (this.quantity + 1) % Object.keys(navbarColors).length;
      return this.quantity++;
    },
  };
  let currentColor = Object.keys(navbarColors).at(counter.increment());
  */

  return (
    <>
      <div className="flex flex-col justify-center text-2xl gap-4 select-none">
        <Link href="/">
          <li className="flex justify-center p-3 rounded-3xl transition-all duration-300 hover:bg-ash-gray hover:text-black select-none">
            Overview
          </li>
        </Link>

        <Link href="/route1">
          <li className="flex justify-center p-3 rounded-3xl transition-all duration-300 hover:bg-ash-gray hover:text-black select-none">
            Profile
          </li>
        </Link>

        <Link href="/route2">
          <li className="flex justify-center p-3 rounded-3xl transition-all duration-300 hover:bg-ash-gray hover:text-black select-none">
            Tables
          </li>
        </Link>

        <Link href="/route3">
          <li className="flex justify-center p-3 rounded-3xl transition-all duration-300 hover:bg-ash-gray hover:text-black select-none">
            Settings
          </li>
        </Link>

        <Link href="/about">
          <li className="flex justify-center p-3 rounded-3xl transition-all duration-300 hover:bg-ash-gray hover:text-black select-none">
            About
          </li>
        </Link>
      </div>
    </>
  );
};
