import React, { Component } from "react";

import Dropdowns from "./dropdowns";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Dropdowns symbols={this.props.symbols} />
      </div>
    );
  }
}
export default App;
