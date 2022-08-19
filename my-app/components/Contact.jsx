import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <img
              className="rounded-xl hover:scale-105 ease-in duration-300"
              src="../assets/JHU.png"
              alt=""
            />
            <div>
              <h2 className="py-2">Troy Bohrer</h2>
              <p>Full Stack Developer</p>
              <p>
                I am available for full-time work. Contact me and let's talk.
              </p>
            </div>
            <div>
              <p className="uppercase pt-8">Connect With Me</p>
              <div className="flex items-center justify-between py-4">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <Link href="http://www.linkedin.com/in/troy-bohrer">
                    <FaLinkedinIn />
                  </Link>{" "}
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <Link href="https://github.com/TroyBohrer8">
                    <FaGithub />
                  </Link>{" "}
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <Link href="https://www.linkedin.com/in/troy-bohrer">
                    <FaTwitter />
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name:</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  {/* Phone Number */}
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number:
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                {/* Email */}
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Email:</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name=""
                    id=""
                  />
                </div>
                {/* Message */}
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Message:</label>
                  <textarea
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    rows="10"
                  />
                </div>
                {/* Button */}
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Scroll to Top */}
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-gray" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
