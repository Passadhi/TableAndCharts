import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Table from './components/Table';
import ChartPrice from './components/ChartPrice';
import ChartVolume from './components/ChartVolume';
function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
        <Route path='/' element={<Table />}  />
        <Route path='/chartPrice' element={<ChartPrice />}  />
        <Route path='/chartVolume' element={<ChartVolume />}  />
      </Routes>
    </div>
  );
}

export default App;
