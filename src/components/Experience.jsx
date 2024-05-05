import React from "react";

const Experience = () => {
  return (
    <>
      {" "}
      <div className="h-[10%] w-full justify-center flex">
        <div className="font-extrabold text-[3rem] text-black">Experience</div>
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
            Allianz Technology
          </div>
          <div className="font-extrabold text-2xl text-black">
            Thunderhead developer
          </div>
          <div className="font-extrabold text-xl text-white">
            Technologies Used
          </div>
          <div className="font-extrabold text-xl text-white">
            1. ThunderHead Tool
          </div>
          <div className="font-extrabold text-xl text-white">
            02/2022 - 07/2022
          </div>
          <div className="font-extrabold text-xl text-white">Pune, IND</div>
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
            Rethink Ledgers
          </div>
          <div className="font-extrabold text-2xl text-black">
            ReactJS Developer
          </div>
          <div className="font-extrabold text-xl text-white">
            Technologies Used
          </div>
          <div className="font-extrabold text-xl text-white">1. ReactJS</div>
          <div className="font-extrabold text-xl text-white">2. JavaScript</div>
          <div className="font-extrabold text-xl text-white">3. NodeJS</div>
          <div className="font-extrabold text-xl text-white">4. MongoDB</div>
          <div className="font-extrabold text-xl text-white">
            5. Elastic Search
          </div>
          <div className="font-extrabold text-xl text-white flex">
            <div>11/2022 – 03/2024</div>
          </div>
          <div className="font-extrabold text-xl text-white">Pune, IND</div>
        </div>
      </div>
    </>
  );
};

export default Experience;
