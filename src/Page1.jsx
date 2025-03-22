import React from 'react'
import { useState } from 'react'
import Header from './Header.jsx';
import Menu from './Menu.jsx';
import Footer from './Footer.jsx';
import Header2 from './Header2.jsx';

function Page1() {
  const [stay, setStay] = useState(true);

  return (
    <>
      <div className='divide-y-2 divide-stone-300 max-w-screen'>
        <Header stay={stay} setStay={setStay}></Header>
        <Header2 />
        <Menu />
        <Footer />
      </div>
    </>
  )
}

export default Page1
