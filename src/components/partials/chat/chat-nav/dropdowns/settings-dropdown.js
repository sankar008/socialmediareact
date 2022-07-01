import {
  Bell,
  BellOff,
  Box,
  MessageSquare,
  Settings,
  Trash2,
} from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";

export default function SettingsDropdown() {
  const [activeDropDown, setActiveDropDown] = useState(false);

  return (
    <div
      class={`dropdown is-spaced is-neutral is-right dropdown-trigger ${
        activeDropDown ? "is-active" : ""
      }`}
    >
      <OutsideClickHandler
        onOutsideClick={() => {
          setActiveDropDown(false);
        }}
      >
        <a
          class="chat-nav-item is-icon"
          onClick={() => setActiveDropDown(!activeDropDown)}
        >
          <Settings />
        </a>
      </OutsideClickHandler>
      <div class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            <div class="media">
              <MessageSquare />
              <div class="media-content">
                <h3>Details</h3>
                <small>View this conversation's details.</small>
              </div>
            </div>
          </a>
          <a class="dropdown-item">
            <div class="media">
              <Settings />
              <div class="media-content">
                <h3>Preferences</h3>
                <small>Define your preferences.</small>
              </div>
            </div>
          </a>
          <hr class="dropdown-divider" />
          <a class="dropdown-item">
            <div class="media">
              <Bell />
              <div class="media-content">
                <h3>Notifications</h3>
                <small>Set notifications settings.</small>
              </div>
            </div>
          </a>
          <a class="dropdown-item">
            <div class="media">
              <BellOff />
              <div class="media-content">
                <h3>Silence</h3>
                <small>Disable notifications.</small>
              </div>
            </div>
          </a>
          <hr class="dropdown-divider" />
          <a class="dropdown-item">
            <div class="media">
              <Box />
              <div class="media-content">
                <h3>Archive</h3>
                <small>Archive this conversation.</small>
              </div>
            </div>
          </a>
          <a class="dropdown-item">
            <div class="media">
              <Trash2 />
              <div class="media-content">
                <h3>Delete</h3>
                <small>Delete this conversation.</small>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
