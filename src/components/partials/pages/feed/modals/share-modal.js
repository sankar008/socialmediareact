import { useState } from "react";
import {
  AlignLeft,
  ChevronDown,
  Clock,
  Eye,
  Globe,
  Layout,
  Lock,
  Mail,
  MapPin,
  Smile,
  User,
  UserCheck,
  UserPlus,
  Users,
  X,
} from "react-feather";

export default function ShareModal(props) {
  const [openDropDown, setOpenDropDown] = useState(false);
  const { shareOverlay } = props;
  console.log(shareOverlay);

  const closeModal = () => {
    props.setShareOverlay(false);
  };
  return (
    <div
      id="share-modal"
      className={`modal share-modal is-xsmall has-light-bg ${
        shareOverlay ? "is-active" : ""
      }`}
    >
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="card">
          <div className="card-heading">
            <div
              className={`dropdown is-primary share-dropdown ${
                openDropDown ? "is-active" : ""
              }`}
            >
              <div>
                <div
                  className="button"
                  onClick={() => setOpenDropDown(!openDropDown)}
                >
                  <AlignLeft /> <span>Share in your feed</span> <ChevronDown />
                </div>
              </div>
              <div className="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <div className="dropdown-item" data-target-channel="feed">
                    <div className="media">
                      <AlignLeft className="mr-4" />
                      <div className="media-content">
                        <h3>Share in your feed</h3>
                        <small>Share this publication on your feed.</small>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-item" data-target-channel="friend">
                    <div className="media">
                      <UserCheck className="mr-4" />
                      <div className="media-content">
                        <h3>Share in a friend's feed</h3>
                        <small>
                          Share this publication on a friend's feed.
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-item" data-target-channel="group">
                    <div className="media">
                      <Users className="mr-4" />
                      <div className="media-content">
                        <h3>Share in a group</h3>
                        <small>Share this publication in a group.</small>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-item" data-target-channel="page">
                    <div className="media">
                      <Layout className="mr-4" />
                      <div className="media-content">
                        <h3>Share in a page</h3>
                        <small>Share this publication in a page.</small>
                      </div>
                    </div>
                  </div>
                  <hr className="dropdown-divider" />
                  <div
                    className="dropdown-item"
                    data-target-channel="private-message"
                  >
                    <div className="media">
                      <Mail className="mr-4" />
                      <div className="media-content">
                        <h3>Share in message</h3>
                        <small>
                          Share this publication in a private message.
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="close-wrap">
              <span className="close-modal" onClick={closeModal}>
                <X />
              </span>
            </div>
          </div>
          <div className="share-inputs">
            <div className="field is-autocomplete">
              <div
                id="share-to-friend"
                className="control share-channel-control is-hidden"
              >
                <input
                  id="share-with-friend"
                  type="text"
                  className="input is-sm no-radius share-input simple-users-autocpl"
                  placeholder="Your friend's name"
                />
                <div className="input-heading">Friend :</div>
              </div>
            </div>

            <div className="field is-autocomplete">
              <div
                id="share-to-group"
                className="control share-channel-control is-hidden"
              >
                <input
                  id="share-with-group"
                  type="text"
                  className="input is-sm no-radius share-input simple-groups-autocpl"
                  placeholder="Your group's name"
                />
                <div className="input-heading">Group :</div>
              </div>
            </div>

            <div
              id="share-to-page"
              className="control share-channel-control no-border is-hidden"
            >
              <div className="page-controls">
                <div className="page-selection">
                  <div className="dropdown is-accent page-dropdown">
                    <div>
                      <div className="button page-selector">
                        <img
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/avatars/hanzo.svg"
                          alt=""
                        />
                        <span>Css Ninja</span> <ChevronDown />
                      </div>
                    </div>
                    <div className="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        <div className="dropdown-item">
                          <div className="media">
                            <img
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="assets/img/avatars/hanzo.svg"
                              alt=""
                            />
                            <div className="media-content">
                              <h3>Css Ninja</h3>
                              <small>Share on Css Ninja.</small>
                            </div>
                          </div>
                        </div>

                        <div className="dropdown-item">
                          <div className="media">
                            <img
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="assets/img/icons/logos/nuclearjs.svg"
                              alt=""
                            />
                            <div className="media-content">
                              <h3>NuclearJs</h3>
                              <small>Share on NuclearJs.</small>
                            </div>
                          </div>
                        </div>

                        <div className="dropdown-item">
                          <div className="media">
                            <img
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="assets/img/icons/logos/slicer.svg"
                              alt=""
                            />
                            <div className="media-content">
                              <h3>Slicer</h3>
                              <small>Share on Slicer.</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="alias">
                  <img
                    src="https://via.placeholder.com/150x150"
                    data-demo-src="assets/img/avatars/jenna.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="field is-autocomplete">
              <div
                id="share-to-private-message"
                className="control share-channel-control is-hidden"
              >
                <input
                  id="share-with-private-message"
                  type="text"
                  className="input is-sm no-radius share-input simple-users-autocpl"
                  placeholder="Message a friend"
                />
                <div className="input-heading">To :</div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="control">
              <textarea
                className="textarea comment-textarea"
                rows="1"
                placeholder="Say something about this ..."
              ></textarea>
              <button className="emoji-button">
                <Smile />
              </button>
            </div>
            <div className="shared-publication">
              <div className="featured-image">
                <img
                  id="share-modal-image"
                  src="https://via.placeholder.com/1600x900"
                  data-demo-src="assets/img/demo/unsplash/1.jpg"
                  alt=""
                />
              </div>
              <div className="publication-meta">
                <div className="inner-flex">
                  <img
                    id="share-modal-avatar"
                    src="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
                    data-demo-src="assets/img/avatars/dan.jpg"
                    data-user-popover="1"
                    alt=""
                  />
                  <p id="share-modal-text">
                    Yesterday with <a href="#">@Karen Miller</a> and{" "}
                    <a href="#">@Marvin Stemperd</a> at the
                    <a href="#">#Rock'n'Rolla</a> concert in LA. Was totally
                    fantastic! People were really excited about this one!
                  </p>
                </div>
                <div className="publication-footer">
                  <div className="stats">
                    <div className="stat-block">
                      <Globe size={16} className="mr-1" />
                      <small>Public</small>
                    </div>
                    <div className="stat-block">
                      <Eye size={16} className="mr-1" />
                      <small>163 views</small>
                    </div>
                  </div>
                  <div className="publication-origin">
                    <small>Friendkit.io</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-share-inputs">
            <div
              id="action-place"
              className="field is-autocomplete is-dropup is-hidden"
            >
              <div
                id="share-place"
                className="control share-bottom-channel-control"
              >
                <input
                  type="text"
                  className="input is-sm no-radius share-input simple-locations-autocpl"
                  placeholder="Where are you?"
                />
                <div className="input-heading">Location :</div>
              </div>
            </div>

            <div
              id="action-tag"
              className="field is-autocomplete is-dropup is-hidden"
            >
              <div
                id="share-tags"
                className="control share-bottom-channel-control"
              >
                <input
                  id="share-friend-tags-autocpl"
                  type="text"
                  className="input is-sm no-radius share-input"
                  placeholder="Who are you with"
                />
                <div className="input-heading">Friends :</div>
              </div>
              <div
                id="share-modal-tag-list"
                className="tag-list no-margin"
              ></div>
            </div>
          </div>
          <div className="card-footer">
            <div className="action-wrap">
              <div className="footer-action" data-target-action="tag">
                <UserPlus size={16} className="mr-1" />
              </div>
              <div className="footer-action" data-target-action="place">
                <MapPin size={16} className="mr-1" />
              </div>
              <div
                className="footer-action dropdown is-spaced is-neutral dropdown-trigger is-up"
                data-target-action="permissions"
              >
                <div>
                  <Lock size={16} className="mr-1" />
                </div>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
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
                          <small>only friends can see this publication.</small>
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
            <div className="button-wrap">
              <button
                type="button"
                className="button is-solid dark-grey-button close-modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="button is-solid primary-button close-modal"
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
