import { Bell, Bookmark, Flag, MoreVertical } from "react-feather";

export default function FeedPostDropdown() {
  return (
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
              <Bookmark />
              <div class="media-content">
                <h3>Bookmark</h3>
                <small>Add this post to your bookmarks.</small>
              </div>
            </div>
          </a>
          <a class="dropdown-item">
            <div class="media">
              <Bell />
              <div class="media-content">
                <h3>Notify me</h3>
                <small>Send me the updates.</small>
              </div>
            </div>
          </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item">
            <div class="media">
              <Flag />
              <div class="media-content">
                <h3>Flag</h3>
                <small>In case of inappropriate content.</small>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
