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
      <div class="like-wrapper">
        <a href="javascript:void(0);" class="like-button">
          <Heart />
        </a>
      </div>

      <div class="fab-wrapper is-share">
        <a
          href="javascript:void(0);"
          class="small-fab share-fab modal-trigger"
          data-modal="share-modal"
          onClick={toggleShare}
        >
          <Link2 />
        </a>
      </div>

      <div class="fab-wrapper is-comment">
        <a href="javascript:void(0);" class="small-fab" onClick={toggleComment}>
          <MessageCircle />
        </a>
      </div>
    </>
  );
}
