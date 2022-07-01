export default function DanielConversation() {
  return (
    <div
      id="daniel-conversation"
      class="chat-body-inner has-slimscroll is-hidden"
    >
      <div class="date-divider">
        <hr class="date-divider-line" />
        <span class="date-divider-text">Yesterday</span>
      </div>

      <div class="chat-message is-sent">
        <img
          src="https://via.placeholder.com/300x300"
          data-demo-src="assets/img/avatars/jenna.png"
          alt=""
        />
        <div class="message-block">
          <span>3:24pm</span>
          <div class="message-text">
            Daniel, Amanda told me about your issue, how can I help?
          </div>
        </div>
      </div>

      <div class="chat-message is-received">
        <img
          src="https://via.placeholder.com/300x300"
          data-demo-src="assets/img/avatars/daniel.jpg"
          alt=""
        />
        <div class="message-block">
          <span>3:42pm</span>
          <div class="message-text">
            Hey Jenna, thanks for answering so quickly. Iam stuck, i need a car.
          </div>
        </div>
      </div>

      <div class="chat-message is-received">
        <img
          src="https://via.placeholder.com/300x300"
          data-demo-src="assets/img/avatars/daniel.jpg"
          alt=""
        />
        <div class="message-block">
          <span>3:43pm</span>
          <div class="message-text">
            Can i borrow your car for a quick ride to San Fransisco? Iam running
            behind and there' no train in sight.
          </div>
        </div>
      </div>
    </div>
  );
}
