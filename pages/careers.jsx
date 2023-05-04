import React from 'react';
import NavBar from '../src/Components/Navbar/navBar';
import Footer from '../src/Components/Footer/footer';
import Contact from '../src/Components/Contact/contact';
function careers() {
  return (
    <>
      <NavBar />
      <div className='flex flex-col '>
        <div className='h-[400px] bg-primary-color font-bold    pt-[100px]  flex flex-col  lg:items-center md:items-center pl-[27px] pr-[16px]'>
          <div className='flex justify-center mt-10 scroll-mt-28' id='aboutUs1'>
            <div className=' w-[1024px] md:flex md:pl-0 md:pr-0 pl-[27px] pr-[16px] text-7xl text-white'>
              Careers
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-[130px] md:mt-0 '>
          <div className=' w-[1024px] flex flex-col md:pl-0 md:pr-0 pl-[16px] pr-[16px] justify-center items-center '>
            <h1 className='text-5xl font-semibold mt-10'>Work With Us</h1>

            <div className='md:flex flex-wrap  mt-10 justify-between'>
              <div className='md:w-[33%] bg-[#f0faf8] h-[320px] rounded-3xl  flex flex-col items-center mb-[40px]'>
                <h1 className='text-2xl font-bold mt-10'>Developer</h1>
                <div
                  className='text-base mt-10 text-center p-3 font-medium'
                  style={{ paddingLeft: '10px', paddingRight: '10px' }}
                >
                  We are Looking for several programmers with Node.js
                  valances.but if you haven't worked with Node.js so far,
                  experience with any Javascript framework is enough.Experience
                  with Typescript is an advantage.
                </div>
              </div>
              <div className='md:w-[33%] bg-[#f5f0fc] h-[320px] rounded-3xl  flex flex-col items-center mb-[40px]'>
                <h1 className='text-2xl font-bold mt-10'>Project Manager</h1>
                <h1
                  className='text-base mt-10 text-center font-medium'
                  style={{ paddingLeft: '10px', paddingRight: '10px' }}
                >
                  We develop iOT solutions and connect real world devices to
                  change the way consumers interract with businesses and
                  products.
                </h1>
              </div>
              <div className='md:w-[33%] bg-[#f5f0fc] h-[320px] rounded-3xl  flex flex-col items-center mb-[40px]'>
                <h1 className='text-2xl font-bold mt-10'>QA</h1>
                <h1
                  className='text-base mt-10 text-center  font-medium'
                  style={{ paddingLeft: '10px', paddingRight: '10px' }}
                >
                  We served all core business sectors, from a wide range or
                  industries: Smart Building, e-Learning, Insurance, Media &
                  entertainment, Retail, Healthcare, Travel and Transporation.
                </h1>
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

export default careers;
