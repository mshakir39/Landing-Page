import React from 'react';
import { FaUserTie } from 'react-icons/fa';
function testimonial() {
  return (
    <div
      className='flex justify-center mt-[130px] scroll-mt-28 pb-[130px]'
      id='testimonials'
    >
      <div className=' w-[1024px] flex flex-col md:pl-0 md:pr-0 pl-[16px] pr-[16px] justify-center items-center '>
        <h1 className='text-red-600 text-base font-bold'>TESTIMONIALS</h1>
        <h1 className='text-5xl font-semibold text-center'>
          Why our clients love
          <br />
          working with us
        </h1>
        <div className='flex '>
          <p className='text-base font-medium mt-8 text-center text-[#8a9494] md:w-[50%] md:pl-[80px] md:pr-[80px]'>
            "I will continue to collaborate with the 7Code team because these
            young people have earned my trust through their desire for evolution
            and affirmation. They greeted me with practical suggestions and
            seriousness in the carried out projects."
          </p>
          <p className='text-base font-medium mt-8 text-center text-[#8a9494] md:w-[50%] md:pl-[80px] md:first-letter:pr-[80px]'>
            “The 7Code team has been a great partner to the Synergo Group. They
            are knowledgeable, creative and they adapt easily. Highly
            recommended.”
          </p>
        </div>

        <div className='flex w-full justify-around mt-10 '>
          <div className='flex flex-col justify-center items-center'>
            <FaUserTie style={{ fontSize: '40px' }} />
            <h1>xyz</h1>
            <span className='text-center'>
              Founder of Informal School of IT
            </span>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <FaUserTie style={{ fontSize: '40px' }} />
            <h1>xyz</h1>
            <span className='text-center'>
              Founder of Informal School of IT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default testimonial;
