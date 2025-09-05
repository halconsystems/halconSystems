import React from 'react'
import { assets } from '../assets/assets'
import CTA from '../Components/CTA'
import Navbar from '../Components/Navbar'

const Studies = () => {
  return (
    <>
    <div className='min-h-screen  backdrop-blur-md flex flex-col   back'>
          <Navbar/>
            {/* Hero Section */}
      <div className="min-h-screen   flex flex-col justify-center gap-26 px-5 lg:px-16">
        <div>
          <h1 className="text-5xl lg:text-8xl">Focused Industries</h1>
          <p className="text-lg lg:text-2xl mt-5">Proven Success Across Industries</p>
        </div>
        <div>
          <p className="text-lg lg:text-xl lg:w-1/2">
            Explore how Halcon Systems has empowered businesses worldwide with tailored
            engineering solutions that deliver measurable results.
          </p>

          <button className="bg-[#517193] py-3 mt-5 px-5 text-lg font-semibold text-white rounded-md flex gap-2">
            Get A Consultation 
            <img src={assets.buttonArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
    

      {/* Case Studies Section */}
      <div className="min-h-screen pt-10 flex flex-col gap-16 px-5 lg:px-16">
        <div>
          <h1 className="text-4xl lg:text-7xl">Featured Case Studies</h1>
          <p className="text-lg lg:text-xl mt-5">
            Discover how our tailored solutions have transformed businesses across industries.
          </p>
        </div>

        {/* Scrollable Cards on sm & md, grid on lg */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 lg:gap-20 overflow-x-auto lg:overflow-visible pb-5 snap-x snap-mandatory">
          {/* Card 1 */}
          <div className="min-w-[85%] lg:min-w-0 max-w-80 bg-white rounded overflow-hidden py-3 flex flex-col min-h-[85vh] justify-start snap-center">
            <img className="w-80 h-64 lg:h-80 object-cover mb-2" src={assets.case1} alt="" />
            <div className="px-4 lg:px-0">
              <div className="font-semibold text-2xl mb-2 text-primary">
                Seamless Legacy System Migration for a Healthcare Enterprise
              </div>
              <p className="text-gray-600 text-base text-secondary">
                <span className="block text-xl mb-2 text-gray-800">Challenge</span>
                The client’s outdated system was causing inefficiencies, data loss, and scalability
                issues.
              </p>
              <p className="text-gray-600 text-base text-secondary mt-5">
                <span className="block text-xl mb-2">Solution</span>
                ABC Company developed a custom migration strategy, ensuring seamless data transfer,
                modernizing the infrastructure, and integrating the system with advanced analytics
                tools.
              </p>
              <button className="flex gap-2 text-xl mt-12 text-[#F39C12] self-end">
                Read Full Case Study <img src={assets.yellowArrow} className="w-5" alt="" />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="min-w-[85%] lg:min-w-0 w-80 rounded overflow-hidden py-3 min-h-[85vh] flex flex-col justify-start snap-center">
            <img className="w-80 h-64 lg:h-80 object-cover mb-2" src={assets.case2} alt="" />
            <div className="px-4 lg:px-0">
              <div className="font-semibold text-2xl mb-2 text-primary">
                Accelerating MVP Development for a FinTech Startup
              </div>
              <p className="text-gray-600 text-base text-secondary">
                <span className="block text-xl mb-2 text-gray-800">Challenge</span>
                The startup needed a stable MVP within a tight timeline to secure investor funding.
              </p>
              <p className="text-gray-600 text-base text-secondary mt-5">
                <span className="block text-xl mb-2">Solution</span>
                Our automated teams delivered a bug-free MVP in just 6 weeks, using agile
                development practices to meet the client’s requirements.
              </p>
              <div className='self-end mt-18'>
                <button className="flex gap-2 text-xl  text-[#F39C12] ">
                  Read Full Case Study <img src={assets.yellowArrow} className="w-5" alt="" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="min-w-[85%] lg:min-w-0 w-80 rounded overflow-hidden py-3 flex flex-col justify-start snap-center">
            <img className="w-80 h-64 lg:h-80 object-cover mb-2" src={assets.case3} alt="" />
            <div className="px-4 lg:px-6">
              <div className="font-semibold text-2xl mb-2 text-primary">
                Scalable ERP Implementation for a Retail Chain
              </div>
              <p className="text-gray-600 text-base text-secondary">
                <span className="block text-xl mb-2 text-gray-800">Challenge</span>
                The client needed a scalable ERP solution for managing inventory, sales, and
                finances.
              </p>
              <p className="text-gray-600 text-base text-secondary mt-5">
                <span className="block text-xl mb-2">Solution</span>
                ABC Company implemented a customized ERP system, integrating inventory, sales, and
                finance operations into a single streamlined platform.
              </p>
              <button className="flex gap-2 text-xl mt-5 text-[#F39C12] self-end">
                Read Full Case Study <img src={assets.yellowArrow} className="w-5" alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* Swipe hint */}
        <p className="text-center text-gray-500 text-sm lg:hidden">👉 Swipe left to see more</p>
      </div>

      <CTA />
    </>
  )
}

export default Studies
