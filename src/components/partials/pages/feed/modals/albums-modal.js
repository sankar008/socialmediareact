import { useState } from "react";
import { Calendar, Camera, ChevronDown, Globe, Lock, MapPin, Plus, Search, Smile, User, Users, X } from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";

export default function AlbumsModal(props) {
  const { albumOverlay } = props;
  const [toggleShareOption, setToggleShareOption] = useState(false);
  const [toggleDate, setToggleDate] = useState(false);
  const [toggleTagFriendsOption, setToggleTagFriendsOption] = useState(false);

  const closeModal = () => {
    props.setAlbumOverlay(false);
    setToggleDate(false);
    setToggleShareOption(false);
    setToggleTagFriendsOption(false);
  };

  return (
    <div
      id="albums-modal"
      className={`modal albums-modal is-xxl has-light-bg ${
        albumOverlay ? "is-active" : ""
      }`}
    >
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="card">
          <div className="card-heading">
            <h3>New album</h3>
            <div className="button is-solid accent-button fileinput-button">
              <i className="mdi mdi-plus"></i>
              Add pictures/videos
            </div>

            <div className="close-wrap">
              <span className="close-modal" onClick={closeModal}>
                <X />
              </span>
            </div>
          </div>
          <div className="card-body">
            <div className="left-section">
              <div className="album-form">
                <div className="control">
                  <input
                    type="text"
                    className="input is-sm no-radius is-fade"
                    placeholder="Album name"
                  />
                  <div className="icon">
                    <Camera />
                  </div>
                </div>
                <div className="control">
                  <textarea
                    className="textarea is-fade no-radius is-sm"
                    rows="3"
                    placeholder="describe your album ..."
                  ></textarea>
                </div>
                <div className="control">
                  <input
                    type="text"
                    className="input is-sm no-radius is-fade"
                    placeholder="Place"
                  />
                  <div className="icon">
                    <MapPin />
                  </div>
                </div>
              </div>

              <div id="album-date" className="album-date">
                <div className="head">
                  <h4>Change the date</h4>
                  <button
                    type="button"
                    className={`button is-solid dark-grey-button icon-button ${!toggleDate ? '' : 'is-hidden'}`}
                    onClick={() => setToggleDate (!toggleDate)}
                  >
                    <Plus />
                  </button>
                </div>

                <p className={`${!toggleDate ? '' : 'is-hidden'}`}>
                  Set a date for your album. You can always change it later.
                </p>
                <div className={`control ${toggleDate ? '' : 'is-hidden'}`}>
                  <input
                    id="album-datepicker"
                    type="date"
                    className="input is-sm is-fade"
                    placeholder="Select a date"
                  />
                  <div className="icon">
                    <Calendar />
                  </div>
                </div>
              </div>

              <div id="tagged-in-album" className="tagged-in-album">
                <div className="head">
                  <h4>Tag friends in this album</h4>
                  <button
                    type="button"
                    className={`button is-solid dark-grey-button icon-button ${!toggleTagFriendsOption ? '' : 'is-hidden'}`}
                    onClick={() => setToggleTagFriendsOption (!toggleTagFriendsOption)}
                  >
                    <Plus />
                  </button>
                </div>

                <p className={`${!toggleTagFriendsOption ? '' : 'is-hidden'}`}>
                  Tag friends in this album. Tagged friends can see photos they
                  are tagged in.
                </p>
                <div className={`field is-autocomplete ${toggleTagFriendsOption ? '' : 'is-hidden'}`}>
                  <div className="control">
                    <input
                      id="create-album-friends-autocpl"
                      type="text"
                      className="input is-sm is-fade"
                      placeholder="Search for friends"
                    />
                    <div className="icon">
                      <Search />
                    </div>
                  </div>
                </div>

                <div id="album-tag-list" className="album-tag-list"></div>
              </div>

              <div className="shared-album">
                <div className="head">
                  <h4>Allow friends to add photos</h4>
                  <div className="basic-checkbox">
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-1"
                      type="checkbox"
                      value="value1"
                    />
                    <label for="styled-checkbox-1"></label>
                  </div>
                </div>

                <p>
                  Tagged friends will be able to share content inside this
                  album.
                </p>
              </div>
            </div>
            <div className="right-section has-slimscroll">
              <div className="modal-uploader">
                <div id="actions" className="columns is-multiline no-mb">
                  <div className="column is-12">
                    <span className="button has-icon is-solid grey-button fileinput-button">
                      <Plus />
                    </span>
                    <button type="submit" className="button start is-hidden">
                      <span>Upload</span>
                    </button>
                    <button
                      type="reset"
                      className="button is-solid grey-button cancel"
                    >
                      <span>Clear all</span>
                    </button>
                    <span className="file-count">
                      <span id="modal-uploader-file-count">0</span> file(s)
                      selected
                    </span>
                  </div>

                  <div className="column is-12 is-hidden">
                    <div className="fileupload-process">
                      <div
                        id="total-progress"
                        className="progress progress-striped active"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow="0"
                      >
                        <div
                          className="progress-bar progress-bar-success"
                          data-dz-uploadprogress
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="columns is-multiline" id="previews">
                  <div id="template" className="column is-4 is-template">
                    <div className="preview-box">
                      
                      <div className="remove-button" data-dz-remove>
                        <X />
                      </div>
                      <div>
                        <span className="preview">
                          <img
                            src="https://via.placeholder.com/300x100"
                            data-dz-thumbnail
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="preview-body">
                        <div className="item-meta">
                          <div>
                            <p className="name" data-dz-name></p>
                            <strong
                              className="error text-danger"
                              data-dz-errormessage
                            ></strong>
                          </div>
                          <small className="size" data-dz-size></small>
                        </div>
                        <div className="upload-item-progress">
                          <div
                            className="progress active"
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow="0"
                          >
                            <div
                              className="progress-bar progress-bar-success"
                              data-dz-uploadprogress
                            ></div>
                          </div>
                        </div>
                        <div className="upload-item-description">
                          <div className="control">
                            <textarea
                              className="textarea is-small is-fade no-radius"
                              rows="4"
                              placeholder="Describe this photo ..."
                            ></textarea>
                          </div>
                        </div>
                        <div className="upload-item-actions is-hidden">
                          <button className="button start is-hidden">
                            <span>Start</span>
                          </button>
                          <button
                            data-dz-remove
                            className="button cancel is-hidden"
                          >
                            <span>Cancel</span>
                          </button>
                          <button
                            data-dz-remove
                            className="button delete is-hidden"
                          >
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className={`dropdown is-up is-spaced is-modern is-neutral is-right dropdown-trigger ${toggleShareOption ? 'is-active' : ''}`}>
            <OutsideClickHandler
                      onOutsideClick={() => {
                        setToggleShareOption(false);
                      }}
                    >
                <button className="button" aria-haspopup="true" onClick={() => setToggleShareOption(!toggleShareOption)}>
                  <Smile className="main-icon" />
                  <span>Friends</span>
                  <ChevronDown className="caret"/>
                </button>
              </OutsideClickHandler>
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
            <button
              type="button"
              className="button is-solid accent-button close-modal"
            >
              Create album
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
