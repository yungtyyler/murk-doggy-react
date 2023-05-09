import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> }></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
