import { useState } from "react";
import { MoreVertical, Plus, Settings, Trash2, Tv } from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";

export default function StoriesWidget() {
  const [activeDropDown, setActiveDropDown] = useState(false);

  return (
    <div className="card">
      <div className="card-heading is-bordered">
        <h4>Stories</h4>
        <div
          className={`dropdown is-spaced is-right is-neutral dropdown-trigger ${
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
                  <Tv />
                  <div className="media-content">
                    <h3>Browse stories</h3>
                    <small>View all recent stories.</small>
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
        <div className="story-block">
          <a id="add-story-button" href="#" className="add-story">
            <Plus />
          </a>
          <div className="story-meta">
            <span>Add a new Story</span>
            <span>Share an image, a video or some text</span>
          </div>
        </div>
        <div className="story-block">
          <div className="img-wrapper">
            <img
              src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
              data-demo-src="assets/img/avatars/dan.jpg"
              data-user-popover="1"
              alt=""
            />
          </div>
          <div className="story-meta">
            <span>Dan Walker</span>
            <span>1 hour ago</span>
          </div>
        </div>
        <div className="story-block">
          <div className="img-wrapper">
            <img
              src="https://friendkit.cssninja.io/assets/img/avatars/bobby.jpg"
              data-demo-src="assets/img/avatars/bobby.jpg"
              data-user-popover="8"
              alt=""
            />
          </div>
          <div className="story-meta">
            <span>Bobby Brown</span>
            <span>3 days ago</span>
          </div>
        </div>
        <div className="story-block">
          <div className="img-wrapper">
            <img
              src="https://friendkit.cssninja.io/assets/img/avatars/elise.jpg"
              data-demo-src="assets/img/avatars/elise.jpg"
              data-user-popover="6"
              alt=""
            />
          </div>
          <div className="story-meta">
            <span>Elise Walker</span>
            <span>Last week</span>
          </div>
        </div>
      </div>
    </div>
  );
}
