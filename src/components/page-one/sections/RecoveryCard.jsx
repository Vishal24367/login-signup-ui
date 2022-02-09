import React from "react";

import FormFooter from "./FormFooter";

import HeadingLogo from "../layouts/HeadingLogo";

const RecoveryCard = () => {
  return (
    <div className="opacity-100 transition-opacity delay-[0ms] duration-200">
      <div className="w-[100vw]" style={{ marginLeft: "calc(50% - 50vw)" }}>
        <div
          className="m-auto max-w-[331px]"
          style={{ width: "calc(100% - 66px)" }}
        >
          <HeadingLogo showLogo={false} headingText="Forgot Password" />
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
