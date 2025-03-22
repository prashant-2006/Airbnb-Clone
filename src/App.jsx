import React from 'react'
import { useState } from 'react'
import Header from './Header.jsx';
import Menu from './Menu.jsx';
import Footer from './Footer.jsx';
import Header2 from './Header2.jsx';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';

function App() {
  const [stay, setStay] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/room" element={<Page2 />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
