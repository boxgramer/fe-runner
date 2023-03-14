import Image from "next/image";

export default function Landing() {
  return (
    <div className="bg-black  absolute top-0 w-full h-full px-24 bg-[url('/images/landing_background.png')] bg-cover bg-no-repeat bg-center ">
      <div className="w-3/6 float-left h-full pt-44 pb-24 pl-20 xl:pl-44 pr-14">
        <div className="border-4 border-white border-solid  h-full">
          <div className="pl-4">
            <h3 className="text-white font-bold underline text-2xl">
              Running Club
            </h3>
          </div>
          <div className="w-4/5 mx-auto mt-24">
            <h3 className="text-white font-bold  text-6xl text-center uppercase">
              REACH YOUR HEALTY
            </h3>
            <hr className="border-t-4" />
          </div>
        </div>
      </div>
      <div className="w-3/6 float-left h-full">
        <div className="pt-[27rem] px-10">
          <h3 className="text-white font-bold text-right text-2xl uppercase">
            Run
          </h3>
          <h3 className="text-white font-bold  text-right text-6xl uppercase">
            BE HAPPY
          </h3>
        </div>
      </div>
    </div>
  );
}
