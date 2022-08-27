import React from 'react';

// import logo
import{socialMedia} from '../data'

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12' id='footer'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div>
          <ul className='flex space-x-8 capitalize text-[15px]'>
        {socialMedia.map((item, idx) => {
          return (
            <li
              className='text-white hover:text-accent cursor-pointer'
              key={idx}
            >
              <a className='rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[5rem]' href={item.link}>
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
          </div>
          <p className='text-paragraph opacity-80 text-[15px]'>
            &copy; 2022 Oscar Ramos Ortiz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
