import { Clock, Gift, MessageCircle, MoreVertical, Trash2 } from "react-feather";

export default function BirthdayWidget() {
  return (
    <div
      class="card is-birthday-card has-background-image"
      data-background="assets/img/illustrations/cards/birthday-bg.svg"
    >
      <div class="card-heading">
        <Gift />
        <div class="dropdown is-spaced is-right dropdown-trigger is-light">
          <div>
            <div class="button">
              <MoreVertical />
            </div>
          </div>
          <div class="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">
                <div class="media">
                  <Clock />
                  <div class="media-content">
                    <h3>Remind me</h3>
                    <small>Remind me of this later today.</small>
                  </div>
                </div>
              </a>
              <a class="dropdown-item">
                <div class="media">
                  <MessageCircle />
                  <div class="media-content">
                    <h3>Message</h3>
                    <small>Send an automatic greeting message.</small>
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
      <div class="card-body">
        <div>
          <div class="birthday-avatar">
            <img
              src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
              data-demo-src="assets/img/avatars/dan.jpg"
              alt=""
            />
            <div class="birthday-indicator">31</div>
          </div>
          <div class="birthday-content">
            <h4>Dan turns 31 today!</h4>
            <p>Send him your best wishes by leaving something on his wall.</p>
            <button type="button" class="button light-button">
              Write Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
