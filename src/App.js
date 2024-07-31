// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movieslist from './components/Movieslist';
import LatestMovies from './components/LatestMovies';
import Events from './components/Events';
import Upcoming from './components/Upcoming';
import Bookings from './components/Bookings';
import Trailers from './components/Trailers';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Movieslist />} />
                <Route path="/LatestMovies" element={<LatestMovies />} />
                <Route path="/Trailers" element={<Trailers />} />
                <Route path="/Upcoming" element={<Upcoming/>}/>
                <Route path="/Events" element={<Events />} />
                <Route path="/Bookings/:id" element={<Bookings />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
