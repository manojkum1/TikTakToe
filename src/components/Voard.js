import React from 'react';
import Square from './Square';

function Voard({ squares, onClick }) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-1">
      {squares.map((value, i) => (
        <Square key={i} value={value} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}

export default Voard;
