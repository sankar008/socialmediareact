import { X } from "react-feather";

export default function VideosHelpModal() {
  return (
    <div
      id="videos-help-modal"
      className="modal videos-help-modal is-xsmall has-light-bg"
    >
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="card">
          <div className="card-heading">
            <h3>Add Photos</h3>
            <div className="close-wrap">
              <span className="close-modal">
                <X />
              </span>
            </div>
          </div>
          <div className="card-body">
            <div className="content-block is-active">
              <img src="assets/img/illustrations/cards/videotrip.svg" alt="" />
              <div className="help-text">
                <h3>Share live videos</h3>
                <p>
                  Lorem ipsum sit dolor amet is a dummy text used by the
                  typography industry and the web industry.
                </p>
              </div>
            </div>

            <div className="content-block">
              <img src="assets/img/illustrations/cards/videocall.svg" alt="" />
              <div className="help-text">
                <h3>To build your audience</h3>
                <p>
                  Lorem ipsum sit dolor amet is a dummy text used by the
                  typography industry and the web industry.
                </p>
              </div>
            </div>

            <div className="slide-dots">
              <div className="dot is-active"></div>
              <div className="dot"></div>
            </div>
            <div className="action">
              <button
                type="button"
                className="button is-solid accent-button next-modal raised"
                data-modal="videos-modal"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
