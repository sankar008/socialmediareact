export default function DavidConversation() {
  return (
    <div
      id="david-conversation"
      class="chat-body-inner has-slimscroll is-hidden"
    >
      <div class="date-divider">
        <hr class="date-divider-line" />
        <span class="date-divider-text">Today</span>
      </div>

      <div class="chat-message is-sent">
        <img
          src="https://via.placeholder.com/300x300"
          data-demo-src="assets/img/avatars/jenna.png"
          alt=""
        />
        <div class="message-block">
          <span>12:34pm</span>
          <div class="message-text">
            Damn you! Why would you even implement this in the game?.
          </div>
        </div>
      </div>

      <div class="chat-message is-sent">
        <img
          src="https://via.placeholder.com/300x300"
          data-demo-src="assets/img/avatars/jenna.png"
          alt=""
        />
        <div class="message-block">
          <span>12:32pm</span>
          <div class="message-text">I just HATE aliens.</div>
        </div>
      </div>

      <div class="chat-message is-received">
        <img
          src="https://via.placeholder.com/300x300"
          data-demo-src="assets/img/avatars/david.jpg"
          alt=""
        />
        <div class="message-block">
          <span>13:09pm</span>
          <div class="message-text">
            C'mon, you just gotta learn the tricks. You can't expect aliens to
            behave like humans. I mean that's how the mechanics are.
          </div>
        </div>
      </div>
      <div class="chat-message is-received">
        <img
          src="https://via.placeholder.com/300x300"
          data-demo-src="assets/img/avatars/david.jpg"
          alt=""
        />
        <div class="message-block">
          <span>13:11pm</span>
          <div class="message-text">
            I checked the replay and for example, you always get supply blocked.
            That's not the right thing to do.
          </div>
        </div>
      </div>
      <div class="chat-message is-sent">
        <img
          src="https://via.placeholder.com/300x300"
          data-demo-src="assets/img/avatars/jenna.png"
          alt=""
        />
        <div class="message-block">
          <span>13:12pm</span>
          <div class="message-text">
            I know but i struggle when i have to decide what to make from
            larvas.
          </div>
        </div>
      </div>
      <div class="chat-message is-received">
        <img
          src="https://via.placeholder.com/300x300"
          data-demo-src="assets/img/avatars/david.jpg"
          alt=""
        />
        <div class="message-block">
          <span>13:17pm</span>
          <div class="message-text">Join me in game, i'll show you.</div>
        </div>
      </div>
    </div>
  );
}
