import React, { Component } from "react";
import { connect } from "react-redux";
import { convert } from "../actions";

import Api from "../api/fixerApi";

class dropdowns extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  state = {
    from: this.props.symbols[0],
    to: this.props.symbols[0],
    amount: null,
    convert: null,
    result: null
  };

  onrates = e => {
    e.preventDefault();
    Api.get(null, {
      params: {
        base: this.state.from,
        symbols: this.state.to
      }
    }).then(res => {
      this.setState({ result: Object.values(res.data.rates) });
      console.log(this.state.result);
    });
  };

  renderInputTo = () => {
    console.log(this.state.to);
    return (
      <div className="field">
        <label>to</label>
        <select className="ui select dropdown" onChange={this.onToChange}>
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
  onToChange = e => {
    console.log(this.state.to);
    this.setState({ to: e.target.value });
    this.onrates(e);
  };
  OnFromChange = e => {
    console.log(this.state.from);
    this.setState({ from: e.target.value });
    this.setState({ to: e.target.value });
    this.onrates(e);
  };
  onAmountChange = e => {
    this.setState({ convert: this.state.result * e.target.value });
  };
  renderInputFrom = () => {
    return (
      <div className="field">
        <label>from</label>
        <select className="ui select dropdown" onChange={this.OnFromChange}>
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
    return (
      <div className="field">
        <label>Amount</label>
        {!this.state.result ? (
          <input type="number" disabled />
        ) : (
          <input type="number" onChange={this.onAmountChange} />
        )}
      </div>
    );
  };
  render() {
    console.log(this.props.amount);
    return (
      <div style={{ marginTop: "50px" }}>
        <h1
          className="ui header"
          style={{ fontSize: "30px", textAlign: "center" }}
        >
          {this.state.convert}
        </h1>
        <form className="ui form error">
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
    amount: Object.values(state.Convert)
  };
};
export default connect(
  mapStateToProps,
  { convert }
)(dropdowns);
