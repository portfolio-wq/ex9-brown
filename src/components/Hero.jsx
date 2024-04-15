"use client";
import Image from "next/image";
import React from "react";
import hero from "../../public/hero.jpg";
import { ReactTyped } from "react-typed";
import { AnimatePresence, motion } from "framer-motion";
function Hero() {
  return (
    <section className="max-w-[1150px] mx-auto  py-[100px] md:px-[40px] px-[10px] relative">
      <AnimatePresence>
        <div className="flex justify-between flex-wrap gap-4 ">
          <motion.div
            initial={{ y: "-110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.25, ease: "easeInOut" }}
            className="flex flex-col gap-4 z-10 md:w-[70%]"
          >
            <h1 className="md:text-[5rem] text-[3rem] font-[700] w-fit ">
              Hello, I&apos;m <span className="text-[#F1E4C3]">ahmad</span>
            </h1>
            <span className=" text-[1.5rem] w-fit ">
              I&apos;am a{" "}
              <ReactTyped
                strings={["digital marketer", "SMMA owner"]}
                typeSpeed={40}
                backSpeed={50}
                loop
                className="font-bold text-[#F1E4C3] "
              />
            </span>

            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              assumenda reiciendis aliquam iste ad similique distinctio. Labore,
              repudiandae quaerat. Impedit ipsum nesciunt ipsa quae quos
              dignissimos sequi adipisci sapiente distinctio.
            </span>
            <a
              href="#contact"
              className="w-fit bg-[#776B5D] py-3 px-5 rounded-md font-semibold"
            >
              Contact me
            </a>
          </motion.div>{" "}
          <motion.div
            className="mx-auto"
            initial={{ x: "120%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.25, ease: "easeInOut" }}
          >
            <Image
              src={hero}
              alt=""
              width={300}
              height={300}
              className="rounded-md "
            />
          </motion.div>
        </div>
      </AnimatePresence>
    </section>
  );
}

export default Hero;
