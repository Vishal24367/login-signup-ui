import React from "react";

import Input from "./Input";

import InputLayout from "../layouts/InputLayout";
import EyeIcon from "../ui/EyeIcon";

const Form = () => {
  return (
    <div className="basis-full">
      <div className="mx-[6px]">
        <form noValidate>
          <InputLayout label="Email Address">
            <Input type="text" placeholder="name@example.com" name="email" />
          </InputLayout>
          <InputLayout label="Password">
            <div className="relative box-border flex h-[22px] flex-grow flex-row items-center justify-between">
              <Input type="password" name="password" placeholder="Password" />
              <button
                type="button"
                aria-label="Show password"
                className="m-0 cursor-pointer border-none bg-transparent p-0"
              >
                <EyeIcon />
              </button>
            </div>
          </InputLayout>
          <button
            className="ml-[-6px] mt-[33px] box-border flex h-auto min-h-[44px] cursor-not-allowed items-center justify-center overflow-hidden p-0 py-0 px-[22px] text-center font-sans text-[14px] font-medium uppercase leading-[22px] tracking-[0.25px] text-[#D6D6D6] antialiased outline-0 transition-transform md:text-[12px] md:tracking-[0.5px]"
            style={{
              width: "calc(100% + 12px)",
              backgroundColor: "#EBEBEB",
            }}
            type="submit"
          >
            <span>Log In</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
