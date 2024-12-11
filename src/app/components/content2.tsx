import Image from "next/image";
import content2 from "../../../public/assets/circle.png";
const Content2 = () => {
  return (
    <div className="flex justify-center items-center w-[100%] h-screen  py-8 space-x-24">
      <div>
        <Image src={content2} alt="content2" height={500} width={500}></Image>
      </div>

      <div className=" h-[300px] w-[400px]">
        <h2 className="font-extrabold text-black text-[52px]">Work together</h2>

        <p className="text-[14px] text-black">
          With whitepace, share your notes with your colleagues and collaborate
          on them. You can also publish a note to the internet and share the URL
          with others.
        </p>
        <button className="mt-16 bg-[#4F9CF9] py-4 px-10 rounded-md text-white">
        Try it now -
        </button>
      </div>
    </div>
  );
};

export default Content2;
