"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoPersonOutline } from "react-icons/io5";
import { FaProjectDiagram } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";

function Sidebare() {
  const links = [
    { name: "About", link: "#about", icon: <IoPersonOutline /> },
    { name: "Project", link: "#project", icon: <FaProjectDiagram /> },
    { name: "Exp.", link: "#experience", icon: <MdWorkOutline /> },
    { name: "Contact", link: "#contact", icon: <MdMailOutline /> },
  ];
  return (
    <nav className="bg-transparent h-screen  text-black top-0 left-[10px] sticky md:flex flex-col items-center overflow-y-scroll w-fit gap-2 justify-center hidden ">
      {/* <a href="#hero">
        <span className="bg-[#111111] p-3 rounded-md text-white font-[1000] text-md mt-5 w-[45px] h-[45px] flex justify-center items-center">
          B
          <span className="text-[#0aff9d] w-fit h-fit font-[1000] text-md">
            .
          </span>
        </span>
      </a> */}
      <div className="bg-[#776B5D] rounded-full overflow-hidden flex flex-col gap-5 h-[300px] items-center justify-center  p-[5px] ">
        {" "}
        {links.map((link, i) => (
          <motion.a
            key={i}
            href={link.link}
            className=" text-white  shrink-0 flex items-center justify-center  p-[5px]  hover:bg-[#B0A695] h-fit rounded-full text-xl transition-all"
            // style={{ writingMode: "vertical-lr" }}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </nav>
  );
}

export default Sidebare;
