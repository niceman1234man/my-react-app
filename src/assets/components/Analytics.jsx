import React from 'react';
import Laptop from '../img/laptop.jpg';

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="Laptop" />
        <div className='flex flex-col justify-center'>
            <p className='uppercase text-[#00df9a] font-bold'>Data Analytic Dahboard</p>
            <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>Manage Data Analytic Centerally</h1>
            <p className='font-serif'>Lorum ipsum dolor sit,amet consecutetor adiciplining elit.
                Dicta beatea omins obcaeate aliquam et eligendi official atque 
                quam corrupti consequetor commodi mollitia non,assumenda aliquid 
                hic at possimuss nihil ?</p>
                <button className='bg-[#000000] w-[200px] rounded-md font-medium my-6 py-2 mx-auto text-[#00df9a] md:mx-0'>Get Started</button>

        </div>
      </div>
    </div>
  );
}

export default Analytics;
