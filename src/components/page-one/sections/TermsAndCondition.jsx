import React from "react";

const TermsAndCondition = () => {
  return (
    <p className="mt-[22px] text-center font-sans text-[12px] font-normal leading-[16px] text-[#767676]">
      <span>
        Secure Login with reCAPTCHA subject to Google{" "}
        <a
          className="cursor-pointer flex-nowrap bg-transparent text-left text-[12px] font-normal leading-[16px] text-[#767676] underline antialiased hover:text-black"
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/intl/en/policies/terms"
        >
          <br />
          <span>Terms</span>
        </a>{" "}
        &amp;{" "}
        <a
          className="cursor-pointer flex-nowrap bg-transparent text-left text-[12px] font-normal leading-[16px] text-[#767676] underline antialiased hover:text-black"
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/intl/en/policies/privacy"
        >
          <span>Privacy</span>
        </a>
      </span>
    </p>
  );
};

export default TermsAndCondition;
