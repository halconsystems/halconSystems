import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col py-20 gap-8 px-4 md:px-6 lg:px-12">
      {/* Section Header */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        Success Stories
      </h1>
      <p className="text-base md:text-lg lg:text-xl w-full md:w-4/5 lg:w-2/3 text-gray-700">
        Explore how we’ve transformed challenges into opportunities, driving
        success for businesses across industries worldwide.
      </p>

      {/* Cards Container */}
      <div
        className="
          flex gap-6 overflow-x-auto no-scrollbar
          lg:grid lg:grid-cols-3 lg:gap-y-10 lg:gap-x-6 lg:overflow-visible
        "
      >
        {/* Card 1 */}
        <div className="min-w-[280px] lg:min-w-0 max-w-sm rounded overflow-hidden py-3 lg:mt-20 transform transition-transform duration-300 hover:scale-105">
          <div className="px-6">
            <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-2 text-primary">
              Streamlined Operations with Custom ERP
            </h2>
            <p className="text-gray-700 mt-3 text-base md:text-lg lg:text-xl text-secondary">
              Halcon delivered exactly what we needed—a scalable and secure ERP
              system that streamlined our operations. Their team’s professionalism
              and expertise were evident every step of the way.
            </p>
            <p className="text-[#F39C12] text-sm md:text-base lg:text-lg mt-5 font-semibold">
              Mwalid — Founder, FinTech Startup
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="min-w-[280px] lg:min-w-0 max-w-sm rounded overflow-hidden py-3 lg:mt-20 transform transition-transform duration-300 hover:scale-105">
          <div className="px-6">
            <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-2 text-primary">
              MVP Delivered Ahead of Schedule
            </h2>
            <p className="text-gray-700 mt-3 text-base md:text-lg lg:text-xl text-secondary">
              As a startup, we were looking for a reliable partner to build our
              MVP. Halcon exceeded our expectations, delivering a bug-free product
              ahead of schedule. Their team felt like an extension of ours!
            </p>
            <p className="text-[#F39C12] text-sm md:text-base lg:text-lg mt-8 font-semibold">
              Mwalid — Founder, FinTech Startup
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="min-w-[280px] lg:min-w-0 max-w-sm rounded overflow-hidden py-3 lg:mt-20 transform transition-transform duration-300 hover:scale-105">
          <div className="px-6">
            <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-2 text-primary">
              Seamless Legacy System Migration
            </h2>
            <p className="text-gray-700 mt-3 text-base md:text-lg lg:text-xl text-secondary">
              The legacy system migration Halcon handled for us was seamless. We
              were impressed with their attention to detail, proactive
              communication, and ability to complete the project with zero
              downtime.
            </p>
            <p className="text-[#F39C12] text-sm md:text-base lg:text-lg mt-8 font-semibold">
              Industry 4.0 Revolution — SaaS
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-10">
        <Link to="/about">
          <button className="bg-[#517193] text-lg md:text-xl py-3 px-6 text-white rounded-md w-56 md:w-60 transform transition-transform duration-300 hover:scale-105">
            View Our Tech Stack
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success
