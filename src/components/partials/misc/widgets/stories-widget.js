export default function StoriesWidget() {
  return (
    <div class="card">
      <div class="card-heading is-bordered">
        <h4>Stories</h4>
        <div class="dropdown is-spaced is-neutral is-right dropdown-trigger">
          <div>
            <div class="button">
              <i data-feather="more-vertical"></i>
            </div>
          </div>
          <div class="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">
                <div class="media">
                  <i data-feather="tv"></i>
                  <div class="media-content">
                    <h3>Browse stories</h3>
                    <small>View all recent stories.</small>
                  </div>
                </div>
              </a>
              <a class="dropdown-item">
                <div class="media">
                  <i data-feather="settings"></i>
                  <div class="media-content">
                    <h3>Settings</h3>
                    <small>Access widget settings.</small>
                  </div>
                </div>
              </a>
              <hr class="dropdown-divider" />
              <a href="#" class="dropdown-item">
                <div class="media">
                  <i data-feather="trash-2"></i>
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
        <div class="story-block">
          <a id="add-story-button" href="#" class="add-story">
            <i data-feather="plus"></i>
          </a>
          <div class="story-meta">
            <span>Add a new Story</span>
            <span>Share an image, a video or some text</span>
          </div>
        </div>
        <div class="story-block">
          <div class="img-wrapper">
            <img
              src="https://via.placeholder.com/300x300"
              data-demo-src="assets/img/avatars/dan.jpg"
              data-user-popover="1"
              alt=""
            />
          </div>
          <div class="story-meta">
            <span>Dan Walker</span>
            <span>1 hour ago</span>
          </div>
        </div>
        <div class="story-block">
          <div class="img-wrapper">
            <img
              src="https://via.placeholder.com/300x300"
              data-demo-src="assets/img/avatars/bobby.jpg"
              data-user-popover="8"
              alt=""
            />
          </div>
          <div class="story-meta">
            <span>Bobby Brown</span>
            <span>3 days ago</span>
          </div>
        </div>
        <div class="story-block">
          <div class="img-wrapper">
            <img
              src="https://via.placeholder.com/300x300"
              data-demo-src="assets/img/avatars/elise.jpg"
              data-user-popover="6"
              alt=""
            />
          </div>
          <div class="story-meta">
            <span>Elise Walker</span>
            <span>Last week</span>
          </div>
        </div>
      </div>
    </div>
  );
}
