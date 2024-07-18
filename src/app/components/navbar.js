import Link from "next/link";

export function Navbar() {
  //TODO: change routes
  return (
    <>
      <div className="flex flex-col justify-center text-2xl gap-4 select-none">
        <Link href="/">
          <li className="flex justify-center p-3 rounded-3xl transition-all duration-300 hover:bg-violet-700 select-none">
            Overview
          </li>
        </Link>

        <Link href="/route1">
          <li className="flex justify-center p-3 rounded-3xl transition-all duration-300 hover:bg-sky-400 select-none">
            Profile
          </li>
        </Link>

        <Link href="/route2">
          <li className="flex justify-center p-3 rounded-3xl transition-all duration-300 select-none">
            Tables
          </li>
        </Link>

        <Link href="/route3">
          <li className="flex justify-center p-3 rounded-3xl transition-all duration-300 select-none">
            Settings
          </li>
        </Link>

        <Link href="/about">
          <li className="flex justify-center p-3 rounded-3xl transition-all duration-300 select-none">
            About
          </li>
        </Link>
      </div>
    </>
  );
}
