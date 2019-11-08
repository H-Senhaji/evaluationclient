import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BatchesListContainer from "./components/batch/batchesList/batchesListContainer";
import BatchFormContainer from "./components/batch/BatchForm/BatchFormContainer";
import StudentFormContainer from "./components/student/StudentForm/StudentFormContainer";
import BatchDetailsContainer from "./components/batch/batchDetails/batchDetailsContainer";
import SignupForm from "./components/loginForm/loginForm";
import LoginForm from "./components/student/signupForm/signupForm";
import { Container } from "react-bootstrap";
import Home from "./components/Home/home";
import EditStudentContainer from "./components/student/editStudent/editStudentContainer";
import AddStudentContainer from "./components/student/addStudent/addStudentContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signupform" exact component={SignupForm} />
            <Route path="/loginform" exact component={LoginForm} />
            <Route path="/batches" exact component={BatchesListContainer} />
            <Route path="/batchesform" exact component={BatchFormContainer} />
            <Route path="/studentform" exact component={StudentFormContainer} />
            <Route path="/addstudent" exact component={AddStudentContainer} />

            <Route
              path="/editstudent/:id"
              exact
              component={EditStudentContainer}
            />
            <Route
              path="/batchdetails/:id"
              exact
              component={BatchDetailsContainer}
            />
          </Switch>
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth !== null
  };
};

export default connect(mapStateToProps)(App);
