import Image from "next/image";

export default function Landing() {
  return (
    <div className="bg-black w-full h-[100vh] top-0  p-4  pt-32 bg-[url('/images/original_landing.jpg')]  bg-cover bg-center    bg-no-repeat   ">
      <div className="mt-96">
        <h1 className="font-bold text-[#DBDADA] text-[32px]">Running Club</h1>
        <p className="font-bold text-[#DBDADA] text-[24] text-justify mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor .
        </p>
      </div>
      <div className="mt-16 w-3/6 mx-auto ">
        <button className="text-[#DBDADA] text-center w-full bg-[#7F7F7F] rounded-lg  text-[20px] font-bold  ">
          Start Exploring
        </button>
      </div>
    </div>
  );
}
