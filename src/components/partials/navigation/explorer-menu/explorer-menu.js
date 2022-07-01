import clover from "../../../../assets/img/icons/explore/clover.svg";
import friends from "../../../../assets/img/icons/explore/friends.svg";
import videos from "../../../../assets/img/icons/explore/videos.svg";
import tagEuro from "../../../../assets/img/icons/explore/tag-euro.svg";
import cart from "../../../../assets/img/icons/explore/cart.svg";
import house from "../../../../assets/img/icons/explore/house.svg";
import chrono from "../../../../assets/img/icons/explore/chrono.svg";
import question from "../../../../assets/img/icons/explore/question.svg";
import news from "../../../../assets/img/icons/explore/news.svg";
import cake from "../../../../assets/img/icons/explore/cake.svg";
import envato from "../../../../assets/img/icons/explore/envato.svg";
import calendar from "../../../../assets/img/icons/explore/calendar.svg";
import pin from "../../../../assets/img/icons/explore/pin.svg";
import idea from "../../../../assets/img/icons/explore/idea.svg";
import settings from "../../../../assets/img/icons/explore/settings.svg";

export default function ExplorerMenu(props) {
  const { exploreOverlay } = props;

  return (
    <div class={`explorer-menu ${exploreOverlay ? 'is-active' : ''}`}>
      <div class="explorer-inner">
        <div class="explorer-container">
          <div class="explorer-header">
            <h3>Explore</h3>
            <div class="control">
              <input
                type="text"
                class="input is-rounded is-fade"
                placeholder="Filter"
              />
              <div class="form-icon">
                <i data-feather="filter"></i>
              </div>
            </div>
          </div>
          <div class="explore-list has-slimscroll">
            <a href="/navbar-v1-feed.html" class="explore-item">
              <img src={clover} alt="" />
              <h4>Feed</h4>
            </a>

            <a href="/navbar-v1-profile-friends.html" class="explore-item">
              <img src={friends} alt="" />
              <h4>Friends</h4>
            </a>

            <a href="/navbar-v1-videos-home.html" class="explore-item">
              <img src={videos} alt="" />
              <h4>Videos</h4>
            </a>

            <a href="/navbar-v1-pages-main.html" class="explore-item">
              <img src={tagEuro} alt="" />
              <h4>Pages</h4>
            </a>

            <a href="/navbar-v1-ecommerce-products.html" class="explore-item">
              <img src={cart} alt="" />
              <h4>Commerce</h4>
            </a>

            <a href="/navbar-v1-groups.html" class="explore-item">
              <img src={house} alt="" />
              <h4>Interests</h4>
            </a>

            <a href="/navbar-v1-stories-main.html" class="explore-item">
              <img src={chrono} alt="" />
              <h4>Stories</h4>
            </a>

            <a href="/navbar-v1-questions-home.html" class="explore-item">
              <img src={question} alt="" />
              <h4>Questions</h4>
            </a>

            <a href="news.html" class="explore-item">
              <img src={news} alt="" />
              <h4>News</h4>
            </a>

            <a href="/navbar-v1-groups.html" class="explore-item">
              <img src={cake} alt="" />
              <h4>Groups</h4>
            </a>

            <a href="https://envato.com" class="explore-item">
              <img src={envato} alt="" />
              <h4>Envato</h4>
            </a>

            <a href="/navbar-v1-events.html" class="explore-item">
              <img src={calendar} alt="" />
              <h4>Events</h4>
            </a>

            <a href="https://cssninja.io" target="_blank" class="explore-item">
              <img src={pin} alt="" />
              <h4>Css Ninja</h4>
            </a>

            <a href="/elements.html" class="explore-item">
              <img src={idea} alt="" />
              <h4>Elements</h4>
            </a>

            <a href="/navbar-v1-settings.html" class="explore-item">
              <img src={settings} alt="" />
              <h4>Settings</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
