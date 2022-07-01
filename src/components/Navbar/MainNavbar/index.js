import React, { useLayoutEffect, useState } from "react";
import { MobileNavbar } from "./MobileNavbar";
import logoBold from "../../../assets/img/logo/friendkit-bold.svg";
import {
  Book,
  HelpCircle,
  LifeBuoy,
  MessageSquare,
  Plus,
  Grid,
} from "react-feather";
import { FriendRequestDropdown } from "../dropdowns/friend-requests-dropdown";
import { NotificationsDropdown } from "../dropdowns/notifications-dropdown";
import { MessagesDropdown } from "../dropdowns/messages-dropdown";
import { SearchWidget } from "../widget/SearchWidget";
import { CartDropdown } from "../dropdowns/cart-dropdown";
import { AccountDropdown } from "../dropdowns/account-dropdown";

const BasicNavbar = (props) => {
  const {
    exploreOverlay,
    setExploreOverlay,
    messageOverlay,
    setMessageOverlay,
  } = props;

  return (
    <div
      id="main-navbar"
      class="navbar navbar-v1 is-inline-flex is-transparent no-shadow is-hidden-mobile"
    >
      <div class="container is-fluid">
        <div class="navbar-brand">
          <a href="/" class="navbar-item">
            <img class="logo" src={logoBold} width="112" height="28" alt="" />
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <FriendRequestDropdown />
            <NotificationsDropdown />

            <MessagesDropdown />
            <div class="navbar-item is-icon open-chat">
              <a
                class="icon-link is-primary"
                onClick={() => setMessageOverlay(!messageOverlay)}
              >
                <MessageSquare />
                <span class="indicator"></span>
              </a>
            </div>

            <div id="explorer-trigger" class="navbar-item is-icon">
              <a
                class="icon-link is-primary"
                onClick={() => setExploreOverlay(!exploreOverlay)}
              >
                <Grid />
              </a>
            </div>
          </div>

          <div class="navbar-end">
            <SearchWidget />
            <CartDropdown />
            <AccountDropdown />

            <div class="navbar-item is-plus-menu is-hidden">
              <a
                id="plus-menu"
                class="button action-button is-solid primary-button raised"
              >
                <Plus />
              </a>
              <div class="plus-drop">
                <div class="drop-content">
                  <a>
                    <Book />
                    <div class="meta">
                      <span>Guides</span>
                      <span>Learn everything fast</span>
                    </div>
                  </a>
                  <a>
                    <HelpCircle />
                    <div class="meta">
                      <span>FAQ</span>
                      <span>Most asked questions</span>
                    </div>
                  </a>
                  <a>
                    <LifeBuoy />
                    <div class="meta">
                      <span>Assistance</span>
                      <span>Get in touch with support</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MainNavbar = (props) => {
  const {
    exploreOverlay,
    setExploreOverlay,
    messageOverlay,
    setMessageOverlay,
  } = props;

  const [navScroll, setNavScroll] = useState();

  useLayoutEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 10) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <MobileNavbar
        messageOverlay={messageOverlay}
        setMessageOverlay={setMessageOverlay}
        exploreOverlay={exploreOverlay}
        setExploreOverlay={setExploreOverlay}
      />
      <BasicNavbar
        messageOverlay={messageOverlay}
        setMessageOverlay={setMessageOverlay}
        exploreOverlay={exploreOverlay}
        setExploreOverlay={setExploreOverlay}
      />
    </>
  );
};
