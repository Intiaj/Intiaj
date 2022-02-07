/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../components/Header";

function projectPlanner() {
  return (
    <div className="max-w-7xl mx-auto relative mb-36">
      <Header />
      <hr />
      <div>
        <img
          alt=""
          src="hero.svg"
          className="h-24 w-24 absolute top-20 right-1/2 rounded-full border border-violet-500 bg-white pt-1"
        />

        <h1 className="text-6xl text-center pt-24 font-semibold pb-12">
          I’m excited to learn about your project. Ready to get started?
        </h1>

        <div className="max-w-2xl mx-auto grid grid-cols-2 gap-8">
          <div>
            <h1 className="text-xl py-4 text-gray-500">Name</h1>
            <input type="text" className="border w-full h-12 rounded-md" />
          </div>

          <div>
            <h1 className="text-xl py-4 text-gray-500">Email</h1>
            <input type="email" className="border w-full h-12 rounded-md" />
          </div>

          <div>
            <h1 className="text-xl py-4 text-gray-500">Type of project</h1>
            <select className="w-full h-12 bg-white border rounded-md">
              <option value="Responive designs">Responive designs</option>
              <option value="Web App">Web App</option>
              <option value="Mobile App">Mobile App</option>
              <option value="other">Other's</option>
            </select>
          </div>

          <div>
            <h1 className="text-xl py-4 text-gray-500">Budget</h1>
            <select className="w-full h-12 bg-white border rounded-md">
              <option value="300-1000">$300 - $1000</option>
              <option value="1000-5000">$1000 - $5000</option>
              <option value="5000+">$5000+</option>
            </select>
          </div>

          <div className="col-span-2">
            <h1 className="text-xl py-4 text-gray-500">Additional details</h1>
            <textarea className="w-full h-36 border rounded-md" />
          </div>

          <button
            className="px-6 py-2 border-2
           border-violet-500 rounded-full text-lg font-semibold
           text-violet-600 hover:border-none hover:text-white hover:bg-violet-500 shadow-sm
            shadow-violet-300 hover:shadow-lg hover:shadow-violet-500 col-span-2 mx-auto"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default projectPlanner;
