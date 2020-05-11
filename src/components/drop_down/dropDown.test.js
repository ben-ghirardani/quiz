import React from 'react';
import DropDown from './DropDown';

let data = [
  {name: "Geography"},
  {name: "General Knowledge"}
];

it('splits an array of names into a drop down menu', () => {
  expect(DropDown(data)).toEqual(
    <select>
      <option value="Geography">Geography</option>
      <option value="General Knowledge">General Knowledge</option>
    </select>
  )
})