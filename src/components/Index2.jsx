import React, { useRef } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Experience from "./Experience";
const Index2 = () => {
  const aboutRef = useRef();
  const projectRef = useRef();
  const experienceRef = useRef();
  return (
    <div className="flex flex-col w-[100%] box-border bg-[#FFDD55]">
      <div className="h-screen">
        <div className="h-[10%] flex justify-between items-center  p-5 rounded-b-xl">
          <div className="relative h-10 w-10">
            <div className="absolute top-0 left-0 z-10 bg-[#FFDD55] border border-black rounded-full h-10 w-10 flex justify-center items-center">
              <div className="font-extrabold text-3xl">R</div>
            </div>
            <div className="absolute top-1 left-1 z-0 bg-white border border-black rounded-full h-10 w-10 flex justify-center items-center"></div>
          </div>
          <div className="flex font-bold text-xl gap-10 max-[640px]:gap-5">
            <div
              className="cursor-pointer"
              onClick={() =>
                aboutRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                })
              }
            >
              About
            </div>
            <div
              className="cursor-pointer"
              onClick={() =>
                projectRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                })
              }
            >
              Project
            </div>
            <div
              className="cursor-pointer"
              onClick={() =>
                experienceRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                })
              }
            >
              Experience
            </div>
          </div>
        </div>
        <div className="h-[90%] flex items-center">
          <Home />
        </div>
      </div>
      <div
        ref={aboutRef}
        className="2xl:h-screen xl:h-screen p-5 lg:p-10 xl:p-10 2xl:p-10"
      >
        <About />
      </div>
      <div ref={projectRef} className="2xl:h-screen xl:h-screen bg-[#EB7711]">
        <Project />
      </div>
      <div
        ref={experienceRef}
        className="2xl:h-screen xl:h-screen bg-[#EB7711]"
      >
        <Experience />
      </div>
      <div className="w-full flex justify-center p-14">
        <div className="flex items-center gap-10">
          <div className="relative h-10 w-10">
            <div className="absolute top-0 left-0 z-10 bg-[#FFDD55] border border-black rounded-full h-10 w-10 flex justify-center items-center">
              <div className="font-extrabold text-3xl">R</div>
            </div>
            <div className="absolute top-1 left-1 z-0 bg-white border border-black rounded-full h-10 w-10 flex justify-center items-center"></div>
          </div>
          <div className="font-extrabold text-[3rem] text-[#18191F]">
            Rajesh Charhajari
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="font-extrabold text-2xl text-[#18191F] p-10">
          Let's Connect and build something
        </div>
      </div>
      <div className="w-full flex justify-center p-10">
        <div className="flex gap-2">
          <div className="bg-white rounded-lg p-2">
            <a href="https://twitter.com/RajeshWebDev" target="_blank">
              <FaXTwitter size={30} />
            </a>
          </div>
          <div className="bg-white rounded-lg p-2">
            <a
              href="https://www.linkedin.com/in/rajeshcharhajari/"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
          <div className="bg-white rounded-lg p-2">
            <a href="https://github.com/rajeshrc12" target="_blank">
              <FaSquareGithub size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center p-5">
        <div className="flex gap-2 items-center">
          <FaLocationDot size={30} color="#18191F" />
          <div className="font-extrabold text-2xl text-[#18191F]">
            Solapur, Maharashtra, India
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index2;
