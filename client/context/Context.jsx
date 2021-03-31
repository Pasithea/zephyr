import React, { createContext, useState } from 'react';

export const BreathContext = createContext();

export const BreathContextProvider = (props) => {
  const [ data, setData ] = useState({
    breathIn: 4,
    holdBreath1: 4,
    breathOut: 4,
    holdBreath2: 4,
    selectedOption: 'square',
    description: 'Box breathing for balanced calm: inhale through the nose for 4, hold for 4, out through the nose for 4, hold for 4',
  });

  return <BreathContext.Provider value={[data, setData]}>{props.children}</BreathContext.Provider>;

}