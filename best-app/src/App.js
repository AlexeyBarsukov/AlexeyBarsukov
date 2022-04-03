import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu';
import Card1 from './components/PageOfCards/Card1/Card1';

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
