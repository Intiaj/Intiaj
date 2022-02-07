/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";

function contact() {
  return (
    <div className="max-w-7xl mx-auto relative">
      <Header />
      <hr className="" />

      <div>
        <img
          alt=""
          src="hero.svg"
          className="h-24 w-24 absolute top-20 right-1/2 rounded-full border border-violet-500 bg-white pt-1"
        />
        <h1 className="text-6xl text-center pt-24 font-semibold pb-12">
          Thanks for taking the time to reach out. How can I help you today?
        </h1>

        <div className="max-w-xl mx-auto">
          <div className="flex gap-8">
            <div className="w-full">
              <h1 className="text-xl font-semibold text-gray-500 pb-4 ">
                Name
              </h1>
              <input
                required
                title="Name"
                type="text"
                className="h-12 w-full border border-gray-400 rounded-md shadow-sm"
              />
            </div>

            <div className="w-full">
              <h1 className="text-xl font-semibold text-gray-500 pb-4 ">
                Email
              </h1>
              <input
                required
                title="Name"
                type="email"
                className="h-12 w-full border border-gray-400 rounded-md shadow-sm"
              />
            </div>
          </div>

          <h1 className="text-xl font-semibold text-gray-500 pt-4 pb-4">
            Message
          </h1>
          <textarea className="h-36 w-full border border-gray-400 rounded-md shadow-sm" />
        </div>

        <div className="flex justify-center items-center py-8">
          <button
            className="px-6 py-2 border-2
           border-violet-500 rounded-full text-lg font-semibold
           text-violet-600 hover:border-none hover:text-white hover:bg-violet-500 shadow-sm
            shadow-violet-300 hover:shadow-lg hover:shadow-violet-500"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default contact;
