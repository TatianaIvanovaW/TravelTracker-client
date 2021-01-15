import axios from "axios";
import { selectToken } from "../user/selectors";
import { apiUrl } from "../../config/constants";

export const addCountry = (countryCode) => {
  return async (dispatch, getState) => {
    try {
      const token = selectToken(getState());

      const country = await axios.post(
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
  };
};
