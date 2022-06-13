import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feed from "../../pages/feed";
import Login from "../../pages/login";
import SignUp from "../../pages/singup";
import Landing from "../../pages/landing";

const BasicRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="feed" element={<Feed />} />
    </Routes>
  </Router>
);

export default BasicRoutes;
