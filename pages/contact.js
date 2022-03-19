import React, { useState } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lkh088d",
        "template_1kvameo",
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
    <div>
      <Header />

      <hr className="max-w-7xl mx-auto" />

      <main className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5, delay: 1 } }}
          className="py-12 font-bold md:text-3xl text-2xl text-center lg:text-4xl"
        >
          Thanks for taking the time to reach out.
          <br /> How can I help you today?
        </motion.h1>

        <form onSubmit={sendEmail} className="">
          <div className="flex gap-4 justify-center items-center mx-4">
            <div className="flex flex-col w-1/3">
              <label className="text-md font-bold text-gray-500">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                className="border py-2 rounded "
                type="text"
                name="from_name"
                required
              />
            </div>

            <div className="flex flex-col w-1/3">
              <label className="text-md font-bold text-gray-500">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="border py-2 rounded "
                name="from_email"
                type="email"
                required
              />
            </div>
          </div>

          <div className="max-w-xs md:max-w-xl lg:max-w-3xl mx-auto">
            <div className="flex flex-col mx-3 py-4">
              <label className="text-md font-bold text-gray-500">Message</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                required
                className="border rounded"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <input
              type="submit"
              value={"Send"}
              name=""
              className="text-xl font-bold text-white bg-fuchsia-400 px-8 py-2
               rounded-full shadow-lg hover:brightness-90 cursor-pointer shadow-fuchsia-300"
            />
          </div>
        </form>
      </main>
    </div>
  );
}

export default Contact;
