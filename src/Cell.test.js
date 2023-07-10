import { render, fireEvent } from '@testing-library/react';
import Cell from './Cell';

const createCell = (isLit) => {
  const mockFlipFunction = jest.fn();
  const utils = render(
    <table>
      <tbody>
        <tr>
          <Cell isLit={isLit} flipCellsAroundMe={mockFlipFunction} />
        </tr>
      </tbody>
    </table>
  );
  const cells = utils.getAllByRole('cell');
  return { ...utils, cells, mockFlipFunction };
};

test('renders without crashing', () => {
  render(<Cell />);
});

test('calls the flipCellsAroundMe function when clicked', () => {
  const { cells, mockFlipFunction } = createCell(false);
  const cellElement = cells[0];

  fireEvent.click(cellElement);
  expect(mockFlipFunction).toHaveBeenCalledTimes(1);
});

test('renders with correct classes when lit', () => {
  const { cells } = createCell(true);
  const cellElement = cells[0];

  expect(cellElement).toHaveClass('Cell');
  expect(cellElement).toHaveClass('Cell-lit');
});

test('renders with correct classes when not lit', () => {
  const { cells } = createCell(false);
  const cellElement = cells[0];

  expect(cellElement).toHaveClass('Cell');
  expect(cellElement).not.toHaveClass('Cell-lit');
});
