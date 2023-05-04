import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
function contact() {
  return (
    <div className='flex justify-center  ' id='contact'>
      <div className=' w-full h-[1000px] md:flex-col md:pl-0 md:pr-0 pl-[27px] pr-[16px] bg-[url("/contact.jpg")] bg-no-repeat bg-cover'>
        <div className='flex justify-left mt-[130px] '>
          <div className=' w-[1024px] flex flex-col md:pl-0 md:pr-0 pl-[16px] pr-[16px] justify-center items-center '>
            <div className='flex flex-col align-center md:w-[520px] md:h-[700px] bg-[#c1c2c5] opacity-80 rounded-3xl pl-[37px] pr-[37px]'>
              <h1 className='text-5xl font-bold mt-10'>
                Get an estimate <br /> within 72 hours.
              </h1>
              <h1 className='text-base mt-10  text-center font-medium mb-10'>
                Send us a message describing shortly what kind of services do
                you need and we’ll get back to you.
              </h1>

              <Box
                component='form'
                sx={{
                  '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='outlined-basic'
                  label='Your Full Name'
                  variant='outlined'
                  required
                />
                <TextField
                  id='outlined-basic'
                  label='Your Email'
                  variant='outlined'
                  required
                />
                <TextareaAutosize
                  className='rounded-lg p-4 bg-transparent outline-0 '
                  aria-label='minimum height'
                  minRows={7}
                  placeholder='Your message here'
                  required
                  style={{
                    width: '-webkit-fill-available',
                    border: '1px solid rgb(140 140 140)',
                  }}
                />
                <div className='flex justify-center'>
                  <button className='bg-secondary-color text-white rounded-3xl h-[50px] pl-[25px] pr-[25px] shadow-xl w-max whitespace-nowrap'>
                    Send the message
                  </button>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
