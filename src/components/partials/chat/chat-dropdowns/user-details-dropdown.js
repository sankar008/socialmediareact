export default function UserDetailsDropdown() {
  return (
    <div class="dropdown details-dropdown is-spaced is-neutral is-right dropdown-trigger ml-auto">
      <div>
        <div class="action-icon">
          <i class="mdi mdi-dots-vertical"></i>
        </div>
      </div>
      <div class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            <div class="media">
              <i data-feather="user"></i>
              <div class="media-content">
                <h3>View profile</h3>
                <small>View this user's profile.</small>
              </div>
            </div>
          </a>
          <a class="dropdown-item">
            <div class="media">
              <i data-feather="mail"></i>
              <div class="media-content">
                <h3>Send message</h3>
                <small>Send a message to the user's inbox.</small>
              </div>
            </div>
          </a>
          <hr class="dropdown-divider" />
          <a class="dropdown-item">
            <div class="media">
              <i data-feather="share-2"></i>
              <div class="media-content">
                <h3>Share profile</h3>
                <small>Share this user's profile.</small>
              </div>
            </div>
          </a>
          <a class="dropdown-item">
            <div class="media">
              <i data-feather="x"></i>
              <div class="media-content">
                <h3>Block user</h3>
                <small>Block this user permanently.</small>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
