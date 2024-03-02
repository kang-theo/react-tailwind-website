import React from "react";

function Hero() {
  return (
    <div className="grid justify-items-center gap-8 pb-28 relative">
      <p className="text-4xl md:text-6xl font-black text-center leading-normal md:leading-normal">
        Create a perfect and creative website
      </p>
      <p className="text-xl text-gray-700 md:w-1/2 text-center">
        TailwindCSS provides us with rich design elements, making the website
        full of creativity and personalization.
      </p>
      <div>
        <button className="rounded bg-blue-500 text-base text-white py-3 px-8">
          Try Now
        </button>
        <button className="rounded bg-gray-900 text-base text-white py-3 px-8 ml-3">
          Learn More
        </button>
      </div>
      <div className="relative w-full">
        <svg
          width="256"
          height="256"
          viewBox="0 0 256 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 -z-10"
        >
          <circle cx="128" cy="128" r="128" fill="url(#paint0_linear_0_22)" />
          <defs>
            <linearGradient
              id="paint0_linear_0_22"
              x1="0"
              y1="0"
              x2="0"
              y2="256"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.774017" stop-color="#EAEAEA" />
              <stop offset="1" stop-color="#DFDFDF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Hero;
