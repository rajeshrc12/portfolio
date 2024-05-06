import React from "react";

const Project = () => {
  const projectDesc = [
    "1.Live message and media transmittion",
    "2.Preview chat Media",
    " 3.Shows user status such last seen",
    "4.You can download any media",
    " 5.Shows unseen message count",
    "6.Display limit warning while uploading files",
  ];
  return (
    <>
      {" "}
      <div className="h-[10%] w-full justify-center flex">
        <div className="font-extrabold text-[3rem] text-black">Projects</div>
      </div>
      <div className="h-[90%] p-10 2xl:flex xl:flex md:flex 2xl:justify-center xl:justify-center gap-10">
        <div
          className="bg-[#A259FF] my-5 relative border-2 border-black 2xl:w-[30%] xl:w-[30%] w-full rounded-xl p-5 gap-3 flex flex-col"
          style={{ boxShadow: "9px 9px 0px 1px #000000" }}
        >
          <div className="absolute w-full top-0 left-0 flex justify-center">
            <div className="relative bottom-7 bg-[#0ACF83] rounded-full h-14 w-14 flex justify-center items-center">
              <div className="font-extrabold text-[2rem] text-white">1</div>
            </div>
          </div>
          <div className="font-extrabold text-4xl text-[#FFDD55]">
            WhatsApp Clone
          </div>
          {projectDesc.map((d) => (
            <div key={d} className="font-bold text-xl text-white">
              {d}
            </div>
          ))}
          <div className="flex gap-5">
            <a
              href="https://main.daz37dbxioals.amplifyapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="font-bold text-xl text-black bg-[#FFDD55] px-6 py-1 rounded-lg">
                Live
              </button>
            </a>
            <a
              href="https://github.com/rajeshrc12/whatsapp-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="font-bold text-xl text-black bg-[#FFDD55] px-6 py-1 rounded-lg">
                Code
              </button>
            </a>
          </div>
        </div>
        <div
          className="bg-[#A259FF] my-5 relative border-2 border-black  2xl:w-[30%] xl:w-[30%] w-full rounded-xl p-5 gap-3 flex flex-col"
          style={{ boxShadow: "9px 9px 0px 1px #000000" }}
        >
          <div className="absolute w-full top-0 left-0 flex justify-center">
            <div className="relative bottom-7 bg-[#0ACF83] rounded-full h-14 w-14 flex justify-center items-center">
              <div className="font-extrabold text-[2rem] text-white">2</div>
            </div>
          </div>
          <div className="font-extrabold text-4xl text-[#FFDD55]">
            Portfolio website
          </div>
          <div className="font-bold text-xl text-white">
            Simple, Nice and clean portfolio website
          </div>
          <div className="flex gap-5">
            <a
              href="https://rajeshrc12.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="font-bold text-xl text-black bg-[#FFDD55] px-6 py-1 rounded-lg">
                Live
              </button>
            </a>
            <a
              href="https://github.com/rajeshrc12/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="font-bold text-xl text-black bg-[#FFDD55] px-6 py-1 rounded-lg">
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
