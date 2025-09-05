import React from 'react'
import { assets } from '../assets/assets'
import CountUp from '../animation/CountUp'

const Impact = () => {
  return (
    <>
      {/* Impact Section */}
      <div className="min-h-screen flex flex-col gap-10 px-4 md:px-6 lg:px-12 py-16">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Our Impact</h1>
          <p className="text-lg md:text-xl lg:text-2xl">
            Discover the milestones that define our success.
          </p>
        </div>

        {/* Stats */}
        <div
          className="
            flex gap-6 overflow-x-auto no-scrollbar
            lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible text-center
          "
        >
          <div className="min-w-[250px] lg:min-w-0 transform transition-transform duration-300 hover:scale-105">
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-[#F39C12] font-semibold">
              <CountUp from={0} to={95} separator="," direction="up" duration={1} />%
            </h1>
            <p className="mt-3 text-base md:text-lg lg:text-xl">Client Satisfaction Rate</p>
          </div>

          <div className="min-w-[250px] lg:min-w-0 transform transition-transform duration-300 hover:scale-105">
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-[#F39C12] font-semibold">
              +<CountUp from={0} to={300} separator="," direction="up" duration={0.1} />
            </h1>
            <p className="mt-3 text-base md:text-lg lg:text-xl">Successful Projects Delivered</p>
          </div>

          <div className="min-w-[250px] lg:min-w-0 transform transition-transform duration-300 hover:scale-105">
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-[#F39C12] font-semibold">
              <CountUp from={0} to={40} separator="," direction="up" duration={0.1} />%
            </h1>
            <p className="mt-3 text-base md:text-lg lg:text-xl">Faster MVP Delivery</p>
          </div>

          <div className="min-w-[250px] lg:min-w-0 transform transition-transform duration-300 hover:scale-105">
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-[#F39C12] font-semibold">
              +<CountUp from={0} to={95} separator="," direction="up" duration={0.1} />
            </h1>
            <p className="mt-3 text-base md:text-lg lg:text-xl">Years of Combined Expertise</p>
          </div>
        </div>

        {/* Center Stat */}
        <div className="w-full flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
          <h1 className="text-7xl md:text-8xl lg:text-9xl text-[#F39C12] font-semibold">
            <CountUp from={0} to={99.9} separator="," direction="up" duration={0.1} />%
          </h1>
          <p className="mt-3 text-lg md:text-xl">Uptime Guarantee</p>
          <p className="mt-1 text-lg md:text-xl">24 x 7 x 365 Client Support</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="min-h-screen flex flex-col py-20 gap-8 px-4 md:px-6 lg:px-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Why Choose Us <span className="text-[#F39C12]">?</span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl w-full md:w-4/5 lg:w-2/3 text-gray-700">
          We provide end-to-end solutions to help businesses across industries overcome challenges,
          and innovate growth and operational efficiency to scale.
        </p>

        {/* Cards Section */}
        <div
          className="
            flex gap-6 overflow-x-auto no-scrollbar
            lg:grid lg:grid-cols-3 lg:gap-y-10 lg:gap-x-6 lg:overflow-visible
          "
        >
          {/* Card 1 */}
          <div className="min-w-[280px] lg:min-w-0 max-w-sm rounded overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img className="w-full" src={assets.product} alt="Global Reach" />
            <div className="px-6">
              <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-2 text-primary">
                Global Reach
              </h2>
              <p className="text-gray-700 text-base md:text-lg lg:text-xl text-secondary">
                Serving clients worldwide, from startups to enterprises.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="min-w-[280px] lg:min-w-0 max-w-sm rounded overflow-hidden py-3 lg:mt-20 transform transition-transform duration-300 hover:scale-105">
            <img className="w-full" src={assets.bigData} alt="Scalable Solutions" />
            <div className="px-6">
              <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-2 text-primary">
                Scalable Solutions
              </h2>
              <p className="text-gray-700 text-base md:text-lg lg:text-xl text-secondary">
                Flexible services tailored to businesses of all sizes.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="min-w-[280px] lg:min-w-0 max-w-sm rounded overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img className="w-full" src={assets.oem} alt="Expertise You Can Trust" />
            <div className="px-6">
              <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-2 text-primary">
                Expertise You Can Trust
              </h2>
              <p className="text-gray-700 text-base md:text-lg lg:text-xl text-secondary">
                Decades of experience delivering quality solutions for complex problems.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-[#517193] text-lg md:text-xl py-3 px-6 text-white rounded-md w-56 md:w-60 transform transition-transform duration-300 hover:scale-105">
            Get A Consultation
          </button>
        </div>
      </div>
    </>
  )
}

export default Impact
