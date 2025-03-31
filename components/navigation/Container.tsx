"use client";

import navlists from "../../data/navlists.json";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export default function NavigationWrapper() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <div className="relative flex justify-between xl:justify-around items-center w-full ">
        <ul
          className={`flex flex-col transition-all ease-out duration-700 justify-evenly md:justify-around lg:flex-row lg:!bg-transparent overflow-hidden md:gap-5 p-5 lg:justify-center lg:p-0 items-start lg:gap-10 xl:gap-14 max-w-5xl !left-0 bg-opacity-95 lg:bg-opacity-100 backdrop-blur-md lg:backdrop-blur-0  text-[#cbd5e1] lg:items-center lg:h-11 fixed lg:static z-50 top-0 w-full bg-black ${
            isOpen ? "h-screen inset-0" : " h-0 -top-[200%]! left-0 "
          } `}
        >
          {navlists.map((list) => (
            <li
              key={list.id}
              role="listitem"
              className="lg:text-xs group lg:hover:text-blue-600 lg:transition-all md:pl-8 ease duration-300 w-full lg:font-light text-left text-2xl font-semibold"
            >
              <Link
                key={list.name}
                as={list.path}
                prefetch={false}
                href={list.path}
                onClick={() => setisOpen(!isOpen)}
              >
                {list.name}
              </Link>
              <div className=" w-0 bg-gray-400 bg-opacity-40 group-hover:w-full transition-all ease-in-out duration-500 lg:hidden h-[1px] rounded-full "></div>
            </li>
          ))}
          <button
            name="close"
            title="close"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setisOpen(false);
            }}
            className="absolute top-5 right-5 lg:hidden"
          >
            <AiOutlineClose size={35} />
          </button>
        </ul>
      </div>
      <div className="inline-flex gap-5 md:gap-10">
        <button type="button" name="search" title="search">
          <AiOutlineSearch size={25} />
        </button>
        <button
          type="button"
          name="open menu"
          title="open menu"
          className="lg:hidden"
          onClick={(e) => {
            e.stopPropagation();
            setisOpen(!isOpen);
          }}
        >
          <HiOutlineMenuAlt4 size={25} />
        </button>
      </div>
    </>
  );
}
