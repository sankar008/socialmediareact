import { useState } from "react";
import { User, X } from "react-feather";
import DanConversation from "./chat-body/dan-conversation";
import DanielConversation from "./chat-body/daniel-conversation";
import DavidConversation from "./chat-body/david-conversation";
import EdwardConversation from "./chat-body/edward-conversation";
import EliseConversation from "./chat-body/elise-conversation";
import MillyConversation from "./chat-body/milly-conversation";
import NellyConversation from "./chat-body/nelly-conversation";
import StellaConversation from "./chat-body/stella-conversation";
import ComposeAddDropdown from "./chat-dropdowns/compose-add-dropdown";
import AddConversationModal from "./chat-modals/add-conversation-modal";
import ChatNav from "./chat-nav/chat-nav";
import DanDetails from "./chat-panel/user-details/dan-details";
import DanielDetails from "./chat-panel/user-details/daniel-details";
import DavidDetails from "./chat-panel/user-details/david-details";
import EdwardDetails from "./chat-panel/user-details/edward-details";
import EliseDetails from "./chat-panel/user-details/elise-details";
import MillyDetails from "./chat-panel/user-details/milly-details";
import NellyDetails from "./chat-panel/user-details/nelly-details";
import StellaDetails from "./chat-panel/user-details/stella-details";
import ConversationsList from "./chat-sidebar/conversations-list";

export default function ChatWrapper(props) {
  const { messageOverlay, setMessageOverlay } = props;
  const [openNewConversation, setOpenNewConversation] = useState(false);
  return (
    <>
      <div className={`chat-wrapper ${messageOverlay ? "is-active" : ""}`}>
        <div className="chat-inner">
          <ChatNav messageOverlay={messageOverlay} setMessageOverlay={setMessageOverlay}/>

          <div id="chat-sidebar" className="users-sidebar">
            <div className="header-item">
              <img
                className="light-image"
                src="https://friendkit.cssninja.io/assets/img/logo/friendkit-bold.svg"
                alt=""
              />
              <img
                className="dark-image"
                src="assets/img/logo/friendkit-white.svg"
                alt=""
              />
            </div>
            <div className="conversations-list has-slimscroll-xs">
              <ConversationsList />
            </div>
            <div className="footer-item">
              <div
                className="add-button modal-trigger"
                data-modal="add-conversation-modal"
                onClick={() => setOpenNewConversation(true)}
              >
                <User />
              </div>
            </div>
          </div>

          <div id="chat-body" className="chat-body is-opened">
            <DanConversation />
            <StellaConversation />
            <DanielConversation />
            <DavidConversation />
            <EdwardConversation />
            <EliseConversation />
            <NellyConversation />
            <MillyConversation />

            <div className="chat-action">
              <div className="chat-action-inner">
                <div className="control">
                  <textarea
                    className="textarea comment-textarea"
                    rows="1"
                  ></textarea>
                  <ComposeAddDropdown />
                </div>
              </div>
            </div>
          </div>

          <div id="chat-panel" className="chat-panel is-opened">
            <div className="panel-inner">
              <div className="panel-header">
                <h3>Details</h3>
                <div className="panel-close">
                  <X />
                </div>
              </div>

              <DanDetails />
              <StellaDetails />
              <DanielDetails />
              <DavidDetails />
              <EdwardDetails />
              <EliseDetails />
              <NellyDetails />
              <MillyDetails />
            </div>
          </div>
        </div>
      </div>
      <AddConversationModal openNewConversation={openNewConversation} setOpenNewConversation={setOpenNewConversation}/>
    </>
  );
}
