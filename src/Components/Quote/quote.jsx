import React from 'react';

function quote() {
  return (
    <div className='flex justify-center mt-[130px]'>
      <div className=' w-[1024px]  md:pl-0 md:pr-0 pl-[27px] pr-[16px]  md:flex flex-col'>
        <h1 className='text-5xl font-bold'>Why should you work with us?</h1>
        <p className='text-2xl font-semibold mt-10 border-solid  border-l-4 border-sky-700 pl-[12px] text-sky-700'>
          “We know how important it is to kick-start your idea and move fast.
          <br />
          And being successful it's not always about technology. It's about the
          people you
          <br /> work with as well.”
        </p>
        <h2 className='text-base pl-[12px] mt-[10px] '>
          Nicu Mardari, Co-Founder & CEO
        </h2>
      </div>
    </div>
  );
}

export default quote;
