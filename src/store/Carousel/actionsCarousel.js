import {
    SAVE_NUMBER_MAIN_FOTO,
    SAVE_ARR_FOTO,
} from "./types";




export const saveArrFoto = (numberMainFoto, elementsStateFotos) => {
    //не используется
    //передумала убирать большую фотографию из общего массива

    let newArrFotos = [];
    elementsStateFotos.map((item, index) => {
        if (index !== numberMainFoto) {
            newArrFotos.push(item);
        }
    })
    let newState = {
        numberMainFoto: numberMainFoto,
        arrFotos: newArrFotos,
    }

    return {
        type: SAVE_ARR_FOTO,
        payload: newState
    }
}
export const saveNumberMainFoto = (numberMainFoto) => {

    return {
        type: SAVE_NUMBER_MAIN_FOTO,
        payload: numberMainFoto
    }
}
