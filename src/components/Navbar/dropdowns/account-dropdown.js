import React, { useState } from "react";
import { Check, LifeBuoy, Power, Settings } from "react-feather";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
export const AccountDropdown = ({ setIsLogin, userDetails }) => {
  let [isActive, setisActive] = useState(false);
  const navigate = useNavigate();

  const logoutbtn = () => {
    localStorage.removeItem("isLoginCheck");
    localStorage.removeItem("__tokenCode");
    localStorage.removeItem("__userId");
    localStorage.removeItem("__fulName");
    localStorage.removeItem("__userImg");
    setIsLogin(localStorage.removeItem("isLoginCheck"));
    if (localStorage.removeItem("isLoginCheck") === undefined) {
      navigate("/");
    }
  };

  console.log("navBar", userDetails);

  return (
    <div
      id="account-dropdown"
      onBlur={() => setisActive(false)}
      className={`navbar-item is-account drop-trigger has-caret ${
        isActive ? "is-open" : ""
      }`}
    >
      <div className="user-image" onClick={() => setisActive(!isActive)}>
        <img
          src={
            userDetails.image === ""
              ? "https://www.svpnpa.gov.in/images/npa/alumni-gallery/1975New/A.%20Wahab.png"
              : userDetails.image
          }
          alt=""
        />
        <span className="indicator"></span>
      </div>

      <div
        className={`nav-drop is-account-dropdown ${
          isActive ? "is-active" : ""
        }`}
      >
        <div className="inner">
          <div className="nav-drop-header">
            {/* <span className="username">Jenna Davis</span> */}
            <a href="profile-main.html">Profile</a>
          </div>
          <div className="nav-drop-body account-items">
            <a
              id="profile-link"
              href="/profile-main.html"
              className="account-item"
            >
              <div className="media">
                <div className="media-left">
                  <div className="image">
                    <img
                      src={
                        userDetails.image === ""
                          ? "https://www.svpnpa.gov.in/images/npa/alumni-gallery/1975New/A.%20Wahab.png"
                          : userDetails.image
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="media-content">
                  <h3 className="userName">
                    {localStorage.getItem("__fulName")}
                  </h3>
                  <small>Main account</small>
                </div>
                <div className="media-right">
                  <Check />
                </div>
              </div>
            </a>
            <hr className="account-divider" />

            <a href="/options-settings.html" className="account-item">
              <div className="media">
                <div className="icon-wrap">
                  <Settings />
                </div>
                <div className="media-content">
                  <h3>Edit Profile</h3>
                  {/* <small>Access widget settings.</small> */}
                </div>
              </div>
            </a>

            <a className="account-item">
              <div className="media">
                <div className="icon-wrap">
                  <Power />
                </div>
                <div className="media-content">
                  <span onClick={logoutbtn}>
                    <h3>Log out</h3>
                    <small>Log out from your account.</small>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
