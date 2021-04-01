import React, { useContext } from 'react';
import './SquareAnimation.module.scss';
import './PowerAnimation.module.scss';
import './SleepAnimation.module.scss';
import './BalancedAnimation.module.scss';
import { BreathContext } from '../../context/Context';
import MenuPanel from '../MenuPanel/menuPanel';


const Animation = () => {
  const { data, setData } = useContext(BreathContext)

  console.log('selectedOption', data.selectedOption);
  const style = data.selectedOption;

  return (
    <div>
      <div className ="graphic">
        <div className={style}></div>
        <div className={style}></div>
        <div className={style}></div>
        <div className={style}></div>
        <div className={style}></div>
        <div className={style}></div>
      </div>
    </div>
  );
}
export default Animation;






