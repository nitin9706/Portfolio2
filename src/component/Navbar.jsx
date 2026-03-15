import { useGSAP } from "@gsap/react";
import gsap, { Linear } from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const DevImg = useRef();
  useGSAP(
    () => {
      gsap.from("img", {
        opacity: 0,
        rotateX: 90,
        duration: 1,
        ease: Linear,
      });
    },
    { scope: DevImg },
  );

  return (
    <div className=" h-25 flex justify-between px-[10%] items-center">
      <div ref={DevImg}>
        <img
          src="https://pnggallery.com/wp-content/uploads/india-logo-01.png"
          alt=""
          className="h-5"
        />
      </div>
      <div className=" flex gap-5 items-center ">
        <div className="hidden sm:flex sm:justify-evenly sm:w-100 sm:text-xl">
          <Link to="/" className="hover:text-gray-600 active:scale-95">
            Home
          </Link>
          <Link to="#skill" className="hover:text-gray-600 active:scale-95">
            Skill
          </Link>
          <Link to="/project" className="hover:text-gray-600 active:scale-95">
            Project
          </Link>
          <Link to="/about" className="hover:text-gray-600 active:scale-95">
            About
          </Link>
        </div>
        <a
          href=""
          className="px-6 py-3 bg-green-400 rounded active:scale-95 font-semibold text-lg max-sm:hidden"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
