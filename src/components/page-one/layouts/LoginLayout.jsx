import React from "react";

const LoginLayout = props => {
  return (
    <div className="flex w-full flex-row justify-center md:mt-[86px]">
      <div className="w-[288px]">
        <div className="opacity-100 transition-opacity delay-[0ms] duration-200">
          {props.children}
        </div>
        <div data-test="oauth-login"></div>
      </div>
    </div>
  );
};

export default LoginLayout;
