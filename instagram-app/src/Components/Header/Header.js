import React from 'react';
import Modale from '../Modal/Modale';

import './Header.css'

const Header = () => {
    
    return(
        <div className="Header">
              <img 
              className="header__image" 
              src="https://cdn.worldvectorlogo.com/logos/instagram-1.svg" 
              alt=""
            />
            <Modale />
        </div>
    )
}

export default Header;