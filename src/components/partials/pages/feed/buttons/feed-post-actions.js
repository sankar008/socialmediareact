import { Heart, Link2, MessageCircle, X } from "react-feather";

export default function FeedPostActions() {
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
        >
          <Link2 />
        </a>
      </div>

      <div class="fab-wrapper is-comment">
        <a href="javascript:void(0);" class="small-fab">
          <MessageCircle />
        </a>
      </div>
    </>
  );
}
