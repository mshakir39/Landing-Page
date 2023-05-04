import React from 'react';
import NavBar from '../src/Components/Navbar/navBar';
import Footer from '../src/Components/Footer/footer';
import Contact from '../src/Components/Contact/contact';
import { BiUserCircle } from 'react-icons/bi';
import Image from 'next/image';

function blog() {
  return (
    <>
      <NavBar />
      <div className='flex flex-col '>
        <div className='h-fit bg-primary-color font-bold    pt-[100px]  flex flex-col  lg:items-center md:items-center pl-[27px] pr-[16px]'>
          <div>
            <div className=' md:mr-[78px] flex flex-col'>
              <div className='text-white mb-2 flex items-center'>
                <BiUserCircle
                  className='mr-2'
                  style={{ color: '#cd853f', fontSize: '35px' }}
                />{' '}
                Alexandra Claudia Taloș - 2 min read
              </div>
              <h1 className='text-5xl text-white pb-[50px]'>
                Not just young and restless. Passionate and
                <br /> striving for success
              </h1>
              <span className='text-primary-light-color'>
                In the business environment, staff is the most valuable tool and
                their well-being can ensure the success of your
                <br /> company. We are proud to have a young, motivated team,
                with vision ..
              </span>
              <span className='text-primary-light-color'></span>
              <button className='bg-secondary-color text-white rounded-3xl h-[50px] pl-[25px] pr-[25px] shadow-xl w-max whitespace-nowrap mt-[30px] mb-[80px] md:mb-[180px]'>
                <a
                  href='https://medium.com/7code/not-just-young-and-restless-passionate-and-striving-for-success-ed4ada380959'
                  target='_blank'
                >
                  Read the entire article
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-[130px] mb-[130px] scroll-mt-28'>
          <div className=' w-[1024px]  md:pl-0 md:pr-0 pl-[27px] pr-[16px]  '>
            <div className='flex-c0l'>
              <h1 className='text-5xl  pb-[50px]'>Recent articles</h1>
              <div className='md:flex'>
                <div className='md:w-[33%]'>
                  <div className='flex-col'>
                    <Image src='/2022.jpg' alt='' height='300' width='300' />
                    <div className=' mb-2 mt-2  flex items-center'>
                      <BiUserCircle
                        className='mr-2'
                        style={{ color: '#cd853f', fontSize: '35px' }}
                      />{' '}
                      Alexandra Claudia Taloș - 3 min read
                    </div>
                    <h1 className='text-2xl'>
                      <a
                        href='https://medium.com/7code/first-quarter-of-2022-is-gone-what-now-92a041e7c63f'
                        target='_blank'
                      >
                        {' '}
                        First quarter of 2022 is gone.
                      </a>
                      <br />
                      What Now?
                    </h1>
                  </div>
                </div>
                <div className='md:w-[33%]'>
                  {' '}
                  <div className='flex-col'>
                    <Image src='/team.jpg' alt='' height='300' width='300' />
                    <div className=' mb-2 mt-2  flex items-center'>
                      <BiUserCircle
                        className='mr-2'
                        style={{ color: '#cd853f', fontSize: '35px' }}
                      />{' '}
                      Alexandra Claudia Taloș - 2 min read
                    </div>
                    <h1 className='text-2xl'>
                      <a
                        href='https://medium.com/7code/not-just-young-and-restless-passionate-and-striving-for-success-ed4ada380959'
                        target='_blank'
                      >
                        {' '}
                        Not just young and restless.
                        <br />
                        Passionate and striving for <br />
                        success
                      </a>
                    </h1>
                  </div>
                </div>
                <div className='md:w-[33%]'>
                  {' '}
                  <div className='flex-col'>
                    <Image src='/ocr.jpg' alt='' height='300' width='300' />
                    <div className=' mb-2 mt-2 flex items-center'>
                      <BiUserCircle
                        className='mr-2'
                        style={{ color: '#cd853f', fontSize: '35px' }}
                      />{' '}
                      Nicu Mardari - 4 min read
                    </div>
                    <h1 className='text-2xl'>
                      <a
                        href='https://medium.com/7code/line-segmentation-for-googles-ocr-90bb2f6c0d41'
                        target='_blank'
                      >
                        {' '}
                        Line Segmentation for
                        <br />
                        Google's OCR system
                      </a>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default blog;
