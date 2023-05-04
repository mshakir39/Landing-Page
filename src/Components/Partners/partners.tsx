import React from 'react';
import Image from 'next/image';
function partners() {
  return (
    <div className='flex justify-center lg:h-[250px] md:h-[250px] '>
      <div className='h-auto md:mt-0 mt-8 w-[1024px] flex flex-col justify-center items-center text-2xl font-semibold'>
        <h1>Clients & Partners</h1>
        <div className='relative md:flex justify-around  pt-8'>
          <Image
            src='/medical.png'
            alt=''
            width='64'
            height='64'
            className='mx-16'
          />
          <Image
            src='/coffee.png'
            alt=''
            width='64'
            height='64'
            className='mx-16'
          />
          <Image
            src='/medical.png'
            alt=''
            width='64'
            height='64'
            className='mx-16'
          />
          <Image
            src='/coffee.png'
            alt=''
            width='64'
            height='64'
            className='mx-16'
          />
          <Image
            src='/medical.png'
            alt=''
            width='64'
            height='64'
            className='mx-16'
          />
        </div>
      </div>
    </div>
  );
}

export default partners;
