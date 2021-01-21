import axios from "axios";

import { apiUrl } from "../../config/constants";
import { showMessageWithTimeout, appDoneLoading } from "../appState/actions";
import { tokenStillValid, loginSuccess } from "../user/actions";

export const addCountry = (countryCode) => {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem("jwt");

      await axios.post(
        `${apiUrl}/add`,
        {
          countryCode,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (e) {
      console.log(e.message);
    }
    dispatch(
      showMessageWithTimeout("info", false, "Country added to the map!")
    );
    dispatch(fetchUserWithCountries());
  };
};

export function allVisits(user) {
  return {
    type: "home/userVisits",
    payload: user,
  };
}

export const fetchUserWithCountries = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("jwt");
    console.log(`token?`, token);

    try {
      const res = await axios.get(`${apiUrl}/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(`response`, res);
      dispatch(allVisits(res.data));
      dispatch(loginSuccess(res));

      // token is still valid
      dispatch(tokenStillValid(res.data));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
    }
  };
};
