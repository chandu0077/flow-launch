"use client"; // This is a client component 👈🏽

import React from "react";

interface Props {
  inputSearch: Function;
}
const Navbar: React.FC<Props> = ({ inputSearch }) => {
  return (
    <div className="w-full p-[8px] shadow-md flex flex-col items-center lg:flex-row justify-between h-[auto]">
      <div>
        <p className="text-[32px] text-black font-semibold">Fake Store</p>
      </div>
      <div className="max-w-md">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            onChange={(e) => {
              inputSearch(e.target.value);
            }}
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search something.."
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
