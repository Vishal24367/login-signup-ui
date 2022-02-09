import React from "react";

import { Route, Routes } from "react-router-dom";

import Dashboard from "./Dashboard";
import PageOne from "./pages/page-one";

const App = () => {
  return (
    <Routes>
      <Route path="/page-one/*" element={<PageOne />} />
      <Route exact path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
