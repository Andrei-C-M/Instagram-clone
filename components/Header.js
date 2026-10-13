import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { HomeIcon} from "@heroicons/react/24/solid"

export default function Header() {
  return (
    // changed z-index to 30 so it is always on top
    <header className="sticky top-0 z-30 flex items-center justify-between cursor-pointer p-4 bg-white border-b-2 border-gray-300 shadow-sm xl:mx-auto">
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
          className="rounded-md border border-gray-400 bg-gray-50 py-2 pl-10 pr-3 focus:border-2 text-sm focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>

      {/* right */}
      <div className="flex space-x-4 items-center">
        <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"/>
        <PlusCircleIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"/>
        <Image
            className="w-10 h-auto rounded-full cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
            src="/images/avatar.jpg"
            alt="Profile photo"
            width={ 100 }
            height={ 100 }
        />
      </div>
    </header>
  );
}
