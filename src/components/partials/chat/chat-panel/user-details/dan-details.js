import { Camera, Mic, Phone, Video } from "react-feather";
import UserDetailsDropdown from "../../chat-dropdowns/user-details-dropdown";
import UserBadge from "./user-badge";

export default function DanDetails() {
  return (
    <div id="dan-details" class="panel-body is-user-details">
      <div class="panel-body-inner">
        <div class="subheader">
          <div class="action-icon">
            <Video size={18} />
          </div>
          <div class="action-icon">
            <Camera size={18} />
          </div>
          <div class="action-icon">
            <Mic size={18} />
          </div>
          <UserDetailsDropdown />
        </div>

        <div class="details-avatar">
          <img
            src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
            data-demo-src="assets/img/avatars/dan.jpg"
            alt=""
          />
          <div class="call-me">
            <Phone size={16} color="#fff"/>
          </div>
        </div>

        <div class="user-meta has-text-centered">
          <h3>Dan Walker</h3>
          <h4>IOS Developer</h4>
        </div>

        <UserBadge />

        <div class="user-about">
          <label>About Me</label>
          <div class="about-block">
            <i class="mdi mdi-domain"></i>
            <div class="about-text">
              <span>Works at</span>
              <span>
                <a class="is-inverted" href="#">
                  WebSmash Inc.
                </a>
              </span>
            </div>
          </div>
          <div class="about-block">
            <i class="mdi mdi-school"></i>
            <div class="about-text">
              <span>Studied at</span>
              <span>
                <a class="is-inverted" href="#">
                  Riverdale University
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
