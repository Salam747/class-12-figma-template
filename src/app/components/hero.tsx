import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center items-center w-[100%] h-screen px-20  bg-[#043873]'>
        <div className=' h-[300px] w-[400px]'>

        <h2 className='font-extrabold text-white text-[48px]'>Get More Done with whitepace</h2>
      
        <p className='text-[14px] text-white'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
        <button className='mt-16 bg-[#4F9CF9] py-4 px-6 rounded-md text-white'>
        Try Whitepace free -
        </button>
        </div>


        <div className='bg-[#C4DEFD] h-[400px] w-[650px]'></div>
        
        
    </div>
  )
}

export default Hero