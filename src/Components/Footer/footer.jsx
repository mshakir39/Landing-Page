import React from 'react';
import { FiInstagram, FiLinkedin, FiGithub, FiFacebook } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';

import Link from 'next/link';

function footer() {
  return (
    <div className='md:flex-col md:flex justify-center items-center bg-[#716ee5] '>
      <div className=' md:w-[1024px] md:flex  md:pl-0 md:pr-0 pl-[16px] pr-[16px] justify-between items-start mt-20'>
        <div className='md:w[55%] md:flex md:flex-col'>
          <h1 className='mb-[50px] text-white text-3xl font-bold pt-10'>
            LOGO
          </h1>
          <h2 className='text-white text-5xl font-bold'>
            The partner of your
            <br /> next digital product!
          </h2>
        </div>{' '}
        <div className='flex flex-col'>
          <div className='  md:flex  md:justify-evenly mt-10'>
            <div className='md:w-[50%] md:mr-32 md:text-center'>
              <h2 className='text-base font-semibold text-primary-light-color whitespace-nowrap'>
                COMPANY
              </h2>
              <p className='text-base text-white mt-[16px]'>
                <a href='#aboutUs1'>About us</a>
              </p>
              <p className='text-base text-white mt-[16px]'>
                <a href='#process'>Our process</a>
              </p>
              <p className='text-base text-white mt-[16px]'>
                {' '}
                <a href='#services'>Services</a>
              </p>
              <p className='text-base text-white mt-[16px] '>
                <a href='#caseStudies'>Study Cases</a>
              </p>
            </div>
            <div className='md:w-[50%] md:text-center'>
              {' '}
              <h2 className='text-base font-semibold text-primary-light-color whitespace-nowrap md:mt-0 mt-10'>
                CONTACT US
              </h2>
              <p className='text-base text-white mt-[16px]'>office@7code.ro</p>
              <p className='text-base text-white mt-[16px]'>+4 0774 542 081</p>
              <p className='text-base text-white mt-[16px]'>
                Cluj-Napoca, România
              </p>
              <p className='text-base text-white mt-[16px]'>
                {' '}
                <button className='bg-secondary-color text-white rounded-3xl h-[40px] pl-[25px] pr-[25px] shadow-xl w-max whitespace-nowrap'>
                  Start working with us
                </button>
              </p>
              <h2 className='text-base font-semibold text-primary-light-color whitespace-nowrap mt-10'></h2>
            </div>
          </div>
          <div className='md:flex items-start justify-between'>
            <div className='md:w-[50%]'>
              <h2 className='md:pl-3 text-base font-semibold text-primary-light-color whitespace-nowrap md:text-left  text-center md:mb-0 mb-[15px] '>
                FOLLOW US
              </h2>
            </div>
            <div className='md:w-[50%]'>
              <div className='flex md:justify-around justify-evenly'>
                <a href='#'>
                  <RiInstagramFill style={{ color: '#b720b0' }} />
                </a>
                <a href='#'>
                  <FaLinkedinIn style={{ color: '#0c0c69' }} />
                </a>
                <a href='#'>
                  <BsGithub />
                </a>
                <a href='#'>
                  <FaFacebookF style={{ color: '#0c0c69' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <span className='text-white mt-44'>
          © 2023 Company Name. All rights reserved
        </span>
      </div>
    </div>
  );
}

export default footer;
