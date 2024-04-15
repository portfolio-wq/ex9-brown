"use client";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <section
      id="contact"
      className="max-w-[1150px] mx-auto pb-[10px] md:py-[100px] md:px-[40px] px-[10px] relative"
    >
      <motion.div
        initial={{ y: "20%" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center p-12"
      >
        <div className="mx-auto w-full max-w-[1150px]">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="mb-5">
              <label
                for="name"
                className="mb-3 block text-base font-medium text-[#776B5D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full rounded-md border border-[#e0e0e0] bg-[#F1E4C3] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#F1E4C3] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="email"
                className="mb-3 block text-base font-medium text-[#776B5D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full rounded-md border border-[#e0e0e0] bg-[#F1E4C3] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#F1E4C3] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="subject"
                className="mb-3 block text-base font-medium text-[#776B5D]"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="w-full rounded-md border border-[#e0e0e0] bg-[#F1E4C3] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#F1E4C3] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="message"
                className="mb-3 block text-base font-medium text-[#776B5D]"
              >
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-[#F1E4C3] py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#F1E4C3] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-[#776B5D] py-3 px-8 text-base font-semibold text-[#F1E4C3] outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
