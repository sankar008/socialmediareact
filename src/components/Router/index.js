import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feeds from "../../pages/feeds";
import Login from "../../pages/login";
import SignUp from "../../pages/singup";
import Landing from "../../pages/landing";
import ForgotPassword from "../../pages/forgotPassword";

const BasicRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="forgot" element={<ForgotPassword />} />
      <Route path="feeds" element={<Feeds />} />
    </Routes>
  </Router>
);

export default BasicRoutes;
