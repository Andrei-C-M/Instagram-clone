import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="flex items-center justify-between max-w-6xl cursor-pointer p-4 bg-white border-b-2 border-gray-300 shadow-sm">
      {/* left */}
      <Image
        className="h-auto w-24 sm:w-28"
        src="/images/Thegram_logo.png"
        alt="Thegram logo"
        width={120}
        height={60}
      />
      {/* middle */}
      <div className="">
        <div className="flex items-center space-x-4">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                <input type="text" placeholder="Search" />
        </div>
      </div>

      <nav>Search</nav>

      {/* right */}
      <h1>Right</h1>
    </header>
  );
}
