import { useState } from "react";
import { Eye, List, MoreVertical, Settings, Trash2 } from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";

export default function LatestActivityWidget() {
  const [activeDropDown, setActiveDropDown] = useState(false);

  return (
    <div id="latest-activity-1" className="card">
      <div className="card-heading is-bordered">
        <h4>Latest activity</h4>
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
                  <List />
                  <div className="media-content">
                    <h3>All updates</h3>
                    <small>View my network's activity.</small>
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
        <div className="page-block">
          <img
            src="https://friendkit.cssninja.io/assets/img/avatars/hanzo.svg"
            data-page-popover="5"
            alt=""
          />
          <div className="page-meta">
            <span>Css Ninja</span>
            <span>3 hours ago</span>
          </div>
          <div className="add-page">
            <Eye />
          </div>
        </div>
        <div className="page-block">
          <img
            src="https://friendkit.cssninja.io/assets/img/avatars/milly.jpg"
            alt=""
            data-user-popover="7"
          />
          <div className="page-meta">
            <span>Milly Augustine</span>
            <span>5 hours ago</span>
          </div>
          <div className="add-page">
            <Eye />
          </div>
        </div>
        <div className="page-block">
          <img
            src="https://friendkit.cssninja.io/assets/img/icons/logos/nuclearjs.svg"
            data-demo-src="assets/img/icons/logos/nuclearjs.svg"
            data-page-popover="3"
            alt=""
          />
          <div className="page-meta">
            <span>Nuclearjs</span>
            <span>Yesterday</span>
          </div>
          <div className="add-page">
            <Eye />
          </div>
        </div>
      </div>
    </div>
  );
}
