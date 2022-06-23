import React from "react";

import ErrorText from "../sections/ErrorText";
import HorizontalBar from "../sections/HorizontalBar";
import Label from "../sections/Label";

const InputLayout = props => {
  return (
    <div className={props.className}>
      {props.label && <Label label={props.label} />}
      <div className="relative m-0 mb-6 box-border pt-[11px] font-sans">
        <div className="relative my-0 mx-[-6px] flex items-center justify-between py-0 px-[6px]">
          {props.children}
        </div>
        <ErrorText error={props.error} />
        <HorizontalBar />
      </div>
    </div>
  );
};

export default InputLayout;
