import React, { useContext } from 'react';
import './Animation.module.scss';
import './BalancedAnimation.module.scss';
import './SleepAnimation.module.scss';
import { BreathContext } from '../../context/Context';
import MenuPanel from '../MenuPanel/menuPanel';


const Animation = () => {
  const [data, setData] = useContext(BreathContext)
    // setData(()=> ({
    // ...data
    // }))
    console.log('selectedOption', data.selectedOption);
  const style = data.selectedOption;

return (
    <div>
      <div id="container">
        <div className={style}></div>
      </div>
    </div>
  );
}
export default Animation;








{/* <div class="item">
Inhale
</div> */}
// provide onlick functionality for breathing pattern defaults should assign the variable to be passed into className
// -- circle renders with the class styling defined in animation styling module
// -- rename classes descriptively