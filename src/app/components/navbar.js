import Link from "next/link";

export function Navbar() {
  return (
    <>
      <ul className="flex flex-col justify-center space-y-5">
        <li className="flex justify-center">
          <Link href="/">Home</Link>
        </li>
        <li className="flex justify-center">
          <Link href="/route1">Route1</Link>
        </li>
        <li className="flex justify-center">
          <Link href="/route2">Route2</Link>
        </li>
        <li className="flex justify-center">
          <Link href="/route3">Route3</Link>
        </li>
        <li className="flex justify-center">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </>
  );
}
