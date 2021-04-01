import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { BreathContext } from '../../context/Context';


const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: 300 + theme.spacing(3) * 2,
  // },
  margin: {
    height: theme.spacing(3),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}
ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};



const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);


export default function BreathSlider(props) {
 const { label, title, defaultValue, sliderValue} = props
  
  const classes = useStyles();

  const {data, setData} = useContext(BreathContext);


  function handleChange(event, value) {
    setData(() => ({
      ...data,
      [event.target.ariaLabel] : value,
    }));
  }

  
  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <Typography gutterBottom>{title}</Typography>
      <PrettoSlider valueLabelDisplay="auto" value={sliderValue} aria-label={label} min={0} max={12} defaultValue={defaultValue} onChange={handleChange}/>
      <div className={classes.margin} />
    </div>
  );
}
