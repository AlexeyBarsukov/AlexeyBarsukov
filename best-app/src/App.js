import { BrowserRouter as Router, Link, Outlet, Route, Routes } from 'react-router-dom';
import { router } from './components/routers/Router';
import './App.css'
import React from 'react'
import { Movies } from './components/Movies/Movies';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className='App'>
      <div className='AppContent'>
        <nav>
          <Header />
          <Menu />
        </nav>
      </div>
    </div>
  )
};

export default App;
