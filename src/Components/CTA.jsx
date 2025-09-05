import React from 'react'
import { assets } from '../assets/assets'

const CTA = () => {
    return (
        <div className="min-h-screen flex flex-col py-20 gap-5">
            <h1 className="text-4xl lg:text-6xl font-bold">
                Get in Touch Today
            </h1>
            <p className="text-base lg:text-lg lg:w-2/3">
                Let’s create the future of your business together. Whether you need consulting, development, or robust digital solutions, We are here and love to hear from you.
            </p>

            {/* Wrapper for responsiveness */}
            <div className="w-full">
                {/* Mobile (scrollable row) */}
                <div className="flex gap-6  overflow-x-auto snap-x snap-mandatory lg:hidden pb-4 scrollbar-hide">
                    {/* Card 1 */}
                    <div className="min-w-[250px] transform transition-transform duration-300 hover:scale-105  snap-center flex-shrink-0 rounded overflow-hidden shadow">
                        <img className="w-full" src={assets.emailus} alt="Email" />
                        <div className="px-6">
                            <h2 className="font-semibold text-2xl mb-2 text-primary">
                                Email
                            </h2>
                            <p className="text-gray-700 text-base text-secondary">
                                info@halcon.org.pk
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="min-w-[250px] transform transition-transform duration-300 hover:scale-105 snap-center flex-shrink-0 rounded overflow-hidden shadow">
                        <img className="w-full" src={assets.callus} alt="Call Us" />
                        <div className="px-6">
                            <h2 className="font-semibold text-2xl mb-2 text-primary">
                                Call Us
                            </h2>
                            <p className="text-gray-700 text-base text-secondary">
                                +92 (3) 414-099-099
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="min-w-[250px] transform transition-transform duration-300 hover:scale-105 snap-center flex-shrink-0 rounded overflow-hidden shadow">
                        <img className="w-full" src={assets.visit} alt="Visit Us" />
                        <div className="px-6">
                            <h2 className="font-semibold text-2xl mb-2 text-primary">
                                Visit Us
                            </h2>
                            <p className="text-gray-700 text-base text-secondary mt-3">
                                US: 4131 N. Central Expressway, Dallas, TX 75204<br />
                                Pak: 61E, 7th Comm. DHA Phase 7, Karachi, 75500
                            </p>
                        </div>
                    </div>
                </div>

                {/* Swipe left hint */}
                <p className="lg:hidden text-center text-gray-500 text-sm mt-2">
                    ← Swipe to see more
                </p>

                {/* Desktop Grid */}
                <div className="hidden lg:grid grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="max-w-sm bg-white transform transition-transform duration-300 hover:scale-105 rounded overflow-hidden shadow">
                        <img className="w-full" src={assets.emailus} alt="Email" />
                        <div className="px-6">
                            <h2 className="font-semibold text-4xl mb-2 text-primary">
                                Email
                            </h2>
                            <p className="text-gray-700 text-xl text-secondary">
                                info@halcon.org.pk
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="max-w-sm rounded bg-white transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow">
                        <img className="w-full" src={assets.callus} alt="Call Us" />
                        <div className="px-6">
                            <h2 className="font-semibold text-4xl mb-2 text-primary">
                                Call Us
                            </h2>
                            <p className="text-gray-700 text-xl text-secondary">
                                +92 (3) 414-099-099
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="max-w-sm bg-white transform transition-transform duration-300 hover:scale-105  rounded overflow-hidden shadow">
                        <img className="w-full" src={assets.visit} alt="Visit Us" />
                        <div className="px-6">
                            <h2 className="font-semibold text-2xl mb-2 text-primary">
                                Visit Us
                            </h2>
                            <p className="text-gray-700 text-xl text-secondary mt-3">
                                US: 4131 N. Central Expressway, Dallas, TX 75204<br />
                                Pak: 61E, 7th Comm. DHA Phase 7, Karachi, 75500
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA
