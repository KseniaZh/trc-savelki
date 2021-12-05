import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRubleSign } from "@fortawesome/free-solid-svg-icons";
import HiddenPicture from '../../UI/Hidden/HiddenPicture';
import { Link } from 'react-router-dom';

function GoFloorComponent(props) {
    
    const to = `/${props.id}`;

    const rub = () => {
        if (props.price === 'по договоренности') {
            return null
        }
        return <FontAwesomeIcon icon={faRubleSign} />
    }

    return (
        <div className='go_floor_component'>

            <div className='go_floor_component__button'>
                <div>
                    <Link
                        to={to}
                        className={props.classnameButtonLink}
                    >
                        <img
                            src={props.fotoButtom}
                            alt={props.nameFloor}
                        />
                    </Link>
                </div>
            </div>
            <div className='go_floor_component__about'>
                <Link
                    to={to}
                    className={props.classnameButtonLink}
                >
                    <div>{props.nameFloor}</div>
                    <div>стоимость аренды: <br /> {props.price}
                        {rub()}
                    </div>
                </Link>
            </div>
            <div className='hidden_picture_wrapper'>
                <HiddenPicture
                    name='план этажа'
                    plan={props.plan}
                    nameFloor={props.nameFloor}
                />
            </div>
        </div>
    )
}

export default GoFloorComponent

