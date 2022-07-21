import axios from "axios";
import * as c from "./constant";

// ? REGISTRATION API
export const user_registration = async (data) => {
  try {
    const url = c.SIGNUP;
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? USER API
export const user_updated = async (data) => {
  try {
    const url = c.USER;
    const res = await axios.patch(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? USER API
export const user_details = async (data, header) => {
  try {
    const url = c.USER + "/" + header;

    console.log("url", url);
    const res = await axios.get(url, {
      headers: JSON.parse(data),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? USER email verified
export const user_emailVerified = async (data) => {
  try {
    const url = c.USER + "/email-verified";
    const res = await axios.patch(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? USER LOGIN
export const user_login = async (data) => {
  try {
    const url = c.USER + "/login";
    const res = await axios.post(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};
// ? USER email forgot
export const user_email_forgot = async (data) => {
  try {
    const url = c.USER + "/forgot-password";
    const res = await axios.patch(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? USER reset password
export const user_newPassword = async (data) => {
  try {
    const url = c.USER + "/reset-password";
    const res = await axios.patch(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? USER API GET
export const user_get_id = async (data) => {
  try {
    const url = c.USER;
    const res = await axios.get(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? GROUPS ADD API
export const groups_create = async (data, header) => {
  try {
    const url = c.GROUPS;
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? GROUPS UPDATE API
export const groups_Update = async (data, header) => {
  console.log("header", header);
  try {
    const url = c.GROUPS;
    const res = await axios.patch(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? GROUPS JOIN
export const groups_join = async (data, header) => {
  console.log("header", header);
  try {
    const url = c.GROUPSJOIN;
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? show groups
export const groups_showing = async (header) => {
  try {
    const url = c.GROUPS;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? show CATEGORYS
export const groups_categorys = async (header) => {
  try {
    const url = c.CATEGORYS;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? show groups by id
export const groups_showByid = async (data, header) => {
  try {
    const url = c.GROUPS + "/" + header;
    const res = await axios.get(url, {
      headers: JSON.parse(data),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? show groups by id edit
export const groups_showByid_edit = async (data, header) => {
  try {
    const url = c.GROUPS + "/edit/" + data;

    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? suggest frind list
export const suggestFriend = async (data, header) => {
  try {
    const url = c.SUGGESTFRIEND + "/" + data;

    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? FREIND REQUEST
export const freind_request = async (data, header) => {
  try {
    const url = c.FREINDS;
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? FREIND LISTING
export const freind_listing = async (data, header) => {
  try {
    const url = c.FREINDS + "/get-request/" + data;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? FREIND REQUEST ACCEPTS

export const freind_request_accepts = async (data, header) => {
  try {
    const url = c.FREINDS + "/accept";
    const res = await axios.post(url, data, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};

// ? ALL FREIND REQUEST
export const freind_listing_all = async (data, header) => {
  try {
    const url = c.FREINDS + "/" + data;
    const res = await axios.get(url, {
      headers: JSON.parse(header),
    });
    return res;
  } catch (e) {
    return e.response;
  }
};
