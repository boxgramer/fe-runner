import Image from "next/image";

export default function InfoGalery() {
  return (
    <div className="bg-[#4D4D4D] p-4  block h-full sm:p-14 ">
      <div className="relative block mt-10 h-[390px]   sm:mt-3  sm:mb-4 sm:h-[475px] ">
        <div className="w-3/5 h-[228px] bg-transparent border-8 border-[#D9D9D9] absolute top-16 left-16 opacity-60 sm:left-32 sm:h-[303px] "></div>
        <div className=" w-3/5 h-[228px] absolute top-0 left-0 sm:h-72 sm:w-96">
          <Image
            src="/images/section_2_image_1.jpg"
            alt="image section 2"
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-3/5 h-[266px] absolute top-28 right-0 sm:h-72 sm:w-96 sm:top-44">
          <Image
            src="/images/section_2_image_2.jpg"
            alt="image section 2"
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-[#DBDADA] rounded-lg w-4/6 h-[72px] z-20 absolute left-0 bottom-7 sm:bottom-16 sm:w-3/6 ">
          <h1 className="text-[#4D4D4D] font-bold text-xl text-justify p-5  underline  underline-offset-8 sm:text-[29px]">
            Runnig and Walking
          </h1>
        </div>
      </div>

      <div className="mt-4 pb-24">
        <p className="text-lg text-[#DBDADA] text-justify leading-[24px] font-normal sm:text-[32px] sm:leading-[39px]   ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros in
          cursus turpis massa tincidunt dui ut. Id semper risus in hendrerit
          gravida rutrum quisque non. Laoreet suspendisse interdum consectetur
          libero id. Vel risus commodo viverra maecenas accumsan lacus vel
          facilisis volutpat.
        </p>
      </div>
    </div>
  );
}
