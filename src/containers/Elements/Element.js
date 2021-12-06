import React from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../UI/Fotos/Logo';
import FotoButton from '../../UI/Buttons/FotoButton';
import { saveNumberMainFoto } from '../../store/Carousel/actionsCarousel';


function Element(props) {

    const dispatch = useDispatch();
    const params = useParams();
    const elementId = Number(params.element);

    const stateFloor = useSelector(state => state.stateFloor);
    let element = {};

    stateFloor.map(obj => {
            if (obj.id === elementId) {
                element = obj;
            }
    })
    const numberMainFoto = useSelector(state => state.stateCarousel.numberMainFoto);

    const hendlerClickFotoButtom = (data) => {
        dispatch(saveNumberMainFoto(data));
    }

    return(
        <div className='element_wrapper' >

            <div className='header_wrapper'>

                <Logo />

                <div className="element_header__name">{element.nameFloor}</div>

                <a href="tel:+79686263515" className='section_hello_tel element_header__tel' >тел: +7 968 626-35-15 </a>

            </div>

            <div className='element_title'>
                <div>площадь {element.footage} м2.</div>
                <div> GLA {element.gla} м2.</div>
                <div>стоимость аренды {element.price} м2</div>
                < Link to='/' className='button_close_fixed' ><FontAwesomeIcon icon={faTimes} /></Link >
            </div>
  
            <div className='element_main_foto'>
                <img
                    src={element.fotos[numberMainFoto]}
                    alt={element.nameFloor}
                />
            </div>

            <div className='element_carousel'>
                {
                    element.fotos.map((item, index) => {
                            return <FotoButton
                                        key={index}
                                        classname='foto_buttom_carousel'
                                        onclick={hendlerClickFotoButtom}
                                        data={index}
                                        fotoButtom={item}
                                        nameFloor={`фото ${element.nameFloor} `}
                                    />
                    })
                } 
            </div>

 
        </div>
    )
}

export default connect()(Element)

