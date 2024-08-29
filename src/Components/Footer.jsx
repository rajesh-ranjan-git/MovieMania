import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-4 bg-neutral-600 bg-opacity-35 text-center text-lg">
      <div className="container lg:flex justify-between items-center mx-auto px-4 h-full cursor-pointer">
        <div className="flex justify-center lg:justify-start mb-4 lg:mb-0 gap-4 w-full">
          <Link className="hover:underline" to="/">
            About
          </Link>
          <Link className="hover:underline" to="/">
            Contact
          </Link>
        </div>
        <p className="flex justify-center lg:justify-end w-full text-center">
          Created with&nbsp;{" "}
          <span>
            <svg
              width="20px"
              height="20px"
              viewBox="0 -2 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.2627 26.9922L29.2549 16C31.085 14.1699 32 11.9607 32 9.37258C32 6.78442 31.085 4.57528 29.2549 2.74517C27.4247 0.915055 25.2155 0 22.6274 0C20.0392 0 17.8301 0.915055 16 2.74517C14.1699 0.915055 11.9607 0 9.37258 0C6.78442 0 4.57528 0.915055 2.74517 2.74517C0.915056 4.57528 0 6.78442 0 9.37258C0 11.9607 0.915056 14.1699 2.74517 16L13.7373 26.9922C14.9869 28.2418 17.0131 28.2418 18.2627 26.9922Z"
                fill="url(#paint0_radial_103_1602)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_103_1602"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(8.07998 9.66157) rotate(59.8757) scale(18.7297 20.4872)"
                >
                  <stop stopColor="#FFAA00" />
                  <stop offset="1" stopColor="#F05206" />
                </radialGradient>
              </defs>
            </svg>
          </span>{" "}
          &nbsp;by Rajesh!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
