"use client";
import React from "react";

function Separate({ name }) {
  return (
    <div className="flex items-center gap-2 max-w-[1150px] mx-auto md:px-[40px] px-[10px] ">
      <div className="h-[2px] bg-white w-full"></div>
      <div className="w-fit text-[2rem] font-bold">
        <span className=""> {name}</span>
        <span className="text-[#F1E4C3] ">.</span>
      </div>
      <div className="h-[2px] bg-white w-full"></div>
    </div>
  );
}

export default Separate;
