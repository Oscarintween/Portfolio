import React from 'react';
import { Link } from 'react-scroll';

// import my image
import Oscar from '../assets/img/oscar.png';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[1rem]'>
              Hey, I'm Oscar! 
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I Design & Build <br /> Websites .
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              FullStack web developer.
            </p>
            <Link
                to='footer'
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
            >
              <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
                Follow Me
              </button>
            </Link>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img src={Oscar} alt='oscar' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
