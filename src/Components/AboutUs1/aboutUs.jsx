import React from 'react';
import Image from 'next/image';

function aboutUs() {
  return (
    <div className='flex justify-center mt-10 scroll-mt-28' id='aboutUs1'>
      <div className=' w-[1024px] md:flex md:pl-0 md:pr-0 pl-[27px] pr-[16px]'>
        <div className='flex-1'>
          <Image
            src='/aboutUs.jpg'
            alt=''
            width='480'
            height='400'
            className='h-[400px]'
          />
        </div>
        <div className='flex-1 flex-col md:mt-0 mt-4'>
          <h1 className='text-red-600 text-base font-bold'>ABOUT US</h1>
          <h2 className='text-5xl mb-4 font-semibold'>
            We are a full service software company
          </h2>
          <p>
            With an expertise of 10 years in the industry and tens of projects
            delivered with success, we are the team that you can hire for
            professional web development.
            <br />
            <br /> Whether it’s a complex enterprise platform or a responsive
            web app, or maybe just a presentation website we have delivered
            consistent experiences to users across all platforms.
            <br />
            <br /> Our experience goes through areas from e-commerce product, to
            automation systems and IoT solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default aboutUs;
