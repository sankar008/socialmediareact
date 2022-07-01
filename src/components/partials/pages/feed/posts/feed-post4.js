import CommentDropdown from "../dropdowns/comment-dropdown";
import FeedPostDropdown from "../dropdowns/feed-post-dropdown";
import FeedPostActions from "../buttons/feed-post-actions";
import { AtSign, Camera, Smile, ThumbsUp, X, MessageCircle, Link2 } from "react-feather";
import { useState } from "react";

export default function FeedPost4(props) {
  const {shareOverlay, setShareOverlay} = props;
  const [showComment, setShowComment] = useState(false);

  return (
    <div className="card is-post">
      {/* Main wrap */}
      <div className={`content-wrap ${!showComment ? "" : "is-hidden"}`}>
        {/* Header */}
        <div className="card-heading">
          <div className="user-block">
            <div className="image">
              <img
                src="https://img.icons8.com/color/344/person-male.png"
                data-demo-src="assets/img/avatars/stella.jpg"
                data-user-popover="2"
                alt=""
              />
            </div>
            <div className="user-info">
              <a href="#">Stella Bergmann</a>
              <span className="time">July 19 2018, 15:13pm</span>
            </div>
          </div>
          {/* Right side dropdown */}
          {/* /partials/pages/feed/dropdowns/feed-post-dropdown.html */}
          <FeedPostDropdown />
        </div>
        {/* Header */}

        {/* Post body */}
        <div className="card-body">
          {/* Post body text */}
          <div className="post-text">
            <p>
              Hey friends ! Iam back and i wanted to share with you some awesome
              pictures we took during our trip to Santa Monica. We had wonderful
              holidays at the beach. Kisses to all !
            </p>
          </div>
          {/* Featured image */}
          <div className="post-image">
            {/* CSS masonry wrap */}
            <div className="masonry-grid">
              {/* Left column */}
              <div className="masonry-column-left">
                <a
                  data-fancybox="post3"
                  data-lightbox-type="comments"
                  data-thumb="assets/img/demo/unsplash/3.jpg"
                  href="https://friendkit.cssninja.io/assets/img/demo/unsplash/3.jpg"
                  data-demo-href="assets/img/demo/unsplash/3.jpg"
                >
                  <img
                    src="https://friendkit.cssninja.io/assets/img/demo/unsplash/3.jpg"
                    data-demo-src="assets/img/demo/unsplash/3.jpg"
                    alt=""
                  />
                </a>
                <a
                  data-fancybox="post3"
                  data-lightbox-type="comments"
                  data-thumb="assets/img/demo/unsplash/4.jpg"
                  href="https://friendkit.cssninja.io/assets/img/demo/unsplash/4.jpg"
                  data-demo-href="assets/img/demo/unsplash/4.jpg"
                >
                  <img
                    src="https://friendkit.cssninja.io/assets/img/demo/unsplash/4.jpg"
                    data-demo-src="assets/img/demo/unsplash/4.jpg"
                    alt=""
                  />
                </a>
              </div>
              {/* Right column */}
              <div className="masonry-column-right">
                <a
                  data-fancybox="post3"
                  data-lightbox-type="comments"
                  data-thumb="assets/img/demo/unsplash/5.jpg"
                  href="https://friendkit.cssninja.io/assets/img/demo/unsplash/5.jpg"
                  data-demo-href="assets/img/demo/unsplash/5.jpg"
                >
                  <img
                    src="https://friendkit.cssninja.io/assets/img/demo/unsplash/5.jpg"
                    data-demo-src="assets/img/demo/unsplash/5.jpg"
                    alt=""
                  />
                </a>
                <a
                  data-fancybox="post3"
                  data-lightbox-type="comments"
                  data-thumb="assets/img/demo/unsplash/6.jpg"
                  href="https://friendkit.cssninja.io/assets/img/demo/unsplash/6.jpg"
                  data-demo-href="assets/img/demo/unsplash/6.jpg"
                >
                  <img
                    src="https://friendkit.cssninja.io/assets/img/demo/unsplash/6.jpg"
                    data-demo-src="assets/img/demo/unsplash/6.jpg"
                    alt=""
                  />
                </a>
                <a
                  data-fancybox="post3"
                  data-lightbox-type="comments"
                  data-thumb="assets/img/demo/unsplash/7.jpg"
                  href="https://friendkit.cssninja.io/assets/img/demo/unsplash/7.jpg"
                  data-demo-href="assets/img/demo/unsplash/7.jpg"
                >
                  <img
                    src="https://friendkit.cssninja.io/assets/img/demo/unsplash/7.jpg"
                    data-demo-src="assets/img/demo/unsplash/7.jpg"
                    alt=""
                  />
                </a>
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
        </div>
        {/* /Post body */}

        {/* Post footer */}
        <div className="card-footer">
          {/* Followers */}
          <div className="likers-group">
            <img
              src="https://img.icons8.com/color/344/person-male.png"
              data-demo-src="assets/img/avatars/rolf.jpg"
              data-user-popover="13"
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
            <img
              src="https://img.icons8.com/color/344/person-male.png"
              data-demo-src="assets/img/avatars/david.jpg"
              data-user-popover="4"
              alt=""
            />
          </div>
          <div className="likers-text">
            <p>
              <a href="#">Gaelle</a>,<a href="#">Rolf</a>
            </p>
            <p>and 31 more liked this</p>
          </div>
          {/* Post statistics */}
          <div className="social-count">
            <div className="likes-count">
              <heart />
              <span>33</span>
            </div>
            <div className="shares-count">
              <Link2 />
              <span>1</span>
            </div>
            <div className="comments-count">
              <MessageCircle />
              <span>9</span>
            </div>
          </div>
        </div>
        {/* /Post footer */}
      </div>
      {/* Main wrap */}

      {/* Post #4 comments */}
      <div className={`comments-wrap ${showComment ? "" : "is-hidden"}`}>
        {/* Header */}
        <div className="comments-heading">
          <h4>
            Comments
            <small>(9)</small>
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
                  data-demo-src="assets/img/avatars/jenna.png"
                  data-user-popover="0"
                  alt=""
                />
              </div>
            </div>
            {/* Content */}
            <div className="media-content">
              <a href="#">Jenna Davis</a>
              <span className="time">30 minutes ago</span>
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
                  <span>0</span>
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
                      data-demo-src="assets/img/avatars/lana.jpeg"
                      data-user-popover="10"
                      alt=""
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="media-content">
                  <a href="#">Lana Henrikssen</a>
                  <span className="time">15 minutes ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo.
                  </p>
                  {/* Comment actions */}
                  <div className="controls">
                    <div className="like-count">
                      <ThumbsUp />
                      <span>2</span>
                    </div>
                    <div className="reply">
                      <a href="#">Reply</a>
                    </div>
                  </div>
                </div>
                {/* Right side dropdown */}
                <div className="media-right">
                  {/* /partials/pages/feed/dropdowns/comment-dropdown.html */}
                  <CommentDropdown />
                </div>
              </div>
              {/* /Nested Comment */}

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
                  <span className="time">12 minutes ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="controls">
                    <div className="like-count">
                      <ThumbsUp />
                      <span>5</span>
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

              {/* Nested Comment */}
              <div className="media is-comment">
                {/* User image */}
                <div className="media-left">
                  <div className="image">
                    <img
                      src="https://img.icons8.com/color/344/person-male.png"
                      data-demo-src="assets/img/avatars/mike.jpg"
                      data-user-popover="12"
                      alt=""
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="media-content">
                  <a href="#">Mike Lasalle</a>
                  <span className="time">8 minutes ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo incididunt.
                  </p>
                  <div className="controls">
                    <div className="like-count">
                      <ThumbsUp />
                      <span>5</span>
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

              {/* Nested Comment */}
              <div className="media is-comment">
                {/* User image */}
                <div className="media-left">
                  <div className="image">
                    <img
                      src="https://img.icons8.com/color/344/person-male.png"
                      data-demo-src="assets/img/avatars/stella.jpg"
                      data-user-popover="2"
                      alt=""
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="media-content">
                  <a href="#">Stella Bergmann</a>
                  <span className="time">Just now</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo incididunt.
                  </p>
                  <div className="controls">
                    <div className="like-count">
                      <ThumbsUp />
                      <span>2</span>
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
              <CommentDropdown />
            </div>
          </div>
          {/* /Comment */}

          {/* Comment */}
          <div className="media is-comment">
            {/* User image */}
            <div className="media-left">
              <div className="image">
                <img
                  src="https://img.icons8.com/color/344/person-male.png"
                  data-demo-src="assets/img/avatars/daniel.jpg"
                  data-user-popover="3"
                  alt=""
                />
              </div>
            </div>
            {/* Content */}
            <div className="media-content">
              <a href="#">Daniel Wellington</a>
              <span className="time">5 hours ago</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempo incididunt ut labore et dolore magna aliqua.
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
            </div>
            {/* Right side dropdown */}
            <div className="media-right">
              <CommentDropdown />
            </div>
          </div>
          {/* /Comment */}

          {/* Comment */}
          <div className="media is-comment">
            {/* User image */}
            <div className="media-left">
              <div className="image">
                <img
                  src="https://img.icons8.com/color/344/person-male.png"
                  data-demo-src="assets/img/avatars/bobby.jpg"
                  data-user-popover="8"
                  alt=""
                />
              </div>
            </div>
            {/* Content */}
            <div className="media-content">
              <a href="#">Bobby Brown</a>
              <span className="time">7 hours ago</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempo incididunt ut labore et dolore magna aliqua.
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
                      data-demo-src="assets/img/avatars/stella.jpg"
                      data-user-popover="2"
                      alt=""
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="media-content">
                  <a href="#">Stella Bergmann</a>
                  <span className="time">7 hours ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo incididunt.
                  </p>
                  <div className="controls">
                    <div className="like-count">
                      <ThumbsUp />
                      <span>2</span>
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

              {/* Nested Comment */}
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
                  <span className="time">15 minutes ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo.
                  </p>
                  {/* Comment actions */}
                  <div className="controls">
                    <div className="like-count">
                      <ThumbsUp />
                      <span>2</span>
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
              <CommentDropdown />
            </div>
          </div>
          {/* /Comment */}
        </div>
        {/* /Comments body */}

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
      {/* /Post #4 comments */}
    </div>
  );
}
