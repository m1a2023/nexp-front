import Link from "next/link";

export function Logo() {
  return (
    <div className="flex justify-center w-full">
      <Link href="/">
        <div className="flex w-20 h-20 justify-center bg-gray-300 rounded-full border-4 border-lime-300"></div>
      </Link>
    </div>
  );
}
