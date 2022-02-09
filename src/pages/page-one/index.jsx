import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import Login from "./Login";
import Recovery from "./Recovery";

import Footer from "../../components/page-one/sections/Footer";
import Navbar from "../../components/page-one/sections/Navbar";

const PageOne = () => {
  // const location = useLocation();
  // const { pathname } = location;
  return (
    <div className="flex min-h-full w-full flex-col justify-between justify-items-stretch">
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/recovery" element={<Recovery />} />
          <Route path="/" element={<Navigate replace to="/page-one/login" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default PageOne;
