import React from 'react';
import { Link } from 'react-scroll';

// import img
import Image from '../assets/img/myPics/oscar2.jpg'

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Oscar Ramos Ortiz
              </h2>
              <p className='mb-4 text-accent'>
                FullStack Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Enthusiastic and driven, I have a deep passion for software development, algorithms and problem solving.
                Through over a year of practice and many personal projects, I honed my skills as a programmer, developing a 
                certain versatility in using technoligies and coding languages. <br />
                <br />
                As I am mostly a self-learner, I can easily adapt to new things and am always ready to take on a new challange.
              </p>
            </div>
            <Link
                to='contact'
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
            >
              <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
