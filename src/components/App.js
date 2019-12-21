import React, { Component } from "react";

import Dropdowns from "./dropdowns";
import Card from './card';

class App extends Component {
  render() {
    return (
      <div>
        <Card>
          <Dropdowns symbols={this.props.symbols} />
        </Card>
        
      </div>
    );
  }
}
export default App;
