import { useState } from "react";
import {
  Bell,
  Camera,
  ChevronDown,
  Edit3,
  Globe,
  Image,
  Link2,
  Lock,
  MapPin,
  MoreHorizontal,
  Search,
  Smile,
  Tag,
  User,
  Users,
  Video,
  X
} from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";

export default function ComposeCard(props) {
  const [isActive, setIsActive] = useState(false);
  const [extended, setExtended] = useState(false);
  const [autoComp, setAutoComp] = useState(0);

  const [activeDropDown1, setActiveDropDown1] = useState(false);
  const [activeDropDown2, setActiveDropDown2] = useState(false);

  const openModal = () => {
    setIsActive(true);
    props.setAppOverlay(true);
  };

  const closeModal = () => {
    setIsActive(false);
    setExtended(false);
    props.setAppOverlay(false);
  };

  const openAlbumModal = () => {
    props.setAlbumOverlay(true);
  };

  const openVideoModal = () => {
    props.setVideoOverlay(true);
  };

  return (
    <div
      id="compose-card"
      className={`card is-new-content ${isActive ? "is-highlighted" : ""}`}
      style={{ overflow: "visible" }}
    >
      {/* Top tabs */}
      <div className="tabs-wrapper">
        <div className="tabs is-boxed is-fullwidth">
          <ul>
            <li className="is-active">
              <a>
                <span className="icon is-small">
                  <Edit3 />
                </span>
                <span>Publish</span>
              </a>
            </li>
            <li onClick={openAlbumModal}>
              <a className="modal-trigger" data-modal="albums-help-modal">
                <span className="icon is-small">
                  <Image />
                </span>
                <span>Albums</span>
              </a>
            </li>
            <li onClick={openVideoModal}>
              <a className="modal-trigger" data-modal="videos-help-modal">
                <span className="icon is-small">
                  <Video />
                </span>
                <span>Video</span>
              </a>
            </li>
            {/* Close X button */}
            <li className="close-wrap">
              <span className="close-publish" onClick={() => closeModal()}>
                <X />
              </span>
            </li>
          </ul>
        </div>

        {/* Tab content */}
        <div className="tab-content">
          {/* Compose form */}
          <div className="compose">
            <div className="compose-form">
              <img
                src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png"
                data-demo-src="assets/img/avatars/jenna.png"
                alt=""
              />
              <div className="control">
                <textarea
                  id="publish"
                  className="textarea"
                  rows="3"
                  placeholder="Write something about you..."
                  onFocus={openModal}
                ></textarea>
              </div>
            </div>

            <div id="feed-upload" className="feed-upload"></div>

            <div id="options-summary" className="options-summary"></div>

            <div
              id="tag-suboption"
              className={`is-autocomplete is-suboption ${
                autoComp === 2 ? "" : "is-hidden"
              }`}
            >
              {/* Tag friends suboption */}
              <div id="tag-list" className="tag-list"></div>
              <div className="control is-location-wrapper has-margin">
                <input
                  id="users-autocpl"
                  type="text"
                  className="input"
                  autoComplete="off"
                  placeholder="Who are you with?"
                />
                <div className="icon">
                  <Search />
                </div>
                <div
                  className="close-icon is-main"
                  onClick={() => setAutoComp(0)}
                >
                  <X />
                </div>
              </div>
            </div>
            {/* /Tag friends suboption */}

            {/* Activities suboption */}
            <div
              id="activities-suboption"
              className={`is-autocomplete is-suboption ${
                autoComp === 1 ? "" : "is-hidden"
              }`}
            >
              <div
                id="activities-autocpl-wrapper"
                className="control is-location-wrapper has-margin"
              >
                <input
                  id="activities-autocpl"
                  type="text"
                  className="input"
                  autoComplete="off"
                  placeholder="What are you doing right now?"
                />
                <div className="icon">
                  <Search />
                </div>
                <div
                  className="close-icon is-main"
                  onClick={() => setAutoComp(0)}
                >
                  <X />
                </div>
              </div>

              {/* Mood suboption */}
              <div
                id="mood-autocpl-wrapper"
                className="is-autocomplete is-activity is-hidden"
              >
                <div className="control has-margin">
                  <input
                    id="mood-autocpl"
                    type="text"
                    className="input is-subactivity"
                    placeholder="How do you feel?"
                  />
                  <div className="input-block">Feels</div>
                  <div className="close-icon is-subactivity">
                    <X />
                  </div>
                </div>
              </div>

              {/* Drinking suboption child */}
              <div
                id="drinking-autocpl-wrapper"
                className="is-autocomplete is-activity is-hidden"
              >
                <div className="control has-margin">
                  <input
                    id="drinking-autocpl"
                    type="text"
                    className="input is-subactivity"
                    placeholder="What are you drinking?"
                  />
                  <div className="input-block">Drinks</div>
                  <div className="close-icon is-subactivity">
                    <X />
                  </div>
                </div>
              </div>

              {/* Eating suboption child */}
              <div
                id="eating-autocpl-wrapper"
                className="is-autocomplete is-activity is-hidden"
              >
                <div className="control has-margin">
                  <input
                    id="eating-autocpl"
                    type="text"
                    className="input is-subactivity"
                    placeholder="What are you eating?"
                  />
                  <div className="input-block">Eats</div>
                  <div className="close-icon is-subactivity">
                    <X />
                  </div>
                </div>
              </div>

              {/* Reading suboption child */}
              <div
                id="reading-autocpl-wrapper"
                className="is-autocomplete is-activity is-hidden"
              >
                <div className="control has-margin">
                  <input
                    id="reading-autocpl"
                    type="text"
                    className="input is-subactivity"
                    placeholder="What are you reading?"
                  />
                  <div className="input-block">Reads</div>
                  <div className="close-icon is-subactivity">
                    <X />
                  </div>
                </div>
              </div>

              {/* Watching suboption child */}
              <div
                id="watching-autocpl-wrapper"
                className="is-autocomplete is-activity is-hidden"
              >
                <div className="control has-margin">
                  <input
                    id="watching-autocpl"
                    type="text"
                    className="input is-subactivity"
                    placeholder="What are you watching?"
                  />
                  <div className="input-block">Watches</div>
                  <div className="close-icon is-subactivity">
                    <X />
                  </div>
                </div>
              </div>

              {/* Travel suboption child */}
              <div
                id="travel-autocpl-wrapper"
                className="is-autocomplete is-activity is-hidden"
              >
                <div className="control has-margin">
                  <input
                    id="travel-autocpl"
                    type="text"
                    className="input is-subactivity"
                    placeholder="Where are you going?"
                  />
                  <div className="input-block">Travels</div>
                  <div className="close-icon is-subactivity">
                    <X />
                  </div>
                </div>
              </div>
            </div>
            {/* /Activities suboption */}

            {/* Location suboption */}
            <div
              id="location-suboption"
              className={`is-autocomplete is-suboption ${
                autoComp === 3 ? "" : "is-hidden"
              }`}
            >
              <div
                id="location-autocpl-wrapper"
                className="control is-location-wrapper has-margin"
              >
                <input
                  id="location-autocpl"
                  type="text"
                  className="input"
                  autoComplete="off"
                  placeholder="Where are you now?"
                />
                <div className="icon">
                  <MapPin />
                </div>
                <div
                  className="close-icon is-main"
                  onClick={() => setAutoComp(0)}
                >
                  <X />
                </div>
              </div>
            </div>

            {/* Link suboption */}
            <div
              id="link-suboption"
              className={`is-autocomplete is-suboption ${
                autoComp === 4 ? "" : "is-hidden"
              }`}
            >
              <div
                id="link-autocpl-wrapper"
                className="control is-location-wrapper has-margin"
              >
                <input
                  id="link-autocpl"
                  type="text"
                  className="input"
                  autoComplete="off"
                  placeholder="Enter the link URL"
                />
                <div className="icon">
                  <Link2 />
                </div>
                <div
                  className="close-icon is-main"
                  onClick={() => setAutoComp(0)}
                >
                  <X />
                </div>
              </div>
            </div>

            {/* GIF suboption */}
            <div
              id="gif-suboption"
              className={`is-autocomplete is-suboption ${
                autoComp === 5 ? "" : "is-hidden"
              }`}
            >
              <div
                id="gif-autocpl-wrapper"
                className="control is-gif-wrapper has-margin"
              >
                <input
                  id="gif-autocpl"
                  type="text"
                  className="input"
                  autoComplete="off"
                  placeholder="Search a GIF to add"
                  autoFocus
                />
                <div className="icon">
                  <Search />
                </div>
                <div
                  className="close-icon is-main"
                  onClick={() => setAutoComp(0)}
                >
                  <X />
                </div>
                <div className="gif-dropdown">
                  <div className="inner">
                    <div className="gif-block">
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/1.gif"
                        alt=""
                      />
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/2.gif"
                        alt=""
                      />
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/3.gif"
                        alt=""
                      />
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/4.gif"
                        alt=""
                      />
                    </div>
                    <div className="gif-block">
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/5.gif"
                        alt=""
                      />
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/6.gif"
                        alt=""
                      />
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/7.gif"
                        alt=""
                      />
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/8.gif"
                        alt=""
                      />
                    </div>
                    <div className="gif-block">
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/9.gif"
                        alt=""
                      />
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/10.gif"
                        alt=""
                      />
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/11.gif"
                        alt=""
                      />
                      <img
                        src="https://via.placeholder.com/478x344"
                        data-demo-src="assets/img/demo/gif/12.gif"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Compose form */}

          {/* General extended options */}
          <div
            id="extended-options"
            className={`compose-options ${extended ? "" : "is-hidden"}`}
          >
            <div className="columns is-multiline is-full">
              {/* Upload action */}
              <div className="column is-6 is-narrower">
                <div className="compose-option is-centered">
                  <Camera />
                  <span>Photo/Video</span>
                  <input
                    id="feed-upload-input-1"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange="readURL(this)"
                  />
                </div>
              </div>
              {/* Mood action */}
              <div
                className="column is-6 is-narrower"
                onClick={() => setAutoComp(1)}
              >
                <div
                  id="extended-show-activities"
                  className="compose-option is-centered"
                >
                  <Smile />
                  <span>Mood/Activity</span>
                </div>
              </div>
              {/* Tag friends action */}
              <div
                className="column is-6 is-narrower"
                onClick={() => setAutoComp(2)}
              >
                <div
                  id="open-tag-suboption"
                  className="compose-option is-centered"
                >
                  <Tag />
                  <span>Tag friends</span>
                </div>
              </div>
              {/* Post location action */}
              <div
                className="column is-6 is-narrower"
                onClick={() => setAutoComp(3)}
              >
                <div
                  id="open-location-suboption"
                  className="compose-option is-centered"
                >
                  <MapPin />
                  <span>Post location</span>
                </div>
              </div>
              {/* Share link action */}
              <div
                className="column is-6 is-narrower"
                onClick={() => setAutoComp(4)}
              >
                <div
                  id="open-link-suboption"
                  className="compose-option is-centered"
                >
                  <Link2 />
                  <span>Share link</span>
                </div>
              </div>
              {/* Post GIF action */}
              <div
                className="column is-6 is-narrower"
                onClick={() => setAutoComp(5)}
              >
                <div
                  id="open-gif-suboption"
                  className="compose-option is-centered"
                >
                  <Image />
                  <span>Post GIF</span>
                </div>
              </div>
            </div>
          </div>
          {/* /General extended options */}

          {/* General basic options */}
          <div
            id="basic-options"
            className={`compose-options ${!extended ? "" : "is-hidden"}`}
          >
            {/* Upload action */}
            <div className="compose-option">
              <Camera />
              <span>Media</span>
              <input
                id="feed-upload-input-2"
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange="readURL(this)"
              />
            </div>
            {/* Mood action */}
            <div id="show-activities" className="compose-option">
              <Smile />
              <span>Activity</span>
            </div>
            {/* Expand action */}
            <div
              id="open-extended-options"
              className="compose-option"
              onClick={setExtended}
              onFocus={openModal}
            >
              <MoreHorizontal />
            </div>
          </div>
          {/* /General basic options */}
          <div class="hidden-options">
            <div class="target-channels">
              <div class="channel">
                <div class="round-checkbox is-small">
                  <div>
                    <input type="checkbox" id="checkbox-1" checked />
                    <label for="checkbox-1"></label>
                  </div>
                </div>
                <div class="channel-icon">
                  <Bell />
                </div>
                <div class="channel-name">Activity Feed</div>
                <div
                  class={`dropdown is-spaced is-modern is-right is-neutral dropdown-trigger ${
                    activeDropDown1 ? "is-active" : ""
                  }`}
                >
                  <div>
                    <OutsideClickHandler
                      onOutsideClick={() => {
                        setActiveDropDown1(false);
                      }}
                    >
                      <button
                        class="button"
                        aria-haspopup="true"
                        onClick={() => setActiveDropDown1(!activeDropDown1)}
                      >
                        <Smile />
                        <span>Friends</span>
                        <ChevronDown />
                      </button>
                    </OutsideClickHandler>
                  </div>
                  <div class="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                      <a href="#" class="dropdown-item">
                        <div class="media">
                          <Globe />
                          <div class="media-content">
                            <h3>Public</h3>
                            <small>Anyone can see this publication.</small>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item">
                        <div class="media">
                          <Users />
                          <div class="media-content">
                            <h3>Friends</h3>
                            <small>
                              only friends can see this publication.
                            </small>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item">
                        <div class="media">
                          <User />
                          <div class="media-content">
                            <h3>Specific friends</h3>
                            <small>Don't show it to some friends.</small>
                          </div>
                        </div>
                      </a>
                      <hr class="dropdown-divider" />
                      <a class="dropdown-item">
                        <div class="media">
                          <Lock />
                          <div class="media-content">
                            <h3>Only me</h3>
                            <small>Only me can see this publication.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="channel">
                <div class="round-checkbox is-small">
                  <div>
                    <input type="checkbox" id="checkbox-2" />
                    <label for="checkbox-2"></label>
                  </div>
                </div>
                <div class="story-icon">
                  <div class="plus-icon">
                    <i data-feather="plus"></i>
                  </div>
                </div>

                <div class="channel-name">My Story</div>
                <div
                  class={`dropdown is-spaced is-modern is-right is-neutral dropdown-trigger ${
                    activeDropDown2 ? "is-active" : ""
                  }`}
                >
                  <div>
                    <OutsideClickHandler
                      onOutsideClick={() => {
                        setActiveDropDown2(false);
                      }}
                    >
                      <button
                        class="button"
                        aria-haspopup="true"
                        onClick={() => setActiveDropDown2(!activeDropDown2)}
                      >
                        <Smile />
                        <span>Friends</span>
                        <ChevronDown />
                      </button>
                    </OutsideClickHandler>
                  </div>
                  <div class="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                      <a href="#" class="dropdown-item">
                        <div class="media">
                          <Globe />
                          <div class="media-content">
                            <h3>Public</h3>
                            <small>Anyone can see this publication.</small>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item">
                        <div class="media">
                          <Users />
                          <div class="media-content">
                            <h3>Friends</h3>
                            <small>
                              only friends can see this publication.
                            </small>
                          </div>
                        </div>
                      </a>
                      <a class="dropdown-item">
                        <div class="media">
                          <Users />
                          <div class="media-content">
                            <h3>Friends and contacts</h3>
                            <small>Your friends and contacts.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="friends-list is-hidden">
              <div class="list-header">
                <span>Send in a message</span>
                <div class="actions">
                  <a
                    id="open-compose-search"
                    href="javascript:void(0);"
                    class="search-trigger"
                  >
                    <i data-feather="search"></i>
                  </a>
                  <div id="compose-search" class="control is-hidden">
                    <input
                      type="text"
                      class="input"
                      placeholder="Search People"
                    />
                    <span>
                      <i data-feather="search"></i>
                    </span>
                  </div>
                  <a
                    href="javascript:void(0);"
                    class="is-inverted modal-trigger"
                    data-modal="create-group-modal"
                  >
                    Create group
                  </a>
                </div>
              </div>
              <div class="list-body">
                <div class="friend-block">
                  <div class="round-checkbox is-small">
                    <div>
                      <input type="checkbox" id="checkbox-3" />
                      <label for="checkbox-3"></label>
                    </div>
                  </div>
                  <img
                    class="friend-avatar"
                    src="https://via.placeholder.com/300x300"
                    data-demo-src="assets/img/avatars/dan.jpg"
                    alt=""
                  />
                  <div class="friend-name">Dan Walker</div>
                </div>
                <div class="friend-block">
                  <div class="round-checkbox is-small">
                    <div>
                      <input type="checkbox" id="checkbox-4" />
                      <label for="checkbox-4"></label>
                    </div>
                  </div>
                  <img
                    class="friend-avatar"
                    src="https://via.placeholder.com/300x300"
                    data-demo-src="assets/img/avatars/daniel.jpg"
                    alt=""
                  />
                  <div class="friend-name">Daniel Wellington</div>
                </div>
                <div class="friend-block">
                  <div class="round-checkbox is-small">
                    <div>
                      <input type="checkbox" id="checkbox-5" />
                      <label for="checkbox-5"></label>
                    </div>
                  </div>
                  <img
                    class="friend-avatar"
                    src="https://via.placeholder.com/300x300"
                    data-demo-src="assets/img/avatars/stella.jpg"
                    alt=""
                  />
                  <div class="friend-name">Stella Bergmann</div>
                </div>
                <div class="friend-block">
                  <div class="round-checkbox is-small">
                    <div>
                      <input type="checkbox" id="checkbox-6" />
                      <label for="checkbox-6"></label>
                    </div>
                  </div>
                  <img
                    class="friend-avatar"
                    src="https://via.placeholder.com/300x300"
                    data-demo-src="assets/img/avatars/david.jpg"
                    alt=""
                  />
                  <div class="friend-name">David Kim</div>
                </div>
                <div class="friend-block">
                  <div class="round-checkbox is-small">
                    <div>
                      <input type="checkbox" id="checkbox-7" />
                      <label for="checkbox-7"></label>
                    </div>
                  </div>
                  <img
                    class="friend-avatar"
                    src="https://via.placeholder.com/300x300"
                    data-demo-src="assets/img/avatars/nelly.png"
                    alt=""
                  />
                  <div class="friend-name">Nelly Schwartz</div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer buttons */}
          <div className="more-wrap">
            {/* View more button */}
            {/* <button
              id="show-compose-friends"
              type="button"
              className="button is-more"
              aria-haspopup="true"
            >
              <MoreVertical />
              <span>View More</span>
            </button> */}
            {/* Publish button */}
            <button
              id="publish-button"
              type="button"
              className="button is-solid accent-button is-fullwidth"
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
