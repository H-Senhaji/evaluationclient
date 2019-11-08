import request from "superagent";
const baseUrl = "http://localhost:4000";

export const STUDENT_CREATE_SUCCESS = "STUDENT_CREATE_SUCCESS";

const studentCreateSuccess = student => ({
  type: STUDENT_CREATE_SUCCESS,
  payload: student
});

export const createStudent = data => (dispatch, getState) => {
  const token = getState().auth;

  request
    .post(`${baseUrl}/students`)
    .set("Authorization", `Bearer ${token}`)
    .send(data)
    .then(response => {
      dispatch(studentCreateSuccess(response.body));
    })
    .catch(console.error);
};

export const DELETE_STUDENT_SUCCES = "DELETE_STUDENT_SUCCES";

const deleteStudentSuccess = studentId => ({
  type: DELETE_STUDENT_SUCCES,
  payload: studentId
});

export const deleteStudent = id => (dispatch, getState) => {
  request.delete(`${baseUrl}/student/${id}`).then(response => {
    dispatch(deleteStudentSuccess(id));
  });
};
