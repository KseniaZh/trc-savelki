import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const Navigation = () => {

    const pages = [
        {
            to: '/unique',
            name: 'Уникальная',
            classname: 'Nav_header__unique',
            icon: faChevronUp,
        },
        {
            to: '/viewed',
            name: 'Просмотрено',
            classname: 'Nav_header__button',
            icon: faChevronUp ,
        },
        {
            to: '/liked',
            name: 'Избранное',
            classname: 'Nav_header__button',
            icon: faChevronUp,
        },
        {
            to: '/basket',
            name: 'Корзина',
            classname: 'Nav_header__button',
            icon: faChevronUp,
        },
        {
            to: '/contacts',
            name: 'Контакты',
            classname: 'Nav_header__contacts',
            icon: faChevronUp,
        },
        
    ];

    const widthButton = 90 / (pages.length);

    return (
        <header className='Nav_header'>
            <Link to='/' className='Nav_header__logo' >LOGO</Link>
            <div className='Nav_header__title_nav'>
                <div className='Nav_header__title'>Удивительные интерьерные игрушки</div>
                <nav>

                    {
                        pages.map((page, index) =>
                            <Link
                                to={page.to}
                                className={page.classname}
                                key={index}
                                style={{ width: `${widthButton}%` }}
                            >
                                <FontAwesomeIcon
                                    icon={page.icon}
                                    className='Nav_header__button_icon'
                                />
                                <div className='Nav_header__button_name'>
                                    {page.name}
                                </div>
                            </Link>
                    )
                }
                </nav>
            </div>
          

        </header>
    )
}
export default Navigation
