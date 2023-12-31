import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom'; 
import Home from './components/Home';
import FavList from './components/FavList';

function App() {
  return (
    <div className="App">
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<FavList/>} />


      
    </Routes>
    </div>
  );
}

export default App;
