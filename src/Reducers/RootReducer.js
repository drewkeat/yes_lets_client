import availabilities from "./Availabilities/AvailabilitiesReducer";
import friendships from "./Friendships/FriendshipsReducer";
import hangtimes from "./Hangtimes/HangtimesReducer";
import users from "./Users/UsersReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  availabilities,
  friendships,
  hangtimes,
  users,
});

export default rootReducer;
