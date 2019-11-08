import React from "react";
import Addstudent from "./addStudent";
import { connect } from "react-redux";
import { createStudent } from "../../../actions/students"
class addStudentContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      id: null
    };
  }
  //pak id uit parameter url
  componentDidMount() {
    this.setState({
      id: this.props.match.params.id
    });
  }

  render() {
    //geef geen props mee aan addstudent
    return <Addstudent />;
  }
}

export default connect(
  null,
  { createStudent }
)(addStudentContainer);
