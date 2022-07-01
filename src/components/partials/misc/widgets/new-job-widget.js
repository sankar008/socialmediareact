import { useState } from "react";
import {
  Briefcase,
  Clock,
  MessageCircle,
  MoreVertical,
  Trash2
} from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";

export default function NewJobWidget() {
  const [activeDropDown, setActiveDropDown] = useState(false);

  return (
    <div
      className="card is-new-job-card has-background-image"
      data-background="assets/img/illustrations/cards/job-bg.svg"
    >
      <div className="card-heading">
        <Briefcase />
        <div
          className={`dropdown is-spaced is-right dropdown-trigger is-light ${
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
                  <Clock />
                  <div className="media-content">
                    <h3>Remind me</h3>
                    <small>Remind me of this later today.</small>
                  </div>
                </div>
              </a>
              <a className="dropdown-item">
                <div className="media">
                  <MessageCircle />
                  <div className="media-content">
                    <h3>Message</h3>
                    <small>Send an automatic congratz message.</small>
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
      <div className="card-body">
        <div>
          <div className="job-avatar">
            <img
              src="https://friendkit.cssninja.io/assets/img/avatars/nelly.png"
              data-demo-src="assets/img/avatars/nelly.png"
              alt=""
            />
          </div>
          <div className="job-content">
            <h4>Nelly has a new job!</h4>
            <p>Send her message congratulating her for getting this job.</p>
            <button type="button" className="button light-button">
              Write Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
