import React from 'react';
import Image from 'next/image';

function aboutUs() {
  return (
    <div className='flex justify-center mt-[130px]'>
      <div className=' w-[1024px] md:flex md:pl-0 md:pr-0 pl-[27px] pr-[16px]'>
        <div className='flex-1'>
          <Image
            src='/team.jpg'
            alt=''
            width='480'
            height='400'
            className='h-[400px]'
          />
        </div>
        <div className='flex-1 flex-col md:mt-0 mt-4'>
          <h1 className='text-red-600 text-base font-bold'>ABOUT US</h1>
          <h2 className='text-5xl mb-4 font-semibold'>Meet the team</h2>
          <p>
            We are a young team that consists of middle and senior software
            developers. We have managed to build a community based on trust,
            meritocracy and reciprocity. Because we share the same values and
            ethical principles, we succeed to fulfill our duties with passion
            and dedication. In addition to the dose of seriousness required, we
            often enjoy jovial moments that allow us to get to know each other
            deeply.
            <br />
            <br />
            We appreciate each project because it is a chance to learn new
            skills. We want transparent relationships with our customers, but
            also long-term cooperation with our partners. We accept and embrace
            the differences because it gives us new possibilities and taking
            risks is what makes us not just young and restless, but passionate
            and striving for success!
          </p>
        </div>
      </div>
    </div>
  );
}

export default aboutUs;
