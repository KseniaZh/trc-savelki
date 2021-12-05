import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";


function Footer(props) {


    return (

        <div className='footer_wrapper'>
            <div className='footer'>
                
            </div>
            <div className='footer_main'>
                <div className='footer__company_data'>
                    <div className='footer__company_name'>
                        <span>Торговый центр "ТРЦ САВЁЛКИ"</span>
                        <span>Зеленоград, Савелкинский проезд, дом 2, </span>
                        <a href="tel:+79686263515" className='footer__company_tel' >
                            <span><FontAwesomeIcon icon={faPhoneAlt} /> +7 968 626-35-15 </span>
                        </a>
                    </div>
                    
                    <div className='footer__author_site'></div>
                </div>
                
            </div>
        </div>
             
    )
}

export default Footer

//сайт создан в мастреской "Ксюшенька-душенька"