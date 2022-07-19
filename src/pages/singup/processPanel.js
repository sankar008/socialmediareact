import { Link } from "react-router-dom";
import { Plus } from "react-feather";
import company from "../../assets/img/illustrations/signup/company.svg";
import personal from "../../assets/img/illustrations/signup/personal.svg";
import { useState } from "react";
import * as API from "../../api/index";
import * as appUtils from "../../helpers/appUtils";
import OTPInput from "otp-input-react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
let isActive = "process-panel-wrap is-active is-narrow";
let isInactive = "process-panel-wrap is-narrow";

const initialvalue = {
  firstName: "",
  lastName: "",
  email: "",
  company_name: "",
  website: "",
  establishment_year: "",
  head_office_location: "",
  branches: "",
  country: "",
  state: "",
  city: "",
  address: "",
  business_area: "",
  mobileno: "",
  role: "",
  image: "",
  password: "",
  confirmPassword: "",
};

const FirstPanel = (props) => {
  isInactive = "process-panel-wrap is-narrow";
  isActive = "process-panel-wrap is-active";

  const companyFromOpen = () => {
    props.setStage(props.stage + 1);
    props.setCompany(1);
  };
  // 2nd
  const personalForm = () => {
    props.setStage(props.stage + 1);
    props.setCompany(2);
  };
  //last
  const publicFrom = () => {
    props.setStage(props.stage + 1);
    props.setCompany(3);
  };

  return (
    <div
      id="signup-panel-1"
      className={props.stage === 0 ? isActive : isInactive}
    >
      <div className="columns">
        <div className="column is-4">
          <div className="account-type">
            <img src={company} alt="" />
            <h3>Company</h3>
            <p>
              Create a company account to be able to do some awesome things.
            </p>
            <button
              className="button is-fullwidth is-rounded process-button"
              onClick={companyFromOpen}
            >
              Continue
            </button>
          </div>
        </div>
        {/* <div className="column is-4">
          <div className="account-type">
            <img src={publi} alt="" />
            <h3>Public Person</h3>
            <p>
              Create a company account to be able to do some awesome things.
            </p>
            <button
              className="button is-fullwidth is-rounded process-button"
              onClick={publicFrom}
            >
              Continue
            </button>
          </div>
        </div> */}
        <div className="column is-4">
          <div className="account-type">
            <img src={personal} alt="" />
            <h3>Personal</h3>
            <p>
              Create a company account to be able to do some awesome things.
            </p>
            <button
              className="button is-fullwidth is-rounded process-button"
              onClick={personalForm}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondPanel = (props) => {
  const { company, setUserEmail } = props;
  console.log("company", company);
  isInactive = "process-panel-wrap is-narrow";
  isActive = "process-panel-wrap is-active is-narrow";
  const [formData, setFormData] = useState(initialvalue);
  const [loading, setLoading] = useState(false);

  //?ERROR-MSGS
  const [errorMsg, setErrorMsg] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorCompanyName, setErrorCompanyName] = useState("");
  const [errorAddress, setErrorAddress] = useState("");

  // ? handerl onchanges
  const handalerChanges = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setErrorEmail("");
        setErrorMsg(false);
        break;
      case "firstName":
        setErrorName("");
        break;
      case "lastName":
        setErrorLastName("");
        break;
      case "company_name":
        setErrorCompanyName("");
        break;
      case "address":
        setErrorAddress("");
        break;
      default:
    }
    setFormData({ ...formData, [name]: value });
  };

  // ? Submit first time
  const companyHandaler = async () => {
    setLoading(true);
    let flag = validate(company);
    if (!flag) {
      setLoading(false);
      return;
    }
    try {
      const reqObj = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        gender: "male",
        email: formData.email,
        company_name: formData.company_name,
        website: "",
        establishment_year: "",
        head_office_location: "",
        branches: "",
        country: "",
        state: "",
        city: "",
        address: formData.address,
        business_area: "",
        mobileno: "",
        role: company === 1 ? "company" : "individual",
        image: "",
        password: "",
      };
      console.log("reqObj", reqObj);
      const response = await API.user_registration(reqObj);
      console.log("response", response);
      if (response.data.success === 1) {
        props.setStage(props.stage + 1);
        setUserEmail(response.data.data.email);
        localStorage.setItem("__userId", response.data.data.userCode);
      } else {
        toast(response.data.msg, {
          position: "top-right",
          autoClose: 5000,
          type: "error",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      return;
    } catch (error) {}
  };

  //?VALIDATE-INPUT
  const validate = (company) => {
    if (company === 1) {
      const { email, company_name, address } = formData;
      let flag = true;

      let validateEmail = appUtils.validateEmail(email);
      if (validateEmail === 1) {
        setErrorEmail({
          field: "email",
          message: "",
        });
      }
      if (!(validateEmail === 1)) {
        let msg = "";
        if (validateEmail === 0) {
          msg = "Please enter your email address.";
        } else {
          msg = "That doesn't look like an email address.";
        }
        setErrorEmail({
          field: "email",
          message: msg,
        });
        flag = false;
      }

      let validateUserName = appUtils.validateUserName(company_name);
      if (validateUserName === 1) {
        setErrorCompanyName({
          field: "company_name",
          message: "",
        });
      }
      if (!(validateUserName === 1)) {
        let msg = "";
        if (validateUserName === 0) {
          msg = "Please enter your company name.";
        }
        setErrorCompanyName({
          field: "company_name",
          message: msg,
        });
        flag = false;
      }

      let validateAdderss = appUtils.validateUserName(address);
      if (validateAdderss === 1) {
        setErrorAddress({
          field: "address",
          message: "",
        });
      }
      if (!(validateAdderss === 1)) {
        let msg = "";
        if (validateAdderss === 0) {
          msg = "Please enter your address";
        }
        setErrorAddress({
          field: "address",
          message: msg,
        });
        flag = false;
      }

      return flag;
    } else {
      const { email, firstName, lastName } = formData;
      let flag = true;

      let validateEmail = appUtils.validateEmail(email);
      if (validateEmail === 1) {
        setErrorEmail({
          field: "email",
          message: "",
        });
      }
      if (!(validateEmail === 1)) {
        let msg = "";
        if (validateEmail === 0) {
          msg = "Please enter your email address.";
        } else {
          msg = "That doesn't look like an email address.";
        }
        setErrorEmail({
          field: "email",
          message: msg,
        });
        flag = false;
      }

      //   Firt name
      let validateName = appUtils.validateName(firstName);
      if (validateName === 1) {
        setErrorName({
          field: "firstName",
          message: "",
        });
      }
      if (!(validateName === 1)) {
        let msg = "";
        if (validateName === 0) {
          msg = "Please enter your first name";
        } else {
          msg = "That doesn't look like a name.";
        }
        setErrorName({
          field: "firstName",
          message: msg,
        });
        flag = false;
      }

      //   Last name
      let validateLastName = appUtils.validateLastName(lastName);
      if (validateLastName === 1) {
        setErrorLastName({
          field: "lastName",
          message: "",
        });
      }
      if (!(validateLastName === 1)) {
        let msg = "";
        if (validateLastName === 0) {
          msg = "Please enter your last name.";
        } else {
          msg = "That doesn't look like a last name.";
        }
        setErrorLastName({
          field: "lastName",
          message: msg,
        });
        flag = false;
      }

      return flag;
    }
  };

  return (
    <div
      id="signup-panel-2"
      className={props.stage === 1 ? isActive : isInactive}
    >
      <div className="form-panel">
        {company === 1 ? (
          <>
            <div className="field">
              <label>Company Name </label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Enter your company name"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handalerChanges}
                />
                {errorCompanyName.field === "company_name" && (
                  <p className="inputErrorMess">{errorCompanyName.message}</p>
                )}
              </div>
            </div>
            <div className="field">
              <label>Address</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Enter your address"
                  name="address"
                  value={formData.address}
                  onChange={handalerChanges}
                />
                {errorAddress.field === "address" && (
                  <p className="inputErrorMess">{errorAddress.message}</p>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="field">
              <label>First Name </label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Enter your first name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handalerChanges}
                />
                {errorName.field === "firstName" && (
                  <p className="inputErrorMess">{errorName.message}</p>
                )}
              </div>
            </div>
            <div className="field">
              <label>Last Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Enter your last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handalerChanges}
                />
                {errorLastName.field === "lastName" && (
                  <p className="inputErrorMess">{errorLastName.message}</p>
                )}
              </div>
            </div>
          </>
        )}

        <div className="field">
          <label>Email</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Enter your email address"
              name="email"
              value={formData.email}
              onChange={handalerChanges}
            />
            {errorEmail.field === "email" && (
              <p className="inputErrorMess">{errorEmail.message}</p>
            )}
          </div>
        </div>
      </div>
      <div className="buttons">
        <button
          onClick={() => props.setStage(props.stage - 1)}
          className="button is-rounded process-button"
        >
          Back
        </button>
        <button
          onClick={companyHandaler}
          className="button is-rounded process-button is-next"
        >
          Next
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};
const ThirdPanel = (props) => {
  const { company } = props;
  isInactive = "process-panel-wrap is-narrow";
  isActive = "process-panel-wrap is-active is-narrow";
  const [selectUser, setSelectUser] = useState(0);
  const [selectFemale, setSelectFemale] = useState(0);
  const [selectOther, setSelectOther] = useState(0);
  const [imageData, setImageData] = useState("");
  const [gendarVelid, setGendarVelid] = useState("");

  // ? image uploading
  const imageUploading = (e) => {
    let images = e.target.files[0];
    console.log(images);
    var reader = new FileReader();
    reader.onloadend = function () {
      setImageData(reader.result);
    };
    reader.readAsDataURL(images);
  };

  // ? imageUploadingSubmit
  const imageUploadingSubmit = async () => {
    try {
      const reqObj = {
        userCode: localStorage.getItem("__userId"),
        image: imageData,
      };
      const response = await API.user_updated(reqObj);
      console.log("response", response);
      if (response.data.success === 1) {
        props.setStage(props.stage + 1);
      }
    } catch (error) {}
  };

  const genderChoose = async (gender) => {
    setGendarVelid(gender);
    try {
      const reqObj = {
        _id: localStorage.getItem("__userId"),
        gender: gender,
      };
      const response = await API.user_updated(reqObj);
      if (response.status === 200) {
        if (gender === "male") {
          setSelectUser(1);
          setSelectFemale(0);
          setSelectOther(0);
        } else if (gender === "female") {
          setSelectFemale(1);
          setSelectUser(0);
          setSelectOther(0);
        } else {
          setSelectFemale(0);
          setSelectOther(1);
          setSelectUser(0);
        }
      }
    } catch (error) {}
  };

  return (
    <div
      id="signup-panel-3"
      className={props.stage === 2 ? isActive : isInactive}
    >
      <div className="form-panel">
        <label class="fileUploadin">
          <form encType="multipart/form-data">
            <input
              hidden
              type="file"
              id="file"
              aria-label="File browser example"
              onChange={imageUploading}
            />
          </form>
          <div className="photo-upload">
            <div className="preview">
              <button className="upload-button">
                <Plus />
              </button>
              <img
                id="upload-preview"
                src={
                  imageData ? imageData : "https://via.placeholder.com/150x150"
                }
                data-demo-src="assets/img/avatars/avatar-w.png"
                alt=""
              />
            </div>
            <div className="limitation">
              <small>Only images with a size lower than 3MB are allowed.</small>
            </div>
          </div>
        </label>
        {company === 1 ? (
          ""
        ) : (
          <div className="userGender">
            <div
              className={selectUser === 1 ? "activeGender" : "icon"}
              onClick={() => genderChoose("male")}
            >
              <img src="https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png" />
            </div>
            <div
              className={selectFemale === 1 ? "activeGender" : "icon"}
              onClick={() => genderChoose("female")}
            >
              <img src="https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png" />
            </div>
            <div
              className={selectOther === 1 ? "activeGender" : "icon"}
              onClick={() => genderChoose("others")}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Transgender_symbol_pink_and_blue.svg/878px-Transgender_symbol_pink_and_blue.svg.png" />
            </div>
          </div>
        )}
      </div>

      <div className="buttons">
        <button
          onClick={() => props.setStage(props.stage - 1)}
          className="button is-rounded process-button"
        >
          Back
        </button>
        <button
          onClick={imageUploadingSubmit}
          //disabled={!gendarVelid}
          className="button is-rounded process-button is-next"
        >
          Next
        </button>
      </div>
    </div>
  );
};
const FourthPanel = (props) => {
  isInactive = "process-panel-wrap is-narrow";
  isActive = "process-panel-wrap is-active is-narrow";

  const { company } = props;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialvalue);

  const [errorPassword, setErrorPassword] = useState("");
  const [confirmErrorPasword, setConfirmErrorPasword] = useState("");
  const [errorMobileNo, setErrorMobileNo] = useState("");
  const [mobileNoError, setMobileNoError] = useState("");

  const handalerChanges = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "password":
        setErrorPassword("");
        break;
      case "confirmPassword":
        setConfirmErrorPasword("");
        break;
      case "mobileno":
        setErrorMobileNo("");
        setMobileNoError("");
        break;
      default:
    }
    setFormData({ ...formData, [name]: value });
  };

  const forthPanelSubmit = async () => {
    setLoading(true);
    let flag = validate();
    if (!flag) {
      setLoading(false);
      return;
    }

    try {
      const reqObj = {
        _id: localStorage.getItem("__userId"),
        mobileno: formData.mobileno,
        password: formData.password,
      };
      console.log("reqObj", reqObj);
      const response = await API.user_updated(reqObj);
      console.log("response", response);
      if (response.status === 200) {
        props.setStage(props.stage + 1);
      }
    } catch (error) {}
  };

  //VALIDATE-INPUT
  const validate = () => {
    const { password, confirmPassword, mobileno } = formData;
    let flag = true;

    // ? password
    if (password) {
      if (password.length < 8) {
        setErrorPassword({
          field: "password",
          message: "Your password is too short. It needs to be 8+ characters",
        });
        flag = false;
      }
      if (password.length > 8) {
        setErrorPassword({
          field: "password",
          message: "",
        });
        flag = true;
      }
    } else {
      setErrorPassword({
        field: "password",
        message: "Please enter your password.",
      });
      flag = false;
    }

    // ? confirmPassword

    if (password === "" || password !== confirmPassword) {
      setConfirmErrorPasword({
        field: "confirmPassword",
        message: "Please confirm your password",
      });
      flag = false;
    } else {
      setConfirmErrorPasword({
        field: "confirmPassword",
        message: "",
      });
      flag = true;
    }

    if (mobileno) {
      if (mobileno.length < 10) {
        setErrorMobileNo({
          field: "mobileno",
          message: "Please enter 10+ digit mobile number",
        });
        flag = false;
      }
      if (password.length > 10) {
        setErrorMobileNo({
          field: "mobileno",
          message: "",
        });
        flag = true;
      }
    } else {
      setErrorMobileNo({
        field: "mobileno",
        message: "Please enter your mobile number.",
      });
      flag = false;
    }

    return flag;
  };

  const buttonDisabel =
    !formData.mobileno || !formData.password || !formData.confirmPassword;

  return (
    <div
      id="signup-panel-4"
      className={props.stage === 3 ? isActive : isInactive}
    >
      <div className="form-panel">
        <div className="field">
          <label>Password</label>
          <div className="control">
            <input
              type="password"
              className="input"
              placeholder="Choose a password"
              value={formData.password}
              onChange={handalerChanges}
              name="password"
            />
            {errorPassword.field === "password" && (
              <p className="inputErrorMess">{errorPassword.message}</p>
            )}
          </div>
        </div>
        <div className="field">
          <label>Repeat Password</label>
          <div className="control">
            <input
              type="password"
              className="input"
              placeholder="Repeat your password"
              onChange={handalerChanges}
              value={formData.confirmPassword}
              name="confirmPassword"
            />
            {confirmErrorPasword.field === "confirmPassword" && (
              <p className="inputErrorMess">{confirmErrorPasword.message}</p>
            )}
          </div>
        </div>
        <div className="field">
          <label>Phone Number</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Enter your phone number"
              onChange={handalerChanges}
              value={formData.mobileno}
              name="mobileno"
            />
            {errorMobileNo.field === "mobileno" && (
              <p className="inputErrorMess">{errorMobileNo.message}</p>
            )}
            {/* <p className="inputErrorMess">{errorMobileNo}</p> */}
          </div>
        </div>
      </div>

      <div className="buttons">
        <button
          onClick={() => props.setStage(props.stage - 1)}
          className="button is-rounded process-button"
        >
          Back
        </button>
        <button
          disabled={buttonDisabel}
          onClick={forthPanelSubmit}
          className="button is-rounded process-button is-next"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const FifthPanel = (props) => {
  isInactive = "process-panel-wrap is-narrow";
  isActive = "process-panel-wrap is-active is-narrow";

  const { userEmail, isLogin, setIsLogin } = props;
  const [OTP, setOTP] = useState("");
  let navigate = useNavigate();

  const emailVerified = async () => {
    try {
      const reqObj = {
        email: userEmail,
        otp: OTP,
      };
      console.log("reqObj", reqObj);
      const response = await API.user_emailVerified(reqObj);
      console.log("response", response);
      if (response.data.success === 1) {
        localStorage.setItem("isLoginCheck", true);
        setIsLogin(!isLogin);
        navigate("/feeds");
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
      } else {
        toast(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          type: "error",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {}
  };
  return (
    <div
      id="signup-panel-5"
      className={props.stage === 4 ? isActive : isInactive}
    >
      <div className="form-panel">
        <div className="success-text">
          <h2 className="mb-4">Verified Email</h2>
          <p>
            We just sent you a confirmation email. PLease confirm your account
            enter otp.
          </p>
          <div className="otpInput">
            <OTPInput
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={6}
              otpType="number"
              disabled={false}
            />
          </div>
          <button
            onClick={emailVerified}
            className="button is-fullwidth is-rounded"
          >
            Verified Now
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

const ProcessTitle = (props) => {
  const title = [
    "Welcome, select an account type.",
    " Tell us more about you.",
    "Upload a profile picture.",
    "Secure your account.",
    "You're all set. Ready?",
  ];

  isActive = "step-title is-active";
  isInactive = "step-title";

  return (
    <div className="process-title">
      <h2
        id="step-title-1"
        className={props.stage % 2 === 0 ? isActive : isInactive}
      >
        {title[props.stage]}
      </h2>
      <h2
        id="step-title-1"
        className={props.stage % 2 === 1 ? isActive : isInactive}
      >
        {title[props.stage]}
      </h2>
    </div>
  );
};

export const ProcessPanel = (props) => (
  <div className="outer-panel">
    <div className="outer-panel-inner">
      <ProcessTitle stage={props.stage} />
      <FirstPanel
        company={props.company}
        setCompany={props.setCompany}
        stage={props.stage}
        setStage={props.setStage}
      />
      <SecondPanel
        setUserEmail={props.setUserEmail}
        userEmail={props.userEmail}
        company={props.company}
        stage={props.stage}
        setStage={props.setStage}
      />
      <ThirdPanel
        company={props.company}
        stage={props.stage}
        setStage={props.setStage}
      />
      <FourthPanel
        company={props.company}
        stage={props.stage}
        setStage={props.setStage}
      />
      <FifthPanel
        setUserEmail={props.setUserEmail}
        userEmail={props.userEmail}
        company={props.company}
        stage={props.stage}
        setIsLogin={props.setIsLogin}
        isLogin={props.isLogin}
      />
    </div>
  </div>
);
