import React from 'react';

function Square({ index,  value, onClick }) {
  return (

     <button 
     className=
     {` h-24 w-24
      text-4xl font-semibold
            ${value === 'X' ? '  bg-blue-800  text-blue-200' : ''}
            ${value === 'O' ? ' bg-red-800 text-red-400' : ''}
            hover:bg-gray-300 text-4xl font-semibold border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300
          `}
      onClick={onClick}>
      {value}
    </button>

    
   
  );
}

export default Square;
