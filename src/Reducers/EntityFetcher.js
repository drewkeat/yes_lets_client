import pluralize from "pluralize";
// import { useDispatch } from "react-redux";
// import ACTIONS from "../Actions/actionTypes";

export const entityFetcher = (entity) => {
  // const dispatch = useDispatch();

  if ((entity.type = "user")) {
    fetch(`http://localhost:3001/${pluralize(entity.type)}/${entity.id}`)
      .then((resp) => resp.json())
      .then((json) => {
        debugger;
      });
  }
};
