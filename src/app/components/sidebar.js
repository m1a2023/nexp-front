import Link from "next/link";
import { navbarColors } from "./header";
import { Logo } from "./logo";
import { changeColor } from "./colorQueue";

export const Sidebar = () => {
  let currentColor = changeColor();

  return (
    <div className="flex p-5 grow-0 flex-col h-full w-full justify-start space-y-10 bg-black">
      <Logo />
      <div className="flex flex-col justify-center text-2xl gap-4 select-none">
        <Link href="/">
          <li
            className={`flex justify-center p-3 rounded-3xl transition-all duration-300 hover:bg-ash-gray hover:text-white select-none`}
          >
            Overview
          </li>
        </Link>

        <Link href="/Profile">
          <li className="flex justify-center p-3 rounded-3xl transition-all duration-300 hover:bg-ash-gray hover:text-black select-none">
            Profile
          </li>
        </Link>

        <Link href="/Tables">
          <li className="flex justify-center p-3 rounded-3xl transition-all duration-300 hover:bg-ash-gray hover:text-black select-none">
            Tables
          </li>
        </Link>

        <Link href="/Settings">
          <li className="flex justify-center p-3 rounded-3xl transition-all duration-300 hover:bg-ash-gray hover:text-black select-none">
            Settings
          </li>
        </Link>

        <Link href="/About">
          <li className="flex justify-center p-3 rounded-3xl transition-all duration-300 hover:bg-ash-gray hover:text-black select-none">
            About
          </li>
        </Link>
      </div>
    </div>
  );
};
