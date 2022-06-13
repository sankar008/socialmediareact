import Login from "../../pages/login";
import Landing from "../../pages/landing/index";
import Feed from "../../pages/feed/index";
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
    path: "/feed",
    component: Feed,
  },
  {
    path: "/signup",
    component: Signup,
  },
];
