import Image from "next/image";

export default function InfoGalery() {
  return (
    <div className="bg-[#4D4D4D] p-4  block h-[100vh] ">
      <div className="relative block mt-24 h-96">
        <div className="w-3/5 h-[228px]">
          <Image
            src="/images/section_2_image_1.jpg"
            alt="image section 2"
            width={100}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-3/5 h-[266px] absolute top-28 right-0 ">
          <Image
            src="/images/section_2_image_2.jpg"
            alt="image section 2"
            width={100}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-[#DBDADA] rounded-lg w-4/6 h-[72px] z-20 absolute left-0 bottom-7 ">
          <h1 className="text-[#4D4D4D] font-bold text-xl text-justify p-5  underline  underline-offset-8">
            Runnig and Walking
          </h1>
        </div>
      </div>

      <div className="mt-4">
        <p className="font-bold text-lg text-[#DBDADA] text-justify">
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
