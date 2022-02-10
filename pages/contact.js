/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Header from "../components/Header";
import { motion } from 'framer-motion';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()

    let data = {
      name,
      email,
      message
    }
    if (message !== '' && email !== '' && name !== '') {
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        if (res.status === 200) {
          setSubmitted(true);
          setName('');
          setEmail('');
          setMessage('');
          setTimeout(() => { setSubmitted(false) }, 5000)
        } else {
          console.log('err');
        }

      })
    }
  }


  return (
    <div className="max-w-7xl mx-auto relative">
      <Header home='false' />
      <motion.hr initial={{ x: '-100vw' }} animate={{ x: 0, transition: { duration: 0.7 } }} />

      <div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          alt=""
          src="hero.svg"
          className="h-24 w-24 absolute top-20 right-1/2 rounded-full border border-violet-500 bg-white pt-1"
        />
        <motion.h1 initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }} className="text-6xl text-center pt-24 font-semibold pb-12">
          Thanks for taking the time to reach out. How can I help you today?
        </motion.h1>


        {
          submitted ? <div className="bg-green-300 flex justify-center items-center px-8 py-2 my-12 rounded-full max-w-fit mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <h1 className="pl-2 text-xl font-semibold">Submitted</h1>
          </div> : null
        }

        <div className="max-w-xl mx-auto">
          <div className="flex gap-8">
            <div className="w-full">
              <h1 className="text-xl font-semibold text-gray-500 pb-4 ">
                Name
              </h1>
              <input
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
                required
                title="Email"
                type="email"
                className="h-12 w-full border border-gray-400 rounded-md shadow-sm"
              />
            </div>
          </div>

          <h1 className="text-xl font-semibold text-gray-500 pt-4 pb-4">
            Message
          </h1>
          <textarea onChange={(e) => setMessage(e.target.value)} className="h-36 w-full border border-gray-400 rounded-md shadow-sm" />
        </div>

        <div className="flex justify-center items-center py-8">
          <button
            onClick={(e) => handleSubmit(e)}
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

export default Contact;
