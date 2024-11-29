/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Detail from './components/Detail';

function App() {
  return (
    <div css={css`position: relative; max-height: fit-content; min-height: 100vh; `}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/detail" element={<Detail />} /> 
        <Route path="/add" element={<Add />} /> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;