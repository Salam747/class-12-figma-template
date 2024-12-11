import React from "react";

const Tasky = () => {
  return (
    <div>
    <div className=" flex flex-col justify-center items-center h-[350px] w-full bg-[#043873]">
      <h1 className=" font-extrabold text-[52px] text-white">Your work, everywhere you are</h1>

      <div>
      <p className="text-white text-balance text-center mt-2">
        Access your notes from your computer, phone or tablet by synchronising
        with various services, including whitepace, Dropbox and OneDrive. The
        app is available on Windows, macOS, Linux, Android and iOS. A terminal
        app is also available!
      </p>
       <div className="flex justify-center items-center">
      <button className="mt-8 bg-[#4F9CF9] py-4 px-8 rounded-md text-white">
          Try Taskey -
        </button>
        </div>
      </div>
      </div>
      
     
        </div>
  );
};

export default Tasky;
