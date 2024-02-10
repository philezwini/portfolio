// App.js
import './App.css';
import React from 'react'
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
