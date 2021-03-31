import './menuPanel.module.scss';
import React, { useState, useContext, useEffect } from "react";
import { BreathContext } from '../../context/Context';
import BreathSlider from './Slider';
//swipable drawer
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const MenuPanel = () => {

  const [data, setData] = useContext(BreathContext);
  //const [selectedOption, setSelectedOption] = useState('BREATHE');
  
  function handleClick(e) {
    e.preventDefault();

    const options = {
      default: {
        breathIn: 4,
        holdBreath1: 0,
        breathOut: 6,
        holdBreath2: 0
      },
      square: {
        breathIn: 4,
        holdBreath1: 4,
        breathOut: 4,
        holdBreath2: 4
      },
      pranayama: {
        breathIn: 7,
        holdBreath1: 4,
        breathOut: 8,
        holdBreath2: 0
      },
    };

    const target = e.target.id

    setData(() => ({
      breathIn: options[target].breathIn,
      holdBreath1: options[target].holdBreath1,
      breathOut: options[target].breathOut,
      holdBreath2: options[target].holdBreath2,
      selectedOption: target
    }));
  }
  
 // ================//



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {
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

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment key='left'>
          <Button onClick={toggleDrawer('left', true)}>'open'</Button>
          <SwipeableDrawer
            anchor='left'
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}
// ==========================//

  return (
    <div className = "menu">
      <h2>Zephyr</h2>
      <p>description</p>
      <button id="default" onClick = {handleClick}>Default</button>
      <button id="square" onClick = {handleClick}>Square</button>
      <button id="pranayama" onClick = {handleClick}>Pranayama</button>

      <BreathSlider sliderValue={data.breathIn} defaultValue = {data.breathIn} title={"Breath In:"} label={"breathIn"}/>
      <BreathSlider sliderValue={data.holdBreath1} defaultValue = {data.holdBreath1} title={"Hold Breath:"} label={"holdBreath1"}/>
      <BreathSlider sliderValue={data.breathOut} defaultValue = {data.breathOut} title={"Breath Out:"} label={"breathOut"}/>
      <BreathSlider sliderValue={data.holdBreath2} defaultValue = {data.holdBreath2} title={"Hold Breath:"} label={"holdBreath2"}/>

      <p>{data.selectedOption}</p>
      
    </div>
  )
}

export default MenuPanel;