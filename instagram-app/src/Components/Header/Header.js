import React from 'react';
import Modale from './Modale/Modale';

import './Header.css'

const Header = () => {
    
    return(
        <div className="header">
              <img 
              className="header__image" 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" 
              alt=""
            />
            <Modale />
        </div>
    )
}

export default Header;