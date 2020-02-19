import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

interface DrumPadProps {
  sound: string;
  activeKey: string;
  keyboard: string;
}

const DrumPad = ({ sound, keyboard, activeKey }: DrumPadProps) => {
  const [audio, setAudio] = useState();
  const [isActive, setIsActive] = useState();
  useEffect(() => {
    setAudio(new Audio(sound));
    if (audio) {
      if (activeKey === keyboard) {
        setIsActive(true);
        audio.play();
      } else {
        audio.pause();
        setIsActive(false);
        audio.currentTime = 0;
      }
    }
  }, [activeKey]);

  const start = () => audio.play();
  const stop = () => {
    audio.pause();
    audio.currentTime = 0;
  };
  return (
    <div
      className={classNames('drum-pad', { active: isActive })}
      onMouseDown={start}
      onMouseUp={stop}
    >
      <span>{keyboard}</span>
      <p></p>
    </div>
  );
};

export default DrumPad;
