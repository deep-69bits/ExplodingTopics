"use client";
import React, { useState } from "react";
import { LOGO } from "../SVGS";

const Header = () => {
  const [drop, setDrop] = useState(false);
  return (
    <div className="w-full z-50 lg:max-w-7xl lg:py-8 py-5 lg:px-0   mx-auto">
      <div className="flex  z-50 justify-between items-center">
        <div className="lg:scale-100  scale-90">
          <LOGO />
        </div>
        <div className="lg:flex hidden gap-x-14 items-center">
          <li className="list-none font-semibold cursor-pointer text-[#595D73] text-sm hover:text-black">
            About
          </li>
          <li className="list-none font-semibold cursor-pointer text-[#595D73] text-sm hover:text-black">
            Newsletter
          </li>
          <li className="list-none font-semibold cursor-pointer text-[#595D73] text-sm hover:text-black">
            Blog
          </li>
          <li className="list-none font-semibold cursor-pointer text-[#595D73] text-sm hover:text-black">
            <button className="bg-[#3176E8] text-white text-xs px-2 rounded-sm py-1">
              PRO
            </button>
          </li>
        </div>
        <div className="flex lg:hidden px-4 gap-x-4 items-center">
          <li className="list-none font-semibold cursor-pointer text-[#595D73] text-sm hover:text-black">
            {!drop ? (
              <svg
                className="w-6 h-6"
                fill="#000000"
                viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setDrop(!drop);
                }}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M1920 1468.412v112.94H0v-112.94h1920Zm0-564.706v112.941H0V903.706h1920ZM1920 339v112.941H0V339h1920Z"
                    fillRule="evenodd"
                  ></path>{" "}
                </g>
              </svg>
            ) : (
              <svg
                onClick={() => {
                  setDrop(!drop);
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            )}
          </li>
          <li className="list-none font-semibold cursor-pointer text-[#595D73] text-sm hover:text-black">
            <button className="bg-[#3176E8] text-white text-xs px-2 rounded-sm py-1">
              PRO
            </button>
          </li>
        </div>
      </div>
      {drop ? (
        <div className="pt-3 absolute w-screen bg-[#F5FAFF] mt-5  px-5">
          <div className="cursor-pointer">
            <div className="   py-2 flex items-center justify-between">
              <span className="font-semibold cursor-pointer text-[#595D73] text-base hover:text-black">
                About
              </span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-[#595D73]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            <hr className="my-2 text-[#e1ebfa] bg-[#e1ebfa] h-[1px] border-[#e1ebfa]" />
          </div>

          <div className="cursor-pointer">
            <div className="   py-2 flex items-center justify-between">
              <span className="font-semibold cursor-pointer text-[#595D73] text-base hover:text-black">
                Newsletter
              </span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-[#595D73]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            <hr className="my-2 text-[#e1ebfa] bg-[#e1ebfa] h-[1px] border-[#e1ebfa]" />
          </div>

          <div className="cursor-pointer">
            <div className="   py-2 flex items-center justify-between">
              <span className="font-semibold cursor-pointer text-[#595D73] text-base hover:text-black">
                Blog
              </span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-[#595D73]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
