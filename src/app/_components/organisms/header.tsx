"use client";
import React from "react";
import { IoIosLocate, IoIosPin, IoIosSearch } from "react-icons/io";
import Logo from "../atom/logo";
import { IoSearchOutline, IoPinOutline } from "react-icons/io5";
import {
  FaChevronDown,
  FaMapPin,
  FaPlus,
  FaQuestionCircle,
  FaRegQuestionCircle,
  FaRegUserCircle,
  FaUserCircle,
} from "react-icons/fa";
import Navlink from "../atom/navlink";
import { PopularServicesData, aboutData } from "@/app/utils/data";

const Header = () => {
  return (
    <div className="flex flex-col">
      <header className=" px-[2em] md:container  flex items-center justify-between py-4">
        <div className="flex items-center space-x-2 text-white">
          <Logo />
          <span className="font-bold text-xl">Loggworks</span>
        </div>

        <div className=" hidden md:flex items-center border-2 border-slate-300/20 rounded overflow-hidden p-[20px] h-[48px]">
          <input
            className="p-2 text-sm text-gray-700"
            type="text"
            placeholder="Electrician"
          />

          <div className="flex items-center border-l border-slate-400/20 h-auto">
            <div className="p-2">
              <IoIosPin />
            </div>
            <input
              className="px-2 text-sm text-gray-700 outline-none"
              type="text"
              placeholder="Town/postcode"
            />
            <button className="px-2 text-gray-700">
              <IoIosSearch size="1.5em" />
            </button>
          </div>
        </div>

        <div className=" hidden md:flex space-x-4 text-black/70 font-semibold">
          <a href="#" className="hover:text-black relative">
            Professional
          </a>
          <a href="#" className=" hover:text-black">
            Consumer
          </a>
        </div>
      </header>
      <div
        className="container md:flex justify-between 
        items-center border
          hidden 
         border-slate-400/20 h-[64px]"
      >
        <nav className="flex items-center gap-[56px] ">
          <Navlink href="#" label="Home" isActive />
          <Navlink href="#" label="How it works" />
          <Navlink
            href="#"
            label="Services"
            isDropdown
            dropDownItems={PopularServicesData.map((_) => ({
              label: _.title,
              url: "#" + _.title,
            }))}
          />
          <Navlink
            href="#"
            label="Resources"
            isDropdown
            dropDownItems={aboutData.map((_) => ({
              label: _.title,
              url: "#" + _.title,
            }))}
          />
        </nav>

        <div className="flex gap-7">
          <div className="flex flex-col gap-1 items-center">
            <FaRegQuestionCircle className="opacity" />
            <span className="text-xs font-bold">Help</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <FaRegUserCircle />
            <span className="text-xs font-bold">Account</span>
          </div>

          <button className="flex p-2 px-4 gap-2 text-sm rounded text-white items-center justify-center bg-accent">
            <FaPlus />
            Post a job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
