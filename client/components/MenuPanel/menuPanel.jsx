import './menuPanel.module.scss';
import React, { useState, useContext, useEffect } from "react";
import { BreathContext } from '../../context/Context';
import BreathSlider from './Slider';

const MenuPanel = () => {

  const [data, setData] = useContext(BreathContext);
  
  
  function handleClick(e) {
    e.preventDefault();

    const options = {
      sleep: {
        breathIn: 4,
        holdBreath1: 4,
        breathOut: 8,
        holdBreath2: 0,
        description: 'Breathing for better sleep: inhale through nose for 4, hold for 4, exhale through nose for 8'
      },
      square: {
        breathIn: 4,
        holdBreath1: 4,
        breathOut: 4,
        holdBreath2: 4,
        description: 'Box breathing for calmness: inhale through the nose for 4, hold for 4, out through the nose for 4, hold for 4'
      },
      balanced: {
        breathIn: 4,
        holdBreath1: 4,
        breathOut: 4,
        holdBreath2: 4,
        description: 'Alternate nostril breathing for balancing parasympathetic (rest & digest) and sympathetic (fight & flight): balanced calm breathing: breathe in through your left nostril holding your right nostril closed with ring finger inhale for 4, hold nostrils closed (ring finger and thumb) for 4, exhale right nostril for 4. Inhale right nostril for 4, hold for 4, exhale left nostril for 4.'
       },
       power: {
        breathIn: 8,
        holdBreath1: 8,
        breathOut: 8,
        holdBreath2: 8,
        description: 'Power breathing exercise to encourage maximum airflow and lung capacity: inhale through nose for 8, hold for 8, exhale through nose for 8, hold for 8'
      }
    };

    const target = e.target.id

    setData(() => ({
      breathIn: options[target].breathIn,
      holdBreath1: options[target].holdBreath1,
      breathOut: options[target].breathOut,
      holdBreath2: options[target].holdBreath2,
      selectedOption: target,
      description: options[target].description
    }));
  }
  


  return (
    <div className = "menu">
      <h2>Zephyr</h2>
      <p>Welcome, feel the gentle breeze. Breathe with us.</p>
      <button id="square" onClick={handleClick}>Square</button>
      <button id="sleep" onClick={handleClick}>Sleep</button>
      <button id="balanced" onClick={handleClick}>Balanced</button>
      <button id="power" onClick={handleClick}>Power</button>

      <p>{data.description}</p>

      <BreathSlider sliderValue={data.breathIn} defaultValue = {data.breathIn} title={"Breath In:"} label={"breathIn"}/>
      <BreathSlider sliderValue={data.holdBreath1} defaultValue = {data.holdBreath1} title={"Hold Breath:"} label={"holdBreath1"}/>
      <BreathSlider sliderValue={data.breathOut} defaultValue = {data.breathOut} title={"Breath Out:"} label={"breathOut"}/>
      <BreathSlider sliderValue={data.holdBreath2} defaultValue = {data.holdBreath2} title={"Hold Breath:"} label={"holdBreath2"}/>
      
    </div>
  )
}

export default MenuPanel;