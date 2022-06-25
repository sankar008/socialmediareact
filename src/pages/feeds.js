import { useState } from "react";
import { MainNavbar } from "../components/Navbar/MainNavbar";
import BirthdayWidget from "../components/partials/misc/widgets/birthday-widget";
import FakeAddWidget from "../components/partials/misc/widgets/fake-add-widget";
import LatestActivityWidget from "../components/partials/misc/widgets/latest-activity-widget";
import NewJobWidget from "../components/partials/misc/widgets/new-job-widget";
import RecommendedPagesWidget from "../components/partials/misc/widgets/recommended-pages-widget";
import StoriesWidget from "../components/partials/misc/widgets/stories-widget";
import SuggestedFriendsWidget from "../components/partials/misc/widgets/suggested-friends-widget";
import WeatherWidget from "../components/partials/misc/widgets/weather-widget";
import ComposeCard from "../components/partials/pages/feed/compose-card";
import AlbumsModal from "../components/partials/pages/feed/modals/albums-modal";
import CreateGroupModal from "../components/partials/pages/feed/modals/create-group-modal";
import NoStreamModal from "../components/partials/pages/feed/modals/no-stream-modal";
import ShareModal from "../components/partials/pages/feed/modals/share-modal";
import VideosModal from "../components/partials/pages/feed/modals/videos-modal";
import FeedPost1 from "../components/partials/pages/feed/posts/feed-post1";
import FeedPost2 from "../components/partials/pages/feed/posts/feed-post2";
import FeedPost3 from "../components/partials/pages/feed/posts/feed-post3";
import FeedPost4 from "../components/partials/pages/feed/posts/feed-post4";
import FeedPost5 from "../components/partials/pages/feed/posts/feed-post5";
import FeedPost6 from "../components/partials/pages/feed/posts/feed-post6";

export default function Feeds() {
  const [appOverlay, setAppOverlay] = useState(false);
  const [albumOverlay, setAlbumOverlay] = useState(false);
  const [videoOverlay, setVideoOverlay] = useState(false);
  const [shareOverlay, setShareOverlay] = useState(false);

  return (
    <>
      <div className={`app-overlay ${appOverlay ? "is-active" : ""}`}></div>
      <MainNavbar />
      <div class="view-wrapper">
        <div id="main-feed" class="container">
          {/* Content placeholders at page load */}
          {/* {{> feed-shadow-dom ---------------------}} */}

          <div id="activity-feed" class="view-wrap true-dom is-hidden1">
            <div class="columns">
              <div class="column is-3 is-hidden-mobile">
                <WeatherWidget />
                <RecommendedPagesWidget />
                <FakeAddWidget />
                <LatestActivityWidget />
              </div>

              <div class="column is-6">
                <ComposeCard
                  setAppOverlay={setAppOverlay}
                  setAlbumOverlay={setAlbumOverlay}
                  setVideoOverlay={setVideoOverlay}
                />

                <FeedPost1
                  shareOverlay={shareOverlay}
                  setShareOverlay={setShareOverlay}
                />
                <FeedPost2
                  shareOverlay={shareOverlay}
                  setShareOverlay={setShareOverlay}
                />
                <FeedPost3
                  shareOverlay={shareOverlay}
                  setShareOverlay={setShareOverlay}
                />
                <FeedPost4
                  shareOverlay={shareOverlay}
                  setShareOverlay={setShareOverlay}
                />
                <FeedPost5
                  shareOverlay={shareOverlay}
                  setShareOverlay={setShareOverlay}
                />
                <FeedPost6
                  shareOverlay={shareOverlay}
                  setShareOverlay={setShareOverlay}
                />

                {/* Load more posts */}
                <div class=" load-more-wrap narrow-top has-text-centered">
                  <a href="#" class="load-more-button">
                    Load More
                  </a>
                </div>
                {/* /Load more posts */}
              </div>
              <div class="column is-3">
                <StoriesWidget />
                <BirthdayWidget />
                <SuggestedFriendsWidget />
                <NewJobWidget />
              </div>
            </div>
          </div>
        </div>

        <CreateGroupModal />

        <AlbumsModal
          albumOverlay={albumOverlay}
          setAlbumOverlay={setAlbumOverlay}
        />

        <VideosModal
          videoOverlay={videoOverlay}
          setVideoOverlay={setVideoOverlay}
        />

        <ShareModal
          shareOverlay={shareOverlay}
          setShareOverlay={setShareOverlay}
        />

        <NoStreamModal />
      </div>
    </>
  );
}
