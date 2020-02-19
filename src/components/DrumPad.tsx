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
    setAudio(new Audio(sound));
    if (audio) {
      audio.addEventListener('ended', () => {
        audio.remove();
        setAudio(new Audio(sound));
      });
      if (activeKey === keyboard) {
        setIsActive(true);
        audio.play();
      } else {
        setIsActive(false);
      }
    }
  }, [activeKey]);

  const start = () => audio.play();
  const stop = () => setAudio(new Audio(sound));

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
