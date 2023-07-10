import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Cell from './Cell';

// Helper function to create a cell and return both the rendered cell and the mock function
const createCell = (isLit) => {
    const mockFlipFunction = jest.fn();
    const utils = render(<Cell isLit={isLit} flipCellsAroundMe={mockFlipFunction} />);
    const cells = utils.getAllByRole('cell');
    return { ...utils, cells, mockFlipFunction };
}

test('renders Cell correctly', () => {
    const mockFlipFunction = jest.fn();
    render(
      <table>
        <tbody>
          <tr>
            <Cell isLit={true} flipCellsAroundMe={mockFlipFunction} />
          </tr>
        </tbody>
      </table>
    );
  });

test('flips cells when clicked', () => {
    const { cells, mockFlipFunction } = createCell(true);

    // Click on the first cell
    fireEvent.click(cells[0]);
    expect(mockFlipFunction).toHaveBeenCalled();
});
