import { Link2, MessageCircle } from "react-feather";

export default function FeedPostActions() {
  return (
    <>
      <div class="like-wrapper">
        <a href="javascript:void(0);" class="like-button">
          <i class="mdi mdi-heart not-liked bouncy"></i>
          <i class="mdi mdi-heart is-liked bouncy"></i>
          <span class="like-overlay"></span>
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
