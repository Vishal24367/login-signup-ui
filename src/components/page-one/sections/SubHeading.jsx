import React from "react";

const SubHeading = ({ subHeadingTitle }) => {
  return (
    <p className="m-0 text-center font-sans text-[16px] font-normal leading-[22px] text-[#767676] antialiased md:text-[14px]">
      <span>{subHeadingTitle}</span>
    </p>
  );
};

export default SubHeading;
