import { Plus, Search, X } from "react-feather";

export default function CreateGroupModal() {
  return (
    <div id="create-group-modal" className="modal create-group-modal is-light-bg">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="card">
          <div className="card-heading">
            <h3>Create group</h3>
            <div className="close-wrap">
              <span className="close-modal">
                <X />
              </span>
            </div>
          </div>
          <div className="subheading">
            <div className="group-avatar">
              <input id="group-avatar-upload" type="file" />
              <div className="add-photo">
                <Plus />
              </div>
            </div>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Give the group a name"
              />
            </div>
          </div>
          <div className="card-body">
            <div className="inner">
              <div className="left-section">
                <div className="search-subheader">
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Search for friends to add"
                    />
                    <span className="icon">
                      <Search />
                    </span>
                  </div>
                </div>
                <div id="new-group-list" className="user-list has-slimscroll">
                  <div className="friend-block" data-ref="ref-1">
                    <img
                      className="friend-avatar"
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/dan.jpg"
                      alt=""
                    />
                    <div className="friend-name">Dan Walker</div>
                    <div className="round-checkbox is-small">
                      <div>
                        <input type="checkbox" id="checkbox-group-1" />
                        <label for="checkbox-group-1"></label>
                      </div>
                    </div>
                  </div>
                  <div className="friend-block" data-ref="ref-2">
                    <img
                      className="friend-avatar"
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/daniel.jpg"
                      alt=""
                    />
                    <div className="friend-name">Daniel Wellington</div>
                    <div className="round-checkbox is-small">
                      <div>
                        <input type="checkbox" id="checkbox-group-2" />
                        <label for="checkbox-group-2"></label>
                      </div>
                    </div>
                  </div>
                  <div className="friend-block" data-ref="ref-3">
                    <img
                      className="friend-avatar"
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/stella.jpg"
                      alt=""
                    />
                    <div className="friend-name">Stella Bergmann</div>
                    <div className="round-checkbox is-small">
                      <div>
                        <input type="checkbox" id="checkbox-group-3" />
                        <label for="checkbox-group-3"></label>
                      </div>
                    </div>
                  </div>
                  <div className="friend-block" data-ref="ref-4">
                    <img
                      className="friend-avatar"
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/david.jpg"
                      alt=""
                    />
                    <div className="friend-name">David Kim</div>
                    <div className="round-checkbox is-small">
                      <div>
                        <input type="checkbox" id="checkbox-group-4" />
                        <label for="checkbox-group-4"></label>
                      </div>
                    </div>
                  </div>
                  <div className="friend-block" data-ref="ref-5">
                    <img
                      className="friend-avatar"
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/nelly.png"
                      alt=""
                    />
                    <div className="friend-name">Nelly Schwartz</div>
                    <div className="round-checkbox is-small">
                      <div>
                        <input type="checkbox" id="checkbox-group-5" />
                        <label for="checkbox-group-5"></label>
                      </div>
                    </div>
                  </div>
                  <div className="friend-block" data-ref="ref-6">
                    <img
                      className="friend-avatar"
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/elise.jpg"
                      alt=""
                    />
                    <div className="friend-name">Elise Walker</div>
                    <div className="round-checkbox is-small">
                      <div>
                        <input type="checkbox" id="checkbox-group-6" />
                        <label for="checkbox-group-6"></label>
                      </div>
                    </div>
                  </div>
                  <div className="friend-block" data-ref="ref-7">
                    <img
                      className="friend-avatar"
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/bobby.jpg"
                      alt=""
                    />
                    <div className="friend-name">Bobby Brown</div>
                    <div className="round-checkbox is-small">
                      <div>
                        <input type="checkbox" id="checkbox-group-7" />
                        <label for="checkbox-group-7"></label>
                      </div>
                    </div>
                  </div>
                  <div className="friend-block" data-ref="ref-8">
                    <img
                      className="friend-avatar"
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/lana.jpeg"
                      alt=""
                    />
                    <div className="friend-name">Lana Henrikssen</div>
                    <div className="round-checkbox is-small">
                      <div>
                        <input type="checkbox" id="checkbox-group-8" />
                        <label for="checkbox-group-8"></label>
                      </div>
                    </div>
                  </div>
                  <div className="friend-block" data-ref="ref-9">
                    <img
                      className="friend-avatar"
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/gaelle.jpeg"
                      alt=""
                    />
                    <div className="friend-name">Gaelle Morris</div>
                    <div className="round-checkbox is-small">
                      <div>
                        <input type="checkbox" id="checkbox-group-9" />
                        <label for="checkbox-group-9"></label>
                      </div>
                    </div>
                  </div>
                  <div className="friend-block" data-ref="ref-10">
                    <img
                      className="friend-avatar"
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/mike.jpg"
                      alt=""
                    />
                    <div className="friend-name">Mike Lasalle</div>
                    <div className="round-checkbox is-small">
                      <div>
                        <input type="checkbox" id="checkbox-group-10" />
                        <label for="checkbox-group-10"></label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-section has-slimscroll">
                <div className="selected-count">
                  <span>Selected</span>
                  <span id="selected-friends-count">0</span>
                </div>

                <div id="selected-list" className="selected-list"></div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="button is-solid grey-button close-modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="button is-solid accent-button close-modal"
            >
              Create a Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
