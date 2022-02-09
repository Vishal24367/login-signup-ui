import React from "react";

import Button from "./Button";

import AppleIcon from "../ui/AppleIcon";
import FacebookIcon from "../ui/FacebookIcon";
import GoogleIcon from "../ui/GoogleIcon";

const ExtraLoginOptions = () => {
  return (
    <div className="basis-full">
      <Button showIcon={true} buttonText="Continue with Google">
        <GoogleIcon />
      </Button>
      <Button showIcon={true} buttonText="Continue with Apple">
        <AppleIcon />
      </Button>
      <Button showIcon={true} buttonText="Continue with Facebook">
        <FacebookIcon />
      </Button>
    </div>
  );
};

export default ExtraLoginOptions;
