import React from "react";
const Page3 = () => {
  return (
    <div
      className="h-screen p-5 bg-linear-to-t from-violet-300 to-violet-100 max-sm:h-full"
      id="project"
    >
      <h1 className="text-6xl font-bold text-center max-sm:text-3xl max-sm:text-left text-violet-500 mt-20">
        PROJECTS :
      </h1>
      <hr className="mx-[20%] mt-3 border-gray-600 border max-sm:ml-0 max-sm:mr-40" />
      <div className=" flex gap-5 justify-center items-center">
        {/* First Line */}
        <div className="flex items-center justify-center  overflow-auto h-[75vh] gap-15 max-sm:flex-col w-[60%] max-sm:w-full flex-wrap max-sm:h-full max-sm:my-10">
          {/* getting the projects in*/}

          <div class="w-64 bg-white/50 shadow-[1px_1px_15px_rgba(0,0,0,0.2)] p-9 space-y-3 relative overflow-hidden rounded-2xl h-65 hover:shadow-violet-500 duration-450">
            <div class="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
              <p class="absolute bottom-6 left-7 text-white text-2xl">01</p>
            </div>
            <div class="fill-violet-500 w-12">
              <svg
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"></path>
              </svg>
            </div>{" "}
            <a
              href="https://github.com/nitin9706/Youtube_backend-clone.git"
              target="_blank"
            >
              {" "}
              <h1 class="font-bold text-xl">Backend YouTube Clone</h1>
            </a>
            <p class="text-sm text-zinc-500 leading-6">
              this project focus on mainly about the backend thing of youtube
            </p>
          </div>
          {/* second */}
          <div class="w-64 bg-white/50 shadow-[1px_1px_15px_rgba(0,0,0,0.2)] p-9 space-y-3 relative overflow-hidden rounded-2xl h-65 hover:shadow-violet-500 duration-450">
            <div class="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
              <p class="absolute bottom-6 left-7 text-white text-2xl">02</p>
            </div>
            <div class="fill-violet-500 w-12">
              <svg
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"></path>
              </svg>
            </div>
            <a href="https://github.com/nitin9706/Chat-App" target="_blank">
              <h1 class="font-bold text-xl">Chat-App</h1>
            </a>
            <p class="text-sm text-zinc-500 leading-6 mt-2">
              This chat app uses socket.io for RTC Uses node ,express,mongodb
            </p>
          </div>
        </div>
      </div>
      <hr className="mx-[20%] border-gray-600 border" />
    </div>
  );
};

export default Page3;
