import React, { useEffect, useLayoutEffect, useState } from "react";
import { useViewport } from "../../../Hooks/useViewport";

const BasicNavbar = () => {
  const [navScroll, setNavScroll] = useState();

  useLayoutEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 80) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <h1></h1>
  );
};

const NavbarMobile = () => {
  const [navScroll, setNavScroll] = useState();
  const [navMenu, setNavMenu] = useState(false);

  const navTop =
    "navbar mobile-navbar is-landing is-hidden-desktop no-shadow no-background";
  const navScrolled = "navbar mobile-navbar is-landing is-hidden-desktop";

  useLayoutEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 80) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <h1></h1>
  );
};

export const Navbar = () => {
  const { width } = useViewport();
  const breakpoint = 620;

  useEffect((width, breakpoint) => {
    width < breakpoint ? <NavbarMobile /> : <BasicNavbar />;
  }, []);

  return width < breakpoint ? <NavbarMobile /> : <BasicNavbar />;
};
