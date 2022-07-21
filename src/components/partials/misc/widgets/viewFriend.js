import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import {
  CheckCircle,
  Delete,
  MoreVertical,
  Settings,
  Trash,
  Trash2,
  UserPlus,
  Users,
} from "react-feather";
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import * as API from "../../../../api/index";
export default function ViewFriend(props) {
  const { suggestFrindList, setSuggestFrindList, setIsLogin } = props;

  const [activeDropDown, setActiveDropDown] = useState(false);

  let navigate = useNavigate();

  // ? suggest frind list
  const suggestFriendList = async () => {
    const header = localStorage.getItem("__tokenCode");
    try {
      const response = await API.freind_listing(
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
  // ? REQUEST ACCEPTS
  const friendAccepts = async (friendCode) => {
    const header = localStorage.getItem("__tokenCode");
    try {
      const reqObj = {
        friendCode: friendCode,
      };
      const response = await API.freind_request_accepts(reqObj, header);
      console.log("response", response);
      if (response.data.success === 1) {
        suggestFriendList();
        toast(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          type: "success",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
        <h4>Friends Request</h4>
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
        {suggestFrindList.map((item, index) => (
          <div
            className="add-friend-block transition-block userList"
            key={index}
          >
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
                Sankar Bera
              </span>
            </div>
            <div className="add-transition">
              <span
                className="mr-2 acceptsIcon"
                onClick={() => friendAccepts(item.friendCode)}
              >
                <CheckCircle />
              </span>
              <span
                className="deleteIcon"
                // onClick={() => freindRequest(item.userCode)}
              >
                <Trash />
              </span>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}
