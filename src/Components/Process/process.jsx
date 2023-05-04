import React from 'react';
import Ripple from './ripple';
// import './style.scss';
import { items } from './constants';
function process() {
  return (
    <div className='flex justify-center mt-[130px] scroll-mt-28' id='process'>
      <div className=' w-[1024px]  md:pl-0 md:pr-0 pl-[27px] pr-[16px]  md:flex flex-wrap'>
        {items.map((item) => (
          <div className=' flex w-[33%] mt-[22px]'>
            <div className=' flex'>
              <Ripple />
            </div>
            <div className='md:w-[90%] md:flex flex-col'>
              <h1 className=' text-2xl font-bold whitespace-nowrap'>
                {item.title}
              </h1>
              <p className='leading-7 mt-8'>{item.Des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default process;
