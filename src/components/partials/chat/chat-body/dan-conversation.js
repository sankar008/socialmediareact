export default function DanConversation() {
  return (
    <div id="dan-conversation" class="chat-body-inner has-slimscroll">
      <div class="date-divider">
        <hr class="date-divider-line" />
        <span class="date-divider-text">Today</span>
      </div>

      <div class="chat-message is-received">
        <img
          src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
          data-demo-src="assets/img/avatars/dan.jpg"
          alt=""
        />
        <div class="message-block">
          <span>8:03am</span>
          <div class="message-text">
            Hi Jenna! I made a new design, and i wanted to show it to you.
          </div>
        </div>
      </div>

      <div class="chat-message is-received">
        <img
          src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
          data-demo-src="assets/img/avatars/dan.jpg"
          alt=""
        />
        <div class="message-block">
          <span>8:03am</span>
          <div class="message-text">
            It's quite clean and it's inspired from Bulkit.
          </div>
        </div>
      </div>

      <div class="chat-message is-sent">
        <img
          src="https://friendkit.cssninja.io/assets/img/avatars/jenna.png"
          data-demo-src="assets/img/avatars/jenna.png"
          alt=""
        />
        <div class="message-block">
          <span>8:12am</span>
          <div class="message-text">Oh really??! I want to see that.</div>
        </div>
      </div>

      <div class="chat-message is-received">
        <img
          src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
          data-demo-src="assets/img/avatars/dan.jpg"
          alt=""
        />
        <div class="message-block">
          <span>8:13am</span>
          <div class="message-text">FYI it was done in less than a day.</div>
        </div>
      </div>

      <div class="chat-message is-sent">
        <img
          src="https://friendkit.cssninja.io/assets/img/avatars/jenna.png"
          data-demo-src="assets/img/avatars/jenna.png"
          alt=""
        />
        <div class="message-block">
          <span>8:17am</span>
          <div class="message-text">
            Great to hear it. Just send me the PSD files so i can have a look at
            it.
          </div>
        </div>
      </div>

      <div class="chat-message is-sent">
        <img
          src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
          data-demo-src="assets/img/avatars/jenna.png"
          alt=""
        />
        <div class="message-block">
          <span>8:18am</span>
          <div class="message-text">
            And if you have a prototype, you can also send me the link to it.
          </div>
        </div>
      </div>
    </div>
  );
}
