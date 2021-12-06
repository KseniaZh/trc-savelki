import React from 'react';
import ButtonLink from '../../UI/Buttons/ButtonLink';



function NavigationElement(props) {

    return (

        <div className='navigation_element'>

            {
                props.stateNavigation.map((item, index) => {
                    return <ButtonLink
                                classname=''
                                key={index}
                                to={`/${item.id}`}
                                name={item.nameButton}
                            />
                })
            }

        </div>
     )
}

export default NavigationElement
