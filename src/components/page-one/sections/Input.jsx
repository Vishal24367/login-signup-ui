import React from "react";

const Input = ({ type, placeholder, name, value }) => {
  return (
    <input
      className="relative box-border h-[22px] min-h-[22px] w-full border-0 border-none bg-transparent p-0 font-sans text-[16px] font-normal leading-[24px] text-[#313131] antialiased outline-0 outline-transparent ring-transparent ring-offset-transparent lg:text-[14px] lg:leading-[22px]"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
    />
  );
};

export default Input;
