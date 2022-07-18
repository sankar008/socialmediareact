import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import { MoreVertical, Settings, Trash2, UserPlus, Users } from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from "react-router";
import * as API from "../../../../api/index";
export default function SuggestedFriendsWidget({ setIsLogin }) {
  const [activeDropDown, setActiveDropDown] = useState(false);
  const [suggestFrindList, setSuggestFrindList] = useState([]);
  let navigate = useNavigate();
  // ? suggest frind list
  const suggestFriendList = async () => {
    const header = localStorage.getItem("__tokenCode");
    try {
      const response = await API.suggestFriend(
        localStorage.getItem("__userId"),
        header
      );
      console.log("response", response);
      setSuggestFrindList(response.data.data);
      if (response.data.success === 2) {
        localStorage.removeItem("isLoginCheck");
        setIsLogin(localStorage.removeItem("isLoginCheck"));
        navigate("/");
      }
    } catch (error) {}
  };
  // ? FREIND REQUEST API
  const freindRequest = async (userCode) => {
    const header = localStorage.getItem("__tokenCode");
    try {
      const reqObj = {
        requester: localStorage.getItem("__userId"),
        recipient: userCode,
      };
      console.log("reqObj", reqObj);
      const response = await API.freind_request(reqObj, header);
      console.log("response", response);
      if (response.data.success === 1) {
        suggestFriendList();
      }
    } catch (error) {}
  };

  useEffect(() => {
    suggestFriendList();
  }, []);

  return (
    <div className="card">
      <div className="card-heading is-bordered">
        <h4>Suggested Friends</h4>
        <div
          className={`dropdown is-spaced is-right dropdown-trigger ${
            activeDropDown ? "is-active" : ""
          }`}
        >
          <OutsideClickHandler
            onOutsideClick={() => {
              setActiveDropDown(false);
            }}
          >
            <div
              className="button"
              onClick={() => setActiveDropDown(!activeDropDown)}
            >
              <MoreVertical />
            </div>
          </OutsideClickHandler>
          <div className="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <a href="#" className="dropdown-item">
                <div className="media">
                  <Users />
                  <div className="media-content">
                    <h3>All Suggestions</h3>
                    <small>View all friend suggestions.</small>
                  </div>
                </div>
              </a>
              <a className="dropdown-item">
                <div className="media">
                  <Settings />
                  <div className="media-content">
                    <h3>Settings</h3>
                    <small>Access widget settings.</small>
                  </div>
                </div>
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <div className="media">
                  <Trash2 />
                  <div className="media-content">
                    <h3>Remove</h3>
                    <small>Removes this widget from your feed.</small>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body no-padding suggestlist">
        <ContentLoader
          speed={2}
          width="100%"
          height={150}
          viewBox="0 0 400 150"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <circle cx="10" cy="20" r="8" />
          <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
          <circle cx="10" cy="50" r="8" />
          <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
          <circle cx="10" cy="80" r="8" />
          <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
          <circle cx="10" cy="110" r="8" />
          <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
        </ContentLoader>

        <ContentLoader
          speed={2}
          width="100%"
          height={150}
          viewBox="0 0 400 150"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <circle cx="10" cy="20" r="8" />
          <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
          <circle cx="10" cy="50" r="8" />
          <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
          <circle cx="10" cy="80" r="8" />
          <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
          <circle cx="10" cy="110" r="8" />
          <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
        </ContentLoader>

        {suggestFrindList.map((item, index) => (
          <div className="add-friend-block transition-block" key={index}>
            <img
              src={
                item.image === ""
                  ? "https://www.svpnpa.gov.in/images/npa/alumni-gallery/1975New/A.%20Wahab.png"
                  : item.image
              }
              alt=""
            />
            <div className="page-meta">
              <span className="suggestFrindName">
                {item.firstName} {item.lastName}
              </span>
            </div>
            <div
              className="add-friend add-transition"
              onClick={() => freindRequest(item.userCode)}
            >
              <UserPlus />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
