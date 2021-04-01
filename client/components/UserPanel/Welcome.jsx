import React, { useContext, useEffect, useRef, useState} from "react";
import { BreathContext } from '../../context/Context';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Welcome = () => {
  const { login, setLogin } = useContext(BreathContext);
  
  const ws = useRef(null);
  const [wsConnect, setWsConnect ] = useState(false);

  const updateCount = (count) => {
    console.log('count:', count);
  }

  useEffect(() => {
    // if (ws) {
    //   ws.onerror = ws.onopen = ws.onclose = null;
    //   ws.close();
    // }

    ws.current = new WebSocket('ws://zephyr-ws.herokuapp.com/');
    ws.current.onopen = () => console.log('Connection opened!');
    ws.current.onmessage = ({ data }) => {
      const parsedData = JSON.parse(data);
      updateCount(parsedData.count);
    };
    ws.current.onclose = () => ws = null; 
    setWsConnect(true);
    // setTimeout(sendName, 2000)
  }, [Welcome]);

 const sendName = () => {
  if (wsConnect === true) {
    console.log('hit sendName function')
    ws.current.send(login.f_name)
  }
 }

  return (
    <div className="welcome">
      <h2>{`Welcome, ${login.f_name}.`}</h2>
      <p>You have been breathing with us for 90 days.</p>
      <button onClick={sendName}>Send name</button>
    </div>
  )
}

export default Welcome;