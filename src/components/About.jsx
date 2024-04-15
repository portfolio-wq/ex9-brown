"use client";
import React from "react";
import Reveal from "./animation/Reveal";

function About() {
  return (
    <section
      id="about"
      className="max-w-[1150px] mx-auto  md:py-[100px] md:px-[40px] px-[10px] relative"
    >
      {/* text image */}
      <div className="my-10">
        <div>
          <Reveal>
            <p className="text-2xl">
              Hey there! I&apos;m Ahmed, a digital marketing enthusiast with a
              knack for driving online growth. My journey in this dynamic field
              has been fueled by a blend of creativity and analytical thinking,
              allowing me to craft strategies that not only catch attention but
              also deliver tangible results.
            </p>
          </Reveal>
          <br />
        </div>
      </div>
      {/* aasdasd */}
      <div className="flex justify-between">
        <div>
          <div>
            <Reveal>
              <h2 className="text-2xl font-bold">Skills 🛠️</h2>
            </Reveal>

            <ul className="list-disc list-inside ">
              <Reveal>
                <li> Google Analytics</li>
              </Reveal>
              <Reveal>
                <li>Facebook Ads Manager</li>
              </Reveal>
              <Reveal>
                <li>Google AdWords</li>
              </Reveal>
            </ul>
            <br />
          </div>
          <div>
            <Reveal>
              <h2 className="text-2xl font-bold">Languages 🗣️</h2>
            </Reveal>

            <ul className="list-disc list-inside ">
              <Reveal>
                <li>Arabic</li>
              </Reveal>
              <Reveal>
                <li>Frensh</li>
              </Reveal>
              <Reveal>
                <li>English</li>
              </Reveal>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
