import React from 'react';
// SPA
import {Routes, Route} from "react-router-dom"
// components
import FirstPage from './components/FirstPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FirstPage />} />
      </Routes>
    </div>
  );
}

export default App;
