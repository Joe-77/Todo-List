import React from "react";
import Side from "./Side";
import Box from './Box'

const Container = () => {
  return (
    <div className="m-auto max-sm:w-3/4 sm:w-1/2 lg:w-1/4 h-80 bg-white relative">
      <Side />
      <Box/>
    </div>
  );
};

export default Container;
