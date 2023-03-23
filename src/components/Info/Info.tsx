import Image from "next/image";

export default function Info() {
  let data = [
    {
      image: "/images/heart-beat.png",
      alt: "heart beat",
    },
    {
      image: "/images/bmi.png",
      alt: "bmi",
    },
    {
      image: "/images/mental-health.png",
      alt: "mental health",
    },
  ];
  return (
    <div className="bg-[#DBDADA] block h-full p-4 md:p-14">
      <h1 className="font-[#080808] text-3xl font-bold text-center mt-2  md:text-[40px] md:leading-[49px]">
        Benefit of Running
      </h1>
      <div className="flex flex-col items-center justify-center gap-7 my-12  md:flex-row md:justify-between ">
        {data.map((e) => {
          return (
            <div
              key={e.alt}
              className="border-8 border-solid border-black h-44 w-44 rounded-[50px] p-2"
            >
              <div className="w-24 h-24 mx-auto">
                <Image
                  src={e.image}
                  alt={e.alt}
                  width={50}
                  height={50}
                  className="object-cover h-full w-full"
                />
              </div>
              <h1 className="font-bold text-black text-xl text-center underline  underline-offset-4 ">
                Heart Beat
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
