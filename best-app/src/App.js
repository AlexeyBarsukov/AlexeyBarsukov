import './App.css'
import React from 'react'
// import Header from './components/Header/Header'
import Menu from './components/Menu/Menu';
import { Movies } from './components/Movies/Movies';

function App() {
  return (
    <div className='App'>
      <div className='AppContent'>
        <nav>
          <Movies />

        </nav>
      </div>
    </div>
  )
};

export default App;
