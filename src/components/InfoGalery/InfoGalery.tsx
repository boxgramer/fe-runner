import useGlobalStore from "@/utils/state";
import { useIntersection, useIntersections } from "@/utils/useIntersection";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef } from "react";

/**
 * 
 * @param {MutableRefObject} id 
 * @param {JSON} data
 * @returns 
 * @example
 * const infoRef = useRef(null);
 * const infoGalery = {
    title: "Runnig and Walking",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" +
      "eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros in " +
      "cursus turpis massa tincidunt dui ut. Id semper risus in hendrerit " +
      "gravida rutrum quisque non. Laoreet suspendisse interdum consectetur " +
      "libero id. Vel risus commodo viverra maecenas accumsan lacus vel " +
      "facilisis volutpat. ",
    image1: {
      src: "/images/section_2_image_1.jpg",
      alt: "image section 2",
    },
    image2: {
      src: "/images/section_2_image_2.jpg",
      alt: "image section 2",
    },
  };
  <InfoGalery id={infoRef} data={infoGalery} />

  */

export default function InfoGalery({ id, data }: any) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const centerBoxRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useIntersections([
    titleRef,
    descriptionRef,
    centerBoxRef,
    image1Ref,
    image2Ref,
  ]);

  return (
    <div
      ref={id}
      className="bg-[#4D4D4D] p-4  block h-full sm:p-14 lg:flex lg:flex-row-reverse  lg:gap-5 "
    >
      <div className="relative block mt-10 h-[275px]   sm:mt-3  sm:mb-4 sm:h-[340px] lg:w-1/2 ">
        <div
          ref={centerBoxRef}
          data-animation="animate-down-to-top"
          className="w-3/5 h-[228px] bg-transparent border-8 border-[#D9D9D9] absolute top-16 left-16 opacity-60 sm:left-32 sm:h-[303px] "
        ></div>
        <div
          ref={image1Ref}
          data-animation="animate-down-to-top"
          className=" w-3/5 h-[228px] absolute top-0  sm:h-72 sm:w-96 lg:right-0"
        >
          <Image
            src={data.image1.src}
            alt={data.image1.alt}
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
        <div
          ref={image2Ref}
          data-animation="animate-down-to-top"
          className="w-3/5 h-[266px] absolute  top-28 right-0 sm:h-72 sm:w-96 sm:top-44 lg:left-0 lg:top-60 "
        >
          <Image
            src={data.image2.src}
            alt={data.image2.alt}
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="mt-4 pb-24 lg:flex-1 ">
        <div className="relative h-24 sm:h-32 animate-down-to-top">
          <div
            ref={titleRef}
            data-animation="animate-down-to-top"
            className="bg-[#DBDADA] rounded-lg w-4/6 h-[72px] z-20 absolute left-0 top-0 sm:bottom-16 sm:w-3/6 lg:sm:w-[120%] "
          >
            <h1 className="text-[#4D4D4D] font-bold text-xl text-justify p-5  underline  underline-offset-8 sm:text-[20px] lg:text-[29px]">
              {data.title}
            </h1>
          </div>
        </div>
        <p
          ref={descriptionRef}
          data-animation="animate-down-to-top"
          className="text-lg text-[#DBDADA] text-justify leading-[24px] font-normal sm:text-[32px] sm:leading-[39px]   animate-down-to-top "
        >
          {data.description}
        </p>
      </div>
    </div>
  );
}
