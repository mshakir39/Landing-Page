import { useState } from 'react';
import { navItems } from '../../../Constants/navItems';
import Link from 'next/link';
export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className='w-full bg-primary-color shadow  sticky top-0 z-10'>
      <div className='justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 h-auto md:h-[100px] lg:h-[100px]'>
        <div>
          <div className='flex items-center justify-between py-3 md:py-5 md:block '>
            <h2 className='text-2xl font-bold text-red-400 md:pr-[50px]'>
              <Link href='/'>LOGO</Link>
            </h2>

            <div className='md:hidden '>
              <button
                className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 text-white'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 text-white'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className='whitespace-nowrap'>
          <div
            className={`  pb-3 mt-8 md:flex md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 pr-[22px]'>
              {navItems.map((item, index) => (
                <li className='text-white font-semibold' key={index}>
                  <Link
                    href={item.goto}
                    className=' text-base '
                    scroll={
                      item.goto === '/careers' || item.goto === '/blog'
                        ? true
                        : false
                    }
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className='bg-secondary-color text-white rounded-3xl h-[40px] pl-[25px] pr-[25px] shadow-xl w-max whitespace-nowrap
            '
            >
              Start working with us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
