import React, { useState } from "react";
import { Check, Lock, User } from "react-feather";
import { Link } from "react-router-dom";
import profile_icon from "../assets/img/avatars/profile_icon.png";
import friendkit from "../assets/img/logo/friendkit-white.svg";
import * as API from "../api/index";
import * as appUtils from "../helpers/appUtils";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
const initialvalue = {
  email: "",
  password: "",
};

const Login = ({ setIsLogin, isLogin }) => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState(initialvalue);
  const [loading, setLoading] = useState(false);
  //ERROR-MSGS
  const [errorMsg, setErrorMsg] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  // ? handerl onchanges
  const handalerChanges = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setErrorEmail("");
        setErrorMsg(false);
        break;
      case "password":
        setErrorPassword("");
        break;
      default:
    }
    setFormData({ ...formData, [name]: value });
  };

  const loginSubmitButton = async () => {
    setLoading(true);
    let flag = validate();
    if (!flag) {
      setLoading(false);
      return;
    }
    try {
      const reqObj = {
        email: formData.email,
        password: formData.password,
      };
      console.log("reqObj", reqObj);
      const response = await API.user_login(reqObj);
      console.log("response", response);
      if (response.data.success === 1) {
        setIsLogin(!isLogin);
        localStorage.setItem("isLoginCheck", true);
        localStorage.setItem("__userImg", response.data.data.image);
        localStorage.setItem("__fulName", response.data.data.full_name);
        localStorage.setItem("__userId", response.data.data._id);
        const headerObj = {
          Authorization: `Bearer ${response.data.token_code}`,
        };
        localStorage.setItem("__tokenCode", JSON.stringify(headerObj));

        navigate("/feeds");
      } else {
        toast(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          type: "error",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {}
  };

  //?VALIDATE-INPUT
  const validate = () => {
    const { email, password } = formData;
    let flag = true;

    let validateEmail = appUtils.validateEmail(email);
    if (validateEmail === 1) {
      setErrorEmail({
        field: "email",
        message: "",
      });
    }
    if (!(validateEmail === 1)) {
      let msg = "";
      if (validateEmail === 0) {
        msg = "Please enter your email address.";
      } else {
        msg = "That doesn't look like an email address.";
      }
      setErrorEmail({
        field: "email",
        message: msg,
      });
      flag = false;
    }
    // ? password
    if (password) {
      if (password.length < 8) {
        setErrorPassword({
          field: "password",
          message: "Your password is too short. It needs to be 8+ characters",
        });
        flag = false;
      }
      if (password.length > 8) {
        setErrorPassword({
          field: "password",
          message: "",
        });
        flag = true;
      }
    } else {
      setErrorPassword({
        field: "password",
        message: "Please enter your password.",
      });
      flag = false;
    }

    return flag;
  };
  return (
    <div className="login-wrapper columns is-gapless">
      <div className="column is-6 is-hidden-mobile hero-banner">
        <div className="hero is-fullheight is-login">
          <div className="hero-body">
            <div className="container">
              <div className="left-caption">
                <h2>Join an Exciting Social Experience.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-6">
        <div className="hero form-hero is-fullheight">
          <div className="logo-wrap">
            <div className="wrap-inner">
              <img src={friendkit} alt="" />
            </div>
          </div>
          <div className="hero-body">
            <div className="form-wrapper">
              <div className="avatar">
                <div className="badge">
                  <Check />
                </div>
                <img src={profile_icon} alt="" />
              </div>
              <div className="login-form">
                <div className="field">
                  <div className="control">
                    <input
                      className="input email-input"
                      type="text"
                      placeholder="example@gmail.com"
                      name="email"
                      value={formData.email}
                      onChange={handalerChanges}
                    />
                    <div className="input-icon">
                      <User />
                    </div>
                    {errorEmail.field === "email" && (
                      <p className="inputErrorMess">{errorEmail.message}</p>
                    )}
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input password-input"
                      type="password"
                      placeholder="●●●●●●●"
                      value={formData.password}
                      onChange={handalerChanges}
                      name="password"
                    />
                    <div className="input-icon">
                      <Lock />
                    </div>
                    {errorPassword.field === "password" && (
                      <p className="inputErrorMess">{errorPassword.message}</p>
                    )}
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button
                      onClick={loginSubmitButton}
                      className="button is-solid primary-button raised is-rounded is-fullwidth"
                    >
                      Login
                    </button>
                    <ToastContainer />
                  </div>
                </div>
              </div>
              <div className="section forgot-password">
                <div className="has-text-centered">
                  <Link to="/forgot">Forgot password?</Link>
                </div>
              </div>
              <div className="section forgot-password">
                <div className="has-text-centered">
                  You don't have account ? <Link to="/signup"> Signup</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
