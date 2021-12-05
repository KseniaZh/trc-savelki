import React from 'react';
import Media from 'react-media';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Сontacts(props) {
    

    return (
        <div className='contacts__wrapper'>
            <div className='contacts__address__wrapper'>
                <div className='contacts__address'>
                    <div className='contacts__address__address'>Зеленоград, Савелкинский проезд, дом 2</div>
                    <a href="tel:+79686263515" className='contacts__tel ' >
                        <span><FontAwesomeIcon icon={faPhoneAlt} /> +7 968 626-35-15 </span>
                    </a>

                    < a href = "mailto:Alsidka@mail.ru" className = 'contacts__tel' >
                        <span><FontAwesomeIcon icon={faEnvelope} /> написать письмо </span>
                    </a >
                </div>
                <div className='contacts__map'>
                    <Media queries={{
                        min: "(max-width: 370px)",
                        tel: "(max-width: 500px)",
                        small: "(max-width: 699px)",
                        medium: "(min-width: 700px) and (max-width: 900px)",
                        large: "(min-width: 901px) and (max-width: 1199px)",
                        big: "(min-width : 1200px) "
                    }}>
                        {matches => (
                            <>
                                {matches.min && <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2c7a6a097e4e8e04055f56b36fd2e0b3d89d12603a18e75cae34cc6287bf0545&amp;source=constructor" width="400" height="350" frameborder="0"></iframe>}
                                {matches.tel && <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2c7a6a097e4e8e04055f56b36fd2e0b3d89d12603a18e75cae34cc6287bf0545&amp;source=constructor" width="550" height="350" frameborder="0"></iframe>}
                                {matches.small && <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2c7a6a097e4e8e04055f56b36fd2e0b3d89d12603a18e75cae34cc6287bf0545&amp;source=constructor" width="750" height="450" frameborder="0"></iframe>}
                                {matches.medium && <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2c7a6a097e4e8e04055f56b36fd2e0b3d89d12603a18e75cae34cc6287bf0545&amp;source=constructor" width="990" height="500" frameborder="0"></iframe>}
                                {matches.large && <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2c7a6a097e4e8e04055f56b36fd2e0b3d89d12603a18e75cae34cc6287bf0545&amp;source=constructor" width="1200" height="500" frameborder="0"></iframe>}
                                {matches.big && <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2c7a6a097e4e8e04055f56b36fd2e0b3d89d12603a18e75cae34cc6287bf0545&amp;source=constructor" width="1600" height="500" frameborder="0"></iframe>}
                            </>
                        )}
                    </Media>
                    
                </div>
            </div>
          
        </div>
    )
}

export default Сontacts

//Alsidka@mail.ru 


    //< a href = "mailto:Alsidka@mail.ru" className = 'contacts__tel' >
    //    <span><FontAwesomeIcon icon={faEnvelope} /> написать письмо </span>
    //</a >



    //< div className = 'contacts__forma' >
    //            <h2>Форма обратной связи на PHP</h2>
      
    //            <form action={funsMail} method="post">

    //                <fieldset>

    //                    <legend>Оставьте сообщение:</legend>
    //                    Ваше имя:

    //                    <input type="text" name="name"/>

    //                    E-mail:
    //                    <input type="text" name="email"/>
    //                    Номер телефона:
    //                    <input type="text" name="phone"/>
    //                    Сообщение:
    //                        <textarea rows="10" cols="45" name="message"></textarea>
                                    
    //                    <input type="submit" value="Отправить сообщение"/>
    //                </fieldset>
    //            </form>
    //        </div >