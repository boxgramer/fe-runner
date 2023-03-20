import Image from "next/image";

export default function InfoGalery() {
  return (
    <div className="bg-[#EBEBEB]  block h-[858px] relative ">
      <div className="absolute top-[250px] right-0 bg-[#BABABA] h-[972px] w-[864px]  z-0"></div>
      <div className="p-14 absolute top-0 z-10 ">
        <div className="flex gap-5  ">
          <div className="flex  flex-wrap gap-5 w-3/6 ">
            <div className="flex-1">
              <Image
                src="/images/image1.png"
                alt="image1"
                width={200}
                height={100}
                className="object-cover w-full h-full "
              />
            </div>

            <div className="block">
              <Image
                src="/images/image2.png"
                alt="image1"
                width={400}
                height={100}
                className="object-cover  w-full h-full"
              />
            </div>
            <div className="w-full">
              <Image
                src="/images/image4.png"
                alt="image1"
                width={400}
                height={300}
                className="object-cover  w-full h-full "
              />
            </div>
          </div>

          <div className="flex flex-col w-3/6 gap-5">
            <div className="h-full w-full">
              <Image
                src="/images/image3.png"
                alt="image1"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <h1 className="font-bold text-5xl">Running and Walking</h1>
              <p className="font-bold text-4xl text-justify ">
                burn more calories lot of the other exercise programs that you
                can work in can work in..
                <button className="float-right border-4 border-black px-4 text-xl text-center">
                  read more
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
