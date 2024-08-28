import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75">
      <div className="container flex items-center align-middle mx-auto px-2 font-makeba cursor-pointer">
        <img
          className="absolute top-2 w-20 border-2 rounded-full"
          src="\logo.svg"
        />
        <span className="top-[50%] translate-y-[20%] pl-24 text-5xl">
          MovieMania
        </span>
      </div>
    </header>
  );
};

export default Header;
