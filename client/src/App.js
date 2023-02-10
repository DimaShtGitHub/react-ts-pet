import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';

import MainPage from './components/pages/MainPage/MainPage';
import HomePage from './components/pages/HomePage/HomePage';
import RegPage from './components/pages/RegPage/RegPage';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/main'} element={<MainPage />}/>
        <Route path={'/reg'} element={<RegPage/>} />
      </Routes>
    </div>
  );
}

export default App;
