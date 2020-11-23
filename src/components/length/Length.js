import React from 'react';
import Header from '../header/Header.js';
import './Length.css';

export default function length (props) {

  const short = props.disableLength(10);
  const medium = props.disableLength(20);
  const long = props.disableLength(30);

  return <div className="length">

    <Header
      text={"Choose length"}
    />
        
    <div className="length-body">
      
      {/* 10 questions */}
      <div className="length-item">
        <p
          // replace null option in ternery with error handling
          onClick={() => short === false ? props.setLengthAndDisplay(10, "Quiz") : null } 
          style={{
            opacity: short === false ? 1 : 0.5
          }}
        >
          Short
        </p>
      </div>
      
      {/* 20 questions */}
      <div className="length-item">
        <p
          onClick={() => medium === false ? props.setLengthAndDisplay(20, "Quiz") : null }
          style={{
            opacity: medium === false ? 1 : 0.5
          }}
        >
          Medium
        </p>
      </div>

      {/* 30 questions */}
      <div className="length-item">
        <p
          onClick={() => long === false ? props.setLengthAndDisplay(30, "Quiz") : null }
          style={{
            opacity: long === false ? 1 : 0.5
          }}
        >
          Long
        </p>
      </div>

    </div>
 
  </div>
}