import React from 'react';
import panorama from '../../img/panorama.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function SectionHello(props) {


    return (
        <div className='section_hello__wrapper'>
            <img
                src={panorama}
                alt="панорама на ТРЦ Савёлки"
            />
 
            <div className='section_hello_1'>
                <div>Торговый центр "ТРЦ САВЁЛКИ"</div>
                <div>
                    Современное здание в самом центре Зеленограда
                </div>
                <div>
                    Учись, отдыхай, занимайся спортом и делай покупки в одном месте!
                </div>
                
            </div>
            <div className='section_hello_2'>
                <div> проводится реконструкция</div>

                <p>приглашаем к сотрудничеству</p>
            </div>
                        
            <a href="tel:+79686263515" className='section_hello_tel' >
                <span><FontAwesomeIcon icon={faPhoneAlt} /> +7 968 626-35-15 </span>
            </a>

            <a href="mailto:Alsidka@mail.ru" className= 'section_hello_tel hello_mail' >
                <span><FontAwesomeIcon icon={faEnvelope} /> направить письмо</span>
            </a >
        </div>
    )
}

export default SectionHello

