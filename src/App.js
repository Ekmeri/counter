import React from 'react';
import './App.css';
import Counter from './Counter/Counter';
import Counterhook from './Counterhook/Counterhook'

const App = () => {
  return (
    <div className="main">
      <Counter/>
      <Counterhook/>
    </div>
  );
}

export default App;
