import { Bell, Bookmark, Flag, MoreVertical } from "react-feather";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default function FeedPostDropdown() {
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
          <a href="#" className="dropdown-item">
            <div className="media">
              <Bookmark />
              <div className="media-content">
                <h3>Bookmark</h3>
                <small>Add this post to your bookmarks.</small>
              </div>
            </div>
          </a>
          <a className="dropdown-item">
            <div className="media">
              <Bell />
              <div className="media-content">
                <h3>Notify me</h3>
                <small>Send me the updates.</small>
              </div>
            </div>
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <div className="media">
              <Flag />
              <div className="media-content">
                <h3>Flag</h3>
                <small>In case of inappropriate content.</small>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
