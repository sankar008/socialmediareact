import { useState } from "react";
import { Flag, MoreVertical, X } from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";

export default function CommentDropdown() {
  const [activeDropDown, setActiveDropDown] = useState(false);

  return (
    <div
      className={`dropdown is-spaced is-right is-neutral dropdown-trigger ${
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
            className="button"
            onClick={() => setActiveDropDown(!activeDropDown)}
          >
            <MoreVertical />
          </div>
        </OutsideClickHandler>
      </div>
      <div className="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <a className="dropdown-item">
            <div className="media">
              <X />
              <div className="media-content">
                <h3>Hide</h3>
                <small>Hide this comment.</small>
              </div>
            </div>
          </a>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item">
            <div className="media">
              <Flag />
              <div className="media-content">
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
