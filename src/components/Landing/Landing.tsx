import Image from "next/image";

export default function Landing() {
  return (
    <div className="bg-black w-full h-screen top-0  p-4 flex flex-col justify-end  bg-[url('/images/original_landing.jpg')]  bg-cover bg-center    bg-no-repeat   sm:p-14 ">
      <div className="pb-24">
        <div className="mb-16">
          <h1 className="font-bold text-[#DBDADA] text-[32px] sm:text-[40px] lg: lg:text-center">
            Running Club
          </h1>
          <p className="font-bold text-[#DBDADA] text-[24] text-justify mt-6 w-5/6 sm:text-[36px] lg:text-center lg:w-full  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor .
          </p>
        </div>
        <div className="w-3/6 mx-auto  sm:h-[82px] ">
          <button className="text-[#DBDADA] text-center w-full h-full bg-[#7F7F7F] rounded-lg  text-[20px] font-bold  sm:text-[32px] ">
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
}
