import React from 'react'
import single from '../img/single.png'
import double from '../img/double.png'
import triple from '../img/triple.png'


function Cards() {
  return (
    <div className='w-fll py-[10rem] px-4 bg-white'>
<div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
<div className=' w-full shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="Single" />
    <h2 className='text-2xl font-bold py-8 text-center'>Single User</h2>
    <p className='text-center font-bold tex-2xl'>$149</p>
    <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
        <p className='py-2 border-b mx-8 mt-8'>1 granted User</p>
        <p className='py-2 border-b mx-8 mt-8'>Send up to 2GB</p>
    </div>
    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-2 mx-auto text-black'>Start Trial</button>
     
</div>

<div className=' w-full shadow-xl flex flex-col my-4 md:my-0 bg-gray-100 rounded-lg hover:scale-105 duration-300'>
    <img className='w-20 mx-auto mt-[-3rem] bg-transparent ' src={double} alt="Double" />
    <h2 className='text-2xl font-bold py-8 text-center'>Single User</h2>
    <p className='text-center font-bold tex-2xl'>$149</p>
    <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
        <p className='py-2 border-b mx-8 mt-8'>1 granted User</p>
        <p className='py-2 border-b mx-8 mt-8'>Send up to 2GB</p>
    </div>
    <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-2 mx-auto bg-black'>Start Trial</button>
</div>
<div className=' w-full shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="Triple" />
    <h2 className='text-2xl font-bold py-8 text-center'>Single User</h2>
    <p className='text-center font-bold tex-2xl'>$149</p>
    <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
        <p className='py-2 border-b mx-8 mt-8'>1 granted User</p>
        <p className='py-2 border-b mx-8 mt-8'>Send up to 2GB</p>
    </div>
    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-2 mx-auto text-black'>Start Trial</button>
     
</div>
</div>
    </div>
  )
}

export default Cards
