import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Converter from './Converter'

function HomeLayout() {
  return (
    <div className='w-full bg-gray-50 h-full'>
      <Navbar />
      <Hero />
      <Converter />
    </div>
  )
}

export default HomeLayout