import { combineReducers } from "redux";


import stateFloor from './Floor/reducerFloor';
import stateCarousel from './Carousel/reducerCarousel';
import stateHome from './Home/reducerHome';


const rootReducer = combineReducers({
    stateFloor,
    stateCarousel,
    stateHome,
})

export default rootReducer