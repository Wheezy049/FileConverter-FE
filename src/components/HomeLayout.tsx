import React from 'react'
import Hero from './Hero'
import Converter from './Converter'
import Navbar from './Navbar'
import Footer from './Footer'
import HowItWorks from './HowITWorks'
import GetStarted from './GetStarted'
import Explore from './Explore'

function HomeLayout() {

 const steps = [
  {
    step: 1,
    title: "Upload Your File",
    description:
      "Upload your file directly from your device. Supported formats include PDF, images, audio, and more.",
    src: "/upload-file.png",
  },
  {
    step: 2,
    title: "Convert Your File",
    description:
      "Select the conversion type you need and click 'Convert'. Our tool processes your file quickly and efficiently.",
    src: "/convert-file.png",
  },
  {
    step: 3,
    title: "Download",
    description:
      "Download your converted file directly. Your files remain secure and easy to access.",
    src: "/download-file.png",
  },
];

  return (
    <div className='w-full bg-gray-50 h-full'>
      <Navbar />
      <Hero />
      <Converter />
      <Explore />
      <HowItWorks data={steps} pageTitle='How IT works' />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default HomeLayout