import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Page/Home';
import Error from './Page/Error';

import './App.css';

const AppDOM = document.querySelector('#App');

if (AppDOM)
{
    createRoot(AppDOM).render(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='*' element={ <Error /> } />
            </Routes>
        </BrowserRouter>
    );
}
