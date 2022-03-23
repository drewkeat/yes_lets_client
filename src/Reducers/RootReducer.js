import availabilities from "./AvailabilitiesReducer";
import friendships from "./FriendshipsReducer";
import hangtimes from "./HangtimesReducer";
import users from "./UsersReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({availabilities, friendships, hangtimes, users})

export default rootReducer