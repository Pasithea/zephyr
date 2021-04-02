import './MainContainer.module.scss';
import React, { useState, useRef, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import MenuPanel from '../MenuPanel/menuPanel';
import { BreathContext } from '../../context/Context';
import Login from '../UserPanel/Login';
import Signup from '../UserPanel/Signup';
import NavBar from '../MenuPanel/NavBar';
import SignupSuccess from '../UserPanel/SignupSuccess';
import Welcome from '../UserPanel/Welcome';
import Animation from '../Animation/Animation';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
});

const MainContainer = () => {

  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false
  });

  const { login, setLogin } = useContext(BreathContext);
  const ws = useRef(null);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {

    ws.current = new WebSocket('ws://zephyr-ws.herokuapp.com/');
    ws.current.onopen = () => console.log('Connection opened!');
    ws.current.onclose = () => ws.current = null; 

    setLogin(() => ({
      ...login,
      ws_connected: true,
    }))
  
}, []);


useEffect(() => {

    ws.current.onmessage = ({ data }) => {
      const parsedData = JSON.parse(data);
      // console.log('login:', login)
      setLogin(() => ({
        ...login,
        user_count: parsedData.count - 1,
      }));
    };

}, [login])

const sendName = () => {
  if (wsConnect === true) {
    ws.current.send(login.f_name)
  }
}

  return (
    <>
      <React.Fragment key='left'>
        <MenuIcon onClick={toggleDrawer('left', true)}></MenuIcon>
        <SwipeableDrawer
          anchor='left'
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
          >
        <Router>
          <NavBar/>
          <Switch>
            <Route path="/" component={MenuPanel} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/signup" component={Signup} exact/>
            <Route path="/success" component={SignupSuccess} exact/>
            <Route path="/welcome" component={Welcome} exact/>
          </Switch>
        </Router>
        </SwipeableDrawer>
      </React.Fragment>
    <div className= "main-container">
      <div className="animation">
        <Animation/>
      </div>
    </div>
    </>
    );
  }


   
export default MainContainer;