import React from "react";

const Label = ({ label }) => {
  return (
    <label className="font-sans text-[11px] font-medium uppercase leading-[11px] tracking-[0.5] text-[#A1A1A1] antialiased lg:text-[9.75px] lg:tracking-[0.75px]">
      <span className="lg:text-[9.75] text-[11px] font-medium uppercase tracking-[0.5] antialiased lg:tracking-[0.75]">
        {label}
      </span>
    </label>
  );
};

export default Label;
