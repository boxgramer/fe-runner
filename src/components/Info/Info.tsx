import { useIntersections } from "@/utils/useIntersection";
import Image from "next/image";
import { createRef, useEffect, useRef } from "react";

export default function Info() {
  const refData = new Array();
  let data = [
    {
      image: "/images/heart-beat.png",
      alt: "heart beat",
      title: "heart beat",
    },
    {
      image: "/images/bmi.png",
      alt: "bmi",
      title: "weight body",
    },
    {
      image: "/images/mental-health.png",
      alt: "mental health",
      title: "release strees",
    },
  ];
  data.map((e) => {
    refData.push(useRef(null));
  });
  useIntersections(refData);

  return (
    <div className="bg-[#DBDADA] block h-full p-4 sm:p-14">
      <h1 className="font-[#080808] text-3xl font-bold text-center mt-2  sm:text-[40px] sm:leading-[49px]">
        Benefit of Running
      </h1>
      <div className="flex flex-col items-center justify-center gap-7 my-12  sm:flex-row sm:justify-between lg:justify-center lg:gap-24 lg:my-44 ">
        {data.map((e, i) => {
          return (
            <div
              ref={refData[i]}
              key={e.alt}
              data-animation="animate-down-to-top"
              className="border-8 border-solid border-black h-44 w-44 rounded-[50px] p-2 lg:h-[259px] lg:w-[328px]"
            >
              <div className="w-24 h-24 mx-auto lg:w-40 lg:h-40">
                <Image
                  src={e.image}
                  alt={e.alt}
                  width={50}
                  height={50}
                  className="object-cover h-full w-full"
                />
              </div>
              <h1 className="font-bold text-black text-xl text-center underline  underline-offset-4 lg:text-[30px] lg:mt-3 ">
                {e.title}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
