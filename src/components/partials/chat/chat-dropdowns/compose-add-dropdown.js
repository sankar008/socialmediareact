import { Code, FileText, Monitor, Plus, Server } from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";

export default function ComposeAddDropdown() {
  const [activeDropDown, setActiveDropDown] = useState(false);

  return (
    <div
      class={`dropdown compose-dropdown is-spaced is-accent is-up dropdown-trigger ${
        activeDropDown ? "is-active" : ""
      }`}
    >
      <div>
        <div class="add-button">
          <OutsideClickHandler
            onOutsideClick={() => {
              setActiveDropDown(false);
            }}
          >
            <div
              class="button-inner"
              onClick={() => setActiveDropDown(!activeDropDown)}
            >
              <Plus />
            </div>
          </OutsideClickHandler>
        </div>
      </div>
      <div class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            <div class="media">
              <Code />
              <div class="media-content">
                <h3>Code snippet</h3>
                <small>Add and paste a code snippet.</small>
              </div>
            </div>
          </a>
          <a class="dropdown-item">
            <div class="media">
              <FileText />
              <div class="media-content">
                <h3>Note</h3>
                <small>Add and paste a note.</small>
              </div>
            </div>
          </a>
          <hr class="dropdown-divider" />
          <a class="dropdown-item">
            <div class="media">
              <Server />
              <div class="media-content">
                <h3>Remote file</h3>
                <small>Add a file from a remote drive.</small>
              </div>
            </div>
          </a>
          <a class="dropdown-item">
            <div class="media">
              <Monitor />
              <div class="media-content">
                <h3>Local file</h3>
                <small>Add a file from your computer.</small>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
