import React, { useState, useEffect } from 'react';

interface DrumPadProps {
  sound: string;
}

const DrumPad = ({ sound }: DrumPadProps) => {
  const [audio, setAudio] = useState();
  useEffect(() => {
    setAudio(new Audio(sound));
  }, []);

  const start = () => audio.play();
  const stop = () => {
    audio.pause();
    audio.currentTime = 0;
  };
  return (
    <div className="drum-pad" onMouseDown={start} onMouseUp={stop}>
      <p></p>
    </div>
  );
};

export default DrumPad;
