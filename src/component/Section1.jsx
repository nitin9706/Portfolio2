import React, { useRef } from "react";
import IMG from "../assets/IMAGE2.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Linear } from "gsap/all";

const Section1 = () => {
  gsap.registerPlugin(useGSAP);

  const IMGREF = useRef();
  const TextRef = useRef();
  const Text2Ref = useRef();
  useGSAP(
    () => {
      gsap.from("img ", {
        opacity: 0,
        duration: 0.5,
        delay: 0.4,
        ease: Linear,
      });
    },
    { scope: IMGREF },
  );
  useGSAP(
    () => {
      gsap.from("h1", {
        rotateX: 90,
        duration: 0.9,
        ease: "linear",
      });
    },
    { scope: TextRef },
  );

  return (
    <div className="h-screen flex justify-center items-center flex-col section1">
      <div
        className="flex justify-center items-center flex-col mb-20 section_text max-sm:mb-80"
        ref={TextRef}
      >
        <h3 className="text-2xl text-gray-700 max-sm:hidden">
          {" "}
          👋,my name is nitin sharma{" "}
        </h3>
        <h1
          className="text-black text-8xl font-bold capitalize max-sm:text-4xl"
          id="Font2"
        >
          web developer{" "}
        </h1>
        <div className="flex">
          {" "}
          <h1
            className="text-black text-9xl font-bold mr-1 max-sm:text-4xl"
            id="Font2"
          >
            &
          </h1>
          <h1
            className="text-white text-9xl font-bold outline-custom1 max-sm:text-4xl"
            id="Font2"
          >
            Cloud-Engineer{" "}
          </h1>
        </div>
        <div
          className="w-[65%] flex  items-center text-xl text-gray-500 justify-between max-sm:gap-35 
        mt-2 text2"
        >
          <h2>Good Learner</h2>
          <h2>Love Coding</h2>
        </div>
      </div>

      {/* mine IMage */}
      <div className="absolute bottom-0" ref={IMGREF}>
        {" "}
        <img src={IMG} alt="ME" className="h-140 brightness-130 " />
      </div>

      <div
        className="z-10 absolute bottom-0 flex gap-5 pb-30 w-full justify-center button max-sm:px-4 max-sm:pb-20"
        id="BCGIMG"
      >
        <a className=" p-4 rounded bg-black text-white cursor-pointer active:scale-95 max-sm:p-3">
          You Need a Developer
        </a>
        <a className="  p-4 rounded bg-transparent border-2 cursor-pointer active:scale-95 max-sm:p-3">
          You Need a Cloud-Engineer
        </a>
      </div>
      <hr className="mx-[20%] absolute bottom-10 border-gray-900 border w-[60%] max-sm:border-black" />
    </div>
  );
};

export default Section1;
