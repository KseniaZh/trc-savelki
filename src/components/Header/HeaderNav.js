import React from 'react';

function HeaderNav(props) {


    return (
            
            <div className={props.classname}>

                    <a href="#project" >
                       О проекте
                    </a>          

                    <a href="#goFloor" >
                        По этажам
                    </a>

                    <a href="#location" >
                        Схема проезда
                    </a>

                    <a href="#contacts" >
                        Контакты
                    </a>
            </div>
    )
}

export default HeaderNav

