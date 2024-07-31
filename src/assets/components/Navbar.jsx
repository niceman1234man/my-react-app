import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='md:flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className={`md:flex sm:w-[30%] ${nav ? 'block' : 'hidden'}`}>
        <li className='p-4 border-b-2 border-gray-600 md:border-none'>Home</li>
        <li className='p-4 border-b-2 border-gray-600 md:border-none'>Company</li>
        <li className='p-4 border-b-2 border-gray-600 md:border-none'>Resources</li>
        <li className='p-4 border-b-2 border-gray-600 md:border-none'>About</li>
        <li className='p-4 border-b-2 border-gray-600 md:border-none'>Contact</li>
      </ul>
      <div className='flex absolute top-2 right-4 md:hidden' onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
    </div>
  )
}

export default Navbar