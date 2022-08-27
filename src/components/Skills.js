import React from 'react';

// import skill data
import { skills } from '../data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
      <div className='flex flex-col items-center text-center'>
        <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content- relative before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
          My Skills
        </h2>
          <p className='mb-4 text-accent'>
            Technologies I have worked with
          </p>
      </div>
        <hr className='mb-8 opacity-5' />
      <div className='container mx-auto'>
        <div
          className='grid grid-cols-8 md:grid-flow-col'
        >
          {skills.map((skill, index) => {
            return (
              <div
                className='flex items-center justify-center'
                key={index}
              >
                <img className='lg:h-20' src={skill.image} alt='' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
