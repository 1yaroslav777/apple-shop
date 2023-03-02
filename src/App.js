import React from 'react';

import { Route, Routes } from 'react-router-dom';
import FullItem from './components/FullItem/FullItem';

import Header from './components/Header/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div className="block">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/items/:id" element={<FullItem />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
