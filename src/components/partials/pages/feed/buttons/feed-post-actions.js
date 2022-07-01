import { Heart, Link2, MessageCircle, X } from "react-feather";

export default function FeedPostActions(props) {
  const toggleComment = () => {
    const showComment = props.showComment;
    props.setShowComment(!showComment);
  }

  const toggleShare = () => {
    const shareOverlay = props.shareOverlay;
    props.setShareOverlay(!shareOverlay);
  }
  
  return (
    <>
      <div className="like-wrapper">
        <a href="javascript:void(0);" className="like-button">
          <Heart />
        </a>
      </div>

      <div className="fab-wrapper is-share">
        <a
          href="javascript:void(0);"
          className="small-fab share-fab modal-trigger"
          data-modal="share-modal"
          onClick={toggleShare}
        >
          <Link2 />
        </a>
      </div>

      <div className="fab-wrapper is-comment">
        <a href="javascript:void(0);" className="small-fab" onClick={toggleComment}>
          <MessageCircle />
        </a>
      </div>
    </>
  );
}
