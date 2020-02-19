import React from 'react';
import DrumPad from './components/DrumPad';
import './App.css';

function App() {
  return (
    <div className="App">
      <DrumPad sound="sounds/boom.wav"></DrumPad>
    </div>
  );
}

export default App;
