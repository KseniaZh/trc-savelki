import React, { useEffect, useRef, useState } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import SectionHello from '../Sections/SectionHello';
import Position from '../Sections/Position';
import AboutUs from '../Sections/AboutUs';
import GoFloor from '../Sections/GoFloor';
import Contacts from '../Sections/Contacts';
import Footer from '../Sections/Footer';
import { saveScrollTop } from '../../store/Home/actionsHome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Home = (props)=>{

    const refHome = useRef(null);
   
    const dispatch = useDispatch();
    const buttonGoElementRef = React.createRef();
    const stateHome = useSelector(state => state.stateHome);
    const stateFloor = useSelector(state => state.stateFloor);

    const stateFloorLeft = [stateFloor[0], stateFloor[1], stateFloor[2]];
    const stateFloorRight = [stateFloor[3], stateFloor[4], stateFloor[5]];

    const [flagButtonScroll, setFlagButtonScroll] = useState(false);
    const [flagButtonTel, setFlagButtonTel] = useState(false);

    const hendlerScrollDownload = () => {

        if (refHome.current.scrollHeight / 1.3 - (refHome.current.scrollTop + window.innerHeight) < 3000) {
            setFlagButtonScroll(true);// первично кнопки не видно. появляется при прокрутке
            setFlagButtonTel(true);// первично кнопки не видно. появляется при прокрутке
        }else{
            setFlagButtonScroll(false);// прячется при прокрутке
            setFlagButtonTel(false);// прячется при прокрутке
        }
    }
    const hendlerScrollDownUp = () => {

        refHome.current.scrollTo(0, 0);
        let flag = () => (
            setFlagButtonScroll(false)
        )
        setTimeout(flag, 100);
    }

    const hendlerSaveScrollTop = () => {
  
        dispatch(saveScrollTop(refHome.current.scrollTop));
    }

    useEffect(() => {
        refHome.current.scrollTo(0, stateHome.scrollTop);
        refHome.current.addEventListener('scroll', hendlerScrollDownload);
        
        return () => {
          //  refHome.current.removeEventListener('scroll', hendlerScrollDownload);
        }

    }, [])


    return (
        <>
         
            <div
                ref={refHome}
                className='homeWrapper'
                onScroll={() => console.log('refHome.current.scrollTop', refHome.current.scrollTop)}
            >
                <a name="header"></a>
                <SectionHello />

                <a name="project" ></a>

                {
                    flagButtonScroll ?
                        <FontAwesomeIcon
                            icon={faChevronUp}
                            onClick={hendlerScrollDownUp}
                            className='buttonScrollDownUp'
                        />
                        : null
                }
                {
                    flagButtonTel ?
                        <a href="tel:+79686263515" className='button__tel ' >
                            <FontAwesomeIcon icon={faPhone} />
                        </a>
                        :null
                }
            
                <AboutUs />

                <a name="plan"></a>
                <Position />

                <a name="goFloor"></a>
                <div className='home__title'>
                    <h1>Прогулка по этажам "ТРЦ САВЁЛКИ"</h1>
                </div>

                <GoFloor
                    ref={buttonGoElementRef}
                    onclick={hendlerSaveScrollTop}
                    stateFloorLeft={stateFloorLeft}
                    stateFloorRight={stateFloorRight}
                />

                <a name="contacts"></a>
                <div className='home__title' >
                    <h1>Наши контакты:</h1>
                </div>

                <Contacts />

                <a name="location"></a>

                <Footer />
            </div>
         
            </>
    )
}

export default connect()(Home)

    //< div className = 'home__title' >
    //    <h1 >О торговом центре "ТРЦ САВЁЛКИ"</h1>
    //</div >