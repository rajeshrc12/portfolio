import React, { useRef } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import Banner from "../images/Banner.jpg";
import Banner1 from "../images/Banner1.jpg";
import Avatar from "../images/Avatar.png";
import {
  FaLinkedin,
  FaLocationDot,
  FaSquareGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
const Index1 = () => {
  const skills = [
    { icon: <FaHtml5 size={50} />, text: "HTML" },
    { icon: <IoLogoCss3 size={50} />, text: "CSS" },
    { icon: <IoLogoJavascript size={50} />, text: "Javascript" },
    { icon: <FaReact size={50} />, text: "React" },
    { icon: <SiExpress size={50} />, text: "ExpressJS" },
    { icon: <FaGitAlt size={50} />, text: "Git" },
    { icon: <TbBrandSocketIo size={50} />, text: "SocketIo" },
    { icon: <RiTailwindCssFill size={50} />, text: "TailwindCSS" },
    { icon: <TbBrandRedux size={50} />, text: "Redux" },
    { icon: <SiMongodb size={50} />, text: "MongoDB" },
    { icon: <FaAws size={50} />, text: "AWS" },
    { icon: <FaNodeJs size={50} />, text: "NodeJS" },
  ];
  const skillRef = useRef();
  const experienceRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();
  return (
    <div className="flex flex-col w-full">
      <div className="h-screen w-full px-10">
        <div className="h-[10%] flex justify-between items-center">
          <div className="relative h-10 w-10">
            <div className="absolute top-0 left-0 z-10 bg-white border border-black rounded-full h-10 w-10 flex justify-center items-center">
              <div className="font-extrabold text-3xl">R</div>
            </div>
            <div className="absolute top-1 left-1 z-0 bg-white border border-black rounded-full h-10 w-10 flex justify-center items-center"></div>
          </div>
          <div className="flex gap-5 max-[640px]:hidden">
            <div
              className="cursor-pointer font-bold"
              onClick={() =>
                skillRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                })
              }
            >
              Skills
            </div>
            <div
              className="cursor-pointer font-bold"
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
            <div
              className="cursor-pointer font-bold"
              onClick={() =>
                aboutRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                })
              }
            >
              About Me
            </div>
            <div
              className="cursor-pointer font-bold"
              onClick={() =>
                projectRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                })
              }
            >
              Projects
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1-naJh0WbFEH1QKjlrrVNJJG2MyjypTof/view?usp=sharing"
            target="_blank"
          >
            <div className="flex items-center bg-black px-3 py-2 gap-1 rounded">
              <div>
                <button className="font-bold text-white bg-black">
                  Resume
                </button>
              </div>
              <div>
                <MdOutlineFileDownload color="white" />
              </div>
            </div>
          </a>
        </div>
        <div className="h-[90%] flex items-center relative">
          <div className="w-full h-full relative">
            <div className="z-10 absolute h-full top-0 left-0 w-full xl:w-[60%] 2xl:w-[60%] flex flex-col justify-around">
              <div></div>
              <div>
                <div className="flex flex-col gap-3 xl:flex-row 2xl:flex-row">
                  <div className="text-[3rem]">Hello I'am</div>
                  <div className="font-extrabold text-[3rem]">
                    Rajesh Charhajari
                  </div>
                </div>
                <div className="flex">
                  <div className="font-extrabold text-[3rem]">
                    ReactJS Developer
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-[3rem]">Based In </div>
                  <div className="text-[3rem] font-extrabold">India </div>
                </div>
              </div>
              <div className="flex gap-5">
                <a href="https://twitter.com/RajeshWebDev" target="_blank">
                  <div className="hover:scale-125 transition-all border-2 border-black rounded-lg p-3">
                    <FaXTwitter size={20} />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/rajeshcharhajari/"
                  target="_blank"
                >
                  <div className="hover:scale-125 transition-all border-2 border-black rounded-lg p-3">
                    <FaLinkedin size={20} />
                  </div>
                </a>
                <a href="https://github.com/rajeshrc12" target="_blank">
                  <div className="hover:scale-125 transition-all border-2 border-black rounded-lg p-3">
                    <FaSquareGithub size={20} />
                  </div>
                </a>
              </div>
            </div>
            <div className="z-0 hidden h-full absolute top-0 right-0 w-[60%] md:flex xl:flex 2xl:flex  py-14">
              <img src={Banner} className="h-full" />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={skillRef}
        className="h-full xl:h-screen 2xl:h-screen w-full p-10"
      >
        <div className="h-[15%] flex justify-center items-center">
          <div className="flex gap-3">
            <div className="text-[3rem]">My</div>
            <div className="font-extrabold text-[3rem]">Skills</div>
          </div>
        </div>
        <div className="h-[80%] gap-10 grid place-items-center grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 items-center">
          {skills.map((skill) => (
            <div
              key={skill.text}
              className="py-7 xl:p-0 2xl:p-0 transition-all hover:scale-125 border-2 rounded border-black h-full w-full flex justify-center items-center flex-col gap-5"
            >
              <div>{skill.icon}</div>
              <div className="font-bold">{skill.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div
        ref={experienceRef}
        className="h-full xl:h-screen 2xl:h-screen w-full p-10 bg-black text-white"
      >
        <div className="h-[15%] flex justify-center items-center">
          <div className="flex gap-3">
            <div className="text-[3rem]">My</div>
            <div className="font-extrabold text-[3rem]">Exerience</div>
          </div>
        </div>
        <div className="h-[85%] flex flex-col justify-around gap-5">
          <div className="h-[50%] transition-all hover:bg-[#27272a] hover:border-0 border border-gray-500 rounded-lg p-5 flex flex-col gap-3 text-md">
            <div className="flex justify-between max-[640px]:flex-col">
              <div className="font-bold text-xl flex gap-3 max-[640px]:flex-col">
                <div>
                  <img
                    className="rounded"
                    src="https://media.licdn.com/dms/image/C4E0BAQHP5vi3l1hhGQ/company-logo_200_200/0/1630649440191/rethink_ledgers_logo?e=1723075200&v=beta&t=N2VFHJju-lEkhIDJc0L4kXTjCp-EaMVwP_ZBGUjCI10"
                    height={30}
                    width={30}
                  />
                </div>
                <div>ReactJS Developer at Rethink Ledgers</div>
              </div>
              <div>11/2022 – 03/2024, Pune-IND</div>
            </div>
            <div className="text-gray-300">
              In my role as a ReactJS developer, I’ve handled various tasks such
              as form handling, Redux-based state management, and file
              operations, including fetching, storing, and presenting files in a
              File Viewer • For TYDEI Health (https://tydei.io/), I developed a
              comprehensive dashboard featuring a payment module, allowing users
              to monitor rebate amounts and payment history through intuitive
              card and table displays.Furthermore, I’ve worked with MongoDB
              charts and created various aggregation pipelines for different
              charts. I’ve also employed the ”@mongodb-js/charts- embed-dom”
              library to create interactive graphs. Clicking on a graph value
              triggers the rendering of other graphs and charts.
            </div>
          </div>
          <div className="h-[50%] transition-all hover:bg-[#27272a] hover:border-0 border border-gray-500 rounded-lg p-5 flex flex-col gap-3 text-md">
            <div className="flex justify-between max-[640px]:flex-col">
              <div className="font-bold text-xl flex gap-3  max-[640px]:flex-col">
                <div>
                  <img
                    className="rounded"
                    src="https://media.licdn.com/dms/image/C4E0BAQEL8T8rxb8Zfw/company-logo_200_200/0/1654594094126/allianz_technology_logo?e=2147483647&v=beta&t=InwUGSlW-E2-gUAv027dkhZ6uKcZ5x0tKMxG3AZfCIo"
                    height={30}
                    width={30}
                  />
                </div>
                <div>Thunderhead developer at Allianz Technology</div>
              </div>
              <div>02/2022 - 07/2022 , Pune-IND</div>
            </div>
            <div className="text-gray-300">
              I was working on thunderhead tool which is used for creating
              documents in which I used javascript for data handling and XML for
              structuring layout.
            </div>
          </div>
        </div>
      </div>
      <div
        ref={aboutRef}
        className="h-full xl:h-screen 2xl:h-screen w-full p-10 grid grid-cols-2 max-[640px]:grid-cols-1"
      >
        <div className="p-1 flex justify-center">
          <img src={Banner1} alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-3">
            <div className="text-[3rem]">About</div>
            <div className="font-extrabold text-[3rem]">Me</div>
          </div>
          <div>
            Hello ! Currently I am looking for new ReactJS Developer role.
            Passionate about coding and currently focusing on frontend
            development. Delving deep into React and JavaScript to expand my
            skills and create engaging user experiences.Excited to continue
            learning and exploring new technologies in the web development
            space!
          </div>
          <div></div>
        </div>
      </div>
      <div className="bg-black text-white">
        <div ref={projectRef} className="flex justify-center items-center">
          <div className="flex gap-3">
            <div className="text-[3rem]">My</div>
            <div className="font-extrabold text-[3rem]">Projects</div>
          </div>
        </div>
        <div
          ref={projectRef}
          className="w-full p-10 grid md:grid-cols-2 grid-cols-1 gap-10"
        >
          <div
            className="flex items-center rounded-2xl md:h-full h-[20rem]"
            style={{
              backgroundImage: `url("https://i.insider.com/5f57ecd6e6ff30001d4e79d0?width=700")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="flex flex-col justify-center">
            <div className="font-extrabold text-[3rem]">01</div>
            <div className="font-extrabold text-3xl">WhatsApp Clone</div>
            <div className="text-gray-300">
              <div>
                * Frontend: React, TailwindCSS + DaisyUI, Google OAuth, Redux
                Toolkit, React Router, React Icons, SocketIO
              </div>
              <div>* Backend: ExpressJS, Mongoose, Multer, SocketIO</div>
              <div>
                Implemented Google Authentication for secure login Developed a
                contact search feature for easy navigation. Enabled messaging
                and media sharing functionality Implemented multiple file
                selection and preview options. Implemented warnings for file
                quantity and size limits Integrated media preview and download
                functionalities. Implemented status indicators for online and
                offline users Implemented features to show unseen message counts
                and mark messages as read upon contact selection.
              </div>
              <div className="text-white font-bold flex flex-col">
                <div className="flex gap-5">
                  {" "}
                  <a
                    href="https://main.daz37dbxioals.amplifyapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-2">
                      <div>Live</div>
                      <div>
                        <LuExternalLink />
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://github.com/rajeshrc12/whatsapp-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-2">
                      <div>Code</div>
                      <div>
                        <LuExternalLink />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-10 grid grid-cols-2 max-[640px]:grid-cols-1 gap-10">
          <div
            className=" items-center rounded-2xl hidden max-[640px]:flex max-[640px]:h-[20rem]"
            style={{
              backgroundImage: `url(${Avatar})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="flex flex-col">
            <div className="font-extrabold text-[3rem]">02</div>
            <div className="font-extrabold text-3xl">Portfolio</div>
            <div className="text-gray-300 flex flex-col">
              <div>Simple, nice and clean portfolio website</div>
            </div>
            <div className="text-white font-bold flex flex-col">
              <div className="flex gap-5">
                {" "}
                <a
                  href="https://rajeshrc12.github.io/portfolio/new"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2">
                    <div>Live</div>
                    <div>
                      <LuExternalLink />
                    </div>
                  </div>
                </a>
                <a
                  href="https://github.com/rajeshrc12/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2">
                    <div>Code</div>
                    <div>
                      <LuExternalLink />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="flex items-center rounded-2xl max-[640px]:hidden h-[50vh]"
            style={{
              backgroundImage: `url(${Avatar})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
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

export default Index1;
