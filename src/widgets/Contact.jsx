import React from "react";

function Contact() {
  return (
    <div className="bg-black md:w-4/5 mx-auto relative overflow-hidden">
      <div className="w-full py-16 px-12">
        <h2 className="text-3xl text-white font-bold">
          Let's strengthen your company!
        </h2>
        <p className="text-lg text-white mt-2 mb-6">
          Expanding on this, strengthening your company involves taking
          proactive steps to improve its performance, competitiveness, and
          resilience in the market.
        </p>
        <div className="flex flex-col md:flex-row items-start gap-4">
          <input
            type="text"
            name=""
            id=""
            className="bg-zinc-800 py-3 px-4 border border-zinc-700"
            placeholder="Your email address"
          />
          <button className="py-3 px-8 bg-blue-500 text-white text-base font-medium md:ml-2">
            Get Started Now
          </button>
        </div>
        <p className="text-sm text-zinc-400 mt-3">
          7-Day Free Trial, No Payment Required
        </p>
      </div>
    </div>
  );
}

export default Contact;
