import CommentDropdown from "../dropdowns/comment-dropdown";
import FeedPostDropdown from "../dropdowns/feed-post-dropdown";
import FeedPostActions from "../buttons/feed-post-actions";
import { AtSign, Camera, Smile, ThumbsUp, X, MessageCircle, Link2 } from "react-feather";
import { useState } from "react";

export default function FeedPost5(props) {
  const {shareOverlay, setShareOverlay} = props;
  const [showComment, setShowComment] = useState(false);

  return (
    <div className="card is-post">
      {/* Main wrap */}
      <div className={`content-wrap ${!showComment ? "" : "is-hidden"}`}>
        {/* Header */}
        <div className="card-heading">
          {/* User image */}
          <div className="user-block">
            <div className="image">
              <img
                src="https://img.icons8.com/color/344/person-male.png"
                data-demo-src="assets/img/avatars/david.jpg"
                data-user-popover="4"
                alt=""
              />
            </div>
            <div className="user-info">
              <a href="#">David Kim</a>
              <span className="time">August 02 2018, 03:04pm</span>
            </div>
          </div>
          {/* Right side dropdown */}
          {/* /partials/pages/feed/dropdowns/feed-post-dropdown.html */}
          <FeedPostDropdown />
        </div>
        {/* /Header */}

        {/* Post body */}
        <div className="card-body">
          {/* Post body text */}
          <div className="post-text">
            <p>
              Just discovered this awesome CSS framework named
              <a href="#">#bulmaCss</a>. It's based on flexbox, so easy to use
              and comes with so many mobile first modifiers. You can build
              anything from scratch easily with Bulma.
              <a href="#">#webdesign #bulmaio</a>
            </p>
          </div>
          {/* Featured link */}
          <div className="post-link">
            {/* link image */}
            <div className="link-image">
              <img
                src="https://friendkit.cssninja.io/assets/img/demo/video/bulma2.png"
                data-demo-src="assets/img/demo/video/bulma2.png"
                alt=""
              />
            </div>
            {/* Link content */}
            <div className="link-content">
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
            <FeedPostActions
              showComment={showComment}
              setShowComment={setShowComment}

              shareOverlay={shareOverlay}
              setShareOverlay={setShareOverlay}
            />
          </div>
        </div>
        {/* /Post body */}

        {/* Post footer */}
        <div className="card-footer">
          {/* Followers */}
          <div className="likers-group">
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
          <div className="likers-text">
            <p>
              <a href="#">Lana</a>,<a href="#">Mike</a>
            </p>
            <p>and 1 more liked this</p>
          </div>
          {/* Post statistics */}
          <div className="social-count">
            <div className="likes-count">
              <heart />
              <span>11</span>
            </div>
            <div className="shares-count">
              <Link2 />
              <span>3</span>
            </div>
            <div className="comments-count">
              <MessageCircle />
              <span>2</span>
            </div>
          </div>
        </div>
        {/* /Post footer */}
      </div>
      {/* /Main wrap */}

      {/* Post #5 comments */}
      <div className={`comments-wrap ${showComment ? "" : "is-hidden"}`}>
        {/* Header */}
        <div className="comments-heading">
          <h4>
            Comments
            <small>(2)</small>
          </h4>
          <div
            className="close-comments"
            onClick={() => setShowComment(!showComment)}
          >
            <X />
          </div>
        </div>
        {/* /Header */}

        {/* Comments body */}
        <div className="comments-body has-slimscroll">
          {/* Comment */}
          <div className="media is-comment">
            {/* User image */}
            <div className="media-left">
              <div className="image">
                <img
                  src="https://img.icons8.com/color/344/person-male.png"
                  data-demo-src="assets/img/avatars/lana.jpeg"
                  data-user-popover="10"
                  alt=""
                />
              </div>
            </div>
            {/* Content */}
            <div className="media-content">
              <a href="#">Lana Henrikssen</a>
              <span className="time">2 days ago</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                consequat.
              </p>
              {/* Comment actions */}
              <div className="controls">
                <div className="like-count">
                  <ThumbsUp />
                  <span>1</span>
                </div>
                <div className="reply">
                  <a href="#">Reply</a>
                </div>
              </div>

              {/* Nested Comment */}
              <div className="media is-comment">
                {/* User image */}
                <div className="media-left">
                  <div className="image">
                    <img
                      src="https://img.icons8.com/color/344/person-male.png"
                      data-demo-src="assets/img/avatars/david.jpg"
                      data-user-popover="4"
                      alt=""
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="media-content">
                  <a href="#">David Kim</a>
                  <span className="time">2 days ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  {/* Comment actions */}
                  <div className="controls">
                    <div className="like-count">
                      <ThumbsUp />
                      <span>0</span>
                    </div>
                    <div className="reply">
                      <a href="#">Reply</a>
                    </div>
                  </div>
                </div>
                {/* Right side dropdown */}
                <div className="media-right">
                  <CommentDropdown />
                </div>
              </div>
              {/* /Nested Comment */}
            </div>
            {/* Right side dropdown */}
            <div className="media-right">
              {/* /partials/pages/feed/dropdowns/comment-dropdown.html */}
              <CommentDropdown />
            </div>
          </div>
          {/* /Comment */}
        </div>
        {/* Comments body */}

        {/* Comments footer */}
        <div className="card-footer">
          <div className="media post-comment has-emojis">
            {/* Textarea */}
            <div className="media-content">
              <div className="field">
                <p className="control">
                  <textarea
                    className="textarea comment-textarea"
                    rows="5"
                    placeholder="Write a comment..."
                  ></textarea>
                </p>
              </div>
              {/* Additional actions */}
              <div className="actions">
                <div className="image is-32x32">
                  <img
                    className="is-rounded"
                    src="https://img.icons8.com/color/344/person-male.png"
                    data-demo-src="assets/img/avatars/jenna.png"
                    data-user-popover="0"
                    alt=""
                  />
                </div>
                <div className="toolbar">
                  <div className="action is-auto">
                    <AtSign />
                  </div>
                  <div className="action is-emoji">
                    <Smile />
                  </div>
                  <div className="action is-upload">
                    <Camera />
                    <input type="file" />
                  </div>
                  <a className="button is-solid primary-button raised">
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
