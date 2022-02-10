/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion"

function Header({ home }) {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto py-8">
      <div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          whileHover={{ opacity: 1, rotateZ: 360, transition: { duration: 1 } }}
          src="/logoi.png"
          className="h-16 w-16 hover:cursor-pointer hover:brightness-95 rounded-full"
          alt=""
          onClick={() => router.push("/")}
        />
      </div>


      {home === 'true' ? <div className="">
        <button onClick={() => router.push('projectPlanner')} className="text-lg text-violet-400 font-medium">
          Start a project
        </button>
        <motion.button
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-15, 0, -15, 0, -15, 0,], opacity: 1, transition: { delay: 0.3, duration: 1.5 } }}
          onClick={() => router.push("contact")}
          className="text-lg text-violet-700 mx-4 
          
        py-1 px-4 border border-violet-700 rounded-full shadow-md shadow-violet-300 hover:text-white hover:bg-violet-600"
        >
          Say Hello
        </motion.button>
      </div> : <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1, rotateY: 360, transition: { delay: 0.3, duration: 1 } }} className="cursor-pointer" onClick={() => router.back()}>

        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-fuchsia-500 cursor-pointer hover:rounded-full hover:text-white hover:bg-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>

        <h1 className="text-center text-sm text-gray-400">Close</h1>

      </motion.div>}
    </div>
  );
}

export default Header;
