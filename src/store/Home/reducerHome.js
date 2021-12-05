import {
    SAVE_SCROLL_TOP,
} from "./types";

const initialState = {
    scrollTop: '0px',

};



const stateHome = (state = initialState, action) => {

    switch (action.type) {

        case SAVE_SCROLL_TOP:
            return {
                ...state,
                scrollTop: action.payload
            }

        default:
            return state;
    }
}
export default stateHome