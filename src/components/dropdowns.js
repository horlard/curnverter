import React, { Component } from "react";
import { connect } from "react-redux";
import { convert } from "../actions";

import Api from "../api/fixerApi";
import '../dropdown.css'

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
    ///const key = "30e1e13cb7ab8f220881d86e22518cfd";
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
      <div className="selection">
        <label>To</label>
        <select onChange={this.onToChange}>
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
      <div className="selection">
        <label>From</label>
        <select onChange={this.OnFromChange}>
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
      <div className="inputField">
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
      <div>
        <h1
          className=""
          style={{ fontSize: "30px", textAlign: "center",color:'#fff' }}
        >
          {this.state.convert}
        </h1>
        <form className="">
          {this.renderInputFrom()}
          {this.renderInputTo()}
          {this.renderAmt()}
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
