import React from 'react';
import './Item.css';


// is Item used anywhere anymore?
export default function item (props) {
  return <div
            className="item"
            onClick={props.onClick}
            name={props.name}
          >
            {props.name}
          </div>
}; 