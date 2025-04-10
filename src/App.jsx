import React, { useRef } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import Banner from "./images/Banner.jpg";
import Banner1 from "./images/Banner1.jpg";
import Tinyclips from "./images/Tinyclips.png";
import { FaLinkedin, FaLocationDot, FaSquareGithub, FaXTwitter } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { RiNextjsFill } from "react-icons/ri";
const App = () => {
  const skills = [
    { icon: <IoLogoJavascript size={50} />, text: "Javascript" },
    { icon: <FaReact size={50} />, text: "ReactJS" },
    { icon: <RiNextjsFill size={50} />, text: "NextJS" },
    { icon: <SiTypescript size={50} />, text: "TypeScript" },
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
          <a href="https://pub-6f38cb291c774862bfef08b6b3a9e2eb.r2.dev/rajesh_charhajari_resume.pdf" target="_blank">
            <div className="flex items-center bg-black px-3 py-2 gap-1 rounded">
              <div>
                <button className="font-bold text-white bg-black">Resume</button>
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
              <div className="md:flex md:flex-col md:gap-4">
                <div className="flex flex-col gap-3 xl:flex-row 2xl:flex-row">
                  <div className="text-[2rem] md:text-[3rem]">Hello I'am</div>
                  <div className="text-[2rem] font-extrabold md:text-[3rem]">Rajesh Charhajari</div>
                </div>
                <div className="flex">
                  <div className="text-[2rem] font-extrabold md:text-[3rem]">Full Stack Developer</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-[2rem] md:text-[3rem]">Based In </div>
                  <div className="text-[2rem] md:text-[3rem] font-extrabold">India </div>
                </div>
              </div>
              <div className="flex gap-5">
                <a href="https://twitter.com/RajeshWebDev" target="_blank">
                  <div className="hover:scale-125 transition-all border-2 border-black rounded-lg p-3">
                    <FaXTwitter size={20} />
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/rajeshcharhajari/" target="_blank">
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
      <div ref={skillRef} className="h-full xl:h-screen 2xl:h-screen w-full p-10">
        <div className="h-[15%] flex justify-center items-center">
          <div className="flex gap-3 pb-10">
            <div className="text-4xl md:text-[3rem]">My</div>
            <div className="text-4xl font-extrabold md:text-[3rem]">Skills</div>
          </div>
        </div>
        <div className="h-[80%] gap-10 grid place-items-center grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 items-center">
          {skills.map((skill) => (
            <div key={skill.text} className="py-7 xl:p-0 2xl:p-0 transition-all hover:scale-125 border-2 rounded border-black h-full w-full flex justify-center items-center flex-col gap-5">
              <div>{skill.icon}</div>
              <div className="font-bold">{skill.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div ref={experienceRef} className="min-h-screen w-full p-10 bg-black text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-white">My </span>
            <span className="text-primary">Experience</span>
          </h2>
        </div>

        <div className="relative border-l-2 border-gray-700 pl-6 space-y-10">
          {/* Experience Card */}
          {[
            {
              company: "HashedIn By Deloitte",
              role: "Software Engineer",
              period: "07/2024 – 11/2024, Pune-IND",
              logo: "https://media.licdn.com/dms/image/v2/C560BAQE-cwaObx8Iag/company-logo_200_200/company-logo_200_200/0/1630649720006/hashedin_logo?e=1749686400&v=beta&t=WigGk88NkrIly1NfPFVn-scMk-jmPvFtDc1YLkl2WiQ",
            },
            {
              company: "Rethink Ledgers",
              role: "Software Analyst",
              period: "11/2022 – 03/2024, Pune-IND",
              logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHP5vi3l1hhGQ/company-logo_200_200/company-logo_200_200/0/1630649440191/rethink_ledgers_logo?e=1749686400&v=beta&t=iz2AGzTN62jt3_aLlo9hNANHfANXo5n0yhoZlWpMdpM",
            },
            {
              company: "Allianz Technology",
              role: "Trainee Software Engineer",
              period: "02/2022 – 07/2022, Pune-IND",
              logo: "https://media.licdn.com/dms/image/C4E0BAQEL8T8rxb8Zfw/company-logo_200_200/0/1654594094126/allianz_technology_logo?e=2147483647&v=beta&t=InwUGSlW-E2-gUAv027dkhZ6uKcZ5x0tKMxG3AZfCIo",
            },
          ].map((exp, idx) => (
            <div key={idx} className="group relative border border-gray-600 bg-zinc-900 hover:bg-zinc-800 transition-all rounded-xl p-6 shadow-md">
              <div className="absolute -left-[31px] top-6 w-4 h-4 rounded-full bg-primary border-4 border-black group-hover:scale-110 transition-transform"></div>
              <div className="flex flex-col md:flex-row md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <img src={exp.logo} alt={exp.company} className="w-10 h-10 rounded" />
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-sm text-gray-300">{exp.company}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-400">{exp.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={aboutRef} className="h-full xl:h-screen 2xl:h-screen w-full p-10 grid grid-cols-2 max-[767px]:grid-cols-1">
        <div className="p-1 flex justify-center">
          <img src={Banner1} alt="" />
        </div>
        <div className="flex flex-col gap-5  md:p-3">
          <div className="flex gap-3">
            <div className="text-4xl md:text-[3rem]">About</div>
            <div className="text-4xl font-extrabold md:text-[3rem]">Me</div>
          </div>
          <div className="text-xl">
            Experienced Full Stack Developer with a strong background in NextJS and NodeJS API development. Proficient in creating Fast and Scalable content management systems. Experienced in
            developing Real-time communication web applications such as chat apps and video calling functionalities. Skilled in implementing Payment integration using Stripe. Proficient in Chart
            development using Elasticsearch and MongoDB Charts. Experienced in implementing Authentication modules using third-party libraries. Knowledgeable in AWS deployment.
          </div>
          <div></div>
        </div>
      </div>
      <div className="bg-black text-white py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-white">My </span>
            <span className="text-primary">Project</span>
          </h2>
        </div>

        <div ref={projectRef} className="w-full px-6 md:px-16 grid md:grid-cols-2 grid-cols-1 gap-12 items-center">
          {/* Project Image */}
          <div
            className="rounded-3xl w-full h-[20rem] md:h-[30rem] shadow-lg transition-transform hover:scale-[1.02]"
            style={{
              backgroundImage: `url(${Tinyclips})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />

          {/* Project Description */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl md:text-3xl font-bold">AI Short Video Generation App</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base">
              <li>✍️ Paste your script to get started.</li>
              <li>🎨 Choose from various image styles.</li>
              <li>🎙️ Pick voiceover and speed settings.</li>
              <li>🎞️ AI generates the complete video with subtitles.</li>
              <li>⚙️ Built with Next.js, Tailwind CSS, and ShadCN.</li>
              <li>🧪 Backend powered by FastAPI and Prisma.</li>
              <li>🔐 Google OAuth via Auth.js for authentication.</li>
              <li>💸 Payments through Razorpay (UPI & cards).</li>
              <li>🚀 Deployed on Google Cloud Run.</li>
            </ul>

            {/* CTA Links */}
            <div className="flex gap-6 pt-4 text-white font-semibold text-sm md:text-base">
              <a href="https://tinyclips.space/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <span>Live</span>
                <LuExternalLink />
              </a>
              <a href="https://github.com/rajeshrc12/tinyclips" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <span>Code & demo</span>
                <LuExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center p-5">
        <div className="flex gap-2 items-center">
          <FaLocationDot size={30} color="#18191F" />
          <div className="font-extrabold text-2xl text-[#18191F]">Solapur, Maharashtra, India</div>
        </div>
      </div>
    </div>
  );
};

export default App;
