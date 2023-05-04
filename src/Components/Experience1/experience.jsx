import React from 'react';
import Steps from './steps';
function experience() {
  return (
    <div className='flex justify-center mt-[130px]'>
      <div className=' w-[1024px] md:flex-col md:pl-0 md:pr-0 pl-[16px] pr-[16px] '>
        <h1 className='text-red-600 text-base font-bold'>EXPERIENCE</h1>
        <div className='md:flex'>
          <div className='md:w-[70%] md:flex-col'>
            <h1 className='text-5xl font-semibold'>
              Web applications for
              <br /> every stage of growth
            </h1>
            <p className='text-2xl font-semibold mt-10 '>
              We adjust our work to each business & commit
              <br /> to delivering quality code and stable applications.
            </p>

            <p className='text-base font-medium mt-10 '>
              In all our previous collaborations, flexibility has been the
              fundamental value that <br />
              helped maintain solid partnerships, achieving the agreed goals and
              deadlines. In
              <br /> other words, we want to inspire trust and reliability, as
              every project is the
              <br /> mirror of each of us and our services.
            </p>
            <button className='bg-secondary-color font-bold text-black rounded-3xl h-[50px] pl-[25px] pr-[25px] shadow-xl w-max whitespace-nowrap mt-[30px] mb-[80px] md:mb-[180px]'>
              Start working with us
            </button>
          </div>
          <div className='md:w-[30%] md:flex-col md:mt-0 mt-[25px]'>
            <Steps title='Startups' bottomLine={true} />
            <Steps
              title='Small & midsize
businesses'
              bottomLine={true}
            />
            <Steps
              title='
Enterprise'
              bottomLine={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default experience;
