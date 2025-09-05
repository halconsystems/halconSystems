import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='back backdrop-blur-lg  pt-16 px-5 border-t-2 border-gray-300'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-9 border-b border-gray-300 pb-8'>

                {/* Logo + Description */}
                <div className='lg:col-span-2'>
                    <div className='flex gap-2 items-center'>
                        <img src={assets.logo} alt="Halcon Systems" className='w-8' />
                        <h1 className='text-2xl lg:text-3xl font-semibold'>Halcon Systems</h1>
                    </div>

                    <p className="text-gray-700 text-base lg:text-xl mt-3">
                        Delivering cutting-edge tech solutions tailored to modern business needs. Our expertise spans across software consultancy, dedicated ERP systems, and Industry 4.0 revolution solutions, empowering enterprises to optimize operations, achieve digital transformation, and unlock sustainable growth.
                    </p>
                </div>

                
                <div className="hidden lg:block">
                    <h2 className="font-semibold text-xl lg:text-2xl mb-2 text-primary">
                        Navigations
                    </h2>
                    <ul className='flex flex-col gap-3 lg:gap-5 text-lg'>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/case-studies'>Case Studies</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/contact'>Contact</Link>
                    </ul>
                </div>

                {/* Services Links (hidden on mobile) */}
                <div className="hidden lg:block">
                    <h2 className="font-semibold text-xl lg:text-2xl mb-2 text-primary">
                        Services
                    </h2>
                    <ul className='flex flex-col gap-3 lg:gap-5 text-lg'>
                        <p>Big Data & Ai</p>
                        <p>ERP Implementation</p>
                        <p>Software Consultancy</p>
                        <p>Product Consultancy</p>
                        <p>OEM/3PL Integration</p>
                        <p>Software Development</p>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <p className='text-sm lg:text-lg py-4 text-center lg:text-left'>
                © Halcon Systems 2025 | All Rights Reserved
            </p>
        </div>
    )
}

export default Footer
