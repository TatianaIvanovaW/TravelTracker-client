import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import userVisitsReducer from "../store/country/reducer";

export default combineReducers({
  appState,
  user,
  userVisits: userVisitsReducer,
});
