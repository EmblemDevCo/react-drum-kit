import React, { useEffect, useState } from 'react';
import DrumPadRow from './components/DrumPadRow';
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

  const row1 = [
    { activeKey, keyboard: 'a', sound: 'sounds/boom.wav' },
    { activeKey, keyboard: 's', sound: 'sounds/clap.wav' },
    { activeKey, keyboard: 'd', sound: 'sounds/hihat.wav' }
  ];

  const row2 = [
    { activeKey, keyboard: 'f', sound: 'sounds/kick.wav' },
    { activeKey, keyboard: 'j', sound: 'sounds/openhat.wav' },
    { activeKey, keyboard: 'k', sound: 'sounds/ride.wav' }
  ];

  const row3 = [
    { activeKey, keyboard: 'l', sound: 'sounds/snare.wav' },
    { activeKey, keyboard: ';', sound: 'sounds/tink.wav' },
    { activeKey, keyboard: ' ', sound: 'sounds/tom.wav' }
  ];
  return (
    <div className="App">
      <DrumPadRow drumPadData={row1} />
      <DrumPadRow drumPadData={row2} />
      <DrumPadRow drumPadData={row3} />
    </div>
  );
}

export default App;
