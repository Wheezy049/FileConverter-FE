import React from 'react'
import Hero from './Hero'
import Converter from './Converter'
import Navbar from './Navbar'
import Footer from './Footer'

function HomeLayout() {
  return (
    <div className='w-full bg-gray-50 h-full'>
      <Navbar />
      <Hero />
      <Converter />
      <Footer />
    </div>
  )
}

export default HomeLayout