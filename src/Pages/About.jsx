import React, { useState, useRef } from 'react';
import { assets, techStack } from '../assets/assets';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from "lucide-react";
import CTA from '../Components/CTA';
import Navbar from '../Components/Navbar';

const About = () => {
  const categories = {
    "Frontend": [
      { name: "JavaScript", icon: techStack.js },
      { name: "React", icon: techStack.react },
      { name: "Vue", icon: techStack.vue },
      { name: "Angular (E)", icon: techStack.e },
      { name: "HTML", icon: techStack.html },
      { name: "CSS", icon: techStack.css },
    ],
    "Backend": [
      { name: "Node.js", icon: techStack.node },
      { name: "Java", icon: techStack.java },
      { name: "Python", icon: techStack.python },
      { name: "PHP", icon: techStack.php },
      { name: "C#", icon: techStack.csharp },
      { name: "C++", icon: techStack.cpp },
      { name: "Go", icon: techStack.go },
    ],
    "Frameworks": [
      { name: "Laravel", icon: techStack.laravel },
      { name: "Symfony", icon: techStack.symfony },
      { name: "Django", icon: techStack.django },
      { name: "Express", icon: techStack.express },
      { name: "Spring", icon: techStack.spring },
    ],
    "Mobile App": [
      { name: "React Native", icon: techStack.native },
      { name: "Flutter", icon: techStack.flutter },
      { name: "Kotlin", icon: techStack.kotlin },
      { name: "Ionic", icon: techStack.ionic },
      { name: "iOS", icon: techStack.ios },
    ],
    "DataBase": [
      { name: "MySQL", icon: techStack.mysql },
      { name: "PostgreSQL", icon: techStack.postgre },
      { name: "SQL Server", icon: techStack.sqlserver },
      { name: "MariaDB", icon: techStack.mariadb },
      { name: "Redis", icon: techStack.redis },
      { name: "Oracle", icon: techStack.oracle },
    ],
    "Google": [],
    "Data Science": [],
    "Machine Learning": [],
    "DevOps": [],
    "CMS": [],
    "ECommerce": [],
    "Security": []
  };

  // Flatten all categories for "All"
  const allStacks = Object.values(categories).flat();
  const [activeCategory, setActiveCategory] = useState("All");

  const getStacks = () => {
    if (activeCategory === "All") return allStacks;
    return categories[activeCategory] || [];
  };

  const timelineData = [
    {
      year: "2017",
      title: "The Beginning",
      description:
        "Halcon Systems was founded with a vision to provide innovative engineering solutions to startups, focusing on reliability and affordability.",
    },
    {
      year: "2018",
      title: "Expanding Expertise",
      description:
        "We diversified our offerings to include legacy system migrations and ERP implementations, catering to small and medium-sized businesses.",
    },
    {
      year: "2019",
      title: "Going Global",
      description:
        "Halcon Systems expanded its reach by serving clients across multiple countries, building strong partnerships with multinational corporations.",
    },
    {
      year: "2020",
      title: "Autonomous ERP Launched",
      description:
        "We introduced fully autonomous development teams, enabling clients to scale their projects with ease and efficiency.",
    },
    {
      year: "2021",
      title: "Embraced Industrial Revolution 4.0",
      description:
        "To address growing digital threats, we added comprehensive cybersecurity services, safeguarding our clients’ assets worldwide.",
    },
    {
      year: "2023",
      title: "300+ Projects Completed",
      description:
        "With over 300 successful projects delivered globally, we solidified our reputation as a leading provider of tailored engineering solutions.",
    },
    {
      year: "2025",
      title: "A Trusted Partner",
      description:
        "Halcon Systems continues to innovate, serving startups, SMBs, and enterprises with a focus on scalable solutions, global collaboration, and unmatched reliability.",
    }
  ];

 
  const logos = [
    "/logos/logo1.png",
    "/logos/logo2.svg",
    "/logos/logo3.svg",
    "/logos/logo4.svg",
    "/logos/logo5.svg",
    "/logos/logo6.svg",
    "/logos/logo7.png",
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
<div className="min-h-screen backdrop-blur-md flex flex-col gap-6 back">
  <Navbar />
  {/* Hero Section */}
  <div className="h-[90vh] flex flex-col justify-center gap-6 px-4 sm:px-6 lg:px-0">
    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-semibold leading-snug">
      Great{" "}
      <span className="font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
        Product
      </span>{" "}
      is
      <br />
      Built By Great{" "}
      <span className="font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
        Teams
      </span>
    </h1>
    <p className="text-base sm:text-lg w-full lg:w-2/3">
      We help build and manage a team of world-class developers to bring your
      vision to life, driving Innovation and empowering businesses worldwide.
      With decades of experience and a commitment to excellence, we deliver
      tailored solutions that help businesses, from startups to global
      enterprises, achieve their goals.
    </p>

    <button className="bg-[#517193] py-3 px-5 sm:px-6 w-fit text-base sm:text-lg lg:text-xl text-white rounded-md flex items-center gap-2 transform transition-transform duration-300 hover:scale-105">
      Get A Consultation
      <img src={assets.buttonArrow} alt="arrow" className="w-5 sm:w-6" />
    </button>
  </div>
</div>

{/* Our Story + Timeline */}
<div className="min-h-screen my-8 flex flex-col gap-20 px-4 sm:px-6 lg:px-0">
  {/* Our Story */}
  <div className="w-full lg:w-2/3">
    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-semibold">
      Our Story
    </h1>
    <p className="text-base sm:text-lg mt-6 lg:mt-8">
      Founded on the principles of innovation and collaboration, Halcon Systems
      was created to bridge the gap between complex digitalization challenges
      and simplified solutions. Over the years, we’ve grown into a global team
      of experts passionate about helping businesses scale, innovate, and thrive
      in an ever-changing digital landscape.
    </p>
  </div>

  {/* Timeline */}
  <div className="relative w-full">
    {/* Orange Line */}
    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[3px] bg-orange-500 h-full hidden lg:block"></div>
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-16">
      {timelineData.map((item, index) => (
        <React.Fragment key={index}>
          {/* Mobile + Tablet: single column */}
          <div className="lg:hidden flex items-start gap-4">
            <div className="flex-shrink-0 w-3 h-3 mt-2 bg-orange-500 rounded-full"></div>
            <div>
              <span className="text-sm font-bold text-gray-800">{item.year}</span>
              <h3 className="text-xl sm:text-2xl font-semibold mt-1">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          </div>

          {/* Desktop: alternate sides */}
          {index % 2 !== 0 ? (
            <div className="hidden lg:flex col-start-1 w-full py-3 text-right justify-end items-center gap-5">
              <div className="w-2/3">
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-3">{item.description}</p>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-sm font-bold text-gray-800">
                  {item.year}
                </span>
                <div className="w-8 h-2 bg-orange-500"></div>
              </div>
            </div>
          ) : (
            <div className="hidden lg:block col-start-1"></div>
          )}

          {index % 2 === 0 ? (
            <div className="hidden lg:flex col-start-2 w-full py-3 justify-start items-center gap-5">
              <div className="flex gap-2 items-center">
                <div className="w-8 h-2 bg-orange-500"></div>
                <span className="mr-2 text-sm font-bold text-gray-800">
                  {item.year}
                </span>
              </div>
              <div className="w-2/3">
                <h3 className="text-2xl lg:text-3xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-3">{item.description}</p>
              </div>
            </div>
          ) : (
            <div className="hidden lg:block col-start-2"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
</div>

      {/* What We Stand For */}
<div className="min-h-screen flex flex-col py-20 gap-8 px-4 md:px-6 lg:px-12">
  {/* Section Header */}
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
    What We Stand For
  </h1>
  <p className="text-base md:text-lg lg:text-xl w-full md:w-4/5 lg:w-2/3 text-gray-700">
    Our unwavering values shape our approach to delivering impactful solutions.
  </p>

  {/* Cards Container */}
  <div
    className="
      flex gap-6 overflow-x-auto no-scrollbar
      lg:grid lg:grid-cols-4 lg:gap-y-10 lg:gap-x-6 lg:overflow-visible
    "
  >
    {/* Card 1 */}
    <div className="min-w-[240px] lg:min-w-0 max-w-sm rounded overflow-hidden py-3 transform transition-transform duration-300 hover:scale-105">
      <img className="w-full" src={assets.innovation} alt="Innovation" />
      <div className="px-6">
        <div className="font-bold text-xl md:text-2xl mb-2 text-primary">Innovation</div>
        <p className="text-gray-700 text-sm md:text-base">
          Pioneering solutions tailored to your unique needs.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="min-w-[240px] lg:min-w-0 max-w-sm rounded overflow-hidden py-3 transform transition-transform duration-300 hover:scale-105">
      <img className="w-full" src={assets.reliability} alt="Reliability" />
      <div className="px-6">
        <div className="font-bold text-xl md:text-2xl mb-2 text-primary">Reliability</div>
        <p className="text-gray-700 text-sm md:text-base">
          Delivering on promises with precision and excellence.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="min-w-[240px] lg:min-w-0 max-w-sm rounded overflow-hidden py-3 transform transition-transform duration-300 hover:scale-105">
      <img className="w-full" src={assets.collaboration} alt="Collaboration" />
      <div className="px-6">
        <div className="font-bold text-xl md:text-2xl mb-2 text-primary">Collaboration</div>
        <p className="text-gray-700 text-sm md:text-base">
          Partnering with clients to achieve shared success.
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="min-w-[240px] lg:min-w-0 max-w-sm rounded overflow-hidden py-3 transform transition-transform duration-300 hover:scale-105">
      <img className="w-full" src={assets.integrity} alt="Integrity" />
      <div className="px-6">
        <div className="font-bold text-xl md:text-2xl mb-2 text-primary">Integrity</div>
        <p className="text-gray-700 text-sm md:text-base">
          Building trust through transparency and accountability.
        </p>
      </div>
    </div>
  </div>
</div>

      {/* Company Logos Carousel */}
      <section className="py-18 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="mb-10 flex items-center justify-between">
            <div>
              <p className="text-[#F39C12] text-lg LG:TEXT-2XL">Meet the People</p>
              <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold text-gray-900">
                We are Working With
              </h2>
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600 transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Logos Scrollable Row */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-12 scrollbar-hide scroll-smooth "
          >
            {logos.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`company-logo-${idx}`}
                className="h-18 object-contain grayscale hover:grayscale-0 transition flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 ">
          Our Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${activeCategory === "All" ? "bg-yellow-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            All
          </button>
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${activeCategory === category ? "bg-yellow-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {getStacks().map((tech, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center justify-center border hover:shadow-lg transition">
              <img src={tech.icon} alt={tech.name} className="w-30 h-26 mb-2" />
              <p className="text-sm font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="flex items-center justify-center min-h-screen relative overflow-hidden">
        <div className="relative max-w-6xl px-6 text-center">
          <h1 className="text-2xl md:text-5xl font-medium leading-relaxed text-gray-900">
            <span className="text-yellow-500 text-5xl">“</span>
            Our focus is on creating products and services that empower businesses, streamline operations, and foster growth in the digital era.
            <span className="text-yellow-500 text-5xl">”</span>
          </h1>
          <div className="mt-8 text-gray-600 text-lg tracking-wide">
            <p className="font-medium">Raheel Liaquat Malik</p>
            <p className="text-gray-500">Founder, Halcon Systems</p>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <div className="min-h-screen flex flex-col py-20 gap-8 px-4 md:px-6 lg:px-12">
  {/* Section Header */}
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Join Us</h1>
  <p className="text-base md:text-lg lg:text-xl w-full md:w-4/5 lg:w-2/3 text-gray-700">
    Looking for a career where you can innovate and make an impact? ABC Company
    is always on the lookout for passionate individuals to join our growing team.
  </p>

  {/* Cards Container */}
  <div
    className="
      flex gap-6 overflow-x-auto no-scrollbar
      lg:grid lg:grid-cols-3 lg:gap-y-10 lg:gap-x-6 lg:overflow-visible
    "
  >
    {/* Card 1 */}
    <div className="min-w-[240px] lg:min-w-0 max-w-sm rounded overflow-hidden py-3 transform transition-transform duration-300 hover:scale-105">
      <img className="w-full" src={assets.environment} alt="Environment" />
      <div className="px-6">
        <div className="font-bold text-xl md:text-2xl mb-2 text-primary">
          Product Consultancy
        </div>
        <p className="text-gray-700 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <button className="flex gap-2 text-base md:text-xl mt-5 text-[#F39C12]">
          Learn More <img src={assets.yellowArrow} className="w-5" alt="" />
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="min-w-[240px] lg:min-w-0 max-w-sm rounded overflow-hidden py-3 transform transition-transform duration-300 hover:scale-105">
      <img className="w-full" src={assets.flexible} alt="Flexible" />
      <div className="px-6">
        <div className="font-bold text-xl md:text-2xl mb-2 text-primary">
          Big Data & AI
        </div>
        <p className="text-gray-700 text-sm md:text-base">
          Leverage Big Data and AI to seamlessly modernize outdated systems.
        </p>
        <button className="flex gap-2 text-base md:text-xl mt-5 text-[#F39C12]">
          Learn More <img src={assets.yellowArrow} className="w-5" alt="" />
        </button>
      </div>
    </div>

    {/* Card 3 */}
    <div className="min-w-[240px] lg:min-w-0 max-w-sm rounded overflow-hidden py-3 transform transition-transform duration-300 hover:scale-105">
      <img className="w-full" src={assets.recognition} alt="Recognition" />
      <div className="px-6">
        <div className="font-bold text-xl md:text-2xl mb-2 text-primary">
          OEM Integration
        </div>
        <p className="text-gray-700 text-sm md:text-base">
          Delivering OEM integration solutions that connect systems.
        </p>
        <button className="flex gap-2 text-base md:text-xl mt-5 text-[#F39C12]">
          Learn More <img src={assets.yellowArrow} className="w-5" alt="" />
        </button>
      </div>
    </div>
  </div>

  {/* CTA Button */}
  <div className="flex py-5 justify-center">
    <button className="bg-[#517193] text-base md:text-xl py-3 px-6 text-white rounded-md flex gap-5 transform transition-transform duration-300 hover:scale-105">
      Join Our Team <img src={assets.buttonArrow} alt="arrow" />
    </button>
  </div>
</div>


      <CTA />
    </>
  )
}

export default About;
