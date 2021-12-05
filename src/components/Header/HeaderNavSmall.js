import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


function HeaderNavSmall(props) {

 

    return (
            
            <div className="header_nav__navigation_small__wrapper">

                <FontAwesomeIcon
                    icon={props.flagOpen ? faTimes : faBars}
                    onClick={props.onclick}
                    className='header_nav__navigation_small__icon'
                />
                
            </div>
    )
}

export default HeaderNavSmall

