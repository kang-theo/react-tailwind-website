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
    </div>
  );
}

export default Hero;
