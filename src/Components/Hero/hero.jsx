function hero() {
  return (
    <div className='h-fit bg-primary-color font-bold    pt-[100px]  flex flex-col  lg:items-center md:items-center pl-[27px] pr-[16px]'>
      <div>
        <div className='  md:pr-[320px] flex flex-col'>
          <h1 className='text-7xl text-white pb-[50px]'>
            The modern way to<br></br> build{' '}
            <span className='text-secondary-color'>digital products.</span>
          </h1>
          <span className='text-primary-light-color'>
            With an agile mindset in place, we aim to deliver the digital
            solutions
            <br /> that best fit your expectations.
            <br />
          </span>
          <span className='text-primary-light-color'>
            Come with an idea, get an MVP or a fully functional product.
          </span>
          <button className='bg-secondary-color text-white rounded-3xl h-[50px] pl-[25px] pr-[25px] shadow-xl w-max whitespace-nowrap mt-[30px] mb-[80px] md:mb-[180px]'>
            Start working with us
          </button>
        </div>
      </div>
    </div>
  );
}

export default hero;
