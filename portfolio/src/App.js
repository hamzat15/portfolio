import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/home/Home'


const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
