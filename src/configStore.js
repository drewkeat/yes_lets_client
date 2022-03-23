import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./Reducers/RootReducer";

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/reactjs/redux/releases/tag/v3.1.0
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );

  return store;
}
