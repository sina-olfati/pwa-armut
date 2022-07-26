import React from 'react';
// SPA
import {Routes, Route} from "react-router-dom"
// components
import FirstPage from './components/FirstPage';
import Signin from './components/Signin';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
