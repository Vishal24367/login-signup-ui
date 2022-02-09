import React from "react";

const ErrorText = ({ error }) => {
  return (
    <p className="my-0 mt-[6px] mb-[11px] text-left font-sans text-[12px] font-medium leading-[16px] text-[#EC3E2C] antialiased">
      {error}
    </p>
  );
};

export default ErrorText;
