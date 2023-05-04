import React from 'react';
import Product from './product';
import { items } from './constants';
function process() {
  return (
    <div className='flex justify-center mt-[130px]'>
      <div className=' w-[1024px] md:flex-col md:pl-0 md:pr-0 pl-[27px] pr-[16px] '>
        <h1 className='text-red-600 text-base font-bold'>HOW WE WORK</h1>
        <div className='md:flex'>
          <div className='w-[45%] '>
            <h1 className='text-5xl font-semibold'>
              Building successful digital products
            </h1>
          </div>
          <div className='w-[55%] md:flex flex-wrap md:mt-0 mt-[25px]'>
            {items.map((item) => (
              <Product title={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default process;
