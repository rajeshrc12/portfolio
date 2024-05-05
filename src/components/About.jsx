import React from "react";
import Avatar from "../images/Avatar.png";
const About = () => {
  return (
    <div className="bg-[#106EE8] h-full w-full rounded-lg p-10 sm:p-2 md:p-2 flex">
      <div className="p-5 hidden lg:block xl:block 2xl:block">
        <div
          style={{
            width: "25rem",
            backgroundImage: `url(${Avatar})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            boxShadow: "5px 5px 0px 1px rgba(0, 0, 0, 0.2)",
          }}
          className="rounded-lg border-2 border-black h-full w-full"
        ></div>
      </div>
      <div className="w-[70%] h-full flex flex-col lg:px-10 xl:px-10 2xl:px-10 sm:p-2 md:p-2 gap-5">
        <div className="font-extrabold text-[3rem] text-white">About me</div>
        <div className="font-bold text-2xl text-[#FFDD55]">
          ReactJS Developer
        </div>
        <div className="font-bold text-xl text-white">
          Hello ! Currently I am looking for new ReactJS Developer role.
          Passionate about coding and currently focusing on frontend
          development. Delving deep into React and JavaScript to expand my
          skills and create engaging user experiences.Excited to continue
          learning and exploring new technologies in the web development space!
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/142ORvKzTI9CJSnKzu1D1PIX0RvMDIEIo/view?usp=sharing"
            target="_blank"
          >
            <button
              className="font-bold text-xl text-white bg-black px-6 py-1 rounded-lg"
              style={{ boxShadow: "5px 5px 0px 1px #00C6AE" }}
            >
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
