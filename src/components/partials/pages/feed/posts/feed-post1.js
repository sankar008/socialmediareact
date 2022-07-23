import CommentDropdown from "../dropdowns/comment-dropdown";
import FeedPostDropdown from "../dropdowns/feed-post-dropdown";
import FeedPostActions from "../buttons/feed-post-actions";
import {
  AtSign,
  Camera,
  Smile,
  ThumbsUp,
  X,
  MessageCircle,
  Link2,
} from "react-feather";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function FeedPost1(props) {
  const { shareOverlay, setShareOverlay, feedPost } = props;
  const [showComment, setShowComment] = useState(false);

  return (
    <div id="feed-post-1" className="card is-post">
      {/* Main wrap */}
      <div className={`content-wrap ${!showComment ? "" : "is-hidden"}`}>
        {/* Post header */}
        <div className="card-heading">
          {/* User meta */}
          <div className="user-block">
            <div className="image">
              <img src={feedPost.postBy.image} alt="" />
            </div>
            <div class="media-content ml-2">
              <h3 class="userName">
                <Link to="#">
                  {feedPost.postBy.firstName}
                  {""}
                  <span className="ml-2">{feedPost.postBy.lastName}</span>
                </Link>
              </h3>
              <span className="time">July 26 2018, 01:03pm</span>
            </div>
          </div>
          {/* Right side dropdown */}
          {/* /partials/pages/feed/dropdowns/feed-post-dropdown.html */}
          <FeedPostDropdown />
        </div>
        {/* /Post header */}

        {/* Post body */}
        <div className="card-body">
          {/* Post body text */}
          <div className="post-text">
            <p>{feedPost.details}</p>
          </div>
          {/* Featured image */}
          <div className="post-image">
            <Link to="#">
              <img src={feedPost.image} alt="" />
            </Link>
            {/* Action buttons */}
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
          {/* Followers avatars */}
          <div className="likers-group">
            <img
              src="https://img.icons8.com/color/344/person-male.png"
              data-demo-src="assets/img/avatars/dan.jpg"
              data-user-popover="1"
              alt=""
            />
            <img
              src="https://img.icons8.com/color/344/person-male.png"
              data-demo-src="assets/img/avatars/david.jpg"
              data-user-popover="4"
              alt=""
            />
            <img
              src="https://img.icons8.com/color/344/person-male.png"
              data-demo-src="assets/img/avatars/edward.jpeg"
              data-user-popover="5"
              alt=""
            />
            <img
              src="https://img.icons8.com/color/344/person-male.png"
              data-demo-src="assets/img/avatars/milly.jpg"
              data-user-popover="7"
              alt=""
            />
          </div>
          {/* Followers text */}
          <div className="likers-text">
            <p>
              <a href="#">Milly</a>,<a href="#">David</a>
            </p>
            <p>and 23 more liked this</p>
          </div>
          {/* Post statistics */}
          <div className="social-count">
            <div className="likes-count">
              <heart />
              <span>27</span>
            </div>
            <div className="shares-count">
              <Link2 />
              <span>9</span>
            </div>
            <div className="comments-count">
              <MessageCircle />
              <span>3</span>
            </div>
          </div>
        </div>
        {/* /Post footer */}
      </div>
      {/* /Main wrap */}

      {/* Post #1 Comments */}
      <div className={`comments-wrap ${showComment ? "" : "is-hidden"}`}>
        {/* Header */}
        <div className="comments-heading">
          <h4>
            Comments
            <small>(8)</small>
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
                  data-demo-src="assets/img/avatars/dan.jpg"
                  data-user-popover="1"
                  alt=""
                />
              </div>
            </div>
            {/* Content */}
            <div className="media-content">
              <a href="#">Dan Walker</a>
              <span className="time">28 minutes ago</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                consequat.
              </p>
              {/* Actions */}
              <div className="controls">
                <div className="like-count">
                  <ThumbsUp />
                  <span>4</span>
                </div>
                <div className="reply">
                  <a href="#">Reply</a>
                </div>
                <div className="edit">
                  <a href="#">Edit</a>
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
                  <span className="time">15 minutes ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  {/* Actions */}
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

          {/* Comment */}
          <div className="media is-comment">
            {/* User image */}
            <div className="media-left">
              <div className="image">
                <img
                  src="https://img.icons8.com/color/344/person-male.png"
                  data-demo-src="assets/img/avatars/rolf.jpg"
                  data-user-popover="13"
                  alt=""
                />
              </div>
            </div>
            {/* Content */}
            <div className="media-content">
              <a href="#">Rolf Krupp</a>
              <span className="time">9 hours ago</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempo incididunt ut labore et dolore magna aliqua.
                Exercitation ullamco laboris consequat.
              </p>
              {/* Actions */}
              <div className="controls">
                <div className="like-count">
                  <ThumbsUp />
                  <span>2</span>
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
                      data-demo-src="assets/img/avatars/elise.jpg"
                      data-user-popover="6"
                      alt=""
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="media-content">
                  <a href="#">Elise Walker</a>
                  <span className="time">8 hours ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  {/* Actions */}
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

              {/* Nested Comment */}
              <div className="media is-comment">
                {/* User image */}
                <div className="media-left">
                  <div className="image">
                    <img
                      src="https://img.icons8.com/color/344/person-male.png"
                      data-demo-src="assets/img/avatars/rolf.jpg"
                      data-user-popover="13"
                      alt=""
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="media-content">
                  <a href="#">Rolf Krupp</a>
                  <span className="time">7 hours ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  {/* Actions */}
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
              {/* /Nested Comment */}

              {/* Nested Comment */}
              <div className="media is-comment">
                {/* User image */}
                <div className="media-left">
                  <div className="image">
                    <img
                      src="https://img.icons8.com/color/344/person-male.png"
                      data-demo-src="assets/img/avatars/elise.jpg"
                      data-user-popover="6"
                      alt=""
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="media-content">
                  <a href="#">Elise Walker</a>
                  <span className="time">6 hours ago</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempo incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  {/* Actions */}
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
                  data-demo-src="assets/img/avatars/lana.jpeg"
                  data-user-popover="10"
                  alt=""
                />
              </div>
            </div>
            {/* Content */}
            <div className="media-content">
              <a href="#">Lana Henrikssen</a>
              <span className="time">10 hours ago</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempo incididunt ut labore et dolore magna aliqua.
              </p>
              {/* Comment actions */}
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
          {/* /Comment */}
        </div>
        {/* /Comments body */}

        {/* Comments footer */}
        <div className="card-footer">
          <div className="media post-comment has-emojis">
            {/* Comment Textarea */}
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
        {/* Comments footer */}
      </div>
      {/* /Post #1 Comments */}
    </div>
  );
}
