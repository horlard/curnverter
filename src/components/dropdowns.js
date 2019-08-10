import React, { Component } from "react";
import { connect } from "react-redux";
import { convert } from "../actions";

class dropdowns extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  state = {
    from: this.props.symbols[0],
    to: this.props.symbols[0],
    amount: null,
    convert: null
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.convert(this.state.from, this.state.to);
    console.log(this.state.convert);
    this.setState({ convert: this.props.amount * this.state.amount });
  };

  renderInputTo = () => {
    console.log(this.state.to);
    return (
      <div className="field">
        <label>to</label>
        <select
          className="ui select dropdown"
          onChange={e => this.setState({ to: e.target.value })}
        >
          {this.props.symbols.map(symbol => {
            return (
              <option value={symbol} key={symbol}>
                {symbol}
              </option>
            );
          })}
        </select>
      </div>
    );
  };
  renderInputFrom = () => {
    console.log(this.state.from);
    return (
      <div className="field">
        <label>from</label>
        <select
          className="ui select dropdown"
          onChange={e => this.setState({ from: e.target.value })}
        >
          {this.props.symbols.map(symbol => {
            return (
              <option value={symbol} key={symbol}>
                {symbol}
              </option>
            );
          })}
        </select>
      </div>
    );
  };
  renderAmt = () => {
    console.log(this.state.amount);
    return (
      <div className="field">
        <label>Amount</label>
        <input
          type="text"
          onChange={e => this.setState({ amount: e.target.value })}
        />
      </div>
    );
  };
  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <h1
          className="ui header"
          style={{ fontSize: "30px", textAlign: "center" }}
        >
          {this.state.convert}
        </h1>
        <form className="ui form error" onSubmit={this.onSubmit}>
          {this.renderInputFrom()}
          {this.renderInputTo()}
          {this.renderAmt()}
          <button className="ui primary button">Convert</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    symbols: Object.keys(state.SymbolReducer),
    title: Object.values(state.SymbolReducer),
    amount: Object.values(state.Convert)
  };
};
export default connect(
  mapStateToProps,
  { convert }
)(dropdowns);
