import './MainContainer.module.scss';
import React, { useState, useContext, useEffect } from "react";
import MenuPanel from '../MenuPanel/menuPanel';
import { BreathContext } from '../../context/Context';

const MainContainer = () => {





  return (
    <div className= "main-container">
      <h1>Animation Goes Here</h1>
      <MenuPanel/>
    </div>
  )
}

export default MainContainer;