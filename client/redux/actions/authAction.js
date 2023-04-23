export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

require("dotenv").config({ path: "./.env" });

const BASE_URL = process.env.BASE_URL;
console.log("Key ", BASE_URL);

// const BASE_URL = process.env.REACT_APP_BASE_URL;

export const registerUser = (authData) => {
  const { fullName, email, password } = authData;

  // console.log("reg user action --> ", authData);

  return async (dispatch) => {
    // logic to make a post to REGISTER the user
    const result = await fetch(`${BASE_URL}/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        password,
      }),
    });

    const resultData = await result.json();
    console.log("result data --> ", resultData);

    if (resultData.success) {
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: resultData,
      });
    } else {
      dispatch({
        type: REGISTER_USER_FAIL,
      });
    }

    return resultData;
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
        payload: resultData,
      });
    } else {
      dispatch({
        type: LOGIN_USER_FAIL,
        // payload: resultData,
      });
    }

    return resultData;
  };
};
