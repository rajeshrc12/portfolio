import React from "react";
import { FaLinkedin, FaSquareGithub, FaXTwitter } from "react-icons/fa6";
import Avatar from "../images/Avatar.png";
const Home = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col justify-center items-center gap-3 w-[45%] max-[767px]:w-full">
        <div>
          <div className="font-extrabold text-[3rem] text-[#18191F]">
            Hello,
          </div>
          <div className="font-extrabold text-[3rem] text-[#18191F]">
            I'm Rajesh
          </div>
          <div className="text-[#474A57] font-bold text-xl py-2">
            ReactJS Developer
          </div>
          <div className="flex gap-5">
            <a
              href="https://drive.google.com/file/d/142ORvKzTI9CJSnKzu1D1PIX0RvMDIEIo/view?usp=sharing"
              target="_blank"
            >
              {" "}
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
      <div className="w-[45%] hidden md:flex lg:flex xl:flex 2xl:flex justify-center">
        <div
          style={{
            backgroundImage: `url(${Avatar})`,
            height: "70vh",
            width: "25rem",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            boxShadow: "9px 9px 0px 1px #000000",
          }}
          className="rounded-lg border-2 border-black"
        ></div>
      </div>
      <div className="hidden lg:flex xl:flex 2xl:flex w-[10%] flex-col justify-center items-end px-2">
        <div className="w-12 flex flex-col gap-2">
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
    </div>
  );
};

export default Home;
