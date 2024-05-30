import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './component/Home';
import Register from './component/Register';
import './App.css';

function App() {
  
  return (
    <Router> 
      <Routes>
        
        <Route path="/" element={<Home />} />
        
        <Route path="/form" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;