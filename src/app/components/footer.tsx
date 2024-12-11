import Image from 'next/image'
import footer from '../../../public/assets/logo.png'

const Footer = () => {
  return (
    <div className='flex bg-[#043873] h-[250px] w-full justify-between px-28  items-center'>

        <div className='text-white '>
            <Image src={footer} alt='footer' height={200} width={200}></Image>
            <p>whitepace was created for</p>
            <p> the new ways we live and</p>    
            <p> work. We make a better</p>
            <p>workspace around the world</p>
        </div>
        <div className='space-y-2'>
            <p className='text-white font-extrabold'>Product</p>
            <p className='text-white'>Overview</p>
            <p className='text-white'>Pricing</p>
            <p className='text-white'>Customer stories</p>
        </div>
        <div className='space-y-2'>
        <p className='text-white font-extrabold'>Resources</p>
            <p className='text-white'>Blog</p>
            <p className='text-white'>Guides & tutorials</p>
            <p className='text-white'>Help center</p>
        </div>
        <div className='space-y-2'>
        <p className='text-white font-extrabold'>Company</p>
            <p className='text-white'>About us</p>
            <p className='text-white'>Careers</p>
            <p className='text-white'>Media kit </p>
        </div>
    </div>
  )
}

export default Footer