import React from 'react';
import { Link } from 'react-router-dom';

function ButtonLink(props) {


    return(
        <div>
            <Link
                to={props.to}
                className={props.classnameButtonLink}
            > 
                <div 
                    tabIndex={props.tabindex}
                    style={{ backgroundImage: `url(${props.nameImage})` }}
                    onClick={props.onclick}
                >
                {props.name}
                </div>
            </Link>
        </div>
    )
}

export default ButtonLink