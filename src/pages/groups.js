import React, { useEffect, useState } from "react";
import { Camera, Edit, Plus, User, Users, X } from "react-feather";
import { Link } from "react-router-dom";
import * as API from "../api/index";
import groupsImg from "../assets/img/group.png";
import ContentLoader, { Instagram } from "react-content-loader";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Mygroups from "./groups/mygroups";
const initialData = {
  groupName: "",
  groupDetails: "",
  catCode: "",
};

const Groups = ({ setIsLogin }) => {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [imageData, setImageData] = useState("");
  const [groupsList, setGroupsList] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [loader, setLoader] = useState(true);
  const [groupsCode, setGroupsCode] = useState("");
  const [userDetails, setUserDetails] = useState([]);
  const [myGroups, setmyGroups] = useState([]);
  const [isGroups, setIsGroups] = useState(0);
  console.log("formData", formData);
  let navigate = useNavigate();
  // ? image uploading
  const imageUploading = (e) => {
    let images = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setImageData(reader.result);
    };
    reader.readAsDataURL(images);
  };

  // ?inputHandaler
  const inputHandaler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ? Craete Groups
  const groupsCreate = async (editGroups) => {
    const header = localStorage.getItem("__tokenCode");
    if (editGroups === 2) {
      try {
        const reqObj = {
          groupCode: groupsCode,
          image: imageData,
          groupName: formData.groupName,
          groupDetails: formData.groupDetails,
        };
        console.log("reqObj", reqObj);
        const response = await API.groups_Update(reqObj, header);
        console.log("responseUpdate", response);
        if (response.data.success === 1) {
          setIsActive(false);
          groupsListing();
          setFormData("");
          setImageData("");
          groupsListingbyId();
        } else if (response.data.success === 2) {
          localStorage.removeItem("isLoginCheck");
          setIsLogin(localStorage.removeItem("isLoginCheck"));
          navigate("/", {
            msg: "Your session has expired. please login",
          });
        }
      } catch (error) {}
    } else {
      try {
        const reqObj = {
          userId: localStorage.getItem("__userId"),
          image: imageData,
          groupName: formData.groupName,
          groupDetails: formData.groupDetails,
          catCode: formData.catCode,
        };
        console.log("reqObj", reqObj);
        const response = await API.groups_create(reqObj, header);
        console.log("response", response);
        if (response.data.success === 1) {
          groupsListingbyId();
          setIsActive(false);
          groupsListing();
          setFormData("");
          setImageData("");
        } else if (response.data.success === 2) {
          localStorage.removeItem("isLoginCheck");
          setIsLogin(localStorage.removeItem("isLoginCheck"));
          navigate("/");
        }
      } catch (error) {}
    }
  };

  // ? Groups Listing
  const groupsListing = async () => {
    const header = localStorage.getItem("__tokenCode");
    try {
      const response = await API.groups_showing(header);
      setGroupsList(response.data.data);
      if (response.data.success === 1) {
        setLoader(false);
      } else if (response.data.success === 2) {
        localStorage.removeItem("isLoginCheck");
        setIsLogin(localStorage.removeItem("isLoginCheck"));
        navigate("/");
      }
    } catch (error) {}
  };

  // ? Groups cetagorys
  const groupsCetagory = async () => {
    const header = localStorage.getItem("__tokenCode");
    try {
      const response = await API.groups_categorys(header);
      console.log("response", response);
      setCategorys(response.data.data);
    } catch (error) {}
  };

  // ? Groups Listing by id
  const groupsListingbyId = async () => {
    const header = localStorage.getItem("__tokenCode");
    try {
      const response = await API.groups_showByid(
        header,
        localStorage.getItem("__userId")
      );
      setmyGroups(response.data.data);
      if (response.data.success === 1) {
        setLoader(false);
      }
    } catch (error) {}
  };

  // ? USER DETAILS BY ID
  const userDetailsByid = async () => {
    const header = localStorage.getItem("__tokenCode");
    try {
      const response = await API.user_details(
        header,
        localStorage.getItem("__userId")
      );
      console.log("userDetails", response);
      setUserDetails(response.data.data);
      if (response.data.success === 1) {
        setLoader(false);
      }
    } catch (error) {}
  };

  // ? new groups
  const modalOpen = async (edit, groupCode) => {
    setGroupsCode(groupCode);
    const header = localStorage.getItem("__tokenCode");
    setIsActive(true);
    if (edit === 2) {
      try {
        const response = await API.groups_showByid_edit(groupCode, header);
        setFormData(response.data.data);
        console.log("response", response);
      } catch (error) {}
    }
    setIsActive(edit);
  };

  // ? GROUPS JOIN
  const groupsJoing = async (groupCode) => {
    const header = localStorage.getItem("__tokenCode");
    try {
      const reQObj = {
        groupCode: groupCode,
        userCode: localStorage.getItem("__userId"),
      };
      console.log("reQObj", reQObj);
      const response = await API.groups_join(reQObj, header);
      console.log("response", response);
      if (response.data.success === 1) {
        userDetailsByid();
        toast(response.data.msg, {
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

  // ? modal close
  const closeModal = () => {
    setIsActive(false);
  };

  const mygroupsShow = () => {
    setIsGroups(1);
  };
  const mygroupsShowFeed = () => {
    setIsGroups(0);
  };

  useEffect(() => {
    groupsListing();
    groupsCetagory();
    groupsListingbyId();
    userDetailsByid();
  }, []);

  const btnDesabel =
    !formData.groupName ||
    !formData.groupDetails ||
    !imageData ||
    !formData.catCode;

  return (
    <>
      {isGroups === 0 ? (
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
                      onClick={mygroupsShow}
                      class="button is-solid accent-button raised"
                    >
                      <Users /> {""} My Group
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
                    <rect
                      x="127"
                      y="227"
                      rx="3"
                      ry="3"
                      width="345"
                      height="25"
                    />
                    <circle cx="281" cy="102" r="99" />
                  </ContentLoader>
                </div>
              ) : (
                <>
                  {groupsList.map((item, index) => (
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
                            <div className="box_up">
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
                            </div>
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
      ) : (
        <Mygroups
          myGroups={myGroups}
          modalOpen={modalOpen}
          loader={loader}
          mygroupsShowFeed={mygroupsShowFeed}
        />
      )}

      {/* add group */}
      <div
        id="albums-help-modal"
        class={
          isActive
            ? "modal albums-help-modal is-xsmall has-light-bg is-active"
            : "modal albums-help-modal is-xsmall has-light-bg"
        }
      >
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="card groupsModal">
            <div class="card-heading">
              <h3>{isActive === 2 ? "Edit group" : "Create group"}</h3>
              <div class="close-wrap">
                <span class="close-modal" onClick={closeModal}>
                  <X />
                </span>
              </div>
            </div>
            <div class="card-body">
              <div class="content-block is-active">
                <div class="album-form">
                  <div class="profile-pic-wrapper">
                    <div class="pic-holder">
                      <img
                        id="profilePic"
                        class="pic"
                        src={imageData ? imageData : groupsImg}
                      />
                      <form encType="multipart/form-data">
                        <input
                          type="file"
                          id="newProfilePhoto"
                          onChange={imageUploading}
                          className="uploadProfileInput"
                          hidden
                        />
                      </form>

                      <label for="newProfilePhoto" class="upload-file-block">
                        <div class="text-center">
                          <div class="mb-2">
                            <i class="fa fa-camera fa-2x"></i>
                          </div>
                          <div class="text-uppercase">
                            Upload <br /> Groups Photo
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="control mb-5">
                    <input
                      type="text"
                      class="input is-sm no-radius is-fade"
                      placeholder="Groups name"
                      name="groupName"
                      value={formData.groupName}
                      onChange={inputHandaler}
                    />
                  </div>
                  <div class="control mb-5">
                    <select
                      class="input is-sm no-radius is-fade"
                      placeholder="Groups name"
                      name="catCode"
                      value={formData.catCode}
                      onChange={inputHandaler}
                    >
                      <option> --- Select Category --- </option>
                      {categorys.map((item, index) => (
                        <option key={index} value={item.catCode}>
                          {item.catName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div class="control mb-5">
                    <textarea
                      class="textarea is-fade no-radius is-sm"
                      rows="3"
                      placeholder="Describe your groups..."
                      name="groupDetails"
                      value={formData.groupDetails}
                      onChange={inputHandaler}
                    ></textarea>
                  </div>
                </div>
                <div class="action">
                  <button
                    type="button"
                    class="button is-solid accent-button next-modal raised"
                    onClick={
                      isActive === 2 ? () => groupsCreate(2) : groupsCreate
                    }
                    //disabled={btnDesabel}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Groups;
