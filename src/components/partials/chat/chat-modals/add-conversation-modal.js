import { Search, X } from "react-feather";

export default function AddConversationModal(props) {
  const { openNewConversation, setOpenNewConversation } = props;
  return (
    <div
      id="add-conversation-modal"
      className={`modal add-conversation-modal is-xsmall has-light-bg ${
        openNewConversation ? "is-active" : ""
      } `}
    >
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="card">
          <div className="card-heading">
            <h3>New Conversation</h3>
            <div className="close-wrap">
              <span
                className="close-modal"
                onClick={() => setOpenNewConversation(false)}
              >
                <X />
              </span>
            </div>
          </div>
          <div className="card-body">
            <img src="https://friendkit.cssninja.io/assets/img/icons/chat/bubbles.svg" alt="" />

            <div className="field is-autocomplete">
              <div className="control has-icon">
                <input
                  type="text"
                  className="input simple-users-autocpl"
                  placeholder="Search a user"
                />
                <div className="form-icon">
                  <Search />
                </div>
              </div>
            </div>

            <div className="help-text">
              Select a user to start a new conversation. You'll be able to add
              other users later.
            </div>

            <div className="action has-text-centered">
              <button
                type="button"
                className="button is-solid accent-button raised"
              >
                Start conversation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
