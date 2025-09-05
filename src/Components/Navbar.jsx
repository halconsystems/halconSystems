import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinkClasses = ({ isActive }) =>
    `transition-colors duration-300 hover:text-[#F39C12] ${
      isActive ? 'text-[#F39C12] font-semibold' : 'text-gray-800'
    }`

  return (
    <div className="py-5 my-5 bg-transparent flex justify-between items-center px-4 md:px-6 lg:px-12">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <img src={assets.logo} alt="Logo" className="w-8" />
        <h1 className="text-2xl md:text-3xl font-semibold">Halcon Systems</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center lg:gap-40 text-lg">
        <ul className="flex items-center gap-6">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
          <NavLink to="/case-studies" className={navLinkClasses}>
            Case Studies
          </NavLink>
          <NavLink to="/services" className={navLinkClasses}>
            Services
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </ul>
        <button className="bg-[#517193] py-2 px-5 text-lg text-white rounded-md flex gap-2 transform transition-transform duration-300 hover:scale-105">
          Get A Consultation
          <img src={assets.buttonArrow} alt="arrow" />
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="lg:hidden text-gray-800"
        onClick={() => setMenuOpen(true)}
      >
        <Menu size={32} />
      </button>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-8 text-2xl font-medium">
          {/* Close Icon */}
          <button
            className="absolute top-6 right-6"
            onClick={() => setMenuOpen(false)}
          >
            <X size={36} />
          </button>

          {/* Nav Links */}
          <NavLink
            to="/"
            className={navLinkClasses}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={navLinkClasses}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/case-studies"
            className={navLinkClasses}
            onClick={() => setMenuOpen(false)}
          >
            Case Studies
          </NavLink>
          <NavLink
            to="/services"
            className={navLinkClasses}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={navLinkClasses}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          {/* CTA Button */}
          <button className="bg-[#517193] py-3 px-6 text-xl text-white rounded-md flex gap-2 transform transition-transform duration-300 hover:scale-105">
            Get A Consultation
            <img src={assets.buttonArrow} alt="arrow" />
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar
