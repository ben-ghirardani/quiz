import React from 'react';
import LandingPage from './LandingPage';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const clickLandingPage = jest.fn();

test("LandingPage should render with passed props", ()=>{
  const {getByText} = render(
    <LandingPage
      clickLandingPage={clickLandingPage}
    />
  );
  expect(getByText("Quiz!")).toBeVisible();
});

test("onClick functionality should work correctly", ()=>{
  const {getByText} = render(
    <LandingPage
      clickLandingPage={clickLandingPage}
    />
  );
  userEvent.click(screen.getByText("Quiz!"));
  expect(clickLandingPage).toHaveBeenCalledTimes(1);
});