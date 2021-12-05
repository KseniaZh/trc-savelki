import React from 'react';
import GoFloorComponent from '../../components/Sections/GoFloorComponent';


const GoFloor = (props) => {

    return (
        <div
            className='go_floor__wrapper'
        >
            <div className='go_floor_left go_floor' onClick={props.onclick}>
                {
                    props.stateFloorLeft.map((obj, index) => {
                        return <GoFloorComponent
                                    key={index}
                                    {...obj}
                                />
                    })
                }
            </div>
            <div className='go_floor_right go_floor' onClick={props.onclick}>
                {
                    props.stateFloorRight.map((obj, index) => {
                        return <GoFloorComponent
                                    key={index}
                                    {...obj}
                                />
                    })
                }
            </div>
        </div>
    )
}

export default GoFloor

