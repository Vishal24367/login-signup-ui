import React from "react";

import FormFooter from "./FormFooter";
import Input from "./Input";
import SubHeading from "./SubHeading";

import HeadingLogo from "../layouts/HeadingLogo";
import InputLayout from "../layouts/InputLayout";

const RecoveryCard = () => {
  return (
    <div className="text-center opacity-100 transition-opacity delay-[0ms] duration-200">
      <div className="w-[100vw]" style={{ marginLeft: "calc(50% - 50vw)" }}>
        <div
          className="m-auto max-w-[331px]"
          style={{ width: "calc(100% - 66px)" }}
        >
          <HeadingLogo showLogo={false} headingText="Forgot Password" />
          <SubHeading subHeadingTitle="Enter your account's email and we'll send you an email to reset the password" />
          <form noValidate>
            <InputLayout className="mt-10">
              <Input type="email" placeholder="Email Address" name="email" />
            </InputLayout>
            <button
              className="ml-[-6px] mt-[33px] box-border flex h-auto min-h-[44px] cursor-not-allowed items-center justify-center overflow-hidden p-0 py-0 px-[22px] text-center font-sans text-[14px] font-medium uppercase leading-[22px] tracking-[0.25px] text-[#D6D6D6] antialiased outline-0 transition-transform md:text-[12px] md:tracking-[0.5px]"
              style={{
                width: "calc(100% + 12px)",
                backgroundColor: "#EBEBEB",
              }}
              type="submit"
            >
              <span>Send Email</span>
            </button>
          </form>
          <FormFooter
            footerText="FORGOT THE EMAIL ADDRESS?"
            redirectLink="/page-one/recovery"
          />
        </div>
      </div>
    </div>
  );
};

export default RecoveryCard;
