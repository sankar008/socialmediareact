import { MainNavbar } from "../../components/Navbar/MainNavbar";
import BirthdayWidget from "../../components/partials/misc/widgets/birthday-widget";
import FakeAddWidget from "../../components/partials/misc/widgets/fake-add-widget";
import LatestActivityWidget from "../../components/partials/misc/widgets/latest-activity-widget";
import NewJobWidget from "../../components/partials/misc/widgets/new-job-widget";
import RecommendedPagesWidget from "../../components/partials/misc/widgets/recommended-pages-widget";
import StoriesWidget from "../../components/partials/misc/widgets/stories-widget";
import SuggestedFriendsWidget from "../../components/partials/misc/widgets/suggested-friends-widget";
import WeatherWidget from "../../components/partials/misc/widgets/weather-widget";
import ComposeCard from "../../components/partials/pages/feed/compose-card";
import FeedPost1 from "../../components/partials/pages/feed/posts/feed-post1";
import FeedPost2 from "../../components/partials/pages/feed/posts/feed-post2";
import FeedPost3 from "../../components/partials/pages/feed/posts/feed-post3";
import FeedPost4 from "../../components/partials/pages/feed/posts/feed-post4";
import FeedPost5 from "../../components/partials/pages/feed/posts/feed-post5";
import FeedPost6 from "../../components/partials/pages/feed/posts/feed-post6";

export default function Feeds() {
  return (
    <>
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
                <ComposeCard />

                <FeedPost1 />
                <FeedPost2 />
                <FeedPost3 />
                <FeedPost4 />
                <FeedPost5 />
                <FeedPost6 />

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
      </div>
    </>
  );
}
