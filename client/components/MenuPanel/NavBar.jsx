import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/"><HomeIcon color="action" fontSize="large"/></Link>
      <Link to="/login"><FaceIcon color="action" fontSize="large"/></Link>
    </div>
  )
}

export default NavBar;