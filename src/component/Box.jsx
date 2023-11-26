import React from "react";
import Head from "./Head";
import ShowTask from "./ShowTask";

const Box = () => {
  return (
    <>
      <div className="w-full h-full bg-white shadow-lg shadow-gray-400 relative max-sm:top-20 sm:left-[-15px]">
        <Head />
        <ShowTask />
      </div>
    </>
  );
};

export default Box;
