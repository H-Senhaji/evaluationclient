import React from "react";
import StudentForm from "./StudentForm";
//copy paste uit reader, niet verder aan toe gekomen

class StudentFormContainer extends React.Component {
  state = {
    firstName: null
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    console.table(this.state);
    event.preventDefault();
    this.props.createStudent({
      ...this.state,
      batchId: this.props.batchId
    });
    this.setState({
      fullName: ""
    });
  };

  render() {
    return (
      <StudentForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default StudentFormContainer;
