import React, { useRef } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import Banner from "./images/Banner.jpg";
import Banner1 from "./images/Banner1.jpg";
import MeetSphereBanner from "./images/meetphere-banner.png";
import LearnSphereBanner from "./images/learnsphere-banner.png";
import WhatsAppCloneBanner from "./images/whatsapp-clone-banner.png";
import AIChatBotBanner from "./images/ai-chat-bot-banner.png";
import {
  FaLinkedin,
  FaLocationDot,
  FaSquareGithub,
  FaXTwitter,
} from "react-icons/fa6";
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
          <a
            href="https://drive.google.com/file/d/180ANhJhml5Ab4VQcORiZukyWhWYB9dVe/view?usp=sharing"
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
              <div className="md:flex md:flex-col md:gap-4">
                <div className="flex flex-col gap-3 xl:flex-row 2xl:flex-row">
                  <div className="text-[2rem] md:text-[3rem]">Hello I'am</div>
                  <div className="text-[2rem] font-extrabold md:text-[3rem]">
                    Rajesh Charhajari
                  </div>
                </div>
                <div className="flex">
                  <div className="text-[2rem] font-extrabold md:text-[3rem]">
                    Full Stack Developer
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-[2rem] md:text-[3rem]">Based In </div>
                  <div className="text-[2rem] md:text-[3rem] font-extrabold">
                    India{" "}
                  </div>
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
          <div className="flex gap-3 pb-10">
            <div className="text-4xl md:text-[3rem]">My</div>
            <div className="text-4xl font-extrabold md:text-[3rem]">Skills</div>
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
          <div className="flex gap-3 pb-10">
            <div className="text-4xl md:text-[3rem]">My</div>
            <div className="text-4xl font-extrabold md:text-[3rem]">
              Exerience
            </div>
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
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>PDF and CSV Export:</strong> Enabled users to view all
                  recorded surgical events.
                </li>
                <li>
                  <strong>Inventory Module:</strong> Added functionality for
                  classifying inventory products with validation for UID
                  numbers, lot numbers, and expiration dates.
                </li>
                <li>
                  <strong>Operations Dashboard:</strong> Created interactive
                  charts using ElasticSearch and developed an API for 30-day
                  inventory projections with Node.js.
                </li>
                <li>
                  <strong>Contract Management:</strong> Designed charts for
                  monthly rebates, contract lifecycle, and categorized spending.
                </li>
                <li>
                  <strong>Contract Management Reports:</strong> Developed APIs
                  to generate reports based on various user inputs.
                </li>
              </ul>
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
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Developed Data Files:</strong> Created data files
                  using ADA in XML format for insurance customers. Validated XML
                  files to ensure they adhered to the proper format and
                  standards.
                </li>
                <li>
                  <strong>Utilized Thunderhead/SmartComm Tool:</strong> Worked
                  extensively with the Thunderhead/SmartComm tool to create
                  document templates with various insurance layouts. Designed
                  different style sets to format insurance documents
                  attractively and professionally.
                </li>
                <li>
                  <strong>Script Development for Document Generation:</strong>{" "}
                  Wrote various scripts using JavaScript for document generation
                  tasks, including date formatting and sorting customer data
                  based on insurance type.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={aboutRef}
        className="h-full xl:h-screen 2xl:h-screen w-full p-10 grid grid-cols-2 max-[767px]:grid-cols-1"
      >
        <div className="p-1 flex justify-center">
          <img src={Banner1} alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-3">
            <div className="text-4xl md:text-[3rem]">About</div>
            <div className="text-4xl font-extrabold md:text-[3rem]">Me</div>
          </div>
          <div className="text-xl">
            Experienced Full Stack Developer with a strong background in NextJS
            and NodeJS API development. Proficient in creating Fast and Scalable
            content management systems. Experienced in developing Real-time
            communication web applications such as chat apps and video calling
            functionalities. Skilled in implementing Payment integration using
            Stripe. Proficient in Chart development using Elasticsearch and
            MongoDB Charts. Experienced in implementing Authentication modules
            using third-party libraries. Knowledgeable in AWS deployment.
          </div>
          <div></div>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="flex justify-center items-center">
          <div className="flex gap-3">
            <div className="text-4xl md:text-[3rem]">My</div>
            <div className="text-4xl font-extrabold md:text-[3rem]">
              Projects
            </div>
          </div>
        </div>
        <div
          ref={projectRef}
          className="w-full p-10 grid md:grid-cols-2 grid-cols-1 gap-10"
        >
          <div
            className="flex items-center rounded-2xl md:h-full h-[20rem]"
            style={{
              backgroundImage: `url(${LearnSphereBanner})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="flex flex-col justify-center">
            <div className="font-extrabold text-3xl md:text-[3rem]">01</div>
            <div className="font-extrabold text-2xl md:text-3xl">
              Learning management system
            </div>
            <div className="text-gray-300 py-2">
              <ul className="list-disc list-inside">
                <li>🔒 Secure authentication for users.</li>
                <li>📊 Displayed course progress aiding learning.</li>
                <li>📚 Highlighted completed and remaining chapters.</li>
                <li>💳 Integrated Stripe for payment processing.</li>
                <li>
                  🖥️ Developed user-friendly dashboard for course management.
                </li>
                <li>🖼️ Enabled addition of multimedia for each chapter.</li>
                <li>📂 Implemented drag-and-drop for chapter reordering.</li>
                <li>✏️ Enabled teachers to manage course content.</li>
                <li className="text-white font-bold flex gap-5">
                  <a
                    href="https://nextjs-lms-ashen.vercel.app/"
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
                    href="https://github.com/rajeshrc12/nextjs-lms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-2">
                      <div>Code & demo</div>
                      <div>
                        <LuExternalLink />
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full p-10 grid grid-cols-2 max-[767px]:grid-cols-1 gap-10">
          <div
            className=" items-center rounded-2xl hidden max-[767px]:flex max-[767px]:h-[20rem]"
            style={{
              backgroundImage: `url(${MeetSphereBanner})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="flex flex-col">
            <div className="font-extrabold text-3xl md:text-[3rem]">02</div>
            <div className="font-extrabold text-2xl md:text-3xl">
              Video calling app
            </div>
            <div className="text-gray-300 flex flex-col">
              <ul className="list-disc list-inside">
                <li>🎥 Instant meeting creation and joining.</li>
                <li>🎙️ Set up microphone and video camera before calls.</li>
                <li>📐 Customizable video layouts.</li>
                <li>🎥 Meeting recording functionality.</li>
                <li>📅 Create and schedule meetings for later.</li>
                <li>📜 View previously attended meetings.</li>
                <li>👤 Create personal meetings.</li>
                <li>🎥 Dedicated section for accessing recorded meetings.</li>
              </ul>
            </div>
            <div className="text-white font-bold flex flex-col">
              <div className="flex gap-5">
                {" "}
                <a
                  href="https://meetsphere.vercel.app/"
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
                  href="https://github.com/rajeshrc12/meetsphere"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2">
                    <div>Code & demo</div>
                    <div>
                      <LuExternalLink />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="flex items-center rounded-2xl max-[767px]:hidden h-[50vh]"
            style={{
              backgroundImage: `url(${MeetSphereBanner})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="w-full p-10 grid md:grid-cols-2 grid-cols-1 gap-10">
          <div
            className="flex items-center rounded-2xl md:h-full h-[20rem]"
            style={{
              backgroundImage: `url(${WhatsAppCloneBanner})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="flex flex-col justify-center">
            <div className="font-extrabold text-3xl md:text-[3rem]">03</div>
            <div className="font-extrabold text-2xl md:text-3xl">
              WhatsApp clone
            </div>
            <div className="text-gray-300 py-2">
              <ul className="list-disc list-inside">
                <li>🔐 Google Authentication for secure user login.</li>
                <li>💬 Messaging and media sharing functionalities.</li>
                <li>📁 Multiple file selection and preview options.</li>
                <li>⚠️ Warnings for file quantity and size limits.</li>
                <li>📂 Media preview and download functionalities.</li>
                <li>
                  🟢 Status indicators for online/offline users with last seen
                  timestamps.
                </li>
                <li>
                  🔔 Features to display unseen message counts and mark messages
                  as read.
                </li>

                <li className="text-white font-bold flex gap-5">
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
                      <div>Code & demo</div>
                      <div>
                        <LuExternalLink />
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full p-10 grid grid-cols-2 max-[767px]:grid-cols-1 gap-10">
          <div
            className=" items-center rounded-2xl hidden max-[767px]:flex max-[767px]:h-[20rem]"
            style={{
              backgroundImage: `url(${AIChatBotBanner})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="flex flex-col">
            <div className="font-extrabold text-3xl md:text-[3rem]">04</div>
            <div className="font-extrabold text-2xl md:text-3xl">
              AI Chat bot
            </div>
            <div className="text-gray-300 flex flex-col">
              <ul className="list-disc list-inside">
                <li>💬 Chat with OpenAI models.</li>
                <li>
                  🖼️ Create images with custom prompts in various sizes and
                  quantities.
                </li>
                <li>💻 Receive properly formatted code for any scenario.</li>
                <li>⏳ Limit users after 5 prompts.</li>
                <li>💸 Subscribe for the paid version.</li>
                <li>📞 Customer support functionality using Crisp.</li>
                <li>🌐 Landing page.</li>
              </ul>
            </div>
            <div className="text-white font-bold flex flex-col">
              <div className="flex gap-5">
                {" "}
                <a
                  href="https://nextjs-ai-saas-seven.vercel.app/"
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
                  href="https://github.com/rajeshrc12/nextjs-ai-saas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2">
                    <div>Code & demo</div>
                    <div>
                      <LuExternalLink />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="flex items-center rounded-2xl max-[767px]:hidden h-[50vh]"
            style={{
              backgroundImage: `url(${AIChatBotBanner})`,
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

export default App;
