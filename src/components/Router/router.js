import Login from "../../pages/login";
import Landing from "../../pages/landing/index";
import Feeds from "../../pages/feeds/index";
import Signup from "../../pages/singup/index";

export const routes = [
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/feeds",
    component: Feeds,
  },
  {
    path: "/signup",
    component: Signup,
  },
];
