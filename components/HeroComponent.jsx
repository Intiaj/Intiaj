/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function HeroComponent() {
  return (
    <div className="">
      <motion.h1
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { delay: 0.2, duration: 0.4 },
        }}
        className="text-center text-5xl font-bold"
      >
        Full Stack Developer & Designer
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className="text-center text-xl font-semibold py-8 text-gray-600"
      >
        I design and code beautifully simple things, and I love what I do.
      </motion.h2>

      <div className="flex justify-center py-8">
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            rotateZ: 1080,
            transition: { delay: 0.2, duration: 1.5 },
          }}
          className=" border-4 border-violet-500 rounded-full pt-1 "
        >
          <img src="/hero.svg" className="h-48 w-48 rounded-full" alt="" />
        </motion.div>
      </div>

      <div className="flex justify-center h-96">
        <img src="/hero4.svg" className="w-full -my-48" alt="" />
      </div>
    </div>
  );
}

export default HeroComponent;
