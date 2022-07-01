import { X } from "react-feather";

export default function AlbumsHelpModal() {
  return (
    <div
      id="albums-help-modal"
      className="modal albums-help-modal is-xsmall has-light-bg"
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
              <img src="assets/img/illustrations/cards/albums.svg" alt="" />
              <div className="help-text">
                <h3>Manage your photos</h3>
                <p>
                  Lorem ipsum sit dolor amet is a dummy text used by the
                  typography industry and the web industry.
                </p>
              </div>
            </div>

            <div className="content-block">
              <img src="assets/img/illustrations/cards/upload.svg" alt="" />
              <div className="help-text">
                <h3>Upload your photos</h3>
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
                data-modal="albums-modal"
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
