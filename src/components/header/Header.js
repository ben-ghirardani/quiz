import React from 'react'
import './Header.css';

export default function Header (props) {
  return <div data-testid="header" className="header" style={props.style}>
    {props.number} {props.text}
  </div>
};