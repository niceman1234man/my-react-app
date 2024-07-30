import React from 'react'
import{AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
  return (
    <div className='md:flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='md:flex '>
            <li className='p-4 border-b-2'>Home</li>
            <li className='p-4'>Campany</li>
            <li className='p-4'>Resourses</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div className='flex  absolute top-2 right-4 md:hidden'>
            <AiOutlineMenu size={20}/>

        </div>
    </div>
  )
}

export default Navbar