import { useState } from "react";
import { AtSign, Camera, Link2, MessageCircle, Smile, X } from "react-feather";
import FeedPostActions from "../buttons/feed-post-actions";
import FeedPostDropdown from "../dropdowns/feed-post-dropdown";

export default function FeedPost6(props) {
  const {shareOverlay, setShareOverlay} = props;
  const [showComment, setShowComment] = useState(false);

  return (
    <div className="card is-post is-simple">
      {/* Main wrap */}
      <div className={`content-wrap ${!showComment ? "" : "is-hidden"}`}>
        {/* Header */}
        <div className="card-heading">
          {/* User image */}
          <div className="user-block">
            <div className="image">
              <img
                src="https://img.icons8.com/color/344/person-male.png"
                data-demo-src="assets/img/avatars/bobby.jpg"
                data-user-popover="8"
                alt=""
              />
            </div>
            <div className="user-info">
              <a href="#">Bobby Brown</a>
              <span className="time">July 26 2018, 11:14am</span>
            </div>
          </div>
          {/* /partials/pages/feed/dropdowns/feed-post-dropdown.html */}
          <FeedPostDropdown />
        </div>
        {/* /Header */}

        {/* Post body */}
        <div className="card-body">
          {/* Post body text */}
          <div className="post-text">
            <p>
              Today, when i was walking back home from my job, i figured that i
              should build the best social media template in ThemeForest. As
              soon as i got back, i started working on this fresh and new
              project. Any suggestions about where i could find some interesting
              resources for social media design?
              <a href="#">#webdesign #socialmedia</a>
            </p>
          </div>
          {/* Post actions */}
          <div className="post-actions">
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
          <div className="likers-text">
            <p>
              <a href="#">Daniel</a> and
              <a href="#">Elise</a>
            </p>
            <p>liked this</p>
          </div>
          {/* Post statistics */}
          <div className="social-count">
            <div className="likes-count">
              <heart />
              <span>2</span>
            </div>
            <div className="shares-count">
              <Link2 />
              <span>0</span>
            </div>
            <div className="comments-count">
              <MessageCircle />
              <span>0</span>
            </div>
          </div>
        </div>
        {/* /Post footer */}
      </div>
      {/* /Main wrap */}

      {/* Post #6 comments */}
      <div className={`comments-wrap ${showComment ? "" : "is-hidden"}`}>
        {/* Header */}
        <div className="comments-heading">
          <h4>
            Comments
            <small>(0)</small>
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
          <div className="comments-placeholder">
            <img src="assets/img/icons/feed/bubble.svg" alt="" />
            <h3>Nothing in here yet</h3>
            <p>Be the first to post a comment.</p>
          </div>
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
      {/* /Post #6 comments */}
    </div>
  );
}
