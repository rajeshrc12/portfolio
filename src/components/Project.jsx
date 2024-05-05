import React from "react";

const Project = () => {
  const projectDesc = [
    "1.Implemented Google Authentication for secure user login.",
    "2.Developed messaging and media sharing functionalities.",
    "3.Designed multiple file selection and preview options.",
    "4.Implemented warnings for file quantity and size limits.",
    "5.Integrated media preview and download functionalities.",
    "6.Created status indicators for online/offline users with last seen timestamps.",
    "7.Added features to display unseen message counts and mark messages as read upon contact selection.",
  ];
  return (
    <>
      <div className="h-[10%] w-full justify-center flex">
        <div className="font-extrabold text-[3rem] text-black">Projects</div>
      </div>
      <div className="h-[90%] p-10">
        <div
          className="bg-[#A259FF] relative border-2 border-black h-full w-full rounded-xl p-5 gap-3 flex flex-col"
          style={{ boxShadow: "9px 9px 0px 1px #000000" }}
        >
          <div className="font-extrabold text-4xl text-white py-5">
            WhatsApp Clone
          </div>
          {projectDesc.map((d) => (
            <div key={d} className="font-bold text-2xl text-white">
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
          <div className="absolute w-full top-0 left-0 flex justify-center">
            <div className="relative bottom-7 bg-[#0ACF83] rounded-full h-14 w-14 flex justify-center items-center">
              <div className="font-extrabold text-[2rem] text-white">1</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
