import { useState } from "react";
import { Mail, MoreVertical, Share2, User, X } from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";

export default function UserDetailsDropdown() {
  const [activeDropDown, setActiveDropDown] = useState(false);

  return (
    <div
      class={`dropdown details-dropdown is-spaced is-neutral is-right dropdown-trigger ml-auto
     ${activeDropDown ? "is-active" : ""}`}
    >
      <OutsideClickHandler
        onOutsideClick={() => {
          setActiveDropDown(false);
        }}
      >
        <div
          class="action-icon"
          onClick={() => setActiveDropDown(!activeDropDown)}
        >
          <MoreVertical size={18} />
        </div>
      </OutsideClickHandler>

      <div class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            <div class="media">
              <User />
              <div class="media-content">
                <h3>View profile</h3>
                <small>View this user's profile.</small>
              </div>
            </div>
          </a>
          <a class="dropdown-item">
            <div class="media">
              <Mail />
              <div class="media-content">
                <h3>Send message</h3>
                <small>Send a message to the user's inbox.</small>
              </div>
            </div>
          </a>
          <hr class="dropdown-divider" />
          <a class="dropdown-item">
            <div class="media">
              <Share2 />
              <div class="media-content">
                <h3>Share profile</h3>
                <small>Share this user's profile.</small>
              </div>
            </div>
          </a>
          <a class="dropdown-item">
            <div class="media">
              <X />
              <div class="media-content">
                <h3>Block user</h3>
                <small>Block this user permanently.</small>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
