import React from "react";
import Logo from "../assets/ReadyPlayerMe-Avatar (1).png";

const Head = () => {
  return (
    <header className="px-4 pb-3 flex items-center gap-5 border-b-[1px] border-b-gray-200">
      <img className="w-14 rounded-full" src={Logo} alt="" />
      <div className=" text-purple-400">
        <h1 className=" text-sm md:text-xl font-mono capitalize">yousef abdallah</h1>
        <p className="text-xs mt-1 capitalize">Frontend Developer</p>
      </div>
    </header>
  );
};

export default Head;
