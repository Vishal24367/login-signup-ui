import React from "react";

const Button = props => {
  return (
    <button
      display="flex"
      width="100%"
      fontWeight="medium"
      fontSize="16,14"
      letterSpacing="0"
      color="#000"
      className="mb-[11px] box-border flex min-h-[44px] w-full cursor-pointer flex-row items-center justify-center overflow-hidden border border-solid border-black bg-transparent px-[11px] text-center font-sans text-[16px] font-medium leading-[22px] tracking-[0px] text-black antialiased outline-0 transition-transform hover:bg-gray-100 md:min-h-[55px] md:py-0 md:px-[22px] md:text-[14px]"
    >
      {props.showIcon && props.children}
      <span className="flex-grow">{props.buttonText}</span>
    </button>
  );
};

export default Button;
