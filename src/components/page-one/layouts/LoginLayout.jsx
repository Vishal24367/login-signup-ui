import React from "react";

const LoginLayout = props => {
  return (
    <div className="mt-16 flex w-full flex-row justify-center lg:mt-28">
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
