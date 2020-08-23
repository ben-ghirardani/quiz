import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {

  render() {
    return(
      <button
        className="button"
        disabled={this.props.disabled}
        name={this.props.name}
        value={this.props.value}
        onClick={this.props.onClick}
      >
        {this.props.buttonText}
      </button>
    )
  }

} 