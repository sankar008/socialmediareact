import { useEffect, useState } from "react";
import ChatWrapper from "../components/partials/chat/chat-wrapper";
import BirthdayWidget from "../components/partials/misc/widgets/birthday-widget";
import FakeAddWidget from "../components/partials/misc/widgets/fake-add-widget";
import LatestActivityWidget from "../components/partials/misc/widgets/latest-activity-widget";
import NewJobWidget from "../components/partials/misc/widgets/new-job-widget";
import RecommendedPagesWidget from "../components/partials/misc/widgets/recommended-pages-widget";
import StoriesWidget from "../components/partials/misc/widgets/stories-widget";
import SuggestedFriendsWidget from "../components/partials/misc/widgets/suggested-friends-widget";
import ViewFriend from "../components/partials/misc/widgets/viewFriend";
import WeatherWidget from "../components/partials/misc/widgets/weather-widget";
import ExplorerMenu from "../components/partials/navigation/explorer-menu/explorer-menu";
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
import * as API from "../api/index";
export default function Feeds({ setIsLogin }) {
  const [appOverlay, setAppOverlay] = useState(false);
  const [albumOverlay, setAlbumOverlay] = useState(false);
  const [videoOverlay, setVideoOverlay] = useState(false);
  const [shareOverlay, setShareOverlay] = useState(false);

  const [messageOverlay, setMessageOverlay] = useState(false);
  const [exploreOverlay, setExploreOverlay] = useState(false);
  const [suggestFrindList, setSuggestFrindList] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [feedPostView, setFeedPostView] = useState([]);

  // ? USER DETAILS BY ID
  const userDetailsByid = async () => {
    const header = localStorage.getItem("__tokenCode");
    try {
      const response = await API.user_details(
        header,
        localStorage.getItem("__userId")
      );
      setUserDetails(response.data.data);
    } catch (error) {}
  };

  // ?>>>>>>>>> FEED POST SHOWING
  const feedAllPostShowing = async () => {
    const header = localStorage.getItem("__tokenCode");
    try {
      const response = await API.all_feedPostShow(header);
      console.log("response", response);
      setFeedPostView(response.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    feedAllPostShowing();
    userDetailsByid();
  }, []);

  return (
    <>
      <div className={`app-overlay ${appOverlay ? "is-active" : ""}`}></div>
      <div id="activity-feed" className="view-wrap true-dom is-hidden1">
        <div className="columns">
          <div className="column is-3 is-hidden-mobile">
            <WeatherWidget />
            {suggestFrindList.length === 0 ? (
              ""
            ) : (
              <ViewFriend
                setSuggestFrindList={setSuggestFrindList}
                suggestFrindList={suggestFrindList}
              />
            )}

            <RecommendedPagesWidget />
            <FakeAddWidget />
            <LatestActivityWidget />
          </div>

          <div className="column is-6">
            <ComposeCard
              setAppOverlay={setAppOverlay}
              setAlbumOverlay={setAlbumOverlay}
              setVideoOverlay={setVideoOverlay}
              userDetails={userDetails}
            />
            {feedPostView.map((item, index) => (
              <FeedPost1
                key={index}
                shareOverlay={shareOverlay}
                setShareOverlay={setShareOverlay}
                feedPost={item}
              />
            ))}

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
            <div className=" load-more-wrap narrow-top has-text-centered">
              <a href="#" className="load-more-button">
                Load More
              </a>
            </div>
            {/* /Load more posts */}
          </div>
          <div className="column is-3">
            <StoriesWidget />
            <BirthdayWidget />
            <SuggestedFriendsWidget setIsLogin={setIsLogin} />
            <NewJobWidget />
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

      <ChatWrapper
        messageOverlay={messageOverlay}
        setMessageOverlay={setMessageOverlay}
      />
      <ExplorerMenu
        exploreOverlay={exploreOverlay}
        setExploreOverlay={setExploreOverlay}
      />
    </>
  );
}
