import React from "react";

import Logo from "../ui/Logo";

const HeadingLogo = ({ showLogo, headingText }) => {
  return (
    <h1 className="mb-[33px] text-center font-sans text-[19px] font-medium leading-[32px] text-[#313131] antialiased lg:text-[1.5em] lg:leading-[28px]">
      <div className="mb-[22px]">{showLogo && <Logo />}</div>
      <span className="font-medium">{headingText}</span>
    </h1>
  );
};

export default HeadingLogo;
