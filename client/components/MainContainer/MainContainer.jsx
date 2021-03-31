import './MainContainer.module.scss';
import React, { useState, useContext, useEffect } from "react";
import MenuPanel from '../MenuPanel/menuPanel';
import { BreathContext } from '../../context/Context';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
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

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };



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
          <MenuPanel/>
        </SwipeableDrawer>
      </React.Fragment>
    <div className= "main-container">
      <div className="animation">
        <h1>Animation Goes Here</h1>
      </div>
    </div>
    </>
    );
  }


   
export default MainContainer;