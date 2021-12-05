import {
    ADD_COMMENT,
} from "./types";


import plan_02 from '../../img/floor_-2/plan_02.jpg';

import plan_01 from '../../img/floor_-1/plan_01.jpg';


import plan_1 from '../../img/floor_1/plan_1.jpg';
import floor_1_1 from '../../img/floor_1/floor_1_1.jpg';
import floor_1_2 from '../../img/floor_1/floor_1_2.jpg';
import floor_1_3 from '../../img/floor_1/floor_1_3.jpg';

import plan_2 from '../../img/floor_2/plan_2.jpg';
import foto_2_0 from '../../img/about_4.jpg';


import plan_3 from '../../img/floor_3/plan_3.jpg';
import floor_3_1 from '../../img/floor_3/floor_3_1.jpg';
import floor_3_2 from '../../img/floor_3/floor_3_2.jpg';
import floor_3_3 from '../../img/floor_3/floor_3_3.jpg';

import plan_4 from '../../img/floor_4/plan_4.png';
import floor_4_1 from '../../img/floor_4/floor_4_1.jpg';
import floor_4_2 from '../../img/floor_4/floor_4_2.jpg';

import foto__0 from '../../img/about_3.jpg';

const initialState = [

        {
            id: 1,
            fotos: [floor_1_1, floor_1_2, floor_1_3, plan_1,],
            fotoButtom: floor_1_1,
            plan: plan_1,
            footage: '2 700 ',
            gla: '1 871,3',
            price: '2 500 ',
            nameFloor: '1 этаж',
            nameButton: '1',
        },
    {
            id:2,
            fotos: [foto_2_0, plan_2,],
            fotoButtom: foto_2_0,
            plan: plan_2,
            footage: '2 685',
            gla: '2 093.9',
            price: '2 000 ',
            nameFloor: '2 этаж',
            nameButton: '2',
        },
    {
            id: 3,
            fotos: [floor_3_1, floor_3_2, floor_3_3, plan_3,],
            fotoButtom: floor_3_1,
            plan: plan_3,
            footage: '2 685 ',
            gla: '2 020,4',
            price: '2 000 ',
            nameFloor: '3 этаж',
            nameButton: '3',
        },
    {
            id: 4,
            fotos: [floor_4_1, floor_4_2, plan_4,],
            fotoButtom: floor_4_1,
            plan: plan_4,
            footage: '2 117 ',
            gla: '852.5',
            price: '1 500 ',
            nameFloor: '4 этаж',
            nameButton: '4',
        },
    {
            id:5,
            fotos: [plan_01],
            fotoButtom: foto__0,
            plan: plan_01,
            footage: '2 610',
            gla: '2 173.8',
            price: 'по договоренности',
            nameFloor: '-1 этаж',
            nameButton: '-1',
        },
    {
            id: 6,
            fotos: [plan_02,],
            fotoButtom: foto__0,
            plan: plan_02,
            footage: '2 457',
            gla: '963.5',
            price: 'по договоренности',
            nameFloor: '-2 этаж',
            nameButton: '-2',
        },

    ];



const stateFloor = (state = initialState, action) => {

    switch (action.type) {

        case ADD_COMMENT:
            return action.payload


        default:
            return state;
    }
}
export default stateFloor