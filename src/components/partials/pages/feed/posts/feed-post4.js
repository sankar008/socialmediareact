import CommentDropdown from "../dropdowns/comment-dropdown";
import FeedPostDropdown from "../dropdowns/feed-post-dropdown";
import FeedPostActions from "../buttons/feed-post-actions";

export default function FeedPost1() {
  return (
    <div class="card is-post">
      {/* Main wrap */}
      <div class="content-wrap">
        {/* Header */}
        <div class="card-heading">
          <div class="user-block">
            <div class="image">
              <img
                src="https://via.placeholder.com/300x300"
                data-demo-src="assets/img/avatars/stella.jpg"
                data-user-popover="2"
                alt=""
              />
            </div>
            <div class="user-info">
              <a href="#">Stella Bergmann</a>
              <span class="time">July 19 2018, 15:13pm</span>
            </div>
          </div>
          {/* Right side dropdown */}
          {/* /partials/pages/feed/dropdowns/feed-post-dropdown.html */}
          <FeedPostDropdown />
        </div>
        {/* Header */}

        {/* Post body */}
        <div class="card-body">
          {/* Post body text */}
          <div class="post-text">
            <p>
              Hey friends ! Iam back and i wanted to share with you some awesome
              pictures we took during our trip to Santa Monica. We had wonderful
              holidays at the beach. Kisses to all !
            </p>
          </div>
          {/* Featured image */}
          <div class="post-image">
            {/* CSS masonry wrap */}
            <div class="masonry-grid">
              {/* Left column */}
              <div class="masonry-column-left">
                <a
                  data-fancybox="post3"
                  data-lightbox-type="comments"
                  data-thumb="assets/img/demo/unsplash/3.jpg"
                  href="https://via.placeholder.com/1600x900"
                  data-demo-href="assets/img/demo/unsplash/3.jpg"
                >
                  <img
                    src="https://via.placeholder.com/1600x900"
                    data-demo-src="assets/img/demo/unsplash/3.jpg"
                    alt=""
                  />
                </a>
                <a
                  data-fancybox="post3"
                  data-lightbox-type="comments"
                  data-thumb="assets/img/demo/unsplash/4.jpg"
                  href="https://via.placeholder.com/1600x900"
                  data-demo-href="assets/img/demo/unsplash/4.jpg"
                >
                  <img
                    src="https://via.placeholder.com/1600x900"
                    data-demo-src="assets/img/demo/unsplash/4.jpg"
                    alt=""
                  />
                </a>
              </div>
              {/* Right column */}
              <div class="masonry-column-right">
                <a
                  data-fancybox="post3"
                  data-lightbox-type="comments"
                  data-thumb="assets/img/demo/unsplash/5.jpg"
                  href="https://via.placeholder.com/1600x900"
                  data-demo-href="assets/img/demo/unsplash/5.jpg"
                >
                  <img
                    src="https://via.placeholder.com/1600x900"
                    data-demo-src="assets/img/demo/unsplash/5.jpg"
                    alt=""
                  />
                </a>
                <a
                  data-fancybox="post3"
                  data-lightbox-type="comments"
                  data-thumb="assets/img/demo/unsplash/6.jpg"
                  href="https://via.placeholder.com/1600x900"
                  data-demo-href="assets/img/demo/unsplash/6.jpg"
                >
                  <img
                    src="https://via.placeholder.com/1600x900"
                    data-demo-src="assets/img/demo/unsplash/6.jpg"
                    alt=""
                  />
                </a>
                <a
                  data-fancybox="post3"
                  data-lightbox-type="comments"
                  data-thumb="assets/img/demo/unsplash/7.jpg"
                  href="https://via.placeholder.com/1600x900"
                  data-demo-href="assets/img/demo/unsplash/7.jpg"
                >
                  <img
                    src="https://via.placeholder.com/1600x900"
                    data-demo-src="assets/img/demo/unsplash/7.jpg"
                    alt=""
                  />
                </a>
              </div>
              {/* Post actions */}
              {/* /partials/pages/feed/buttons/feed-post-actions.html */}
              <FeedPostActions />
            </div>
          </div>
        </div>
        {/* /Post body */}

        {/* Post footer */}
        <div class="card-footer">
          {/* Followers */}
          <div class="likers-group">
            <img
              src="https://via.placeholder.com/300x300"
              data-demo-src="assets/img/avatars/rolf.jpg"
              data-user-popover="13"
              alt=""
            />
            <img
              src="https://via.placeholder.com/300x300"
              data-demo-src="assets/img/avatars/mike.jpg"
              data-user-popover="12"
              alt=""
            />
            <img
              src="https://via.placeholder.com/300x300"
              data-demo-src="assets/img/avatars/daniel.jpg"
              data-user-popover="3"
              alt=""
            />
            <img
              src="https://via.placeholder.com/300x300"
              data-demo-src="assets/img/avatars/elise.jpg"
              data-user-popover="6"
              alt=""
            />
            <img
              src="https://via.placeholder.com/300x300"
              data-demo-src="assets/img/avatars/david.jpg"
              data-user-popover="4"
              alt=""
            />
          </div>
          <div class="likers-text">
            <p>
              <a href="#">Gaelle</a>,<a href="#">Rolf</a>
            </p>
            <p>and 31 more liked this</p>
          </div>
          {/* Post statistics */}
          <div class="social-count">
            <div class="likes-count">
              <i data-feather="heart"></i>
              <span>33</span>
            </div>
            <div class="shares-count">
              <i data-feather="link-2"></i>
              <span>1</span>
            </div>
            <div class="comments-count">
              <i data-feather="message-circle"></i>
              <span>9</span>
            </div>
          </div>
        </div>
        {/* /Post footer */}
      </div>
      {/* Main wrap */}

      {/* Post #4 comments */}
      <div class="comments-wrap is-hidden">
        {/* Header */}
        <div class="comments-heading">
          <h4>
            Comments
            <small>(9)</small>
          </h4>
          <div class="close-comments">
            <i data-feather="x"></i>
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
                  src="https://via.placeholder.com/300x300"
                  data-demo-src="assets/img/avatars/jenna.png"
                  data-user-popover="0"
                  alt=""
                />
              </div>
            </div>
            {/* Content */}
            <div class="media-content">
              <a href="#">Jenna Davis</a>
              <span class="time">30 minutes ago</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                consequat.
              </p>
              {/* Comment actions */}
              <div class="controls">
                <div class="like-count">
                  <i data-feather="thumbs-up"></i>
                  <span>0</span>
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
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/lana.jpeg"
                      data-user-popover="10"
                      alt=""
                    />
                  </div>
                </div>
                {/* Content */}
                <div class="media-content">
                  <a href="#">Lana Henrikssen</a>
                  <span class="time">15 minutes ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo.
                  </p>
                  {/* Comment actions */}
                  <div class="controls">
                    <div class="like-count">
                      <i data-feather="thumbs-up"></i>
                      <span>2</span>
                    </div>
                    <div class="reply">
                      <a href="#">Reply</a>
                    </div>
                  </div>
                </div>
                {/* Right side dropdown */}
                <div class="media-right">
                  {/* /partials/pages/feed/dropdowns/comment-dropdown.html */}
                  <CommentDropdown />
                </div>
              </div>
              {/* /Nested Comment */}

              {/* Nested Comment */}
              <div class="media is-comment">
                {/* User image */}
                <div class="media-left">
                  <div class="image">
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/david.jpg"
                      data-user-popover="4"
                      alt=""
                    />
                  </div>
                </div>
                {/* Content */}
                <div class="media-content">
                  <a href="#">David Kim</a>
                  <span class="time">12 minutes ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div class="controls">
                    <div class="like-count">
                      <i data-feather="thumbs-up"></i>
                      <span>5</span>
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

              {/* Nested Comment */}
              <div class="media is-comment">
                {/* User image */}
                <div class="media-left">
                  <div class="image">
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/mike.jpg"
                      data-user-popover="12"
                      alt=""
                    />
                  </div>
                </div>
                {/* Content */}
                <div class="media-content">
                  <a href="#">Mike Lasalle</a>
                  <span class="time">8 minutes ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo incididunt.
                  </p>
                  <div class="controls">
                    <div class="like-count">
                      <i data-feather="thumbs-up"></i>
                      <span>5</span>
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

              {/* Nested Comment */}
              <div class="media is-comment">
                {/* User image */}
                <div class="media-left">
                  <div class="image">
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/stella.jpg"
                      data-user-popover="2"
                      alt=""
                    />
                  </div>
                </div>
                {/* Content */}
                <div class="media-content">
                  <a href="#">Stella Bergmann</a>
                  <span class="time">Just now</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo incididunt.
                  </p>
                  <div class="controls">
                    <div class="like-count">
                      <i data-feather="thumbs-up"></i>
                      <span>2</span>
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
              <CommentDropdown />
            </div>
          </div>
          {/* /Comment */}

          {/* Comment */}
          <div class="media is-comment">
            {/* User image */}
            <div class="media-left">
              <div class="image">
                <img
                  src="https://via.placeholder.com/300x300"
                  data-demo-src="assets/img/avatars/daniel.jpg"
                  data-user-popover="3"
                  alt=""
                />
              </div>
            </div>
            {/* Content */}
            <div class="media-content">
              <a href="#">Daniel Wellington</a>
              <span class="time">5 hours ago</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempo incididunt ut labore et dolore magna aliqua.
              </p>
              {/* Comment actions */}
              <div class="controls">
                <div class="like-count">
                  <i data-feather="thumbs-up"></i>
                  <span>1</span>
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
          {/* /Comment */}

          {/* Comment */}
          <div class="media is-comment">
            {/* User image */}
            <div class="media-left">
              <div class="image">
                <img
                  src="https://via.placeholder.com/300x300"
                  data-demo-src="assets/img/avatars/bobby.jpg"
                  data-user-popover="8"
                  alt=""
                />
              </div>
            </div>
            {/* Content */}
            <div class="media-content">
              <a href="#">Bobby Brown</a>
              <span class="time">7 hours ago</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempo incididunt ut labore et dolore magna aliqua.
              </p>
              {/* Comment actions */}
              <div class="controls">
                <div class="like-count">
                  <i data-feather="thumbs-up"></i>
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
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/stella.jpg"
                      data-user-popover="2"
                      alt=""
                    />
                  </div>
                </div>
                {/* Content */}
                <div class="media-content">
                  <a href="#">Stella Bergmann</a>
                  <span class="time">7 hours ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo incididunt.
                  </p>
                  <div class="controls">
                    <div class="like-count">
                      <i data-feather="thumbs-up"></i>
                      <span>2</span>
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

              {/* Nested Comment */}
              <div class="media is-comment">
                {/* User image */}
                <div class="media-left">
                  <div class="image">
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/lana.jpeg"
                      data-user-popover="10"
                      alt=""
                    />
                  </div>
                </div>
                {/* Content */}
                <div class="media-content">
                  <a href="#">Lana Henrikssen</a>
                  <span class="time">15 minutes ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo.
                  </p>
                  {/* Comment actions */}
                  <div class="controls">
                    <div class="like-count">
                      <i data-feather="thumbs-up"></i>
                      <span>2</span>
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
              <CommentDropdown />
            </div>
          </div>
          {/* /Comment */}
        </div>
        {/* /Comments body */}

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
                    src="https://via.placeholder.com/300x300"
                    data-demo-src="assets/img/avatars/jenna.png"
                    data-user-popover="0"
                    alt=""
                  />
                </div>
                <div class="toolbar">
                  <div class="action is-auto">
                    <i data-feather="at-sign"></i>
                  </div>
                  <div class="action is-emoji">
                    <i data-feather="smile"></i>
                  </div>
                  <div class="action is-upload">
                    <i data-feather="camera"></i>
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
      {/* /Post #4 comments */}
    </div>
  );
}
