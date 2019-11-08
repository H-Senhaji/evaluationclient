import { combineReducers } from "redux";
import student from "./student";
import batch from "./batch";
import auth from "./auth";

export default combineReducers({
  student,
  batch,
  auth
});
