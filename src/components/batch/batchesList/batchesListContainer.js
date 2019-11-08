import React from "react";
import BatchesList from "./batchesList";
import { connect } from "react-redux";
import { loadBatches } from "../../../actions/batches";


class BatchesListContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      batches: []
    };
  }

  componentDidMount() {
    this.setState({
      batches: [
        {
          id: "1",
          number: "1101",
          startdate: "26-12-1989",
          enddate: "01-01-2200",
          students: ["elzo", "hafsa"]
        },
        {
          id: "2",
          number: "2324",
          startdate: "26-12-1989",
          enddate: "01-01-2200",
          students: ["tom", "erik"]
        }
      ]
    });
  }

  render() {
    return (
      <BatchesList
        batches={this.state.batches}
        studentColor={this.state.studentColor}
      />
    );
  }
}


const mapStateToProps = state => {
  console.log(state); // check what the state is
  return {
    batches: state.batches, // check react devtools, if the component has props.batches
    loggedIn: state.auth !== null
  };
};


export default connect(
  mapStateToProps,
  { loadBatches }
)(BatchesListContainer);

