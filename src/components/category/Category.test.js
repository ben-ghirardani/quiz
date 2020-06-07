import React from 'react';
import Category from './Category';

let data = [
  {name: "Geography"},
  {name: "General Knowledge"}
];

it('splits an array of names into a drop down menu', () => {
  expect(Category(data, "test-select")).toEqual(
    <select name="test-select">
      <option value="Geography">Geography</option>
      <option value="General Knowledge">General Knowledge</option>
    </select>
  )
})