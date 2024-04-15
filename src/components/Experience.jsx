"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
function Experience() {
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef);
  return (
    <section
      id="experience"
      className="max-w-[1150px] mx-auto  py-[100px] md:px-[40px] px-[10px] relative"
    >
      <div>
        {/* EXPERIENCE CONTAINER */}
        <div
          className="flex flex-col gap-12 justify-center pb-10"
          ref={experienceRef}
        >
          {/* EXPERIENCE TITLE */}

          {/* EXPERIENCE LIST */}
          <motion.div
            initial={{ x: "-300px" }}
            animate={isExperienceRefInView ? { x: "0" } : {}}
            transition={{ duration: 1 }}
            className=""
          >
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 ">
                {/* JOB TITLE */}
                <div className="bg-[#F1E4C3] p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Senior JavaScript Engineer
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">
                  I led web development, offering expertise in JavaScript
                  frameworks.{" "}
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-[#776B5D] text-sm font-semibold">
                  2024 - Present
                </div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded bg-[#F1E4C3] text-sm font-semibold w-fit">
                  Apple
                </div>
              </div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#776B5D] bg-[#F1E4C3] -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 "></div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 "></div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#776B5D] bg-[#F1E4C3] -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 ">
                {/* JOB TITLE */}
                <div className="bg-[#F1E4C3] p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Senior React Developer
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">
                  I spearheaded React-based application development, leveraging
                  advanced skills.{" "}
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-[#776B5D] text-sm font-semibold">
                  2019 - 2024{" "}
                </div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded bg-[#F1E4C3] text-sm font-semibold w-fit">
                  Microsoft
                </div>
              </div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 ">
                {/* JOB TITLE */}
                <div className="bg-[#F1E4C3] p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Freelancer{" "}
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">
                  I provided web solutions, applying a range of technologies to
                  address client requirements.{" "}
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-[#776B5D] text-sm font-semibold">
                  2010 - 2019{" "}
                </div>
              </div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#776B5D] bg-[#F1E4C3] -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 "></div>
            </div>
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 "></div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#776B5D] bg-[#F1E4C3] -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 ">
                {/* JOB TITLE */}
                <div className="bg-[#F1E4C3] p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Senior React Developer
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">
                  I spearheaded React-based application development, leveraging
                  advanced skills.{" "}
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-[#776B5D] text-sm font-semibold">
                  2019 - 2024{" "}
                </div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded bg-[#F1E4C3] text-sm font-semibold w-fit">
                  Microsoft
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
