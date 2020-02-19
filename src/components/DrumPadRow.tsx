import React from 'react';
import DrumPad, { DrumPadProps } from './DrumPad';

interface DrumPadRowProps {
  drumPadData: DrumPadProps[];
}

const DrumPadRow = ({ drumPadData }: DrumPadRowProps) => (
  <section className="drum-pad-row">
    {drumPadData.map(data => (
      <DrumPad
        key={data.keyboard}
        activeKey={data.activeKey}
        keyboard={data.keyboard}
        sound={data.sound}
      />
    ))}
  </section>
);

export default DrumPadRow;
