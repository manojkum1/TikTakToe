import React from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className=' bg-slate-700 w-full h-screen flex flex-col background relative overflow-x-hidden items-center' >
       <h1 className= "bg-white  rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-5xl font-bold text-blue-600 font-serif  "  > 
       Tik Tak Toe Game
       </h1>
       
       <Board  />


       
    </div>
   
  );
}

export default App;
