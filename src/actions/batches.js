import request from "superagent";

export const BATCHES_FETCHED = "BATCHES_FETCHED";

const baseUrl = "http://localhost:4000";

const batchesFATCHED = batches => ({
  type: BATCHES_FETCHED,
  payload: batches
});

export const loadBatches = () => (dispatch, getState) => {
  // Request is not made

  // how to debug:
  // - console.log(getState()) to see what getState() returns
  // check the logic to see if it's correct
  // - console.log(getState().teams.length !== 0) // does this check pass?

  // guard statement that checks if we already have teams
  if (getState().batches.length !== 0) return;

  // - put a console.log below you guard statement to see if it passes
  // console.log('Guard statement passed??')

  // Check if request is made succesfully
  request(`${baseUrl}/batches`) // url correct? -> make request with httpie first
    .then(response => {
      // console.log(response) -> have a look at the body of the request or status code
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(batchesFATCHED(response.body)); // check redux devtools if action got dispatched
    })
    .catch(console.error); // if you don't console response, check the console for errors
};

export const BATCH_CREATE_SUCCESS = "BATCH_CREATE_SUCCESS";

const batchesCreateSuccess = batch => ({
  type: BATCH_CREATE_SUCCESS,
  payload: batch
});

export const createBatch = data => (dispatch, getState) => {
  const token = getState().auth;

  request
    .post(`${baseUrl}/batches`)
    .set("Authorization", `Bearer ${token}`)
    .send(data)
    .then(response => {
      dispatch(batchesCreateSuccess(response.body));
    })
    .catch(console.error);
};

export const FETCH_BATCH_SUCCES = "FETCH_BATCH_SUCCES";

const fetchBatchSuccess = team => ({
  type: FETCH_BATCH_SUCCES,
  payload: team
});

export const loadBatch = id => (dispatch, getState) => {
  console.log("CAN WE GET THE STATE??", getState());
  request(`${baseUrl}/batch/${id}`).then(response => {
    console.log(response);
    dispatch(fetchBatchSuccess(response.body));
  });
};
