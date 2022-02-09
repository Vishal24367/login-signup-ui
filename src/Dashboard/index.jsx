import React from "react";

const Main = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="m-auto flex flex-col space-y-10">
        <a
          className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          href="/page-one"
        >
          Login/SignUp - 1
        </a>
        <a className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
          Login/SignUp - 2
        </a>
        <a className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
          Login/SignUp - 3
        </a>
      </div>
    </div>
  );
};

export default Main;
