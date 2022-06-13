import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Check, User, Lock } from "react-feather";

export default class ForgotPassword extends Component {
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
              <img src="/img/logo/friendkit-white.svg" alt="" />
              </div>
            </div>
            <div className="hero-body">
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
                        placeholder="jennadavis@gmail.com"
                      />
                      <div className="input-icon">
                        <User />
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button className="button is-solid primary-button raised is-rounded is-fullwidth">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
