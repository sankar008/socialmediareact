import { useState } from "react";
import {
  Activity,
  Check,
  Eye,
  Globe,
  Heart,
  Link2,
  Lock,
  MessageCircle,
  MoreVertical,
  Smile,
  ThumbsUp,
  Triangle,
  User,
  Users,
  X,
} from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";

export default function VideosModal(props) {
  const [activeDropDown, setActiveDropDown] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);

  const { videoOverlay } = props;

  const closeModal = () => {
    props.setVideoOverlay(false);
  };

  return (
    <div
      id="videos-modal"
      className={`modal videos-modal is-xxl has-light-bg ${
        videoOverlay ? "is-active" : ""
      }`}
    >
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="card">
          <div className="card-heading">
            <h3>Go live</h3>
            <div
              id="stop-stream"
              className="button is-solid accent-button is-hidden"
              onclick="stopWebcam();"
            >
              <i className="mdi mdi-video-off"></i>
              Stop stream
            </div>
            <div
              id="start-stream"
              className="button is-solid accent-button"
              onclick="startWebcam();"
            >
              <i className="mdi mdi-video"></i>
              Start stream
            </div>
            <div className="close-wrap">
              <span className="close-modal" onClick={closeModal}>
                <X />
              </span>
            </div>
          </div>
          <div className="card-body">
            <div className="inner">
              <div className="left-section">
                <div className="video-wrapper">
                  <div className="video-wrap">
                    <div id="live-indicator" className="live is-vhidden">
                      Live
                    </div>
                    <video
                      id="video"
                      width="400"
                      height="240"
                      controls
                      autoplay
                    ></video>
                  </div>
                </div>
              </div>
              <div className="right-section">
                <div className="header">
                  <img
                    src="https://friendkit.cssninja.io/assets/img/avatars/jenna.png"
                    data-demo-src="assets/img/avatars/jenna.png"
                    alt=""
                  />
                  <div className="user-meta">
                    <span>
                      Jenna Davis <small>is live</small>
                    </span>
                    <span>
                      <small>right now</small>
                    </span>
                  </div>
                  <button type="button" className="button">
                    Follow
                  </button>
                  <div
                    class={`dropdown is-spaced is-right dropdown-trigger ${
                      activeDropDown ? "is-active" : ""
                    }`}
                  >
                    <OutsideClickHandler
                      onOutsideClick={() => {
                        setActiveDropDown(false);
                      }}
                    >
                      <div
                        class="button"
                        onClick={() => setActiveDropDown(!activeDropDown)}
                      >
                        <MoreVertical />
                      </div>
                    </OutsideClickHandler>
                    <div className="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <div className="dropdown-item is-title">
                          Who can see this ?
                        </div>
                        <a href="#" className="dropdown-item">
                          <div className="media">
                            <Globe />
                            <div className="media-content">
                              <h3>Public</h3>
                              <small>Anyone can see this publication.</small>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item">
                          <div className="media">
                            <Users />
                            <div className="media-content">
                              <h3>Friends</h3>
                              <small>
                                only friends can see this publication.
                              </small>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item">
                          <div className="media">
                            <User />
                            <div className="media-content">
                              <h3>Specific friends</h3>
                              <small>Don't show it to some friends.</small>
                            </div>
                          </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <a className="dropdown-item">
                          <div className="media">
                            <Lock />
                            <div className="media-content">
                              <h3>Only me</h3>
                              <small>Only me can see this publication.</small>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inner-content">
                  <div className="control">
                    <input
                      type="text"
                      className="input is-sm is-fade"
                      placeholder="What is this live about?"
                    />
                    <div className="icon">
                      <Activity />
                    </div>
                  </div>
                  <div className="live-stats">
                    <div className="social-count">
                      <div className="likes-count">
                        <Heart />
                        <span>0</span>
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
                    <div className="social-count ml-auto">
                      <div className="views-count">
                        <Eye />
                        <span>0</span>
                        <span className="views">
                          <small>views</small>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="actions">
                    <div className="action">
                      <ThumbsUp />
                      <span>Like</span>
                    </div>
                    <div className="action">
                      <MessageCircle />
                      <span>Comment</span>
                    </div>
                    <div className="action">
                      <Link2 />
                      <span>Share</span>
                    </div>
                    <div
                      className={`dropdown is-spaced is-right dropdown-trigger ${
                        profileToggle ? "is-active" : ""
                      }`}
                    >
                      <OutsideClickHandler
                        onOutsideClick={() => {
                          setProfileToggle(false);
                        }}
                      >
                        <div
                          className="avatar-button"
                          onClick={() => setProfileToggle(!profileToggle)}
                        >
                          <img
                            src="https://friendkit.cssninja.io/assets/img/avatars/jenna.png"
                            data-demo-src="assets/img/avatars/jenna.png"
                            alt=""
                          />
                          <Triangle />
                        </div>
                      </OutsideClickHandler>
                      <div className="dropdown-menu has-margin" role="menu">
                        <div className="dropdown-content">
                          <a href="#" className="dropdown-item is-selected">
                            <div className="media">
                              <img
                                src="https://friendkit.cssninja.io/assets/img/avatars/jenna.png"
                                data-demo-src="assets/img/avatars/jenna.png"
                                alt=""
                              />
                              <div className="media-content">
                                <h3>Jenna Davis</h3>
                                <small>Interact as Jenna Davis.</small>
                              </div>
                              <div className="checkmark">
                                <Check />
                              </div>
                            </div>
                          </a>
                          <hr className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            <div className="media">
                              <img
                                src="https://via.placeholder.com/478x344"
                                data-demo-src="assets/img/avatars/hanzo.svg"
                                alt=""
                              />
                              <div className="media-content">
                                <h3>Css Ninja</h3>
                                <small>Interact as Css Ninja.</small>
                              </div>
                              <div className="checkmark">
                                <Check />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tabs-wrapper">
                  <div className="tabs is-fullwidth">
                    <ul>
                      <li className="is-active">
                        <a>Comments</a>
                      </li>
                      <li>
                        <a>Upcoming</a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content has-slimscroll">
                    <div className="media is-comment">
                      <figure className="media-left">
                        <p className="image is-32x32">
                          <img
                            src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
                            data-demo-src="assets/img/avatars/dan.jpg"
                            alt=""
                            data-user-popover="1"
                          />
                        </p>
                      </figure>
                      <div className="media-content">
                        <div className="username">Dan Walker</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin ornare magna eros.
                        </p>
                        <div className="comment-actions">
                          <a href="javascript:void(0);" className="is-inverted">
                            Like
                          </a>
                          <span>3h</span>
                        </div>
                      </div>
                    </div>

                    <div className="media is-comment">
                      <figure className="media-left">
                        <p className="image is-32x32">
                          <img
                            src="https://friendkit.cssninja.io/assets/img/avatars/david.jpg"
                            data-demo-src="assets/img/avatars/david.jpg"
                            alt=""
                            data-user-popover="4"
                          />
                        </p>
                      </figure>
                      <div className="media-content">
                        <div className="username">David Kim</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                        <div className="comment-actions">
                          <a href="javascript:void(0);" className="is-inverted">
                            Like
                          </a>
                          <span>4h</span>
                        </div>
                      </div>
                    </div>

                    <div className="media is-comment">
                      <figure className="media-left">
                        <p className="image is-32x32">
                          <img
                            src="https://friendkit.cssninja.io/assets/img/avatars/rolf.jpg"
                            data-demo-src="assets/img/avatars/rolf.jpg"
                            alt=""
                            data-user-popover="17"
                          />
                        </p>
                      </figure>
                      <div className="media-content">
                        <div className="username">Rolf Krupp</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin ornare magna eros. Consectetur adipiscing
                          elit. Proin ornare magna eros.
                        </p>
                        <div className="comment-actions">
                          <a href="javascript:void(0);" className="is-inverted">
                            Like
                          </a>
                          <span>4h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="comment-controls">
                  <div className="controls-inner">
                    <img
                      src="https://friendkit.cssninja.io/assets/img/avatars/jenna.png"
                      data-demo-src="assets/img/avatars/jenna.png"
                      alt=""
                    />
                    <div className="control">
                      <textarea
                        className="textarea comment-textarea is-rounded"
                        rows="1"
                      ></textarea>
                      <button className="emoji-button">
                        <Smile />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
