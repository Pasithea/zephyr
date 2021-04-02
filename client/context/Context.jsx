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

  const [login, setLogin ] = useState({
    login_email: '',
    login_password: '',
    login_message: '',
    logged_in: false,
    f_name: '',
    ws_connected: false,
    user_count: 0,
  });

  const [signup, setSignup] = useState({
    email: '',
    password: '',
    f_name: '',
    l_name: '',
    message: '',
  });

  return <BreathContext.Provider value={{ data, setData, login, setLogin, signup, setSignup }}>{props.children}</BreathContext.Provider>;

}