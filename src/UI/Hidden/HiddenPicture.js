import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function HiddenPicture(props) {

    const [flagOpenPicture, setFlagOpenPicture] = useState(false);

    const hendlerOpenPicture = (event) => {
        event.preventDefault();
        setFlagOpenPicture(prev => !prev);
    }

    return (
        <>
            {
                flagOpenPicture ?
                    <div
                        className='hidden_picture'
                        onClick={hendlerOpenPicture}
                    >
                        <div>
                            <img
                                src={props.plan}
                                alt={props.nameFloor}
                            />
                        </div>

                    </div>
                    : <div className='block_hidden_picture'>
                        < FontAwesomeIcon
                            icon={faSearch}
                            onClick={hendlerOpenPicture}
                        />
                        <div>{props.name}</div>
                    </div>

            }
            
        </>

    )
}

export default HiddenPicture

    //< FontAwesomeIcon
    //    icon = { faTimes }
    //    className = 'icon_close'
    //    onClick = { hendlerOpenPicture }
    ///>