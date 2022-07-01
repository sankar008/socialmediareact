import { useState } from "react";
import {
  Bookmark,
  FileText,
  MoreVertical,
  Settings,
  Trash2,
} from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";

export default function RecommendedPagesWidget() {
  const [activeDropDown, setActiveDropDown] = useState(false);

  return (
    <div className="card">
      <div className="card-heading is-bordered">
        <h4>Recommended Pages</h4>
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
                  <FileText />
                  <div className="media-content">
                    <h3>All Recommandations</h3>
                    <small>View all recommandations.</small>
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
        <div className="page-block transition-block">
          <img
            src="https://friendkit.cssninja.io/assets/img/icons/logos/fastpizza.svg"
            data-page-popover="0"
            alt=""
          />
          <div className="page-meta">
            <span>Fast Pizza</span>
            <span>Pizza & Fast Food</span>
          </div>
          <div className="add-page add-transition">
            <Bookmark />
          </div>
        </div>
        <div className="page-block transition-block">
          <img
            src="https://friendkit.cssninja.io/assets/img/icons/logos/lonelydroid.svg"
            data-page-popover="1"
            alt=""
          />
          <div className="page-meta">
            <span>Lonely Droid</span>
            <span>Technology</span>
          </div>
          <div className="add-page add-transition">
            <Bookmark />
          </div>
        </div>
        <div className="page-block transition-block">
          <img
            src="https://friendkit.cssninja.io/assets/img/icons/logos/metamovies.svg"
            data-page-popover="2"
            alt=""
          />
          <div className="page-meta">
            <span>Meta Movies</span>
            <span>Movies / Entertainment</span>
          </div>
          <div className="add-page add-transition">
            <Bookmark />
          </div>
        </div>
        <div className="page-block transition-block">
          <img
            src="https://friendkit.cssninja.io/assets/img/icons/logos/nuclearjs.svg"
            data-page-popover="3"
            alt=""
          />
          <div className="page-meta">
            <span>Nuclearjs</span>
            <span>Technology</span>
          </div>
          <div className="add-page add-transition">
            <Bookmark />
          </div>
        </div>
        <div className="page-block transition-block">
          <img
            src="https://friendkit.cssninja.io/assets/img/icons/logos/slicer.svg"
            data-page-popover="4"
            alt=""
          />
          <div className="page-meta">
            <span>Slicer</span>
            <span>Web / Design</span>
          </div>
          <div className="add-page add-transition">
            <Bookmark />
          </div>
        </div>
      </div>
    </div>
  );
}
