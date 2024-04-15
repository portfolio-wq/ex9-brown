"use client";
import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { MdMailOutline, MdWorkOutline } from "react-icons/md";

function Bottombare() {
  const links = [
    { name: "About", link: "#about", icon: <IoPersonOutline /> },
    { name: "Project", link: "#project", icon: <FaProjectDiagram /> },
    { name: "Exp.", link: "#experience", icon: <MdWorkOutline /> },
    { name: "Contact", link: "#contact", icon: <MdMailOutline /> },
  ];
  return (
    <nav className="fixed bottom-[15px]  w-full md:hidden">
      <div className="">
        <div className="bg-[#776B5D] backdrop-blur-sm rounded-full overflow-hidden flex  gap-5 w-[300px] items-center justify-center  p-[5px] mx-auto  ">
          {" "}
          {links.map((link, i) => (
            <a
              key={i}
              href={link.link}
              className=" text-white  shrink-0 flex items-center justify-center  p-[5px]  hover:bg-[#B0A695] h-fit rounded-full text-xl transition-all"
              // style={{ writingMode: "vertical-lr" }}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Bottombare;
