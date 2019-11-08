import React from "react";
import BatchDetails from "./batchDetails";
import { connect } from "react-redux";
import { loadBatches } from '../../../actions/batches';


class BatchesDetailsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      batchdetails: [],
      id: null,
      random1till100: 1,
      studentColor: "red",
      askThisStudent: { fullname: "none" }
    };
    //moet handleclick binden anders kan ik hem niet gebruiken in batchdetails
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    //pak de id paramater
    this.setState({
      id: this.props.match.params.id
    });

    this.setState({
      batchdetails: [
        {
          id: "1",
          fullname: "Hafsa",
          photo: "instagram",
          color: "green",
          description: "decr this is"
        },
        {
          id: "2",
          fullname: "Erik",
          photo: "instagram",
          color: "red",
          description: "this is a descr"
        },
        {
          id: "2",
          fullname: "Sam",
          photo: "instagram",
          color: "yellow",
          description: "this is a descr"
        }
      ]
    });
  }

  handleClick(e) {
    e.preventDefault();
    //random number tussen 1 en 100
    this.setState(
      {
        random1till100: Math.floor(Math.random() * 101)
      },
      console.log("random number:", this.state.random1till100)
    );

    //tussen 1 en 50 is rood
    if (this.state.random1till100 < 51) {
      this.setState(
        {
          studentColor: "red"
        },
        console.log("studentColor:", this.state.studentColor)
      );
    } else if (
      // tussen 50 en 84 is yellow
      this.state.random1till100 > 50 &&
      this.state.random1till100 < 84
    ) {
      this.setState(
        {
          studentColor: "yellow"
        },
        console.log("studentColor:", this.state.studentColor)
      ); //boven 83 is groen
    } else if (this.state.random1till100 > 83) {
      this.setState(
        {
          studentColor: "green"
        },
        console.log("studentColor:", this.state.studentColor)
      );
    }
    //filter op studenten met same kleur als random kleur
    let filteredStudents = this.state.batchdetails.filter(
      student => student.color === this.state.studentColor
    );
    console.log("filteredStudents:", filteredStudents);

    //kies 1 random student met same kleur als gekozen kleur
    let askThisStudent =
      filteredStudents[Math.floor(Math.random() * filteredStudents.length)];
    console.log("ask him locally:", askThisStudent);
    //sla op welke student random is gekozen
    this.setState(
      {
        askThisStudent: askThisStudent
      },
      console.log("ask this student:", this.state.askThisStudent)
    );
  }

  render() {
    return (
      <BatchDetails
        handleClick={this.handleClick}
        id={this.state.id}
        batchdetails={this.state.batchdetails}
        askThisStudent={this.state.askThisStudent}
      />
    );
  }
}



const mapStateToProps = state => ({
  batch: state.batch,
  loggedIn: !!state.auth
});

export default connect(
  mapStateToProps,
  { loadBatches }
)(BatchesDetailsContainer);
