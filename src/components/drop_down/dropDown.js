import React from 'react';
import './dropDown.css';

// pass an array to the function to populate the <select>
export default function dropDown(array) {

  // let select = <select></select>
  let select = document.createElement("select");

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    // let option = <option></option>
    let option = document.createElement("option");

    option.text = element.name;
    option.value = element.name;
    select.add(option);
  }
  return select;
} 