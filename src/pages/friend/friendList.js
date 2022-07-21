import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import { Plus, Users } from "react-feather";
import { Link } from "react-router-dom";
import * as API from "../../api/index";
const FriendList = () => {
  const [loader, setLoader] = useState(true);
  const [friendList, setFriendList] = useState([]);

  const friendListing = async () => {
    const header = localStorage.getItem("__tokenCode");
    try {
      const response = await API.freind_listing_all(
        localStorage.getItem("__userId"),
        header
      );
      console.log("response", response);
      setFriendList(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    friendListing();
  }, []);

  return (
    <>
      <div id="friends-page" className="friends-wrapper main-container p-0">
        <div id="all-friends" className="card-row-wrap is-active">
          <div className="card-row-placeholder is-hidden">
            No matching results
          </div>
          <div className="card-row">
            {friendList.map((item, index) => (
              <div
                className="card-flex friend-card textFilter-target"
                key={index}
              >
                <div className="img-container">
                  <img className="avatar" src={item.image} alt="" />
                </div>
                <div className="friend-info">
                  <h3 className="textFilter-match userName">
                    {item.firstName} {item.lastName}
                  </h3>
                  <p className="textFilter-match">
                    {item.firstName}_{item.userCode}
                  </p>
                </div>
                <div className="friend-stats">
                  <div className="stat-block">
                    <label>Friends</label>
                    <div className="stat-number">478</div>
                  </div>
                  <div className="stat-block">
                    <label>Posts</label>
                    <div className="stat-number">293</div>
                  </div>
                  <div className="stat-block">
                    <label>Likes</label>
                    <div className="stat-number">899</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendList;
