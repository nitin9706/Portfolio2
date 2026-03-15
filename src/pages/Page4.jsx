import React from "react";

const Page4 = () => {
  return (
    <div
      className=" px-20 py-5 bg-linear-to-t from-violet-300 to-violet-100 max-sm:overflow-hidden max-sm:px-5"
      id="about"
    >
      <h1 className="text-6xl font-bold max-sm:text-2xl">About Me</h1>
      <div className="h-full flex flex-col mt-10 text-xl ml-10  max-sm:ml-5">
        <ul className="leading-10 font-semibold">
          <li className="list-disc">Gmail : Unknowngamer931@gmail.com</li>
          <li className="list-disc">Instagram : __nitin._.09__</li>
          <li className="list-disc">
            this is my portfolio and putting it on github
          </li>
        </ul>
      </div>
      <hr className="border border-gray-400 mx-[20%] mt-30" />
      <h1 className="text-gray-500 text-center capitalize mt-3 max-sm:text-xs">
        @copyright by me / made by nitin sharma
      </h1>
    </div>
  );
};

export default Page4;
