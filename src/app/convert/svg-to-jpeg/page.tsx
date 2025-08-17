import React from 'react'
import { Metadata } from 'next'
import SvgToJpeg from '@/components/SvgToJpeg'

export const metadata: Metadata = {
  title: "SVG to JPG Online – Free & Fast",
  description: "Change SVG files into JPG format in just a few clicks. Quick, reliable, and secure."
}

function page() {
  return (
    <div className='pt-[100px]'>
      <SvgToJpeg />
    </div>
  )
}

export default page