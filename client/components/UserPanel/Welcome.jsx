import React, { useContext, useEffect, useRef, useState} from "react";
import { BreathContext } from '../../context/Context';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Welcome = () => {
  const { login, setLogin } = useContext(BreathContext);
  
  let message;
  
  if (login.user_count === 0) {
    message = `Currently riding solo through the breeze.`;
  } else if (login.user_count === 1) {
    message = `There is 1 fellow breather in the room.`
  } else {
    message = `There are ${login.user_count} fellow breathers in the room.`
  }

  return (
    <div className="welcome">
      <h2>{`Welcome, ${login.f_name}.`}</h2>
      <p>You have been breathing with us for 90 days.</p>
      <p>{message}</p>
    </div>
  )
}

export default Welcome;