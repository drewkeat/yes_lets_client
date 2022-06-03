import availability from "./AvailabilitiesReducer";
import friendship from "./FriendshipsReducer";
import hangtime from "./HangtimesReducer";
import user from "./UsersReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  availability,
  friendship,
  hangtime,
  user,
});

export default rootReducer;
