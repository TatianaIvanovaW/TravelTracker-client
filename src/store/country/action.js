import axios from "axios";
import { selectToken } from "../user/selectors";
import { apiUrl } from "../../config/constants";
import { showMessageWithTimeout } from "../appState/actions";

export const addCountry = (countryCode) => {
  return async (dispatch, getState) => {
    try {
      const token = selectToken(getState());

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
    try {
      const token = selectToken(getState());
      console.log(`token?`, token);

      const res = await axios.get(`${apiUrl}/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(`response`, res);
      dispatch(allVisits(res.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

// export const removeCountry = (id) => {
//   return async (dispatch, getState) => {
//     try {
//       const token = selectToken(getState());
//       console.log(`token should be here`, token);
//       await axios.delete(`${apiUrl}/visit/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       dispatch(fetchUserWithCountries());
//     } catch (e) {
//       console.log(e.message);
//     }
//   };
// }; <<add in the future
