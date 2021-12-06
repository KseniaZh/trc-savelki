import React from 'react';

import logo from '../../img/logo.png';



function Logo(props) {


    return (

            <div className="header_nav__logo">
                <a href="#header" >
                    <img src={logo} alt="logo ТРЦ Савёлки" />
                </a>
            </div>
                
    )
}

export default Logo

