import React from 'react'
import './Header.css';

export default function header (props) {
  return <div className="header" style={props.style}>
    {props.number} {props.text}
  </div>
};