import React from 'react';

function services() {
  return (
    <div
      className='flex justify-center mt-[130px] pt-[130px] pb-[130px] bg-primary-color scroll-mt-24'
      id='services'
    >
      <div className=' w-[1024px] md:flex-col md:pl-0 md:pr-0 pl-[16px] pr-[16px] '>
        <h1 className='text-red-600 text-base font-bold'>OUR SERVICES</h1>
        <div className='md:flex items-baseline'>
          <div className='md:w-[45%] '>
            <div className='text-4xl font-semibold text-white'>
              Our development technology stack
            </div>
          </div>
          <div className='md:w-[55%] md:flex flex-wrap md:mt-0 mt-[25px]'>
            <p className='text-base font-medium text-primary-light-color'>
              We use the entire range of designing, implementing, testing,
              integrating, deploying and supporting custom systems and
              frameworks, always paying attention to the latest industry trends.
            </p>
          </div>
        </div>
        <div
          className='md:flex lg:flex  justify-center '
          style={{ textAlign: '-webkit-center' }}
        >
          <div className='  md:w-[33%] mt-[22px] text-center'>
            <h1 className='text-3xl font-bold text-white mt-9 '>
              Web Development
            </h1>
            <h2 className='text-base font-semibold mt-[32px] text-primary-light-color whitespace-nowrap'>
              FRONT END TECHNOLOGIES
            </h2>
            <p className='text-base text-white mt-[16px]'>Javascript:</p>
            <p className='text-base text-white mt-[16px]'>React</p>
            <p className='text-base text-white mt-[16px]'>Vue</p>
            <p className='text-base text-white mt-[16px]'>Angular</p>

            <h2 className='text-base font-semibold mt-[32px] text-primary-light-color whitespace-nowrap'>
              BACK-END TECHNOLOGIES
            </h2>
            <p className='text-base text-white mt-[16px]'>
              Javascript: Node, Nest.js
            </p>
            <p className='text-base text-white mt-[16px]'>
              PHP: Laravel, Symfony
            </p>
            <p className='text-base text-white mt-[16px]'>Phyton: Django</p>
            <p className='text-base text-white mt-[16px]'>Go</p>
          </div>
          <div className=' md:w-[33%] mt-[22px] text-center'>
            <h1 className='text-3xl font-bold text-white mt-9 '>
              Mobile Development
            </h1>
            <h2 className='text-base font-semibold mt-[32px] text-primary-light-color whitespace-nowrap'>
              FRONT END TECHNOLOGIES
            </h2>
            <p className='text-base text-white mt-[16px]'>React Native</p>
            <p className='text-base text-white mt-[16px]'>-</p>
            <p className='text-base text-white mt-[16px]'>-</p>
            <p className='text-base text-white mt-[16px]'>-</p>

            <h2 className='text-base font-semibold mt-[32px] text-primary-light-color whitespace-nowrap'>
              BACK-END TECHNOLOGIES
            </h2>
            <p className='text-base text-white mt-[16px]'>
              Javascript: Node, Nest.js
            </p>
            <p className='text-base text-white mt-[16px]'>
              PHP: Laravel, Symfony
            </p>
            <p className='text-base text-white mt-[16px]'>Phyton: Django</p>
            <p className='text-base text-white mt-[16px]'>Go</p>
          </div>
          <div className=' md:w-[33%] mt-[22px] text-center'>
            <h1 className='text-3xl font-bold text-white mt-9 '>
              Cloud Infrastructure
            </h1>
            <h2 className='text-base font-semibold mt-[32px] text-primary-light-color'>
              CLOUD DEV-OPS
            </h2>
            <p className='text-base text-white mt-[16px]'>AWS</p>
            <p className='text-base text-white mt-[16px]'>Docker</p>
            <p className='text-base text-white mt-[16px]'>Heroku</p>
            <p className='text-base text-white mt-[16px]'>Kubernetes</p>

            <h2 className='text-base font-semibold mt-[32px] text-primary-light-color whitespace-nowrap'>
              BACK-END TECHNOLOGIES
            </h2>
            <p className='text-base text-white mt-[16px]'>MySQL</p>
            <p className='text-base text-white mt-[16px]'>PostgresSQL</p>
            <p className='text-base text-white mt-[16px]'>MongoDB</p>
            <p className='text-base text-white mt-[16px]'>-</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default services;
