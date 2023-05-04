import React from 'react';
import { BsArrowDownShort } from 'react-icons/bs';
function steps({ title, bottomLine }) {
  return (
    <div className=' flex-col'>
      <div className='flex items-center mt-[7px]'>
        <div className='relative'>
          <div className='bg-primary-light-color w-[50px] h-[50px] rounded-2xl rotate-45'></div>
          <BsArrowDownShort
            className='absolute  text-5x1 top-[3%] left-[4%] text-sky-700'
            style={{ fontSize: '47px' }}
          />
        </div>

        <span className='text-2xl font-semibold pl-3'>{title}</span>
      </div>
      {bottomLine ? (
        <div className='h-[100px] border-solid  border-l-[6px] border-sky-700 ml-[22px] mt-[10px]'></div>
      ) : null}
    </div>
  );
}

export default steps;
