import React from 'react';
import Loading from './Loading';
import {render} from '@testing-library/react';

afterEach(()=>{
  jest.clearAllMocks();
});

test("component renders correctly", ()=>{
  const {getByText} = render(
    <Loading/>
  );
  expect(getByText("LOADING")).toBeVisible();
});