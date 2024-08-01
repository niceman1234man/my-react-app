import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>sign up to our Newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type="email" className='p-2 flex w-full text-black rounded-md ' name="email" id="email" placeholder='Enter Email' />
                    <button className='bg-[#00df9a] w-[200px] rounded-full font-medium my-6 py-2 ml-4 mx-auto text-black'>Notify Me</button>
              </div>
                    <p>we care about the protectio of your data.Read Our <span className='text-[#00df9a]'>Privacy policy</span></p>

            </div>
        </div>
    </div>
  )
}

export default Newsletter