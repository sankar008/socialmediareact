import React from "react";
import ContentLoader from "react-content-loader";
import { AlignLeft, ArrowLeft, Edit, Plus, ScreenLeft } from "react-feather";
import { Link } from "react-router-dom";

const Mygroups = ({ myGroups, modalOpen, loader, mygroupsShowFeed }) => {
  return (
    <>
      <div id="groups" class="container">
        <div class="groups-grid">
          <div class="grid-header">
            <div class="header-inner">
              <h2>Groups</h2>
              <div class="header-actions">
                <div class="buttons mr-2">
                  <a
                    onClick={modalOpen}
                    class="button is-solid accent-button raised"
                  >
                    <Plus /> {""} Create New Group
                  </a>
                </div>
                <div class="buttons">
                  <a
                    onClick={mygroupsShowFeed}
                    class="button is-solid accent-button raised"
                  >
                    <ArrowLeft />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="columns groupsBox is-multiline">
            {loader ? (
              <div class="column is-3">
                <ContentLoader
                  speed={2}
                  width={476}
                  height={500}
                  viewBox="0 0 476 500"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                  // {...props}
                >
                  <rect
                    x="128"
                    y="274"
                    rx="3"
                    ry="3"
                    width="381"
                    height="169"
                  />
                  <rect x="127" y="227" rx="3" ry="3" width="345" height="25" />
                  <circle cx="281" cy="102" r="99" />
                </ContentLoader>
              </div>
            ) : (
              <>
                {myGroups.map((item, index) => (
                  <div class="column is-3" key={index}>
                    <Link to="#">
                      <article class="group-box">
                        <div class="has-background-image groupImg">
                          <img src={item.image} alt="" />
                          <div className="editOverlay">
                            {localStorage.getItem("__userId") ===
                            item.userId ? (
                              <span
                                onClick={() => modalOpen(2, item.groupCode)}
                              >
                                <Edit />
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div class="box-info">
                          {/* <div className="box_up">
                            <span className="box-category">
                              {item.catName} cetName
                            </span>
                            {userDetails.groups ? (
                              userDetails.groups.includes(item.groupCode) ? (
                                <span class="exitBtn">Exit</span>
                              ) : (
                                <span
                                  class="JoinBtn"
                                  onClick={() => groupsJoing(item.groupCode)}
                                >
                                  Join
                                </span>
                              )
                            ) : (
                              <span
                                class="JoinBtn"
                                onClick={() => groupsJoing(item.groupCode)}
                              >
                                Join
                              </span>
                            )}
                          </div> */}
                          <h3 class="box-title">{item.groupName}</h3>
                          <span class="box-members">
                            <a href="#">5.7k members</a>
                            <div class="members-preview">
                              <img
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/img/avatars/milly.jpg"
                                data-user-popover="7"
                                alt=""
                              />
                              <img
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/img/avatars/stella.jpg"
                                data-user-popover="2"
                                alt=""
                              />
                              <img
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/img/avatars/azzouz.jpg"
                                data-user-popover="20"
                                alt=""
                              />
                            </div>
                          </span>
                        </div>
                      </article>
                    </Link>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mygroups;
