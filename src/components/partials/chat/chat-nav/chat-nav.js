import SettingsDropdown from "./dropdowns/settings-dropdown";
import ChatMenuDropdown from "./dropdowns/chat-menu-dropdown";
import { AtSign, Search, Star, X } from "react-feather";

export default function ChatNav(props) {
  const { messageOverlay, setMessageOverlay } = props;

  return (
    <div class="chat-nav">
      <div class="nav-start">
        <div class="recipient-block">
          <div class="avatar-container">
            <img
              class="user-avatar"
              src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
              data-demo-src="assets/img/avatars/dan.jpg"
              alt=""
            />
          </div>
          <div class="username">
            <span>Dan Walker</span>
            <span>
              <Star />
              <span>| Online</span>
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
              <Search />
            </div>
          </div>
        </div>
        <a class="chat-nav-item is-icon is-hidden-mobile">
          <AtSign />
        </a>
        <a class="chat-nav-item is-icon is-hidden-mobile">
          <Star />
        </a>

        <ChatMenuDropdown />

        <a
          class="chat-nav-item is-icon close-chat"
          onClick={() => setMessageOverlay(false)}
        >
          <X />
        </a>
      </div>
    </div>
  );
}
