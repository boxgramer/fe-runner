import Image from "next/image";
import { useEffect, useRef } from "react";
import { useIntersections } from "@/utils/useIntersection";
export default function SliderContent({
  title,
  description,
  image1,
  image2,
  id,
}: any) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  let isActive = true;
  if (id != 0) {
    isActive = false;
  }

  useIntersections(
    [titleRef, descriptionRef, image1Ref, image2Ref],
    "100px 0px 100px 0px",
    isActive
  );

  return (
    <div className="keen-slider__slide ">
      <div className="mt-7 mb-2">
        <h1
          ref={titleRef}
          data-animation="animate-down-to-top"
          className="text-center text-[#DBDADA] font-bold text-2xl sm:leading-[39px] sm:text-[32px] lg:mb-10"
        >
          {title}
        </h1>
      </div>
      <div className="p-4 sm:flex sm:gap-5 ">
        <div className="sm:flex-1">
          <p
            ref={descriptionRef}
            data-animation="animate-down-to-top"
            className=" text-justify text-[#DBDADA] font-bold text-lg  sm:leading-[29px] sm:text-[24px] "
          >
            {description}
          </p>
        </div>
        <div className="sm:flex-1 lg:flex  lg:justify-center lg:gap-10   ">
          <div
            ref={image1Ref}
            data-animation="animate-down-to-top"
            className="w-44 h-36 mt-5 shadow-[15px_-15px_#C0C0C0] sm:w-60 sm:h-44 lg:mt-0 xl:w-80 xl:h-60"
          >
            <Image
              src={image1.src}
              alt={image1.alt}
              className="object-cover h-full w-full"
            />
          </div>
          <div
            ref={image2Ref}
            data-animation="animate-down-to-top"
            className="w-44 h-36 mt-7 float-right mr-5  shadow-[15px_-15px_#C0C0C0] sm:w-60 sm:h-44 lg:mt-0  xl:w-80 xl:h-60"
          >
            <Image
              src={image2.src}
              alt={image2.alt}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
