"use client";
import Image from "next/image";
import React from "react";
import image from "../../public/example-project.jpg";
import Reveal from "./animation/Reveal";
function Projects() {
  const project = [
    {
      id: 0,
      name: "Project name",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      image: image,
      desc: [
        `The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku.`,
        `Because this isn't real, here's some gibberish to fill space :)`,
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt.`,
        `Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.`,
      ],
    },
    {
      id: 1,
      name: "Project name",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      image: image,
      desc: [
        `The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku.`,
        `Because this isn't real, here's some gibberish to fill space :)`,
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt.`,
        `Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.`,
      ],
    },
    {
      id: 2,
      name: "Project name",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      image: image,
      desc: [
        `The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku.`,
        `Because this isn't real, here's some gibberish to fill space :)`,
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt.`,
        `Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.`,
      ],
    },
  ];
  return (
    <section
      id="project"
      className="max-w-[1150px] mx-auto  py-[100px] md:px-[40px] px-[10px] relative"
    >
      <div className="flex flex-col gap-4">
        {project.map((pro, i) => (
          <div
            key={i}
            className="flex md:justify-between justify-center gap-4 flex-wrap md:flex-nowrap "
          >
            <Image
              src={pro.image}
              alt=""
              width={400}
              height={400}
              className="rounded-md"
            />

            <div className="">
              <Reveal>
                <h1 className="text-3xl font-[700]">{pro.name}</h1>
              </Reveal>
              <Reveal>
                <p className="">{pro.desc[2]}</p>
              </Reveal>

              <br />
              <Reveal>
                <p className="">{pro.desc[3]}</p>
              </Reveal>

              <br />
              <div className="flex flex-col">
                <span className="text-2xl text-[#F1E4C3] mb-2 ">
                  What i use
                </span>
                <div className="flex flex-wrap gap-4">
                  {pro.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-[#776B5D] py-1  px-3 rounded-full"
                    >
                      <Reveal>{tool}</Reveal>
                    </span>
                  ))}
                </div>
                <a
                  href=""
                  className="py-2  mt-5 mb-5 underline text-[#776B5D] w-fit"
                >
                  Project Links
                </a>
              </div>
              <div className="h-[1px] w-full bg-white"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
