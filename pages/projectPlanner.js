/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function ProjectPlanner() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [typeProject, setTypeProject] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lkh088d",
        "template_pukab9s",
        e.target,
        "XR-GeDKFtbOoV9UOf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="max-w-7xl mx-auto relative mb-36">
      <Header home="false" />

      <div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
          className="py-12 font-bold md:text-3xl text-2xl text-center lg:text-4xl"
        >
          I’m excited to learn about your project.
          <br /> Ready to get started?
        </motion.h1>

        {submitted ? (
          <div className="bg-green-300 flex justify-center items-center px-8 py-2 my-12 rounded-full max-w-fit mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <h1 className="pl-2 text-xl font-semibold">Submitted</h1>
          </div>
        ) : null}

        <form
          onSubmit={sendEmail}
          className="md:max-w-2xl max-w-xs mx-auto grid grid-cols-2 gap-8"
        >
          <div>
            <h1 className="text-xl py-4 text-gray-500">Name</h1>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="from_name"
              className="border w-full h-12 rounded-md"
            />
          </div>

          <div>
            <h1 className="text-xl py-4 text-gray-500">Email</h1>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="from_email"
              className="border w-full h-12 rounded-md"
            />
          </div>

          <div>
            <h1 className="text-xl py-4 text-gray-500">Type of project</h1>
            <select
              onChange={(e) => setTypeProject(e.target.value)}
              className="w-full h-12 bg-white border rounded-md"
              name="type_project"
            >
              <option value="Responive designs">Responive designs</option>
              <option value="Web App">Web App</option>
              <option value="Mobile App">Mobile App</option>
              <option value="other">Other's</option>
            </select>
          </div>

          <div>
            <h1 className="text-xl py-4 text-gray-500">Budget</h1>
            <select
              name="budget"
              onChange={(e) => setBudget(e.target.value)}
              className="w-full h-12 bg-white border rounded-md"
            >
              <option value="300-1000">$300 - $1000</option>
              <option value="1000-5000">$1000 - $5000</option>
              <option value="5000+">$5000+</option>
            </select>
          </div>

          <div className="col-span-2">
            <h1 className="text-xl py-4 text-gray-500">Additional details</h1>
            <textarea
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-36 border rounded-md"
            />
          </div>

          <motion.input
            type={"submit"}
            value="Submit"
            animate={{
              y: [0, -15, 0, -15, 0, -15, 0],
              transition: { duration: 1.5 },
            }}
            className="px-6 py-2 border-2
           border-violet-500 rounded-full text-lg font-semibold
           text-violet-600 hover:border-none hover:text-white hover:bg-violet-500 shadow-sm
            shadow-violet-300 hover:shadow-lg hover:shadow-violet-500 col-span-2 mx-auto"
          />
        </form>
      </div>
    </div>
  );
}

export default ProjectPlanner;
