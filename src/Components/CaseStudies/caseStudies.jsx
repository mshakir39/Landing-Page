import React from 'react';
import { items } from './constants';
import Product from '../Products/product';
import Image from 'next/image';
function caseStudies() {
  return (
    <div
      className='flex justify-center mt-[130px] scroll-mt-28'
      id='caseStudies'
    >
      <div className=' w-[1024px] md:flex-col md:pl-0 md:pr-0 pl-[27px] pr-[16px] '>
        <h1 className='text-red-600 text-base font-bold'>CASE STUDIES</h1>
        <div className='md:flex'>
          <div className='md:w-[55%] '>
            <h1 className='text-5xl font-semibold'>
              Study case: Drum Bun mobile app
            </h1>
            <div className='flex justify-center'>
              <Image
                src='/carRental.png'
                alt=''
                height='647'
                width='300'
                className='w-auto h-[647px]'
              />
            </div>
          </div>
          <div className='md:w-[45%] md:mt-0 mt-[25px] md:pl-[30px]'>
            <h1 className='text-3xl font-bold'>Industry</h1>

            <div className=' md:flex flex-wrap'>
              {items.map((item) => (
                <Product title={item} />
              ))}
            </div>
            <h1 className='text-3xl font-bold mt-[30px]'>Services</h1>
            <p className='text-base font-medium'>
              React-Native, Node JS, Heroku
            </p>

            <h1 className='text-3xl font-bold mt-[30px]'>The product</h1>
            <p className='text-base font-medium'>
              Our client envision a mobile app that offers its users the
              possibility to verify and purchase car related services, based on
              the countries rules and regulations. Once the user created an
              account, he would be able to manage multiple vehicles, keep track
              of all individual services, with alerts management functionality
              and personal wallet included. Other important features were
              related to car documents OCR reader and easily purchasing services
              directly from the app.
            </p>
            <h1 className='text-3xl font-bold mt-[30px]'>Project context</h1>
            <p className='text-base font-medium'>
              The team allocated for the project had 1 back-end developer, 1
              full stack developer, 2 front-end developers, 1 manual tester and
              a UX designer.
              <br />
              <br />
              The modules developed were: onboarding screens, car modules,
              services modules, alert module, OCR service, profile module and
              payments methods module.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default caseStudies;
