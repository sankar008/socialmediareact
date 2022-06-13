import React from "react";
import { Navbar } from "../../components/Navbar/NavbarLanding";
import { IconSection } from "./IconSection/Index";
import { LandingStart } from "./landingStart/index";

export default function Landing() {
  return (
    <>
      <div className="is-white">
        <Navbar />
        <div className="landing-wrapper">
          <LandingStart />
          <IconSection />
        </div>
      </div>
    </>
  );
}
