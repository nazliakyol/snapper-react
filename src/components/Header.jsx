import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
import SouthIcon from '@mui/icons-material/South';

function Header() {
  return <header>
    <h1> <HighlightIcon /> Snapper</h1>
    <h2 style={{ textAlign: 'center', verticalAlign: 'middle' }}> Snap here <SouthIcon /></h2> 
  </header>;
}

export default Header;
