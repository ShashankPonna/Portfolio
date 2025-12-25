import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { motion, easeOut } from "framer-motion";
const Contact = () => {
  const form = useRef();
const [status, setStatus] = useState("idle"); 

const sendEmail = (e) => {
  e.preventDefault();
  setStatus("sending");

  emailjs
    .sendForm(
      "service_ifvo8wt",
      "template_gdrpjaw",
      form.current,
      "_aqIAjPm21XsMnVjN"
    )
    .then(() => {
      setStatus("success");
      form.current.reset();
    })
    .catch(() => {
      setStatus("error");
    });
};


  return (
    <>
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="flex flex-col gap-20 py-20 lg:px-40  text-white"
      >
        <div className="flex justify-center">
          <h1 className="text-4xl md:text-6xl border-b-4 border-blue-500 font-bold">
            Contact
          </h1>
        </div>

        <div className="grid place-items-center mx-6 px-4">
          <div
            className="w-full max-w-lg p-4 md:p-8 border-1 border-zinc-300 
                  bg-blue-950/40 rounded-lg shadow-lg"
          >
            <form
              className="flex flex-col gap-4 md:gap-6"
              ref={form}
              onSubmit={sendEmail}
            >
              <h2 className="text-center font-semibold text-2xl tracking-tight">
                Connect With Me
              </h2>

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-3 py-3 rounded-md bg-zinc-800 
                   border border-zinc-300/20 focus:outline-none 
                   focus:border-blue-500"
              />

              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-3 py-3 rounded-md bg-zinc-800 
                   border border-zinc-300/20 focus:outline-none 
                   focus:border-blue-500"
              />

              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className="w-full px-3 py-3 rounded-md bg-zinc-800 
                   border border-zinc-300/20 focus:outline-none 
                   focus:border-blue-500"
              />

              <textarea
                rows="5"
                name="message"
                required
                placeholder="Message"
                className="w-full px-3 py-3 rounded-md bg-zinc-800 
                   border border-zinc-300/20 focus:outline-none 
                   focus:border-blue-500 resize-none "
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="py-4 rounded-md font-semibold
             bg-linear-to-r from-blue-700 via-blue-500 to-blue-700
             disabled:opacity-50 hover:brightness-110 transition duration-300"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-green-400 text-center font-medium">
                  ✅ Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400 text-center font-medium">
                  ❌ Failed to send message. Try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
