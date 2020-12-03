import React from 'react';
import {render} from '@testing-library/react';
import Header from './Header';

test("header should render with the props it is passed", ()=>{
  const {getByTestId, getByText} = render(
    <Header 
      number={"1"}
      text={"Test Header"}
    />);
  expect(getByTestId('header')).toBeInTheDocument();
  expect(getByText("1 Test Header")).toBeVisible();
});