/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

function HeroComponent() {
  return (
    <div className="">
      <h1 className="text-center text-5xl font-bold">
        Designer, Front-end Developer & Mentor
      </h1>
      <h2 className="text-center text-xl font-semibold py-8 text-gray-600">
        I design and code beautifully simple things, and I love what I do.
      </h2>

      <div className="flex justify-center py-8">
        <div className=" border-4 border-violet-500 rounded-full pt-1 ">
          <img src="/hero.svg" className="h-48 w-48 rounded-full" alt="" />
        </div>
      </div>

      <div className="flex justify-center h-96">
        <img src='/hero4.svg' className="w-full -my-48" />
      </div>
    </div>
  );
}

export default HeroComponent;
