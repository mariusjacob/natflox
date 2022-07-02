import React from 'react';
import './App.css';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route> 
        <Route path="/homepage" element={<Homepage />}></Route> 
      </Routes>
    </div>
  );
}

export default App;
