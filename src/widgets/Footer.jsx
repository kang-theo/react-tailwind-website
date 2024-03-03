import React from "react";
import Logo from "../logo.svg";

function Footer() {
  return (
    <footer className="grid gap-8 md:gap-0 text-gray-500 md:w-4/5 mx-auto mt-32 md:grid-cols-5">
      <div>
        <img src={Logo} alt="" className="w-16 h-16" />
        <p>
          <a href="#">Protocol</a>.<a href="#">Privacy</a>
        </p>
      </div>
      {[1, 2, 3].map((v) => (
        <nav key={v} className="grid gap-2">
          <p className="text-lg text-black">Introduction</p>
          <a href="">Product 1</a>
          <a href="">Product 2</a>
          <a href="">Product 3</a>
          <a href="">Product 4</a>
          <a href="">Product 5</a>
        </nav>
      ))}
      <nav className="grid gap-2 content-start">
        <p className="text-base text-black">Register</p>
        <p>Get latest news</p>
        <input
          type="text"
          name=""
          id=""
          className="py-2 px-3 border"
          placeholder="Your email address"
        />
      </nav>
    </footer>
  );
}

export default Footer;
