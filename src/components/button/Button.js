import React, { Component } from 'react';

export default class Button extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return(
      <button
        name={this.props.name}
        value={this.props.value}
        onClick={this.props.onClick}
      >
        {this.props.buttonText}
      </button>
    )
  }

} 