import React, { Component } from "react";
import { Check, Lock, User } from "react-feather";
import { Link } from "react-router-dom";
import profile_icon from "../assets/img/avatars/profile_icon.png";
import friendkit from "../assets/img/logo/friendkit-white.svg";

export default class Login extends Component {
  render() {
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
                        placeholder="jennadavis@gmail.com"
                      />
                      <div className="input-icon">
                        <User />
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input password-input"
                        type="password"
                        placeholder="●●●●●●●"
                      />
                      <div className="input-icon">
                        <Lock />
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <Link to="/feeds">
                        <button className="button is-solid primary-button raised is-rounded is-fullwidth">
                          Login
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="section forgot-password is-flex is-justify-content-space-between">
                <div className="has-text-left">
                    <Link to="/signup" className="has-text-primary">Signup?</Link>
                  </div>
                  <div className="has-text-right">
                    <Link to="/forgot" className="has-text-primary">Forgot password?</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
