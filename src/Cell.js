import React from 'react';
import './Cell.css';

function Cell({ isLit, flipCellsAroundMe }) {
  const handleClick = () => {
    flipCellsAroundMe();
  };

  let classes = 'Cell';
  if (isLit) {
    classes += ' Cell-lit';
  }

  return (
    <td className={classes} onClick={handleClick} role="cell" />
  );
}

export default Cell;
