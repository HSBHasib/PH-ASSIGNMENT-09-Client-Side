"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
    const router = useRouter()
  const [search, setSearch] = useState();
  const searchParams = useSearchParams();

  const handleSearchFunc = () => {
    const params = new URLSearchParams(searchParams.toString());

    if(search) {
        params.set("search", search);
    } else {
        params.delete("search");
    }

    router.push(`/all-appointments?${params.toString()}`)
  }

  return (
    <div className="flex items-center justify-between bg-white border my-5 border-slate-200/80 pl-4 rounded-xl overflow-hidden  w-full max-w-xl ">
      <div className="flex items-center gap-1 flex-1">
        <FiSearch size={22} className="text-[#404750]" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search by doctor name or speciality..."
          className="w-full bg-transparent py-3.5 text-sm text-[#404750] placeholder-slate-400 focus:outline-none"
        />
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearchFunc}
        type="button"
        className="bg-[#1e73be] hover:bg-[#165a94] text-white text-sm font-semibold px-4 py-4 rounded-r-xl rounded-l-none transition-all duration-300 active:scale-95 shadow-sm"
      >
        Search Here
      </button>
    </div>
  );
};

export default SearchBar;
