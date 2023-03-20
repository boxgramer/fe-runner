import Image from "next/image";

export default function Info() {
  return (
    <div className="bg-white block h-full mb-14">
      <div className=" relative  p-14 h-44 ">
        <div className="float-left w-1/3">
          <h1>Running Benefit and Explore nature </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            dapibus rutrum dolor sed maximus. Maecenas et sem eros. Ut lobortis
            imperdiet turpis, vel semper vulputate mauris id, imperdiet arcu.
            Vestibulum consequat venenatis orci.
          </p>
          <button>read more</button>
        </div>
        <div className="w-2/3 float-right">
          <Image
            src="/images/image5.png"
            alt="image 5"
            width={300}
            height={300}
            className="object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
}
