import React from "react";

import TermsAndCondition from "./TermsAndCondition";

const FormFooter = ({ footerText, redirectLink }) => {
  return (
    <div className="mt-[33px] text-center">
      <a
        className="cursor-pointer bg-transparent text-left font-sans text-[16px] font-normal leading-[24px] text-black antialiased md:text-[14px] md:leading-[22px]"
        href={redirectLink}
      >
        <button
          className="box-border inline-flex h-auto min-h-[36px] w-auto cursor-pointer items-center justify-center overflow-hidden border-none bg-transparent p-0 text-center font-sans text-[14px] font-medium leading-[22px] tracking-[0.25px] text-[#313131] antialiased outline-0 transition-transform md:text-[12px] md:tracking-[0.5]"
          onClick={() => {
            window.location.href = redirectLink;
          }}
        >
          <span className="m-0 cursor-pointer border-none bg-transparent p-0">
            <span className="relative box-border inline-flex">
              <span className="uppercase">{footerText}</span>
            </span>
            <span className="relative box-border">
              <div className="absolute -bottom-1 right-0 w-[103.422px] origin-left scale-x-0 border-t-[2px] border-solid transition-transform duration-500 md:w-[92.375px] md:border-t-4"></div>
            </span>
          </span>
        </button>
      </a>
      <TermsAndCondition />
    </div>
  );
};

export default FormFooter;
