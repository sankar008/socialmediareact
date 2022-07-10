import React, { useState } from "react";
import { Lock, User } from "react-feather";
import { Link } from "react-router-dom";
import friendkit from "../assets/img/logo/friendkit-white.svg";
import * as API from "../api/index";
import * as appUtils from "../helpers/appUtils";
import OTPInput from "otp-input-react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
const initialvalue = {
  email: "",
};
const initialvaluePass = {
  password: "",
  confirmPassword: "",
};
const ForgotPassword = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState(initialvalue);
  const [newPassData, setNewPassData] = useState(initialvaluePass);
  const [loading, setLoading] = useState(false);
  const [isEmail, setIsEmail] = useState(0);
  const [OTP, setOTP] = useState("");
  //?ERROR-MSGS
  const [errorMsg, setErrorMsg] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmErrorPasword, setConfirmErrorPasword] = useState("");
  // ? handerl onchanges
  const handalerChanges = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setErrorEmail("");
        setErrorMsg(false);
        break;
      default:
    }
    setFormData({ ...formData, [name]: value });
  };

  const forgotEmail = async () => {
    setLoading(true);
    let flag = validate();
    if (!flag) {
      setLoading(false);
      return;
    }
    try {
      const reqObj = {
        email: formData.email,
      };
      const response = await API.user_email_forgot(reqObj);
      console.log("response", response);
      if (response.status === 200) {
        setIsEmail(1);
      }
    } catch (error) {}
  };
  // ? otp verifid
  const emailVerified = async () => {
    try {
      const reqObj = {
        email: formData.email,
        otp: OTP,
      };
      console.log("reqObj", reqObj);
      const response = await API.user_emailVerified(reqObj);
      console.log("response", response);
      if (response.data.success === 1) {
        // navigate("/feed");
        setIsEmail(2);
        toast(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          type: "success",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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

  // ? New password Handelar
  const newPasshandalerChanges = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "password":
        setErrorPassword("");
        break;
      case "confirmPassword":
        setConfirmErrorPasword("");
        break;
      default:
    }
    setNewPassData({ ...newPassData, [name]: value });
  };
  // ? new password
  const newpasswordSet = async () => {
    setLoading(true);
    let flag = newPassvalidate();
    if (!flag) {
      setLoading(false);
      return;
    }
    try {
      const reqObj = {
        password: newPassData.password,
        email: formData.email,
        otp: OTP,
      };
      console.log("reqObj", reqObj);
      const response = await API.user_newPassword(reqObj);
      if (response.status === 200) {
        setIsEmail(0);
        navigate("/login");
      }
    } catch (error) {}
  };

  //?VALIDATE-INPUT
  const validate = () => {
    const { email } = formData;
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
    return flag;
  };

  const newPassvalidate = () => {
    const { password, confirmPassword } = newPassData;
    let flag = true;

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

    // ? confirmPassword
    if (password === "" || password !== confirmPassword) {
      setConfirmErrorPasword({
        field: "confirmPassword",
        message: "Please confirm your password",
      });
      flag = false;
    } else {
      setConfirmErrorPasword({
        field: "confirmPassword",
        message: "",
      });
      flag = true;
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
            {isEmail === 0 ? (
              <div className="form-wrapper">
                <div className="login-form">
                  <div className="field">
                    <div className="control">
                      <h1>Forgot Password?</h1>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input email-input"
                        type="text"
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={handalerChanges}
                        name="email"
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
                      <button
                        onClick={forgotEmail}
                        className="button is-solid primary-button raised is-rounded is-fullwidth"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
                <div className="section forgot-password">
                  <div className="has-text-centered">
                    <Link to="/login">Back to Login</Link>
                  </div>
                </div>
              </div>
            ) : isEmail === 1 ? (
              <div className="form-wrapper">
                <div className="login-form">
                  <div className="field">
                    <div className="control">
                      <h1 className="otpHeading">Verified Email</h1>
                    </div>
                  </div>
                  <div className="otpInput">
                    <OTPInput
                      value={OTP}
                      onChange={setOTP}
                      autoFocus
                      OTPLength={6}
                      otpType="number"
                      disabled={false}
                    />
                  </div>
                  <div className="field mt-3">
                    <div className="control">
                      <button
                        disabled={OTP.length !== 6}
                        onClick={emailVerified}
                        className="button is-solid primary-button raised is-rounded is-fullwidth"
                      >
                        Verified Now
                      </button>
                    </div>
                    <ToastContainer />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="form-wrapper">
                  <div className="login-form">
                    <div className="field">
                      <div className="control">
                        <h1 className="otpHeading">Reset Password</h1>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input email-input"
                          type="password"
                          placeholder="Choose a new password"
                          value={newPassData.password}
                          onChange={newPasshandalerChanges}
                          name="password"
                        />
                        <div className="input-icon">
                          <Lock />
                        </div>
                        {errorPassword.field === "password" && (
                          <p className="inputErrorMess">
                            {errorPassword.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input email-input"
                          type="password"
                          placeholder="Repeat your password"
                          value={newPassData.confirmPassword}
                          onChange={newPasshandalerChanges}
                          name="confirmPassword"
                        />
                        <div className="input-icon">
                          <Lock />
                        </div>
                        {confirmErrorPasword.field === "confirmPassword" && (
                          <p className="inputErrorMess">
                            {confirmErrorPasword.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="field mt-3">
                      <div className="control">
                        <button
                          onClick={newpasswordSet}
                          className="button is-solid primary-button raised is-rounded is-fullwidth"
                        >
                          Submit
                        </button>
                      </div>
                      <ToastContainer />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
