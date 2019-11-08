import React from "react";
import EditStudent from "./editStudent";

class editStudentContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      id: null,
      studentBeingEdited: "",
      students: []
    };
  }

  componentDidMount() {
    this.setState({
      students: [
        {
          id: "1",
          fullname: "Hafsa",
          photo: "instagram",
          color: ["green", "green"]
        },
        {
          id: "2",
          fullname: "Erik",
          photo: "instagram",
          color: ["red", "green"]
        }
      ]
    });
    //filter students from batch with id in parameter
    let editThisStudent = this.state.students.filter(
      student => student.id === this.props.match.params.id
    );
    console.log("editThisStudent", editThisStudent);

    //save which student is being edited (chosen by filter above)
    this.setState(
      {
        studentBeingEdited: editThisStudent
      },
      console.log("studentBeingEdited", this.state.studentBeingEdited)
    );
    console.log("state in edit:", this.state);
    console.log("id", this.props.match.params.id);
  }

  render() {
    return <EditStudent student={this.state.studentBeingEdited} />;
  }
}

export default editStudentContainer;
