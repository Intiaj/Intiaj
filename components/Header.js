/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto py-8">
      <div>
        <img
          src="/logoi.png"
          className="h-16 w-16 hover:cursor-pointer hover:brightness-95 rounded-full"
          alt=""
          onClick={() => router.push("/")}
        />
      </div>

      <div className="">
        <button className="text-lg text-violet-400 font-medium">
          Start a project
        </button>
        <button
          onClick={() => router.push("contact")}
          className="text-lg text-violet-700 mx-4 
          
        py-1 px-4 border border-violet-700 rounded-full shadow-md shadow-violet-300 hover:text-white hover:bg-violet-600"
        >
          Say Hello
        </button>
      </div>
    </div>
  );
}

export default Header;
