import React from 'react';


function FotoButton(props) {

    const data = props.data;
    
    return(

            <div 
                className= {props.classname}
                onClick={() => props.onclick(data)}
            >    
                <img
                    src={props.fotoButtom}
                    alt={props.nameFloor}
                />
            </div>

    )
}

export default FotoButton
