import React from 'react';
import Header from '../header/Header.js';
import './Length.css';
import {motion} from 'framer-motion';

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
      <motion.div 
        className="length-item"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          delay: 0.2
        }}
      >
        <p
          onClick={() => short === false ? props.setLengthAndDisplay(10, "Quiz") : null } 
          style={{
            opacity: short === false ? 1 : 0.5
          }}
        >
          Short
        </p>
      </motion.div>
      
      {/* 20 questions */}
      <motion.div 
        className="length-item"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          delay: 0.4
        }}
      >
        <p
          onClick={() => medium === false ? props.setLengthAndDisplay(20, "Quiz") : null }
          style={{
            opacity: medium === false ? 1 : 0.5
          }}
        >
          Medium
        </p>
      </motion.div>

      {/* 30 questions */}
      <motion.div 
        className="length-item"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          delay: 0.6
        }}
      >
        <p
          onClick={() => long === false ? props.setLengthAndDisplay(30, "Quiz") : null }
          style={{
            opacity: long === false ? 1 : 0.5
          }}
        >
          Long
        </p>
      </motion.div>

    </div>
 
  </div>
}