import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feeds from "../../pages/feeds";
import Login from "../../pages/login";
import SignUp from "../../pages/singup";
import ForgotPassword from "../../pages/forgotPassword";
import Groups from "../../pages/groups";
import { MainNavbar } from "../Navbar/MainNavbar";

const BasicRoutes = () => {
  const [isLogin, setIsLogin] = useState(
    JSON.parse(localStorage.getItem("isLoginCheck"))
  );
  const [appOverlay, setAppOverlay] = useState(false);
  const [messageOverlay, setMessageOverlay] = useState(false);
  const [exploreOverlay, setExploreOverlay] = useState(false);
  console.log("isLogin", isLogin);
  return (
    <Router>
      {isLogin ? (
        <>
          <div className={`app-overlay ${appOverlay ? "is-active" : ""}`}></div>
          <MainNavbar
            messageOverlay={messageOverlay}
            setMessageOverlay={setMessageOverlay}
            exploreOverlay={exploreOverlay}
            setExploreOverlay={setExploreOverlay}
            setIsLogin={setIsLogin}
          />
          <div className="view-wrapper">
            <div id="main-feed" className="container">
              <Routes>
                <Route path="/" element={<Feeds setIsLogin={setIsLogin} />} />
                <Route
                  path="feeds"
                  element={<Feeds setIsLogin={setIsLogin} />}
                />
                <Route
                  path="groups"
                  element={<Groups isLogin={isLogin} setIsLogin={setIsLogin} />}
                />
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <>
          <Routes>
            <Route
              path="/login"
              element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
            />
            <Route
              path="/"
              element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
            />
            <Route
              path="signup"
              element={<SignUp isLogin={isLogin} setIsLogin={setIsLogin} />}
            />
            <Route path="forgot" element={<ForgotPassword />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default BasicRoutes;
