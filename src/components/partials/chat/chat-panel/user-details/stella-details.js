import UserDetailsDropdown from "../../chat-dropdowns/user-details-dropdown";

export default function StellaDetails() {
  return (
    <div id="stella-details" className="panel-body is-user-details is-hidden">
      <div className="panel-body-inner">
        <div className="subheader">
          <div className="action-icon">
            <i className="mdi mdi-video"></i>
          </div>
          <div className="action-icon">
            <i className="mdi mdi-camera"></i>
          </div>
          <div className="action-icon">
            <i className="mdi mdi-microphone"></i>
          </div>
          <UserDetailsDropdown />
        </div>

        <div className="details-avatar">
          <img
            src="https://via.placeholder.com/300x300"
            data-demo-src="assets/img/avatars/stella.jpg"
            alt=""
          />
          <div className="call-me">
            <i className="mdi mdi-phone"></i>
          </div>
        </div>

        <div className="user-meta has-text-centered">
          <h3>Stella Bergmann</h3>
          <h4>Shop Owner</h4>
        </div>

        <div className="user-badges">
          <div className="hexagon is-purple">
            <div>
              <i className="mdi mdi-bomb"></i>
            </div>
          </div>
          <div className="hexagon is-red">
            <div>
              <i className="mdi mdi-check-decagram"></i>
            </div>
          </div>
          <div className="hexagon is-accent">
            <div>
              <i className="mdi mdi-flash"></i>
            </div>
          </div>
        </div>

        <div className="user-about">
          <label>About Me</label>
          <div className="about-block">
            <i className="mdi mdi-domain"></i>
            <div className="about-text">
              <span>Works at</span>
              <span>
                <a className="is-inverted" href="#">
                  Trending Fashions
                </a>
              </span>
            </div>
          </div>
          <div className="about-block">
            <i className="mdi mdi-map-marker"></i>
            <div className="about-text">
              <span>From</span>
              <span>
                <a className="is-inverted" href="#">
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
