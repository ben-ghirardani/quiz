import React from 'react';
import Header from '../header/Header.js';
import './Difficulty.css';
import {motion} from 'framer-motion';

export default function Difficulty (props) {

  // boolean: should component be disabled due to lack of questions to populate quiz? 
  const easy = props.disableDifficulty("Easy");
  const medium = props.disableDifficulty("Medium");
  const hard = props.disableDifficulty("Hard");
  const random = props.disableDifficulty("Random");

  return <div className="difficulty">

    <Header
      text={"Choose difficulty"}
    />

    <div className="difficulty-body">
     
      <motion.div 
        className="difficulty-item"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          delay: 0.2
        }}
      >
        <p 
          onClick={() => easy === false ? props.setDifficultyAndDisplay("easy", "Length") : null }
          style={{
            opacity: easy === false ? 1 : 0.5
          }}
        >
          Easy
        </p>
      </motion.div>

      <motion.div 
        className="difficulty-item"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          delay: 0.4
        }}
      >
        <p 
          onClick={() => medium === false ? props.setDifficultyAndDisplay("medium", "Length") : null }
          style={{
            opacity: medium === false ? 1 : 0.5
          }}
        >
          Medium
        </p>
      </motion.div>

      <motion.div 
        className="difficulty-item"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          delay: 0.6
        }}
      >
        <p 
          onClick={() => hard === false ? props.setDifficultyAndDisplay("hard", "Length") : null }
          style={{
            opacity: hard === false ? 1 : 0.5
          }}
        >
          Hard
        </p>
      </motion.div>
      
      <motion.div 
        className="difficulty-item"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          delay: 0.8
        }}
      >
        <p 
          onClick={() => random === false ? props.setDifficultyAndDisplay("random", "Length") : null }
          style={{
            opacity: random === false ? 1 : 0.5
          }}
        >
          Random
        </p>
      </motion.div>
     
    </div>
  
  </div>
}