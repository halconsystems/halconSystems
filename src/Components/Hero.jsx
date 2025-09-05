import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div className="h-screen backdrop-blur-lg flex flex-col back mb-16">
            <Navbar />
            
            {/* Hero Content */}
            <div className="flex flex-col justify-center gap-6 pt-10 h-full px-4 sm:px-8 md:px-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold leading-tight">
                    Empowering <br />
                    <span className="font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Businesses
                    </span>{" "}
                    Globally
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-700 w-full sm:w-5/6 md:w-3/4 lg:w-2/3">
                    From startups to multinational corporations, we deliver scalable, reliable, and efficient software development to address your unique challenges. Transform your business with expert engineering, seamless migrations, and innovative digital solutions, no matter where you are.
                </p>

                <button className="bg-[#517193] py-3 px-5 sm:px-6 w-fit text-lg sm:text-xl text-white rounded-md flex items-center gap-2 transform transition-transform duration-300 hover:scale-105">
                    Get A Consultation 
                    <img src={assets.buttonArrow} alt="arrow" className="w-5 sm:w-6" />
                </button>
            </div>
        </div>
    )
}

export default Hero
