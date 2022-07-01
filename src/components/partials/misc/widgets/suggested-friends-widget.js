import { useState } from "react";
import { MoreVertical, Settings, Trash2, UserPlus, Users } from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";

export default function SuggestedFriendsWidget() {
  const [activeDropDown, setActiveDropDown] = useState(false);

  return (
    <div className="card">
      <div className="card-heading is-bordered">
        <h4>Suggested Friends</h4>
        <div
          className={`dropdown is-spaced is-right dropdown-trigger ${
            activeDropDown ? "is-active" : ""
          }`}
        >
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
          <div className="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <a href="#" className="dropdown-item">
                <div className="media">
                  <Users />
                  <div className="media-content">
                    <h3>All Suggestions</h3>
                    <small>View all friend suggestions.</small>
                  </div>
                </div>
              </a>
              <a className="dropdown-item">
                <div className="media">
                  <Settings />
                  <div className="media-content">
                    <h3>Settings</h3>
                    <small>Access widget settings.</small>
                  </div>
                </div>
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <div className="media">
                  <Trash2 />
                  <div className="media-content">
                    <h3>Remove</h3>
                    <small>Removes this widget from your feed.</small>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body no-padding">
        <div className="add-friend-block transition-block">
          <img
            src="https://friendkit.cssninja.io/assets/img/avatars/nelly.png"
            data-demo-src="assets/img/avatars/nelly.png"
            data-user-popover="9"
            alt=""
          />
          <div className="page-meta">
            <span>Nelly Schwartz</span>
            <span>Melbourne</span>
          </div>
          <div className="add-friend add-transition">
            <UserPlus />
          </div>
        </div>
        <div className="add-friend-block transition-block">
          <img
            src="https://friendkit.cssninja.io/assets/img/avatars/lana.jpeg"
            data-demo-src="assets/img/avatars/lana.jpeg"
            data-user-popover="10"
            alt=""
          />
          <div className="page-meta">
            <span>Lana Henrikssen</span>
            <span>Helsinki</span>
          </div>
          <div className="add-friend add-transition">
            <UserPlus />
          </div>
        </div>
        <div className="add-friend-block transition-block">
          <img
            src="https://friendkit.cssninja.io/assets/img/avatars/gaelle.jpeg"
            data-demo-src="assets/img/avatars/gaelle.jpeg"
            data-user-popover="11"
            alt=""
          />
          <div className="page-meta">
            <span>Gaelle Morris</span>
            <span>Lyon</span>
          </div>
          <div className="add-friend add-transition">
            <UserPlus />
          </div>
        </div>
        <div className="add-friend-block transition-block">
          <img
            src="https://friendkit.cssninja.io/assets/img/avatars/mike.jpg"
            data-demo-src="assets/img/avatars/mike.jpg"
            data-user-popover="12"
            alt=""
          />
          <div className="page-meta">
            <span>Mike Lasalle</span>
            <span>Toronto</span>
          </div>
          <div className="add-friend add-transition">
            <UserPlus />
          </div>
        </div>
        <div className="add-friend-block transition-block">
          <img
            src="https://friendkit.cssninja.io/assets/img/avatars/rolf.jpg"
            data-demo-src="assets/img/avatars/rolf.jpg"
            data-user-popover="13"
            alt=""
          />
          <div className="page-meta">
            <span>Rolf Krupp</span>
            <span>Berlin</span>
          </div>
          <div className="add-friend add-transition">
            <UserPlus />
          </div>
        </div>
      </div>
    </div>
  );
}
