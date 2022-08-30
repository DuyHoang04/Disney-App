import React from "react";
import "./login.scss";
import BgcImage from "../../images/login-background.jpg";
import CtaLogo from "../../images/cta-logo-one.png";
import CtaLogoTwo from "../../images/cta-logo-two.png";
import { app } from "../../firebase";

const Login = () => {
  return (
    <div className="login">
      <div className="login__content">
        <div
          className="login__bgc"
          style={{ backgroundImage: `url(${BgcImage})` }}
        ></div>
        <div className="login__cta">
          <img className="login__cta-logo" src={CtaLogo} alt="logo" />
          <button className="login__cta-sign-up">GET ALL THERE</button>
          <p className="login__cta-decs">
            Get Premier Access to Raya and the Last Dragon for a additional fee
            with a Disney + subscription As of 28/06/22, the price of Disney +
            and the Disney Bundle will increase by $1.
          </p>
          <img className="login__cta-logoTwo" src={CtaLogoTwo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
