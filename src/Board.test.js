// board.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Board from './Board';

test('flips cells when clicked', () => {
  const { getByRole } = render(<Board nrows={5} ncols={5} chanceLightStartsOn={0.5} />);
  const cellElement = getByRole('cell');

  // Check the initial state of the cell
  expect(cellElement).toHaveClass('Cell Cell-lit');

  // Click the cell
  fireEvent.click(cellElement);

  // Check that the cell's class changed
  expect(cellElement).not.toHaveClass('Cell Cell-lit');
});
