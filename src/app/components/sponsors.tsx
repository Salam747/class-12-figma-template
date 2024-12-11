import Image from "next/image";
import React from "react";
import apple from '../../../public/assets/apple.png'
import ms from '../../../public/assets/ms.png'
import sl from '../../../public/assets/sl.png'
import google from '../../../public/assets/google.png'

const Sponsors = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center h-[350px] w-full">
        <h1 className=" font-extrabold text-[52px] text-black">Our sponsors</h1>

        <div className="flex justify-around items-center space-x-28">
            <div>
            <Image src={apple} alt="" height={130} width={130}></Image>
            </div>

            <div>
            <Image src={ms} alt="" height={200} width={200}></Image>
            </div>

            <div>
            <Image src={sl} alt="" height={200} width={200}></Image>
            </div>

            <div>
            <Image src={google} alt="" height={200} width={200}></Image>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
