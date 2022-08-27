import React, { useEffect, useState } from 'react';
import '../index.css'

// import components
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile';
// import Logo from '../assets/img/oscar-ramos.jpg'

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* logo */}
        {/* <a href='#'>
          <img src={Logo} alt='logo' />
        </a> */}
        <h1 className='myName'>
          <span className='myInit'>O</span>scar <span className='myInit'>R</span>amos <span className='myInit'>O</span>rtiz
          </h1>
        {/* nav */}
        <div className='hidden lg:block'>
          <Nav />
        </div>
        {/* nav mobile*/}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
