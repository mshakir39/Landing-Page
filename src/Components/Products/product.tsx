import Image from 'next/image';
import React from 'react';

function product({ title }) {
  return (
    <div className='flex bg-[#e5e5e5] py-[10px] justify-center items-center w-fit px-5 rounded-full mt-2 mr-2 h-fit'>
      <Image src='/project.png' alt='' width='20' height='20' />
      <span className='pl-3 text-[#567786] text-xs'>{title}</span>
    </div>
  );
}

export default product;
