import Image from "next/image";
import { useEffect, useRef } from "react";
import { useIntersection, useIntersections } from "@/utils/useIntersection";

/**
 * 
 * 
 * @param {string} id 
 * @param {Object} data
 * @returns 
 * 
 * @example 
 * <Lading id="landing" data={{
 *    title : 'running club',
 *    description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor',
      button : {
        title : 'Start Exploring',
        link : '#'
      }
 * }
 * }/>
 * 
 */

export default function Landing({ id, data }: any) {
  const runRef = useRef(null);
  const briefRef = useRef(null);
  const buttonRef = useRef(null);

  useIntersections([runRef, briefRef, buttonRef]);

  return (
    <div
      ref={id}
      className="bg-black w-full h-screen top-0  p-4 flex flex-col justify-end  bg-[url('/images/original_landing.jpg')]  bg-cover bg-center    bg-no-repeat   sm:p-14 "
    >
      <div className="pb-24">
        <div className="mb-16">
          <h1
            ref={runRef}
            data-animation="animate-down-to-top"
            className="font-bold text-[#DBDADA] text-[32px] sm:text-[40px] lg: lg:text-center   animate-down-to-top "
          >
            {data.title}
          </h1>
          <p
            ref={briefRef}
            data-animation="animate-down-to-top"
            className="font-bold text-[#DBDADA] text-[24] text-justify mt-6 w-5/6 sm:text-[36px] lg:text-center lg:w-full  animate-down-to-top "
          >
            {data.description}
          </p>
        </div>
        <div className="w-3/6 mx-auto  sm:h-[82px] ">
          <button
            ref={buttonRef}
            data-animation="animate-down-to-top"
            onClick={() => {
              data.button.ref?.current.scrollIntoView({
                behavior: "smooth",
                block: "end",
              });
            }}
            className="text-[#DBDADA] text-center w-full h-full bg-[#7F7F7F] rounded-lg  text-[20px] font-bold  sm:text-[32px] animate-down-to-top "
          >
            {data.button.title}
          </button>
        </div>
      </div>
    </div>
  );
}
