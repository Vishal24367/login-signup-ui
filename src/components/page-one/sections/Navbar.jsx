import React from "react";

const Navbar = () => {
  return (
    <div className="mb-[33px] flex flex-row items-center justify-between px-[22px] pt-[22px] sm:p-[33px]">
      <button
        type="button"
        className="flex cursor-pointer flex-row font-sans text-[16px] font-medium leading-[22px] text-[#313131] sm:text-[14px]"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <span className="flex w-full items-center">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="BackArrow-stem-14hfF BackArrow-exited-3uSmG"
              fill="#313131"
              width="0"
              height="2"
              x="7"
              y="10"
            ></rect>
            <path
              className="BackArrow-exited-3uSmG"
              fill="#313131"
              d="M15.75 4H13L6 11L13 18H15.75L8.75 11L15.75 4Z"
            ></path>
          </svg>
          <span>Back</span>
        </span>
      </button>
      <a className="inline-flex min-h-[36px] cursor-pointer items-center overflow-hidden text-center font-sans text-[14px] font-semibold uppercase leading-[22px] tracking-[0.25px] text-[#313131] antialiased transition-transform lg:text-[12px] lg:tracking-[0.5px]">
        Create Account
      </a>
    </div>
  );
};

export default Navbar;
