import React from 'react'
import { Metadata } from 'next'
import JpegToSvg from '@/components/JpegToSvg'

export const metadata: Metadata = {
  title: "JPEG to SVG Online – Free Converter",
  description: "Easily convert JPEG images into vector SVG format. High-quality and easy to use."
}

function page() {
  return (
    <div className='pt-[100px]'>
      <JpegToSvg />
    </div>
  )
}

export default page