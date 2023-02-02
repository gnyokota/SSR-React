import React from "react";
import {Route, Routes} from "react-router-dom";

import About from "./component/About.jsx";
import Home from "./component/Home.jsx";

const RoutesComp = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home username="Anna" />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
};

export default RoutesComp;
