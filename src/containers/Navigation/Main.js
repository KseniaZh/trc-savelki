import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Element from '../Elements/Element';


export const Main = () => {

    return (
        <main className='main_wrapper'>
            <Routes>
                <Route exact path='/' element={<Home  />} />
                <Route exact path='/:element' element={<Element />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </main>
    )
}
