import React, { useEffect, useState } from "react";
import { Camera, Plus, User, Users, X } from "react-feather";
import { Link } from "react-router-dom";
import * as API from "../api/index";
import groupsImg from "../assets/img/group.png";
const initialData = {
  groupName: "",
  groupDetails: "",
};

const Groups = () => {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [imageData, setImageData] = useState("");
  const [groupsList, setGroupsList] = useState([]);

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
  const groupsCreate = async () => {
    const header = localStorage.getItem("__tokenCode");
    try {
      const reqObj = {
        id: localStorage.getItem("__userId"),
        image: imageData,
        groupName: formData.groupName,
        groupDetails: formData.groupDetails,
      };
      console.log("reqObj", reqObj);
      const response = await API.groups_create(reqObj, header);
      console.log("response", response);
      if (response.data.success === 1) {
        setIsActive(false);
        groupsListing();
        setFormData("");
        setImageData("");
      }
    } catch (error) {}
  };

  // ? Groups Listing
  const groupsListing = async () => {
    const header = localStorage.getItem("__tokenCode");
    try {
      const response = await API.groups_showing(header);
      console.log("response", response);
      setGroupsList(response.data.data);
    } catch (error) {}
  };

  // ? new groups
  const modalOpen = () => {
    setIsActive(true);
  };
  // ? modal close
  const closeModal = () => {
    setIsActive(false);
  };

  useEffect(() => {
    groupsListing();
  }, []);

  const btnDesabel =
    !formData.groupName || !formData.groupDetails || !imageData;

  return (
    <>
      <div id="groups" class="container">
        <div class="groups-grid">
          <div class="grid-header">
            <div class="header-inner">
              <h2>Groups</h2>
              <div class="header-actions">
                <div class="buttons">
                  <a
                    onClick={modalOpen}
                    class="button is-solid accent-button raised"
                  >
                    <Plus /> {""} Create New Group
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="columns is-multiline">
            {groupsList.map((item, index) => (
              <div class="column is-3" key={index}>
                <Link to="#">
                  <article class="group-box">
                    <div class="has-background-image groupImg">
                      <img src={item.image} alt="" />
                    </div>
                    <div class="box-info">
                      <span class="box-category">Gaming</span>
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
          </div>
        </div>
      </div>

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
              <h3>Create group</h3>
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
                    onClick={groupsCreate}
                    disabled={btnDesabel}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;
