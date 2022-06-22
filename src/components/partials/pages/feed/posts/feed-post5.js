import CommentDropdown from "../dropdowns/comment-dropdown";
import FeedPostDropdown from "../dropdowns/feed-post-dropdown";
import FeedPostActions from "../buttons/feed-post-actions";
import { AtSign, Camera, Smile, ThumbsUp, X, MessageCircle, Link2 } from "react-feather";

export default function FeedPost1() {
  return (
    <div class="card is-post">
      {/* Main wrap */}
      <div class="content-wrap">
        {/* Header */}
        <div class="card-heading">
          {/* User image */}
          <div class="user-block">
            <div class="image">
              <img
                src="https://img.icons8.com/color/344/person-male.png"
                data-demo-src="assets/img/avatars/david.jpg"
                data-user-popover="4"
                alt=""
              />
            </div>
            <div class="user-info">
              <a href="#">David Kim</a>
              <span class="time">August 02 2018, 03:04pm</span>
            </div>
          </div>
          {/* Right side dropdown */}
          {/* /partials/pages/feed/dropdowns/feed-post-dropdown.html */}
          <FeedPostDropdown />
        </div>
        {/* /Header */}

        {/* Post body */}
        <div class="card-body">
          {/* Post body text */}
          <div class="post-text">
            <p>
              Just discovered this awesome CSS framework named
              <a href="#">#bulmaCss</a>. It's based on flexbox, so easy to use
              and comes with so many mobile first modifiers. You can build
              anything from scratch easily with Bulma.
              <a href="#">#webdesign #bulmaio</a>
            </p>
          </div>
          {/* Featured link */}
          <div class="post-link">
            {/* link image */}
            <div class="link-image">
              <img
                src="https://img.icons8.com/color/344/person-male.png"
                data-demo-src="assets/img/demo/video/bulma2.png"
                alt=""
              />
            </div>
            {/* Link content */}
            <div class="link-content">
              <h4>
                <a href="#">Bulma CSS Framework</a>
              </h4>
              <p>
                Bulma is a mobile first CSS framework built on top of Flexbox.
                It's awesome and so easy to use.
              </p>
              <small>Bulma.io</small>
            </div>
            {/* Post actions */}
            {/* /partials/pages/feed/buttons/feed-post-actions.html */}
            <FeedPostActions />
          </div>
        </div>
        {/* /Post body */}

        {/* Post footer */}
        <div class="card-footer">
          {/* Followers */}
          <div class="likers-group">
            <img
              src="https://img.icons8.com/color/344/person-male.png"
              data-demo-src="assets/img/avatars/lana.jpeg"
              data-user-popover="10"
              alt=""
            />
            <img
              src="https://img.icons8.com/color/344/person-male.png"
              data-demo-src="assets/img/avatars/mike.jpg"
              data-user-popover="12"
              alt=""
            />
            <img
              src="https://img.icons8.com/color/344/person-male.png"
              data-demo-src="assets/img/avatars/gaelle.jpeg"
              data-user-popover="11"
              alt=""
            />
          </div>
          <div class="likers-text">
            <p>
              <a href="#">Lana</a>,<a href="#">Mike</a>
            </p>
            <p>and 1 more liked this</p>
          </div>
          {/* Post statistics */}
          <div class="social-count">
            <div class="likes-count">
              <heart />
              <span>11</span>
            </div>
            <div class="shares-count">
              <Link2 />
              <span>3</span>
            </div>
            <div class="comments-count">
              <MessageCircle />
              <span>2</span>
            </div>
          </div>
        </div>
        {/* /Post footer */}
      </div>
      {/* /Main wrap */}

      {/* Post #5 comments */}
      <div class="comments-wrap is-hidden">
        {/* Header */}
        <div class="comments-heading">
          <h4>
            Comments
            <small>(2)</small>
          </h4>
          <div class="close-comments">
            <X />
          </div>
        </div>
        {/* /Header */}

        {/* Comments body */}
        <div class="comments-body has-slimscroll">
          {/* Comment */}
          <div class="media is-comment">
            {/* User image */}
            <div class="media-left">
              <div class="image">
                <img
                  src="https://img.icons8.com/color/344/person-male.png"
                  data-demo-src="assets/img/avatars/lana.jpeg"
                  data-user-popover="10"
                  alt=""
                />
              </div>
            </div>
            {/* Content */}
            <div class="media-content">
              <a href="#">Lana Henrikssen</a>
              <span class="time">2 days ago</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                consequat.
              </p>
              {/* Comment actions */}
              <div class="controls">
                <div class="like-count">
                  <ThumbsUp />
                  <span>1</span>
                </div>
                <div class="reply">
                  <a href="#">Reply</a>
                </div>
              </div>

              {/* Nested Comment */}
              <div class="media is-comment">
                {/* User image */}
                <div class="media-left">
                  <div class="image">
                    <img
                      src="https://img.icons8.com/color/344/person-male.png"
                      data-demo-src="assets/img/avatars/david.jpg"
                      data-user-popover="4"
                      alt=""
                    />
                  </div>
                </div>
                {/* Content */}
                <div class="media-content">
                  <a href="#">David Kim</a>
                  <span class="time">2 days ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  {/* Comment actions */}
                  <div class="controls">
                    <div class="like-count">
                      <ThumbsUp />
                      <span>0</span>
                    </div>
                    <div class="reply">
                      <a href="#">Reply</a>
                    </div>
                  </div>
                </div>
                {/* Right side dropdown */}
                <div class="media-right">
                  <CommentDropdown />
                </div>
              </div>
              {/* /Nested Comment */}
            </div>
            {/* Right side dropdown */}
            <div class="media-right">
              {/* /partials/pages/feed/dropdowns/comment-dropdown.html */}
              <CommentDropdown />
            </div>
          </div>
          {/* /Comment */}
        </div>
        {/* Comments body */}

        {/* Comments footer */}
        <div class="card-footer">
          <div class="media post-comment has-emojis">
            {/* Textarea */}
            <div class="media-content">
              <div class="field">
                <p class="control">
                  <textarea
                    class="textarea comment-textarea"
                    rows="5"
                    placeholder="Write a comment..."
                  ></textarea>
                </p>
              </div>
              {/* Additional actions */}
              <div class="actions">
                <div class="image is-32x32">
                  <img
                    class="is-rounded"
                    src="https://img.icons8.com/color/344/person-male.png"
                    data-demo-src="assets/img/avatars/jenna.png"
                    data-user-popover="0"
                    alt=""
                  />
                </div>
                <div class="toolbar">
                  <div class="action is-auto">
                    <AtSign />
                  </div>
                  <div class="action is-emoji">
                    <Smile />
                  </div>
                  <div class="action is-upload">
                    <Camera />
                    <input type="file" />
                  </div>
                  <a class="button is-solid primary-button raised">
                    Post Comment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Comments footer */}
      </div>
      {/* /Post #5 comments */}
    </div>
  );
}