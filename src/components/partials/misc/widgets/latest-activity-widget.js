import { Eye, List, MoreVertical, Settings, Trash2 } from "react-feather";

export default function LatestActivityWidget() {
  return (
    <div id="latest-activity-1" class="card">
      <div class="card-heading is-bordered">
        <h4>Latest activity</h4>
        <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
          <div>
            <div class="button">
              <MoreVertical />
            </div>
          </div>
          <div class="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">
                <div class="media">
                  <List />
                  <div class="media-content">
                    <h3>All updates</h3>
                    <small>View my network's activity.</small>
                  </div>
                </div>
              </a>
              <a class="dropdown-item">
                <div class="media">
                  <Settings />
                  <div class="media-content">
                    <h3>Settings</h3>
                    <small>Access widget settings.</small>
                  </div>
                </div>
              </a>
              <hr class="dropdown-divider" />
              <a href="#" class="dropdown-item">
                <div class="media">
                  <Trash2 />
                  <div class="media-content">
                    <h3>Remove</h3>
                    <small>Removes this widget from your feed.</small>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body no-padding">
        <div class="page-block">
          <img
            src="https://friendkit.cssninja.io/assets/img/avatars/hanzo.svg"
            data-page-popover="5"
            alt=""
          />
          <div class="page-meta">
            <span>Css Ninja</span>
            <span>3 hours ago</span>
          </div>
          <div class="add-page">
            <Eye />
          </div>
        </div>
        <div class="page-block">
          <img
            src="https://friendkit.cssninja.io/assets/img/avatars/milly.jpg"
            alt=""
            data-user-popover="7"
          />
          <div class="page-meta">
            <span>Milly Augustine</span>
            <span>5 hours ago</span>
          </div>
          <div class="add-page">
            <Eye />
          </div>
        </div>
        <div class="page-block">
          <img
            src="https://friendkit.cssninja.io/assets/img/icons/logos/nuclearjs.svg"
            data-demo-src="assets/img/icons/logos/nuclearjs.svg"
            data-page-popover="3"
            alt=""
          />
          <div class="page-meta">
            <span>Nuclearjs</span>
            <span>Yesterday</span>
          </div>
          <div class="add-page">
            <Eye />
          </div>
        </div>
      </div>
    </div>
  );
}
