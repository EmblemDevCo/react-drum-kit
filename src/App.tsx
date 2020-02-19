import React, { useEffect, useState } from 'react';
import DrumPad from './components/DrumPad';
import './App.css';

function App() {
  const [activeKey, setActiveKey] = useState();
  const setActiveKeyHandler = (e: KeyboardEvent) => {
    setActiveKey(e.key);
  };
  const removeActiveKeyHandler = () => setActiveKey('');
  useEffect(() => {
    window.addEventListener('keydown', setActiveKeyHandler);
    window.addEventListener('keyup', removeActiveKeyHandler);

    return () => {
      window.removeEventListener('keydown', setActiveKeyHandler);
      window.removeEventListener('keyup', removeActiveKeyHandler);
    };
  });
  return (
    <div className="App">
      <DrumPad sound="sounds/boom.wav" activeKey={activeKey} keyboard="a" />
    </div>
  );
}

export default App;
