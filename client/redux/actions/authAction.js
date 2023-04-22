export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

import axios from "axios";

const BASE_URL = "http://localhost:3000";

// const BASE_URL = process.env.REACT_APP_BASE_URL;

export const registerUser = (authData) => {
  const { fullName, email, password } = authData;

  return async (dispatch) => {
    try {
      const result = await axios.post(`${BASE_URL}/api/users/register`, {
        fullName,
        email,
        password,
      });

      // console.log("value from actions --> ", result.data);

      if (result.data.success) {
        dispatch({
          type: REGISTER_USER_SUCCESS,
          payload: result.data,
        });
      } else {
        dispatch({
          type: REGISTER_USER_FAIL,
          payload: JSON.stringify(result.data),
        });
      }
    } catch (error) {
      // console.log("1st action error -->", error);
      if (error.message === "Network Error") {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("data -->", error.response.data);
          console.log("status -->", error.response.status);
          console.log("headers --> ", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log("error req -->", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("something else Error -->", error.message);
        }
      }
    }
  };
};

export const loginUser = (authData) => {
  const { email, password } = authData;

  // console.log("actions email password", authData);

  return async (dispatch) => {
    //logic to write post req to login a user

    const result = await fetch(`${BASE_URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const resultData = await result.json();
    // console.log("login  action --> ", resultData);

    if (resultData.success) {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: JSON.stringify(resultData),
      });
    } else {
      dispatch({
        type: LOGIN_USER_FAIL,
      });
    }

    return resultData;
  };
};
