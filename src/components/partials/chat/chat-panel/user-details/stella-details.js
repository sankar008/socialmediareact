import UserDetailsDropdown from "../../chat-dropdowns/user-details-dropdown";

export default function StellaDetails() {
  return (
    <div id="stella-details" class="panel-body is-user-details is-hidden">
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
            data-demo-src="assets/img/avatars/stella.jpg"
            alt=""
          />
          <div class="call-me">
            <i class="mdi mdi-phone"></i>
          </div>
        </div>

        <div class="user-meta has-text-centered">
          <h3>Stella Bergmann</h3>
          <h4>Shop Owner</h4>
        </div>

        <div class="user-badges">
          <div class="hexagon is-purple">
            <div>
              <i class="mdi mdi-bomb"></i>
            </div>
          </div>
          <div class="hexagon is-red">
            <div>
              <i class="mdi mdi-check-decagram"></i>
            </div>
          </div>
          <div class="hexagon is-accent">
            <div>
              <i class="mdi mdi-flash"></i>
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
                  Trending Fashions
                </a>
              </span>
            </div>
          </div>
          <div class="about-block">
            <i class="mdi mdi-map-marker"></i>
            <div class="about-text">
              <span>From</span>
              <span>
                <a class="is-inverted" href="#">
                  Oklahoma City
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
