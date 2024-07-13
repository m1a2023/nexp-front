import Link from "next/link";

export function Navbar() {
  //TODO: change routes
  return (
    <>
      <div className="flex flex-col justify-center text-2xl gap-4 select-none">
        <li className="flex justify-center p-3 rounded-3xl border-transparent border-4 transition-all duration-300 delay-100 hover:border-4 hover:border-gray-50 select-none">
          <Link href="/">Home</Link>
        </li>
        <li className="flex justify-center p-3 rounded-3xl border-transparent border-4 transition-all duration-300 delay-100 hover:border-4 hover:border-gray-50 select-none">
          <Link href="/route1">Profile</Link>
        </li>
        <li className="flex justify-center p-3 rounded-3xl border-transparent border-4 transition-all duration-300 delay-100 hover:border-4 hover:border-gray-50 select-none">
          <Link href="/route2">Table</Link>
        </li>
        <li className="flex justify-center p-3 rounded-3xl border-transparent border-4 transition-all duration-300 delay-100 hover:border-4 hover:border-gray-50 select-none">
          <Link href="/route3">Settings</Link>
        </li>
        <li className="flex justify-center p-3 rounded-3xl border-transparent border-4 transition-all duration-300 delay-100 hover:border-4 hover:border-gray-50 select-none">
          <Link href="/about">About</Link>
        </li>
      </div>
    </>
  );
}
