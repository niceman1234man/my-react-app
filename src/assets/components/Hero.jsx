import React from 'react'
import { Typed } from 'react-typed'

function Hero() {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'> GROWING WITH DATA ANALYTICS </p>
        <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>Grow With Data</h1>
        <div>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold'>Fast, Flexible Financing for</p>
          {/* <Typed
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={130}
            loop
          /> */}
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>monitor your data analysis to increase revenue BTB,BTC & SASS platforms</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-2 mx-auto text-black'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero