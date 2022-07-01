export default function NellyConversation() {
  return (
    <div
      id="nelly-conversation"
      class="chat-body-inner has-slimscroll is-hidden"
    >
      <div class="date-divider">
        <hr class="date-divider-line" />
        <span class="date-divider-text">September 17</span>
      </div>

      <div class="chat-message is-sent">
        <img
          src="https://via.placeholder.com/300x300"
          data-demo-src="assets/img/avatars/jenna.png"
          alt=""
        />
        <div class="message-block">
          <span>8:22pm</span>
          <div class="message-text">So you watched the movie?</div>
        </div>
      </div>

      <div class="chat-message is-sent">
        <img
          src="https://via.placeholder.com/300x300"
          data-demo-src="assets/img/avatars/jenna.png"
          alt=""
        />
        <div class="message-block">
          <span>8:22pm</span>
          <div class="message-text">Was it scary?</div>
        </div>
      </div>

      <div class="chat-message is-received">
        <img
          src="https://via.placeholder.com/300x300"
          data-demo-src="assets/img/avatars/nelly.png"
          alt=""
        />
        <div class="message-block">
          <span>9:03pm</span>
          <div class="message-text">
            It was so frightening, i felt my heart was about to blow inside my
            chest.
          </div>
        </div>
      </div>
    </div>
  );
}
