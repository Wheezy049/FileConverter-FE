import React from 'react'
import Navbar from './Navbar'
import GetStarted from './GetStarted'
import Footer from './Footer'
import HowItWorks from './HowITWorks'
import ProductList from './ProductList'
import { products } from '@/data/Product'

function ToolsLayout() {

 const data = [
  {
    step: 1,
    title: "Upload the Podcast",
    description:
      "Upload the Podcast directly from your local computer or enter the URL of the Apple podcast you want to transcribe/summarize.",
    src: "/image2.png",
  },
  {
    step: 2,
    title: "Convert Podcast to Text",
    description:
      'Click the "Transcribe" button, and our AI tool will generate the transcript and summary of the the podcast.',
    src: "/image4.png",
  },
  {
    step: 3,
    title: "Copy/Download transcript",
    description:
      "Copy the transcription and summary or download as a PDF or DOC file.",
    src: "/image.png",
  },
];

  return (
    <div className='w-full bg-gray-50 h-full'>
        <Navbar />
        <div className='pt-[100px]'>
        <div className="w-[90%] sm:w-[85%] md:w-[100%] lg:max-w-[1300px] md:max-w-[900px] mx-auto space-y-5 md:space-y-7 p-10 px-14">
        <ProductList products={products} />
        </div> 
        <HowItWorks data={data} pageTitle='How It Works' />
        <GetStarted />
        <Footer />
        </div>
    </div>
  )
}

export default ToolsLayout