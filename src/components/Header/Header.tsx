import Image from "next/image";

export default function Header() {
  return (
    <div
      className={` bg-transparent w-full block  h-14 z-50 sticky border-b-2 border-white `}
    >
      <div className="w-5/6 mx-auto h-full">
        <div className="flex justify-between items-center  h-full">
          <div>
            <Image
              src="/images/landing_logo.png"
              alt="logo"
              width={100}
              height={100}
              className=""
            />
          </div>
          <div>
            <h1 className="text-4xl  font-bold text-white ">Wellcome</h1>
          </div>
          <div>
            <button>
              <svg
                width="40"
                height="40"
                viewBox="0 0 77 83"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_12)">
                  <path
                    d="M67.375 20C67.375 20.9283 67.037 21.8185 66.4353 22.4749C65.8336 23.1312 65.0176 23.5 64.1667 23.5H12.8333C11.9824 23.5 11.1664 23.1312 10.5647 22.4749C9.96302 21.8185 9.625 20.9283 9.625 20C9.625 19.0717 9.96302 18.1815 10.5647 17.5251C11.1664 16.8687 11.9824 16.5 12.8333 16.5H64.1667C65.0176 16.5 65.8336 16.8687 66.4353 17.5251C67.037 18.1815 67.375 19.0717 67.375 20Z"
                    fill="white"
                  />
                  <path
                    d="M67.375 41C67.375 41.9283 67.037 42.8185 66.4353 43.4749C65.8336 44.1312 65.0176 44.5 64.1667 44.5H12.8333C11.9824 44.5 11.1664 44.1312 10.5647 43.4749C9.96302 42.8185 9.625 41.9283 9.625 41C9.625 40.0717 9.96302 39.1815 10.5647 38.5251C11.1664 37.8687 11.9824 37.5 12.8333 37.5H64.1667C65.0176 37.5 65.8336 37.8687 66.4353 38.5251C67.037 39.1815 67.375 40.0717 67.375 41Z"
                    fill="white"
                  />
                  <path
                    d="M67.375 62C67.375 62.9283 67.037 63.8185 66.4353 64.4749C65.8336 65.1313 65.0176 65.5 64.1667 65.5H12.8333C11.9824 65.5 11.1664 65.1313 10.5647 64.4749C9.96302 63.8185 9.625 62.9283 9.625 62C9.625 61.0717 9.96302 60.1815 10.5647 59.5251C11.1664 58.8687 11.9824 58.5 12.8333 58.5H64.1667C65.0176 58.5 65.8336 58.8687 66.4353 59.5251C67.037 60.1815 67.375 61.0717 67.375 62Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_12">
                    <rect
                      width="77"
                      height="84"
                      fill="white"
                      transform="translate(0 -1)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}