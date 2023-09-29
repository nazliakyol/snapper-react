import React from "react";
import SouthIcon from '@mui/icons-material/South';
import { GiMouthWatering } from 'react-icons/gi';


function Header() {
  return <header>
    <h1> <GiMouthWatering /> Snapper</h1>
    <h2 style={{ textAlign: 'center', verticalAlign: 'middle' }}> Snap here <SouthIcon /></h2> 
  </header>;
}

export default Header;
