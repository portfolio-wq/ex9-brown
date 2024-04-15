"use client";
import React from "react";
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
function TopBare() {
  return (
    <header className="p-5  sticky top-0 z-20 backdrop-blur-sm flex  justify-between items-center ">
      <div className="flex gap-3  text-xl  text-gray-500 transition-all">
        <span className=" hover:text-[#F3EEEA] cursor-pointer transition-all ">
          <FaGithub />
        </span>
        <span className=" hover:text-[#F3EEEA] cursor-pointer transition-all">
          <FaLinkedin />
        </span>
        <span className=" hover:text-[#F3EEEA] cursor-pointer transition-all">
          <FaInstagram />
        </span>
        {/* <span className=" hover:text-[#F3EEEA] cursor-pointer transition-all">
          <FaPinterest />
        </span> */}
      </div>
      <button className=" py-[3px] px-[4px] border-b border-[#F3EEEA]">
        My Resume
      </button>
    </header>
  );
}

export default TopBare;
