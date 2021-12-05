import {
    SAVE_SCROLL_TOP,
} from "./types";


export const saveScrollTop = (data) => {

    return {
        type: SAVE_SCROLL_TOP,
        payload: data
    }
}
