import Home from 'pages/Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <h1>소환사 정보 검색</h1>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
