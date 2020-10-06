import React from 'react';
import './LandingPage.css';

export default function landingPage(props) {
  return <div className="landing-page" onClick={props.clickLandingPage} >Quiz!</div>
}