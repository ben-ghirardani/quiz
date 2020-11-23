import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Header from './Header';

// check that it renders
// check that it displays props correctly

// define 'props' at the top of the test, and pass them to the test version

const props = {
  style: "blue",
  number: 3,
  text: "Test Header"
}