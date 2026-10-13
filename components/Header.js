import React from "react";
import Image from "next/image";

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
      <nav>Search</nav>

      {/* right */}
      <h1>Header</h1>
    </header>
  );
}
