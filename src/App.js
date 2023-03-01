import './App.css';
import Home from './pages/Home/Home';
import Error from './pages/error/Error';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import Bookmark from './pages/bookmarked/Bookmark';
import Register from './pages/registered/Register';
import Seat from './pages/seatsAvailable/Seat';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventDetails from './pages/eventDetails/EventDetails';

import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'error/:errorCode?'} element={<Error />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/register" element={<Register />} />
          <Route path="/seat" element={<Seat />} />
          <Route path="/singlepost" element={<EventDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
