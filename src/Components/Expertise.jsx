import React from 'react'
import { assets } from '../assets/assets'

const Expertise = () => {
    return (
        <div className="min-h-screen flex flex-col py-20 gap-8 px-4 md:px-6 lg:px-12">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Our Expertise</h1>
            <p className="text-base md:text-lg lg:text-xl w-full md:w-4/5 lg:w-2/3 text-gray-700">
                We specialize in delivering tailored solutions to address your business needs across these key areas:
            </p>

            {/* Cards Section */}
            <div
                className="
                    flex gap-6 overflow-x-auto no-scrollbar
                    md:flex md:gap-6 md:overflow-x-auto
                    lg:grid lg:grid-cols-3 lg:gap-y-6 lg:overflow-visible
                "
            >
                {/* Card 1 */}
                <div className="min-w-[280px] lg:min-w-0 max-w-sm rounded overflow-hidden py-3 transform transition-transform duration-300 hover:scale-105">
                    <img className="w-full" src={assets.product} alt="Product Consultancy" />
                    <div className="px-6">
                        <div className="font-bold text-2xl mb-2 text-primary">Product Consultancy</div>
                        <p className="text-gray-700 text-base text-seconday">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                        <button className="flex gap-2 text-xl mt-5 text-[#F39C12]">
                            Learn More <img src={assets.yellowArrow} className="w-5" alt="" />
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="min-w-[280px] lg:min-w-0 max-w-sm rounded overflow-hidden py-3 lg:mt-20 transform transition-transform duration-300 hover:scale-105">
                    <img className="w-full" src={assets.bigData} alt="Big Data & AI" />
                    <div className="px-6">
                        <div className="font-bold text-2xl mb-2 text-primary">Big Data & AI</div>
                        <p className="text-gray-700 text-base text-seconday">
                            Leverage Big Data and AI to seamlessly modernize outdated systems, unlocking new levels of
                            efficiency, scalability, and performance.
                        </p>
                        <button className="flex gap-2 text-xl mt-5 text-[#F39C12]">
                            Learn More <img src={assets.yellowArrow} className="w-5" alt="" />
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="min-w-[280px] lg:min-w-0 max-w-sm rounded overflow-hidden py-3 transform transition-transform duration-300 hover:scale-105">
                    <img className="w-full" src={assets.oem} alt="OEM Integration" />
                    <div className="px-6">
                        <div className="font-bold text-2xl mb-2 text-primary">OEM Integration</div>
                        <p className="text-gray-700 text-base text-seconday">
                            Delivering OEM integration solutions that connect systems, optimize workflows, and boost
                            operational efficiency.
                        </p>
                        <button className="flex gap-2 text-xl mt-5 text-[#F39C12]">
                            Learn More <img src={assets.yellowArrow} className="w-5" alt="" />
                        </button>
                    </div>
                </div>
                {/* Keep original button in grid for desktop */}
                <div className="hidden col-span-3   lg:flex justify-center mt-8">
                    <button className="bg-[#517193] text-xl py-3 px-6 text-white rounded-md flex gap-2 items-center transform transition-transform duration-300 hover:scale-105">
                        Get A Consultation <img src={assets.buttonArrow} alt="" className="w-6" />
                    </button>
                </div>
                {/* Card 4 */}
                <div className="min-w-[280px] lg:min-w-0 max-w-sm rounded overflow-hidden py-3">
                    <img className="w-full" src={assets.engineering} alt="Engineering Consultancy" />
                    <div className="px-6">
                        <div className="font-bold text-2xl mb-2 text-primary">Engineering Consultancy</div>
                        <p className="text-gray-700 text-base text-seconday">
                            Overcome challenges and foster innovation with expert guidance from our software engineers &
                            professionals.
                        </p>
                        <button className="flex gap-2 text-xl mt-5 text-[#F39C12]">
                            Learn More <img src={assets.yellowArrow} className="w-5" alt="" />
                        </button>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="min-w-[280px] lg:min-w-0 max-w-sm rounded overflow-hidden py-3  lg:mt-20">
                    <img className="w-full" src={assets.erp} alt="ERP Implementation" />
                    <div className="px-6">
                        <div className="font-bold text-2xl mb-2 text-primary">ERP Implementation</div>
                        <p className="text-gray-700 text-base text-seconday">
                            Deploy robust, customized ERP solutions to optimize and streamline your operations.
                        </p>
                        <button className="flex gap-2 text-xl mt-5 text-[#F39C12]">
                            Learn More <img src={assets.yellowArrow} className="w-5" alt="" />
                        </button>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="min-w-[280px] lg:min-w-0 max-w-sm rounded overflow-hidden py-3">
                    <img className="w-full" src={assets.softwareDev} alt="Software Development" />
                    <div className="px-6">
                        <div className="font-bold text-2xl mb-2 text-primary">Software Development</div>
                        <p className="text-gray-700 text-base text-seconday">
                            Transforming complex business requirements into tailored software systems that enhance
                            performance, efficiency, and decision-making.
                        </p>
                        <button className="flex gap-2 text-xl mt-5 text-[#F39C12]">
                            Learn More <img src={assets.yellowArrow} className="w-5" alt="" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Button (always below on sm & md, inside grid for lg as before) */}
            <div className="flex justify-center mt-8 lg:hidden">
                <button className="bg-[#517193] text-lg md:text-xl py-3 px-6 text-white rounded-md flex gap-2 items-center transform transition-transform duration-300 hover:scale-105">
                    Get A Consultation <img src={assets.buttonArrow} alt="" className="w-5" />
                </button>
            </div>


        </div>
    )
}

export default Expertise
