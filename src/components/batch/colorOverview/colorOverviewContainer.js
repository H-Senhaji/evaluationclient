import React from "react";
import ColorOverview from "./colorOverview";

class ColorOverviewContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      colours: {}
    };
  }
  //set de colours voor de overview
  componentDidMount() {
    this.setState({
      colours: { green: 20, red: 20, yellow: 60 }
    });
  }

  render() {
    return <ColorOverview colours={this.state.colours} />;
  }
}

export default ColorOverviewContainer;
