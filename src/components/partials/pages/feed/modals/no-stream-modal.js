import { X } from "react-feather";

export default function NoStreamModal() {
  return (
    <div
      id="no-stream-modal"
      className="modal no-stream-modal is-xsmall has-light-bg"
    >
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="card">
          <div className="card-heading">
            <h3></h3>
            <div className="close-wrap">
              <span className="close-modal">
                <X />
              </span>
            </div>
          </div>
          <div className="card-body has-text-centered">
            <div className="image-wrap">
              <img
                src="assets/img/illustrations/characters/no-stream.svg"
                alt=""
              />
            </div>

            <h3>Streaming Disabled</h3>
            <p>
              Streaming is not allowed from mobile web. Please use our mobile
              apps for mobile streaming.
            </p>

            <div className="action">
              <a
                href="/#demos-section"
                className="button is-solid accent-button raised is-fullwidth"
              >
                Got It
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
