import React from 'react'
import {
    FaDribbble,
FaFacebookSquare,
FaGithub,
FaInstagram,
FaTwitterSquare

}from 'react-icons/fa'

function Footer() {
  return (
    <div className='mx-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
 
 <div>
 <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
 <p className='py-4'>Lorum ipsum dolor sit,amet consecutetor adiciplining elit.
                Dicta beatea omins obcaeate aliquam et eligendi official atque 
                quam corrupti consequetor commodi mollitia non,assumenda aliquid 
                hic at possimuss .</p>
<div className='flex  justify-between md:w-[75%] my-6'>
 < FaDribbble size={30}/>
<FaFacebookSquare size={30}/>
<FaGithub size={30}/>
<FaInstagram size={30}/>
<FaTwitterSquare size={30}/>

 </div>
 </div>
 <div className='lg:col-span-2 flex justify-between mt-8'>
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
          
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Supports</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guids </li>
            <li className='py-2 text-sm'>API Status</li>
          
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>press</li>
            <li className='py-2 text-sm'> Careers</li>

          
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
            

          
        </ul>
    </div>

 </div>
    </div>
  )
}

export default Footer