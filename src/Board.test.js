import { render, fireEvent } from '@testing-library/react';
import Board from './Board';

test('flips cells when clicked', () => {
  const { getAllByRole } = render(<Board nrows={5} ncols={5} chanceLightStartsOn={0.5} />);
  const cellElements = getAllByRole('cell');

  // Find a cell that is lit
  const litCell = cellElements.find(cell => cell.classList.contains('Cell-lit'));
  expect(litCell).toBeTruthy();

  // Simulate click event
  fireEvent.click(litCell);

  // Validate changes (This assumes that clicking changes the class. Adjust the test according to your implementation)
  expect(litCell).toHaveClass('Cell');
  expect(litCell).not.toHaveClass('Cell-lit');
});
