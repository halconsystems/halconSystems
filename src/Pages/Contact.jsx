import React from 'react'
import CTA from '../Components/CTA'
import { assets } from '../assets/assets'
import Navbar from '../Components/Navbar'

const Contact = () => {
  return (
    <>
      <section className=" back  backdrop-blur-lg to-[#fff] relative">
        <Navbar/>
      <div className="max-w-7xl  flex flex-col lg:flex-row items-center justify-start  px-6">

        {/* Left Heading */}
        <div className="text-center md:text-left">
          <h1 className="inline text-5xl md:text-8xl font-bold leading-snug">
            <span className="text-gray-900">Let&apos;s</span> <br />
            <span className="text-red-500">Discuss</span>
          </h1>
        </div>

        {/* Middle Image */}
        <div className="relative  hidden lg:flex justify-center items-center">
          <div className="p-2  ">
          <img
              src={assets.letsdiscuss}
              alt="Contact"
              className="w-full h-full object-cover "
            />
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white/10 backdrop-blur-md border border-red-200 lg:absolute lg:right-0  rounded-xl shadow p-6 md:w-[80%] lg:w-[400px]">
          <p className="text-lg md:text-xl font-medium text-red-600 mb-3">
            At Halcon Systems, we thrive on challenges and are passionate about
            delivering exceptional results.
          </p>
          <p className="text-sm md:text-base text-gray-700 mb-6">
            With our experienced team of IT professionals, we have the expertise
            & knowledge to tackle projects of varying sizes.
          </p>
          <button className="bg-[#517193] px-6 py-2 text-white rounded-md shadow hover:bg-[#3d596f] transition">
            Contact us
          </button>
        </div>
      </div>
    </section>
    
      <section className="py-12 ">
      <div className="w-full mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Form */}
        <div className='w-full'>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Write <span className="text-yellow-500">Us!</span>
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Good Name here"
              className="w-full border bg-white border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full border bg-white border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="tel"
              placeholder="+92 000-000-0000"
              className="w-full border bg-white border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              placeholder="Enter Your Subject"
              className="w-full border bg-white border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              rows="4"
              placeholder="Enter Your Message"
              className="w-full border bg-white border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-[#517193] text-white text-sm rounded-lg shadow hover:bg-gray-900 transition"
            >
              Contact Us
            </button>
          </form>
        </div>

        {/* Right Side Image */}
        <div className="relative hidden sm:flex justify-center ">
          <div className="relative">
            {/* Oval Image */}
            <img
              src={assets.formimg}
              alt="Contact"
              className="w-80   h-full object-cover rounded-full shadow-lg border-4 border-dashed p-2 border-[#FF5E27]"
            />

            {/* Badge */}
            <div className="absolute top-4 right-4 bg-white border-2 border-[#FF5E27] text-[#FF5E27] w-14 h-14 flex items-center justify-center rounded-full font-bold text-4xl">
              % 
            </div>
          </div>
        </div>
      </div>
    </section>
    
      <CTA />
    </>
  )
}

export default Contact