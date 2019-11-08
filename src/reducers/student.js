import {
  STUDENT_CREATE_SUCCESS,
  DELETE_STUDENT_SUCCES
} from "../actions/students";

export default (state = {}, action = {}) => {
  switch (action.type) {
    case STUDENT_CREATE_SUCCESS:
      return { ...action.payload };

    case DELETE_STUDENT_SUCCES:
      return { ...action.payload };

    default:
      return state;
  }
};

//student delete
