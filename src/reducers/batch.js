import {
  FETCH_BATCH_SUCCES,
  BATCHES_FETCHED,
  BATCH_CREATE_SUCCESS
} from "../actions/batches";

export default (state = [], action = {}) => {
  // console.log("STATE", state, "ACTION", action);
  switch (action.type) {
    case FETCH_BATCH_SUCCES:
      // console.log("NEW STATE", [...state, ...action.payload]); // try your transformation here
      return [...action.payload];

    case BATCHES_FETCHED:
      return [...state, ...action.payload];

    case BATCH_CREATE_SUCCESS:
      // filter out the team that you deleted
      return [...state, { ...action.payload }];

    default:
      return state;
  }
};
