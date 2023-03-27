import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useRef, useState } from "react";
import { useIntersections } from "@/utils/useIntersection";

/**
 * 
 * @param {MutableRefObject} id 
 * @param {JSON} data
 * @returns 
 * @example
 * const slidereRef = useRef(null);
 * const dataSlider = [
    {
      title: "Running On Road",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" +
        "eiusmod tempor incididunt ut labore et dolore magna aliqua." +
        " Dolor magna eget est lorem ipsum dolor sit amet consectetur." +
        " Iaculis eu non diam phasellus vestibulum. Eleifend quam" +
        " adipiscing vitae proin sagittis nisl rhoncus. Sit amet nisl" +
        " suscipit",
      image1: {
        src: "/images/section_4_image_1.jpg",
        alt: "image 1",
      },
      image2: {
        src: "/images/section_4_image_2.jpg",
        alt: "image 2",
      },
    },
    {
      title: "Running On Road 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" +
        "eiusmod tempor incididunt ut labore et dolore magna aliqua." +
        " Dolor magna eget est lorem ipsum dolor sit amet consectetur." +
        " Iaculis eu non diam phasellus vestibulum. Eleifend quam" +
        " adipiscing vitae proin sagittis nisl rhoncus. Sit amet nisl" +
        " suscipit",
      image1: {
        src: "/images/section_4_image_2.jpg",
        alt: "image 1",
      },
      image2: {
        src: "/images/section_4_image_1.jpg",
        alt: "image 2",
      },
    },
  ];

  <SliderSection id={slidereRef} data={dataSlider} />



  */

export default function SliderSection({ id, data }: any) {
  const refList = new Array();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  data.map((d: any) => {
    const data = {
      titleRef: useRef(null),
      descriptionRef: useRef(null),
      image1Ref: useRef(null),
      image2Ref: useRef(null),
    };
    refList.push(data);
  });
  if (data.length > 0) {
    useIntersections([
      refList[0].titleRef,
      refList[0].descriptionRef,
      refList[0].image1Ref,
      refList[0].image2Ref,
    ]);
  }
  return (
    <div ref={id} className="bg-[#4D4D4D] w-full h-full  p-4 sm:p-14">
      <h1 className="text-white font-bold text-3xl text-center mt-7 sm:leading-[48px] sm:text-[40px] ">
        Explore Nature
      </h1>
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {data.map((d: any, i: number) => {
            return (
              <div key={i} className="keen-slider__slide ">
                <div className="mt-7 mb-2">
                  <h1
                    ref={refList[i].titleRef}
                    data-animation="animate-down-to-top"
                    className="text-center text-[#DBDADA] font-bold text-2xl sm:leading-[39px] sm:text-[32px] lg:mb-10"
                  >
                    {d.title}
                  </h1>
                </div>
                <div className="p-4 sm:flex sm:gap-5 ">
                  <div className="sm:flex-1">
                    <p
                      ref={refList[i].descriptionRef}
                      data-animation="animate-down-to-top"
                      className=" text-justify text-[#DBDADA] font-bold text-lg  sm:leading-[29px] sm:text-[24px] "
                    >
                      {d.description}
                    </p>
                  </div>
                  <div className="sm:flex-1 lg:flex  lg:justify-center lg:gap-10   ">
                    <div
                      ref={refList[i].image1Ref}
                      data-animation="animate-down-to-top"
                      className="w-44 h-36 mt-5 shadow-[15px_-15px_#C0C0C0] sm:w-60 sm:h-44 lg:mt-0 xl:w-80 xl:h-60"
                    >
                      <Image
                        src={d.image1.src}
                        alt={d.image1.alt}
                        width={100}
                        height={100}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div
                      ref={refList[i].image2Ref}
                      data-animation="animate-down-to-top"
                      className="w-44 h-36 mt-7 float-right mr-5  shadow-[15px_-15px_#C0C0C0] sm:w-60 sm:h-44 lg:mt-0  xl:w-80 xl:h-60"
                    >
                      <Image
                        src={d.image2.src}
                        alt={d.image2.alt}
                        width={100}
                        height={100}
                        className="object-cover h-full w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="flex justify-center px-10 mt-5 gap-3">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={` rounded-xl w-7 h-4 ${
                  currentSlide == idx ? "bg-[#7F7F7F]" : "bg-[#D9D9D9]"
                }`}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Arrow(props: any) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
