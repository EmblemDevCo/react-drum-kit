import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

export interface DrumPadProps {
  sound: string;
  activeKey: string;
  keyboard: string;
}

const DrumPad = ({ sound, keyboard, activeKey }: DrumPadProps) => {
  const [audio, setAudio] = useState(new Audio(sound));
  const [isActive, setIsActive] = useState();

  useEffect(() => {
    if (audio) {
      if (activeKey === keyboard) {
        setIsActive(true);
        audio.currentTime = 0;
        audio.play();
      } else {
        setIsActive(false);
      }
    }
  }, [activeKey]);

  const start = () => {
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div
      className={classNames('drum-pad', { active: isActive })}
      onMouseDown={start}
    >
      <span>{keyboard}</span>
      <p></p>
    </div>
  );
};

export default DrumPad;
