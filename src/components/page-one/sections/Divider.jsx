import React from "react";

const Divider = () => {
  return (
    <div className="flex flex-row items-center lg:flex-col lg:self-stretch lg:py-0 lg:px-[33px]">
      <div className="h-px w-full bg-[#EBEBEB] lg:h-full lg:w-px lg:items-center"></div>
      <div className="p-[20px] text-[9.75px] uppercase leading-[0.75px] text-[#313131]">
        <span className="font-sans">or</span>
      </div>
      <div className="h-px w-full bg-[#EBEBEB] lg:h-full lg:w-px lg:items-center"></div>
    </div>
  );
};

export default Divider;
