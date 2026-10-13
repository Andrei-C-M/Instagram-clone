import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="flex items-center justify-between cursor-pointer p-4 bg-white border-b-2 border-gray-300 shadow-sm">
      {/* left */}
      <Image
        className="h-auto w-24 sm:w-28"
        src="/images/Thegram_logo.png"
        alt="Thegram logo"
        width={120}
        height={60}
      />
      {/* middle */}
      <div className="relative mt-1">
        <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="rounded-md border border-gray-500 bg-gray-50 py-2 pl-10 pr-3 focus:border-2 text-sm focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>

      {/* right */}
      <h1>Right</h1>
    </header>
  );
}
