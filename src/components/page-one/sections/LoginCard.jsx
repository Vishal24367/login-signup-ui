import React from "react";

import Divider from "./Divider";
import ExtraLoginOptions from "./ExtraLoginOptions";
import Form from "./Form";
import FormFooter from "./FormFooter";

import HeadingLogo from "../layouts/HeadingLogo";

const Logincard = () => {
  return (
    <div className="w-[100vw]" style={{ marginLeft: "calc(50% - 50vw)" }}>
      <HeadingLogo showLogo={true} headingText="Log into SquareSpace" />
      <div
        className="mx-auto max-w-[375px] font-sans md:items-center lg:flex lg:max-w-[775px] lg:flex-row"
        style={{ width: "calc(100% - 66px)" }}
      >
        <Form />
        <Divider />
        <ExtraLoginOptions />
      </div>
      <FormFooter
        footerText="Can't Log In?"
        redirectLink="/page-one/recovery"
      />
    </div>
  );
};

export default Logincard;
