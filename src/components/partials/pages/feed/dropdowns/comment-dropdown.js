import { useState } from "react";
import { Flag, MoreVertical, X } from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";

export default function CommentDropdown() {
  const [activeDropDown, setActiveDropDown] = useState(false);

  return (
    <div
      class={`dropdown is-spaced is-right is-neutral dropdown-trigger ${
        activeDropDown ? "is-active" : ""
      }`}
    >
      <div>
        <OutsideClickHandler
          onOutsideClick={() => {
            setActiveDropDown(false);
          }}
        >
          <div
            class="button"
            onClick={() => setActiveDropDown(!activeDropDown)}
          >
            <MoreVertical />
          </div>
        </OutsideClickHandler>
      </div>
      <div class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a class="dropdown-item">
            <div class="media">
              <X />
              <div class="media-content">
                <h3>Hide</h3>
                <small>Hide this comment.</small>
              </div>
            </div>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <div class="media">
              <Flag />
              <div class="media-content">
                <h3>Report</h3>
                <small>Report this comment.</small>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
