import React from "react";
import BatchForm from "./BatchForm";
import { createBatch } from "../../../actions/batches"
import { connect } from "react-redux";


class BatchFormContainer extends React.Component {
  //copy uit reader niet aan toe gekomen
  constructor(props) {
    super(props);
    this.state = { date: null };
    this.dateChanged = this.dateChanged.bind(this);
  }
  dateChanged(d) {
    this.setState({ date: d });
  }

  state = {
    title: null,
    start_date: null,
    end_date: null
  };

  onChange = event => {
    this.setState({
      [event.target.number]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createBatch(this.state);
    this.setState({
      number: "",
      start_date: Date,
      end_date: Date
    });
  };

  render() {
    return (
      <BatchForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(
  null,
  { createBatch }
)(BatchFormContainer);

