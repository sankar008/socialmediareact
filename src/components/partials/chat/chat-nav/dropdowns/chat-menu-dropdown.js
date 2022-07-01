import {
  DownloadCloud,
  FileText,
  Gift,
  LifeBuoy,
  MoreVertical,
  Users,
} from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";

export default function ChatMenuDropdown() {
  const [activeDropDown, setActiveDropDown] = useState(false);

  return (
    <div
      class={`dropdown is-spaced is-neutral is-right dropdown-trigger  ${
        activeDropDown ? "is-active" : ""
      }`}
    >
      <OutsideClickHandler
        onOutsideClick={() => {
          setActiveDropDown(false);
        }}
      >
        <a
          class="chat-nav-item is-icon no-margin"
          onClick={() => setActiveDropDown(!activeDropDown)}
        >
          <MoreVertical />
        </a>
      </OutsideClickHandler>
      <div class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            <div class="media">
              <FileText />
              <div class="media-content">
                <h3>Files</h3>
                <small>View all your files.</small>
              </div>
            </div>
          </a>
          <a class="dropdown-item">
            <div class="media">
              <Users />
              <div class="media-content">
                <h3>Users</h3>
                <small>View all users you're talking to.</small>
              </div>
            </div>
          </a>
          <hr class="dropdown-divider" />
          <a class="dropdown-item">
            <div class="media">
              <Gift />
              <div class="media-content">
                <h3>Daily bonus</h3>
                <small>Get your daily bonus.</small>
              </div>
            </div>
          </a>
          <a class="dropdown-item">
            <div class="media">
              <DownloadCloud />
              <div class="media-content">
                <h3>Downloads</h3>
                <small>See all your downloads.</small>
              </div>
            </div>
          </a>
          <hr class="dropdown-divider" />
          <a class="dropdown-item">
            <div class="media">
              <LifeBuoy />
              <div class="media-content">
                <h3>Support</h3>
                <small>Reach our support team.</small>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
