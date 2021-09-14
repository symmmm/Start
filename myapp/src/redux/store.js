import { combineReducers } from "redux";
import increase from "./reducer/increase";
import PageSearchReducer from "./reducer/pageReducer";

export default combineReducers({
  increase,
  PageSearchReducer,
});
