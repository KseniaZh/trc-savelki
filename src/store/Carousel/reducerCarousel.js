import {
    SAVE_NUMBER_MAIN_FOTO,
    SAVE_ARR_FOTO,
} from "./types";

const initialState = {
    numberMainFoto: 0,
    arrFotos: [''],
};



const stateCarousel = (state = initialState, action) => {

    switch (action.type) {

        case SAVE_NUMBER_MAIN_FOTO:
            return {
                ...state,
                numberMainFoto: action.payload
            }
        case SAVE_ARR_FOTO:
            return  action.payload

        default:
            return state;
    }
}
export default stateCarousel