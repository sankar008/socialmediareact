import UserDetailsDropdown from "../../chat-dropdowns/user-details-dropdown";

export default function DanDetails() {
  return (
    <div id="dan-details" class="panel-body is-user-details">
      <div class="panel-body-inner">
        <div class="subheader">
          <div class="action-icon">
            <i class="mdi mdi-video"></i>
          </div>
          <div class="action-icon">
            <i class="mdi mdi-camera"></i>
          </div>
          <div class="action-icon">
            <i class="mdi mdi-microphone"></i>
          </div>
          <UserDetailsDropdown />
        </div>

        <div class="details-avatar">
          <img
            src="https://via.placeholder.com/300x300"
            data-demo-src="assets/img/avatars/dan.jpg"
            alt=""
          />
          <div class="call-me">
            <i class="mdi mdi-phone"></i>
          </div>
        </div>

        <div class="user-meta has-text-centered">
          <h3>Dan Walker</h3>
          <h4>IOS Developer</h4>
        </div>

        <div class="user-badges">
          <div class="hexagon is-red">
            <div>
              <i class="mdi mdi-heart"></i>
            </div>
          </div>
          <div class="hexagon is-green">
            <div>
              <i class="mdi mdi-dog"></i>
            </div>
          </div>
          <div class="hexagon is-accent">
            <div>
              <i class="mdi mdi-flash"></i>
            </div>
          </div>
          <div class="hexagon is-blue">
            <div>
              <i class="mdi mdi-briefcase"></i>
            </div>
          </div>
        </div>

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
