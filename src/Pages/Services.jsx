import React from "react";
import { staff } from '../assets/assets'
import Navbar from "../Components/Navbar";

const staffData = [
  { title: "Frontend Engineers", icon: <img src={staff.FrontEnd} alt="Frontend" className="w-12 h-12" /> },
  { title: "Angular Developers", icon: <img src={staff.Angular} alt="Angular" className="w-12 h-12" /> },
  { title: "AI and ML Engineers, Deep Learning/Machine Vision/NLP", icon: <img src={staff.Ai} alt="AI" className="w-12 h-12" /> },
  { title: "Fullstack Engineers", icon: <img src={staff.FullStack} alt="Fullstack" className="w-12 h-12" /> },
  { title: "DevOps / Database Engineers", icon: <img src={staff.DevOps} alt="DevOps" className="w-12 h-12" /> },
  { title: "Data Scientist / Data Engineers", icon: <img src={staff.DataScience} alt="DataScience" className="w-12 h-12" /> },
  { title: "UI/UX Engineers", icon: <img src={staff.Ui} alt="UI/UX" className="w-12 h-12" /> },
  { title: "PHP Developers", icon: <img src={staff.Php} alt="PHP" className="w-12 h-12" /> },
  { title: "Project Managers", icon: <img src={staff.ProjectManager} alt="ProjectManager" className="w-12 h-12" /> },
  { title: "QA Engineers", icon: <img src={staff.QaEngineer} alt="QA" className="w-12 h-12" /> },
  { title: "WordPress CMS Developers", icon: <img src={staff.Wordpress} alt="Wordpress" className="w-12 h-12" /> },
  { title: "Business Analyst", icon: <img src={staff.BusinessAnalysis} alt="BusinessAnalysis" className="w-12 h-12" /> },
  { title: "Product Designers", icon: <img src={staff.ProductDesigner} alt="ProductDesigner" className="w-12 h-12" /> },
  { title: "Mobile App Developers", icon: <img src={staff.Appdev} alt="iOS/Android" className="w-12 h-12" /> },
  { title: "Information Security Engineers", icon: <img src={staff.Ise} alt="Security" className="w-12 h-12" /> },
  { title: "Database Admin", icon: <img src={staff.DataBaseIcon} alt="Database" className="w-12 h-12" /> },
  { title: "Application Security Engineers", icon: <img src={staff.ApplicationSecurity} alt="App Security" className="w-12 h-12" /> },
  { title: "iOS and Android Developers", icon: <img src={staff.Appdev} alt="iOS/Android" className="w-12 h-12" /> },
  { title: "Solution Architects", icon: <img src={staff.SolutionArchitect} alt="SolutionArchitect" className="w-12 h-12" /> },
  { title: "Tech Leads / Team Leads", icon: <img src={staff.TeachLead} alt="TechLead" className="w-12 h-12" /> },
  { title: "Golang Dev", icon: <img src={staff.Go} alt="Golang" className="w-12 h-12" /> },
];

const Services = () => {
  return (
    <>
      <div className="back backdrop-blur-md">
        <Navbar />
        <div className='h-screen  flex flex-col justify-center bg- gap-6 lay1 pt-10 backdrop-blur-lg ' >

          <div className="h-screen lay2  flex flex-col justify-center items-center text-center gap-6">
            <h1 className="inline   text-4xl md:text-6xl">Halcon Systems<br />
              From Idea to Product
            </h1>
            <button className="py-3 px-5 w-40  rounded-lg text-white text-lg bg-red-400">Get Started</button>
          </div>
        </div>
      </div>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <div className="mb-10">
            <p className="text-2xl font-semibold text-yellow-500">Specialization</p>
            <h2 className="text-5xl font-bold  leading-snug">
              We Provide <br /> <span className="">Specialized Staff</span>
            </h2>
          </div>

          {/* Grid Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-20">
            {staffData.map((staff, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4 border-l-12 border-[#F2BC1C] hover:shadow-lg transition"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-md">
                  {staff.icon}
                </div>
                <p className="text-[#16205F] font-medium text-lg">{staff.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};


export default Services