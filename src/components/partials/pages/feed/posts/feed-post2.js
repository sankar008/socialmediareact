import CommentDropdown from "../dropdowns/comment-dropdown";
import FeedPostDropdown from "../dropdowns/feed-post-dropdown";
import FeedPostActions from "../buttons/feed-post-actions";
import { AtSign, Camera, Smile, ThumbsUp, X, MessageCircle, Link2 } from "react-feather";
import { useState } from "react";

export default function FeedPost2(props) {
  const {shareOverlay, setShareOverlay} = props;
  const [showComment, setShowComment] = useState(false);

  return (
    <div class="card is-post">
      {/* Main wrap */}
      <div className={`content-wrap ${!showComment ? "" : "is-hidden"}`}>
        {/* Post header */}
        <div class="card-heading">
          {/* User meta */}
          <div class="user-block">
            <div class="image">
              <img
                src="https://img.icons8.com/color/344/person-male.png"
                data-demo-src="assets/img/avatars/edward.jpeg"
                data-user-popover="5"
                alt=""
              />
            </div>
            <div class="user-info">
              <a href="#">Edward Mayers</a>
              <span class="time">July 26 2018, 11:14am</span>
            </div>
          </div>
          {/* Right side dropdown */}
          {/* /partials/pages/feed/dropdowns/feed-post-dropdown.html */}
          <FeedPostDropdown />
        </div>
        {/* /Post header */}

        {/* Post body */}
        <div class="card-body">
          {/* Post body text */}
          <div class="post-text">
            <p>
              You all know how i love bootstrap, but i didn't have time to dig
              deeper into it. Therefore i found this very interesting video i
              wanted to share with you all.
              <a href="#">#bootsrap #webdesign</a>
            </p>
          </div>
          {/* Featured youtube video */}
          <div class="post-link is-video">
            {/* Link image */}
            <div class="link-image">
              <img
                src="https://friendkit.cssninja.io/assets/img/demo/video/bootstrap.jpg"
                data-demo-src="https://friendkit.cssninja.io/assets/img/demo/video/bootstrap.jpg"
                alt=""
              />
              <div class="video-overlay"></div>
              <a
                class="video-button"
                data-fancybox
                href="https://www.youtube.com/watch?v=N8GksI_-iIM"
              >
                <img src="assets/img/icons/video/play.svg" alt="" />
              </a>
            </div>
            {/* Link content */}
            <div class="link-content">
              <h4>
                <a href="#">What's new in Bootstrap 4 ?</a>
              </h4>
              <p>
                Before I create the new Bootstrap 4 crash course I want to go
                over some of the changes from Bootstrap 3.
              </p>
              <small>Youtube.com</small>
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
        <div class="card-footer">
          {/* Followers */}
          <div class="likers-group">
            <img
              src="https://img.icons8.com/color/344/person-male.png"
              data-demo-src="assets/img/avatars/daniel.jpg"
              data-user-popover="3"
              alt=""
            />
            <img
              src="https://img.icons8.com/color/344/person-male.png"
              data-demo-src="assets/img/avatars/elise.jpg"
              data-user-popover="6"
              alt=""
            />
          </div>
          <div class="likers-text">
            <p>
              <a href="#">Daniel</a> and
              <a href="#">Elise</a>
            </p>
            <p>liked this</p>
          </div>
          {/* Post statistics */}
          <div class="social-count">
            <div class="likes-count">
              <heart />
              <span>2</span>
            </div>
            <div class="shares-count">
              <Link2 />
              <span>0</span>
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

      {/* Post #2 comments */}
      <div className={`comments-wrap ${showComment ? "" : "is-hidden"}`}>
        {/* Header */}
        <div class="comments-heading">
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
        <div class="comments-body has-slimscroll">
          {/* Comment */}
          <div class="media is-comment">
            {/* User image */}
            <div class="media-left">
              <div class="image">
                <img
                  src="https://img.icons8.com/color/344/person-male.png"
                  data-demo-src="assets/img/avatars/elise.jpg"
                  data-user-popover="6"
                  alt=""
                />
              </div>
            </div>
            {/* Content */}
            <div class="media-content">
              <a href="#">Elise Walker</a>
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
                      data-demo-src="assets/img/avatars/daniel.jpg"
                      data-user-popover="3"
                      alt=""
                    />
                  </div>
                </div>
                {/* Content */}
                <div class="media-content">
                  <a href="#">Daniel Wellington</a>
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
        {/* /Comments body */}

        {/* Comments footer */}
        <div class="card-footer">
          {/* User image */}
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
      {/* /Post #2 comments */}
    </div>
  );
}
