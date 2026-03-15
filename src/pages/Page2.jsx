import { useGSAP } from "@gsap/react";
import gsap, { Linear } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const SurfRef = useRef();
  const LogoRef = useRef();
  const TRef = useRef();

  useGSAP(
    () => {
      gsap.from("div", {
        y: -450,
        rotateY: 90,
        duration: 0.5,
        delay: 1,
        stagger: true,
        scrollTrigger: {
          trigger: "div",
          scroll: "body",
          start: "top 50%",
          end: "bottom 80%",
          scrub: 3,
        },
      });
    },
    { scope: SurfRef },
  );

  useGSAP(
    () => {
      gsap.from("img ", {
        opacity: 0,
        x: -90,
        y: -100,
        z: 100,
        scale: 1.1,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "img",
          scroll: "body",
          start: "top 50%",
          end: "bottom 90%",
          scrub: 3,
        },
      });
    },
    { scope: LogoRef },
  );
  useGSAP(
    () => {
      gsap.from("h1 ", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "h1",
          scroll: "body",
          start: "top 50%",
          end: "bottom 90%",
          scrub: 3,
        },
      });
    },
    { scope: LogoRef },
  );
  useGSAP(
    () => {
      gsap.to("span", {
        y: -20,
        scale: 1.3,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        scrollTrigger: {
          trigger: "span",
          scroll: "body",
          start: "top 50%",
          end: "bottom 70%",
        },
      });
    },
    { scope: TRef },
  );

  return (
    <div
      className="h-screen w-full p-4 text-white overflow-hidden max-sm:p-0 max-sm:rounded-none"
      id="skill"
    >
      <div className="h-full rounded-4xl bg-black flex  perspective-[3000px]  max-sm:rounded-none">
        {/* Making a flat box with percpective effective */}

        <div
          ref={SurfRef}
          className=" flex justify-center items-center max-sm:hidden"
        >
          <div className=" h-180 w-100 rotate-x-40 rotate-z-50 absolute top-15 right-50 shadow-[10px_10px_70px_white]/70 flex justify-center items-center flex-col gap-10 rounded-3xl">
            <div
              className="flex justify-between items-center flex-col w-[90%] gap-20 text-xl"
              ref={LogoRef}
            >
              {" "}
              <div className="flex  justify-between w-[70%] ">
                <div className="flex flex-col justify-center items-center gap-2">
                  {" "}
                  <img
                    src="/src/assets/tailwind.png"
                    alt=""
                    className="h-20 bg-center bg-cover"
                  />
                  <h1>Tailwind</h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  {" "}
                  <img
                    src="/src/assets/react.png"
                    alt=""
                    className="h-20 bg-center bg-cover"
                  />
                  <h1>REACT JS</h1>
                </div>
              </div>
              <div className="flex  justify-between w-[70%]">
                <div className="flex flex-col justify-center items-center gap-2">
                  {" "}
                  <img
                    src="/src/assets/HTML.png"
                    alt=""
                    className="h-20 bg-center bg-cover"
                  />
                  <h1>HTML</h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  {" "}
                  <img
                    src="/src/assets/CSS.png"
                    alt=""
                    className="h-20 bg-center bg-cover"
                  />
                  <h1>CSS</h1>
                </div>
              </div>
              <div className="flex  justify-between w-[70%]">
                <div className="flex flex-col justify-center items-center gap-2">
                  {" "}
                  <img
                    src="/src/assets/JS.png"
                    alt=""
                    className="h-20 bg-center bg-cover"
                  />
                  <h1>JavaScript</h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  {" "}
                  <img
                    src="/src/assets/linux.png"
                    alt=""
                    className="h-20 bg-center bg-cover"
                  />
                  <h1>Linux</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-l-4xl m-10 perspective-[3000px]" ref={TRef}>
          {" "}
          <h1
            className=" text-8xl z-40  -rotate-x-20 rotate-y-15 font-extrabold bg-radial from-green-300 to-green-900 bg-clip-text text-transparent outline-custom max-sm:text-3xl"
            id="Font2"
          >
            <span className=" text-8xl z-40  -rotate-x-20 rotate-y-15  font-extrabold bg-radial from-green-300 to-green-900 bg-clip-text text-transparent  outline-custom max-sm:text-3xl">
              T
            </span>
            echnologies :
          </h1>
          <h1
            className="z-40 bg-radial from-green-300 to-green-900 bg-clip-text text-transparent -rotate-x-20 rotate-y-15 text-5xl font-medium max-sm:text-2xl"
            id="Font2"
          >
            That I Work With
          </h1>
          <div className="sm:hidden w-70 bg-gray-100/10 h-[80%] mt-9 ml-2 rounded-xl py-5 px-10 flex flex-col gap-5">
            <div className="flex justify-between items-center h-30">
              {" "}
              <div>
                <img
                  src="/src/assets/tailwind.png"
                  alt=""
                  className="h-15 bg-center bg-cover"
                />
                <h1>Tailwind</h1>
              </div>
              <div>
                <img
                  src="/src/assets/react.png"
                  alt=""
                  className="h-15 bg-center bg-cover"
                />
                <h1>REACT JS</h1>
              </div>
            </div>
            <div className="flex justify-between items-center h-30 ">
              {" "}
              <div>
                <img
                  src="/src/assets/css.png"
                  alt=""
                  className="h-15 bg-center bg-cover"
                />
                <h1 className="ml-3">CSS</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/src/assets/html.png"
                  alt=""
                  className="h-15 bg-center bg-cover"
                />
                <h1>HTML</h1>
              </div>
            </div>
            <div className="flex justify-between items-center h-30">
              {" "}
              <div>
                <img
                  src="/src/assets/Linux.png"
                  alt=""
                  className="h-15 bg-center bg-cover"
                />
                <h1>Linux</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/src/assets/js.png"
                  alt=""
                  className="h-15 bg-center bg-cover"
                />
                <h1>JavaScript</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
