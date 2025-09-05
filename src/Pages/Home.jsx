import React from 'react'
import Hero from '../Components/Hero'
import Expertise from '../Components/Expertise'
import Impact from '../Components/Impact'
import Success from '../Components/Success'
import FAQs from '../Components/FAQs'
import CTA from '../Components/CTA'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Expertise/>
      <Impact/>
      <Success/>
      <FAQs/>
      <CTA/>
    </div>
  )
}

export default Home