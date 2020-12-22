import React from 'react';
import './LandingPage.css';
import {motion} from "framer-motion";

export default function landingPage(props) {
  return <motion.div 
    className="landing-page" 
    onClick={props.clickLandingPage}
    initial={{scale: 0}}
    animate={{scale: 1}}
    transition={{
      delay: 1,
      type: "spring",
      stiffness: 100,
      damping: 9
    }}
  >
  Quiz!
  </motion.div>
}