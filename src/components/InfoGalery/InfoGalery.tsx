import Image from "next/image";

export default function InfoGalery() {
  return (
    <div className="bg-[#EBEBEB]  block h-[100vh] relative ">
      <div className="absolute top-[250px] right-0 bg-[#BABABA] h-[600px] w-3/6  z-0"></div>
      <div className="p-14 absolute top-0 z-10 ">
        <div className="flex gap-5  ">
          <div className="flex  flex-wrap gap-5 ">
            <div className="flex-1">
              <Image
                src="/images/image1.png"
                alt="image1"
                width={200}
                height={100}
                className="object-cover w-full "
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
                className="object-cover  w-full "
              />
            </div>
          </div>

          <Image
            src="/images/image3.png"
            alt="image1"
            width={500}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
