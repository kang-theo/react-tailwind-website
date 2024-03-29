import React from "react";
import Video from "../assets/production_ID_4167404.mp4";

/*
  Hero" typically refers to a prominent section or element on a webpage, 
  often located at the top, that features key content such as a large image, 
  headline, or call-to-action. It is meant to capture the attention of visitors 
  and set the tone for the rest of the webpage.
*/
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
      <div className="relative grid justify-items-center">
        <video
          src={Video}
          controls
          // className="w-[768px] h-[432px] object-cover object-top rounded"
          className="w-[560px] h-[300px] object-cover object-top rounded"
        ></video>
        <div className="flex absolute rounded-full bg-white -bottom-7 px-5 py-4 drop-shadow-xl">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3"
          >
            <circle cx="12" cy="12" r="11" stroke="#999999" stroke-width="2" />
            <path d="M10 17L16 12L10 7V17Z" fill="#999999" />
          </svg>
          Watch a 2-minute demonstration video
        </div>
      </div>
      <svg
        width="128"
        height="128"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 md:bottom-20 -left-10 -z-10"
      >
        <circle cx="64" cy="64" r="64" fill="url(#paint0_linear_0_23)" />
        <defs>
          <linearGradient
            id="paint0_linear_0_23"
            x1="0"
            y1="0"
            x2="0"
            y2="128"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="0.774017" stop-color="#EAEAEA" />
            <stop offset="1" stop-color="#DFDFDF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Hero;
