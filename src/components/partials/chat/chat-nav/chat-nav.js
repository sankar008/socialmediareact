import SettingsDropdown from "./dropdowns/settings-dropdown";
import ChatMenuDropdown from "./dropdowns/chat-menu-dropdown";

export default function ChatNav() {
  return (
    <div class="chat-nav">
      <div class="nav-start">
        <div class="recipient-block">
          <div class="avatar-container">
            <img
              class="user-avatar"
              src="https://via.placeholder.com/300x300"
              data-demo-src="assets/img/avatars/dan.jpg"
              alt=""
            />
          </div>
          <div class="username">
            <span>Dan Walker</span>
            <span>
              <i data-feather="star"></i> <span>| Online</span>
            </span>
          </div>
        </div>
      </div>
      <div class="nav-end">
        <SettingsDropdown />

        <div class="chat-search">
          <div class="control has-icon">
            <input type="text" class="input" placeholder="Search messages" />
            <div class="form-icon">
              <i data-feather="search"></i>
            </div>
          </div>
        </div>
        <a class="chat-nav-item is-icon is-hidden-mobile">
          <i data-feather="at-sign"></i>
        </a>
        <a class="chat-nav-item is-icon is-hidden-mobile">
          <i data-feather="star"></i>
        </a>

        <ChatMenuDropdown />

        <a class="chat-nav-item is-icon close-chat">
          <i data-feather="x"></i>
        </a>
      </div>
    </div>
  );
}
