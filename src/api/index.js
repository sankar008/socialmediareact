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