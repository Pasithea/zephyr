import React, { createContext, useState } from 'react';

export const BreathContext = createContext();

export const BreathContextProvider = (props) => {
  const [ data, setData ] = useState({
    breathIn: 4,
    holdBreath1: 0,
    breathOut: 6,
    holdBreath2: 0,
    selectedOption: 'default',
  });

  return <BreathContext.Provider value={[data, setData]}>{props.children}</BreathContext.Provider>;

}