import React, { Component } from "react";

import Dropdowns from "./dropdowns";
import Card from './card';


const styles ={
  div: {
    background:'#5d5dbb'
  }
}
class App extends Component {
  render() {
    return (
      <div style={styles.div}>
        <Card>
          <Dropdowns symbols={this.props.symbols} />
        </Card>
        
      </div>
    );
  }
}
export default App;
