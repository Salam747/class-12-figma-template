import Image from 'next/image'
import React from 'react'
import logo from "../../../public/assets/logo.png"
const Navbar = () => {
  return (
    <div  className=' flex items-center w-full h-[62px] bg-[#043873] px-24 py-4 gap-72'>
        <div>
            <Image src={logo} alt='logo' height={150} width={150}></Image>
        </div>

        <div className='flex justify-center items-center gap-40'>
            <ul className='flex space-x-8 py-8 text-white'>
                <li>Production</li>
                <li>Solutions</li>
                <li>Resources</li>
                <li>Pricing</li>
            </ul>
            <div className='bg-[#FFE492] py-3 px-8 rounded-sm'>
                login
            </div>
        </div>
    </div>
  )
}

export default Navbar