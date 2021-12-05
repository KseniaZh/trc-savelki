import React from 'react';
import map from '../../img/map.png';



function Position(props) {



    return (
        <div className='about_component'>
            <div className='about_component__header'>
                <h2>в радиусе 500м (5-ти минутная пешая доступность) расположены:</h2>
            </div>
            <div className='about_component__img img_map'>
                <img src={map} alt="5-ти минутная пешеходная доступность от ТРЦ Савёлки" />
            </div>
        </div>
    )
}

export default Position

