export default function EliseConversation() {
  return (
    <div
      id="elise-conversation"
      class="chat-body-inner has-slimscroll is-hidden"
    >
      <div class="date-divider">
        <hr class="date-divider-line" />
        <span class="date-divider-text">September 28</span>
      </div>

      <div class="chat-message is-sent">
        <img
          src="https://via.placeholder.com/300x300"
          data-demo-src="assets/img/avatars/jenna.png"
          alt=""
        />
        <div class="message-block">
          <span>11:53am</span>
          <div class="message-text">
            Elise, i forgot my folder at your place yesterday.
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
          <span>11:53am</span>
          <div class="message-text">I need it badly, it's work stuff.</div>
        </div>
      </div>

      <div class="chat-message is-received">
        <img
          src="https://via.placeholder.com/300x300"
          data-demo-src="assets/img/avatars/elise.jpg"
          alt=""
        />
        <div class="message-block">
          <span>12:19pm</span>
          <div class="message-text">
            Yeah i noticed. I'll drop it in half an hour at your office.
          </div>
        </div>
      </div>
    </div>
  );
}
