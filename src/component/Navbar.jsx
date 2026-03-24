import { useGSAP } from "@gsap/react";
import gsap, { Linear } from "gsap";
import React, { useRef, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { ImCross } from "react-icons/im";
const Navbar = () => {
  // const [menuOpened, setMenuOpened] = useState(false);
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
    <div className=" h-20 w-[80%] flex justify-between ml-[10%] items-center fixed z-10 bg-white/40 px-20 rounded-b-4xl max-sm:bg-transparent max-sm:p-0 max-sm:w-full max-sm:m-0">
      <div ref={DevImg}>
        <img
          src="https://pnggallery.com/wp-content/uploads/india-logo-01.png"
          alt=""
          className="h-25 max-sm:hidden"
        />
      </div>
      <div className=" flex gap-5 items-center ">
        <div className="hidden sm:flex sm:justify-evenly sm:w-100 sm:text-xl">
          <a href="#home" className="hover:text-gray-600 active:scale-95">
            Home
          </a>
          <a href="#skill" className="hover:text-gray-600 active:scale-95">
            Skill
          </a>
          <a href="#project" className="hover:text-gray-600 active:scale-95">
            Project
          </a>
          <a href="#about" className="hover:text-gray-600 active:scale-95">
            About
          </a>
        </div>
        <a
          href=""
          className="px-6 py-3 bg-green-400 rounded active:scale-95 font-semibold text-lg max-sm:hidden"
        >
          Resume
        </a>
      </div>
      {/* <div className="absolute top-10 right-0 sm:hidden z-100">
        {" "}
        {menuOpened ? (
          <ImCross
            className="size-9 relative right-10 z-50 top-0"
            onClick={() => setMenuOpened(!menuOpened)}
          />
        ) : (
          <RiMenu3Line
            className="size-10 relative right-10 top-0 z-50"
            onClick={() => setMenuOpened(!menuOpened)}
          />
        )}
      </div>
      <div
        className={`sm:hidden ${menuOpened ? "w-[45%] absolute top-7 right-0 p-5 bg-black rounded-l-2xl z-40 h-100 " : "hidden"}`}
      >
        <div
          className={`${menuOpened ? "flex flex-col gap-10 mt-5 text-white " : "hidden"} `}
        >
          <a
            href="#home"
            className="hover:text-gray-600 active:scale-95 text-2xl"
          >
            Home
          </a>
          <a
            href="#skill"
            className="hover:text-gray-600 active:scale-95 text-2xl"
          >
            Skill
          </a>
          <a
            href="#project"
            className="hover:text-gray-600 active:scale-95 text-2xl"
          >
            Project
          </a>
          <a
            href="#about"
            className="hover:text-gray-600 active:scale-95 text-2xl"
          >
            About
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
