import React from 'react';

function experience() {
  return (
    <div className='flex justify-center mt-[130px] md:mt-0 '>
      <div className=' w-[1024px] flex flex-col md:pl-0 md:pr-0 pl-[16px] pr-[16px] justify-center items-center '>
        <h1 className='text-red-600 text-base font-bold'>EXPERIENCE</h1>
        <h1 className='text-5xl font-semibold'>Custom software development</h1>
        <p className='text-base font-medium mt-8 text-center'>
          Our team of software development engineers and product experts are
          ready to help and guide you along the way, over the full life-cycle of
          the product.
        </p>
        <div className='md:flex flex-wrap justify-evenly mt-10'>
          <div className='md:w-[40%] bg-[#f0faf8] h-[280px] rounded-3xl  flex flex-col items-center mb-[40px]'>
            <h1 className='text-2xl font-bold mt-10'>
              Custom software development
            </h1>
            <h1 className='text-base mt-10 text-center pl-[60px] pr-[60px] font-medium'>
              Our team of software development engineers and product experts are
              ready to help and guide you along the way, over the full
              life-cycle of the product.
            </h1>
          </div>
          <div className='md:w-[40%] bg-[#f5f0fc] h-[280px] rounded-3xl  flex flex-col items-center mb-[40px]'>
            <h1 className='text-2xl font-bold mt-10'>IoT solutions</h1>
            <h1 className='text-base mt-10 text-center pl-[60px] pr-[60px] font-medium'>
              We develop iOT solutions and connect real world devices to change
              the way consumers interract with businesses and products.
            </h1>
          </div>
          <div className='md:w-[40%] bg-[#f5f0fc] h-[280px] rounded-3xl  flex flex-col items-center mb-[40px]'>
            <h1 className='text-2xl font-bold mt-10'>Industry expertise</h1>
            <h1 className='text-base mt-10 text-center pl-[60px] pr-[60px] font-medium'>
              We served all core business sectors, from a wide range or
              industries: Smart Building, e-Learning, Insurance, Media &
              entertainment, Retail, Healthcare, Travel and Transporation.
            </h1>
          </div>
          <div className='md:w-[40%] bg-[#f0faf8] h-[280px] rounded-3xl  flex flex-col items-center mb-[40px]'>
            <h1 className='text-2xl font-bold mt-10'>Remote teams</h1>
            <h1 className='text-base mt-10 text-center pl-[60px] pr-[60px] font-medium'>
              We build on demand development teams to help you, by carefully
              understanding your requirements and your vision.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default experience;
